"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  type: "freelancer" | "client"
  avatar?: string
  bio?: string
  skills?: string[]
  hourlyRate?: number
  portfolio?: Array<{
    title: string
    description: string
    image: string
    link?: string
  }>
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, type: "freelancer" | "client") => Promise<boolean>
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users data
const mockUsers: (User & { password: string })[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: "password123",
    type: "freelancer",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Full-stack developer with 5+ years of experience in React and Node.js",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    hourlyRate: 75,
    portfolio: [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React and Node.js",
        image: "/placeholder.svg?height=200&width=300",
        link: "https://example.com",
      },
    ],
  },
  {
    id: "2",
    name: "John Smith",
    email: "john@example.com",
    password: "password123",
    type: "client",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "CEO of TechCorp, looking for talented developers",
  },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem("skillbridge_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string, type: "freelancer" | "client"): Promise<boolean> => {
    const foundUser = mockUsers.find((u) => u.email === email && u.password === password && u.type === type)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("skillbridge_user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === userData.email)
    if (existingUser) {
      return false
    }

    // Create new user
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      name: userData.name || "",
      email: userData.email || "",
      type: userData.type || "freelancer",
      password: userData.password,
      avatar: "/placeholder.svg?height=100&width=100",
      bio: userData.bio || "",
      skills: userData.skills || [],
      hourlyRate: userData.hourlyRate || 0,
      portfolio: [],
    }

    mockUsers.push(newUser)
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("skillbridge_user", JSON.stringify(userWithoutPassword))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("skillbridge_user")
    router.push("/")
  }

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("skillbridge_user", JSON.stringify(updatedUser))

      // Update in mock data
      const userIndex = mockUsers.findIndex((u) => u.id === user.id)
      if (userIndex !== -1) {
        mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData }
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

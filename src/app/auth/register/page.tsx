"use client"
import type React from "react";
import { useState } from "react";
import {useRouter} from "next/navigation"
import Link from "next/link";
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    hourlyRate: "",
    skills: [] as string[],
   })
  
   
  const [userType, setUserType] = useState<"freelancer" | "client">("freelancer")
  const [currentSkill, setCurrentSkill] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const { register } = useAuth()
  const router = useRouter()


   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }))
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password  !== formData.confirmPassword) {
      setError("Password do not match")
      setIsLoading(false)
      return
    }

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: userType,
        bio: formData.bio,
        skills: formData.skills,
        hourlyRate: userType === 'freelancer' ? Number.parseInt(formData.hourlyRate) || 0 : undefined,
      }

     const success = await register(userData)
     if (success) {
        toast({
          title: "Account created!",
          description: "Welcome to SkillBridge. Your account has been created successfully.",
        })
        router.push(`/dashboard/${userType}`)
      } else {
        setError("An account with this email already exists")
      }
    } catch (err) {
      setError("An error occured. please try again.")
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Join SkillBridge</CardTitle>
          <CardDescription>Create your account and start connecting</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={userType} onValueChange={(value) => setUserType(value as "freelancer" | "client")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="freelancer">Freelancer</TabsTrigger>
              <TabsTrigger value="client">Client</TabsTrigger>
            </TabsList>          
          </Tabs>
          

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            
                <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
            </div>
            

                 <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

                 <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder={
                    userType === "freelancer"
                      ? "Tell clients about your experience and expertise..."
                      : "Tell freelancers about your company and projects..."
                  }
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                />
            </div>
            
            
              {userType === "freelancer" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      name="hourlyRate"
                      type="number"
                      placeholder="50"
                      value={formData.hourlyRate}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} variant="outline">
                        Add
                      </Button>
                    </div>
                    {formData.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                            {skill}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

            
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : `Create ${userType} Account`}
              </Button>
          </form>
          

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
          </CardContent>
          </Card>
    </div>
  );
}

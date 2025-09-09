"use client"

import { useEffect } from "react";
import Link from "next/link";
import { Star, Users, Briefcase, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function Home() {

  const featuredFreelancers = [
    {
      id: 1,
      name: "Sarah Johnson",    
      title: "Full Stack Developer",
      rating: 4.9,
      hourlyRate: 75,
      skills: ["React", "Node.js", "TypeScript"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "UI/UX Designer",
      rating: 4.8,
      hourlyRate: 60,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Writer",
      rating: 4.9,
      hourlyRate: 45,
      skills: ["SEO", "Copywriting", "Blog Writing"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

    const recentJobs = [
    {
      id: 1,
      title: "E-commerce Website Development",
      budget: "$2000-$5000",
      description: "Looking for a developer to build a modern e-commerce platform with React and Node.js",
      tags: ["React", "Node.js", "E-commerce"],
      postedBy: "TechCorp Inc.",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      budget: "$1000-$3000",
      description: "Need a talented designer to create intuitive UI for our fitness tracking app",
      tags: ["UI Design", "Mobile", "Figma"],
      postedBy: "FitLife Startup",
    },
    ]
  
  useEffect(() => {
    //  Counter animation for stats
    const counters = document.querySelectorAll(".counter")
    const animateCounter = (counter: Element) => {
        const target = Number.parseInt(counter.getAttribute("data-target") || "0")
        const increment = target / 100
        let current = 0

        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.ceil(current).toLocaleString()
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target.toLocaleString()
          }
        }
        updateCounter()
      }
    
    //  Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("counter")) {
              animateCounter(entry.target)
            }
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1},
    )
    //  observe elements
    counters.forEach((counter) => observer.observe(counter))
    
    return () => observer.disconnect()
  }, [])


  return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">

          {/* Floating Images */}
           <div className="absolute top-20 left-10 animate-float-slow">
            <div className="w-16 h-16 bg-white rounded-lg shadow-lg p-2 rotate-12">
              <img src="/placeholder.svg?height=48&width=48" alt="React" className="w-full h-full object-contain" />
            </div>
          </div>
          
                    <div className="absolute top-32 right-16 animate-float-medium">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg p-3 -rotate-6">
              <img src="/placeholder.svg?height=56&width=56" alt="Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-60 left-20 animate-float-fast">
            <div className="w-14 h-14 bg-white rounded-lg shadow-lg p-2 rotate-45">
              <img src="/placeholder.svg?height=40&width=40" alt="Code" className="w-full h-full object-contain" />
            </div>
          </div> 

          <div className="absolute bottom-40 right-10 animate-float-slow">
            <div className="w-18 h-18 bg-white rounded-full shadow-lg p-3 rotate-12">
              <img src="/placeholder.svg?height=48&width=48" alt="Mobile" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute bottom-60 left-16 animate-float-medium">
            <div className="w-16 h-16 bg-white rounded-lg shadow-lg p-2 -rotate-12">
              <img src="/placeholder.svg?height=48&width=48" alt="Analytics" className="w-full h-full object-contain" />
            </div>
          </div>

         <div className="absolute top-40 right-32 animate-float-fast">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg p-2 rotate-6">
              <img src="/placeholder.svg?height=32&width=32" alt="Writing" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute bottom-32 left-32 animate-float-slow">
            <div className="w-20 h-20 bg-white rounded-lg shadow-lg p-3 rotate-3">
              <img src="/placeholder.svg?height=56&width=56" alt="Backend" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-16 left-1/3 animate-float-medium">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg p-2 -rotate-45">
              <img src="/placeholder.svg?height=40&width=40" alt="AI" className="w-full h-full object-contain" />
            </div>
          </div>

             {/* Gradient Orbs */} 
         <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Connect with Top{" "}
              <span className="bg-clip-text  animate-gradient">
                Freelancers
                {/*  // bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600  */}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              SkillBridge is the premier platform where talented freelancers meet ambitious clients. Build your dream
              project with the perfect match.
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up delay-400">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold  hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/auth/register?type=client">Hire Freelancers</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <Link href="/auth/register?type=freelancer">Find Work</Link>
              </Button>
            </div>
          </div>

          {/* Floating Action Indicators */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600">Active Freelancers</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">5K+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/*  Featured Freelancers */}
       <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Freelancers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFreelancers.map((freelancer) => (
              <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <picture>
                    <img
                    src={freelancer.image || "/placeholder.svg"}
                    alt={freelancer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    </picture>
                  <CardTitle>{freelancer.name}</CardTitle>
                  <CardDescription>{freelancer.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-semibold">{freelancer.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-4">${freelancer.hourlyRate}/hr</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {freelancer.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posted Jobs */}
      
        <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Job Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">{job.budget}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Posted by {job.postedBy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
      
            {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of freelancers and clients who trust SkillBridge for their projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/auth/register">Sign Up Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/auth/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>      
    </div>
  );
}

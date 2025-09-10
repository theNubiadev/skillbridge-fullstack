"use client"

import { useState } from "react";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    desccription: "",
    category: "",
    budgetType: "",
    budgetMin: "",
    duration: "",
    experienceLevel: "",
    skills: [] as string[]
  })

  const [currentSkill, setCurrentSkill] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")



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

    try {
      
    } catch (error) {
      
    }
  }


   const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "design", label: "Design" },
    { value: "writing", label: "Writing & Content" },
    { value: "data-science", label: "Data Science" },
    { value: "marketing", label: "Marketing" },
    { value: "other", label: "Other" },
  ]

  const experienceLevels = [
    { value: "entry", label: "Entry Level" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ]

  const durations = [
    { value: "1-week", label: "Less than 1 week" },
    { value: "1-4-weeks", label: "1-4 weeks" },
    { value: "1-3-months", label: "1-3 months" },
    { value: "3-6-months", label: "3-6 months" },
    { value: "6-months-plus", label: "6+ months" },
    { value: "ongoing", label: "Ongoing" },
  ] 

  //  this is displayed if the logined user isnt a client but a freelancer
    // if () {
    //   return (
    //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    //       <Card className="w-full max-w-md">
    //        <CardHeader>
    //         <CardTitle>Access Denied</CardTitle>
    //         <CardDescription>Only clients can post jobs.</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <Button asChild className="w-full">
    //             <a href="/auth/login"> Login as Client</a>
    //             </Button>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   )
    // }
  return (

        //  Only Clients can post job openings
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
          <p className="text-gray-600">Find the perfect freelancer for your project</p>
        </div>


        <Card>
          <CardHeader>
            <CardTitle>
              Job Details
            </CardTitle>
            <CardDescription>
              Provide clear and detailed information to attract the right freelancer
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}



              {/* Job Title */}
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Full Stack Developer for E-commerce website"
                value={formData.title}
                onChange={handleInputChange}
                required
              />

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project in detail. Include requirements, deliverables, and any specific instructions..."
                  value={formData.desccription}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>
              
              {/* Category */}
              <div className="space-y-2">
                <Label> Category</Label>
                <Select  value={formData.category}>
                  <SelectTrigger>
                    <SelectValue  placeholder="Select a Category"/>
                  </SelectTrigger>
                  
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                      {category.label} 
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/*  Skills */}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

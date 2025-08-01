"use client"

import Link from "next/link";
import { Search , Filter, Bookmark, BookmarkCheck, Badge, DollarSign, Clock} from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardDescription, CardTitle  } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function JobsPage() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [bookmarkedJobs, setBookmarkedJobs] = useState<number[]>([])
   
  const jobs = [
    {
      id: 1,
      title: "Full Stack E-commerce Website Development",
      description:
        "Looking for an experienced full-stack developer to build a modern e-commerce platform with React, Node.js, and MongoDB. The project includes user authentication, payment integration, admin dashboard, and responsive design.",
      client: {
        name: "TechCorp Inc.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        jobsPosted: 12,
      },
      budget: "$2000 - $5000",
      budgetType: "fixed",
      duration: "2-3 months",
      skills: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
      postedDate: "2 days ago",
      applicants: 15,
      category: "web-development",
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      description:
        "Need a talented UI/UX designer to create intuitive and modern designs for our fitness tracking mobile app. Must have experience with mobile design patterns and user research.",
      client: {
        name: "FitLife Startup",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.6,
        jobsPosted: 5,
      },
      budget: "$1000 - $3000",
      budgetType: "fixed",
      duration: "1-2 months",
      skills: ["UI Design", "UX Design", "Figma", "Mobile Design", "Prototyping"],
      postedDate: "1 day ago",
      applicants: 8,
      category: "design",
    },
    {
      id: 3,
      title: "Content Writing for Tech Blog",
      description:
        "Seeking an experienced tech writer to create engaging blog posts about software development, AI, and emerging technologies. Must have strong research skills and ability to explain complex topics simply.",
      client: {
        name: "DevBlog Media",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
        jobsPosted: 25,
      },
      budget: "$30 - $50",
      budgetType: "hourly",
      duration: "Ongoing",
      skills: ["Content Writing", "Technical Writing", "SEO", "Research", "Blog Writing"],
      postedDate: "3 days ago",
      applicants: 22,
      category: "writing",
    },
    {
      id: 4,
      title: "WordPress Website Customization",
      description:
        "Need help customizing a WordPress theme for a local restaurant. Includes menu integration, online ordering system, and mobile optimization.",
      client: {
        name: "Bella's Restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
        jobsPosted: 3,
      },
      budget: "$500 - $1500",
      budgetType: "fixed",
      duration: "2-4 weeks",
      skills: ["WordPress", "PHP", "CSS", "JavaScript", "WooCommerce"],
      postedDate: "1 week ago",
      applicants: 12,
      category: "web-development",
    },
    {
      id: 5,
      title: "Python Data Analysis Script",
      description:
        "Looking for a Python developer to create data analysis scripts for processing customer data and generating insights. Experience with pandas, numpy, and data visualization required.",
      client: {
        name: "DataCorp Analytics",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.5,
        jobsPosted: 8,
      },
      budget: "$25 - $40",
      budgetType: "hourly",
      duration: "1-2 weeks",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Matplotlib"],
      postedDate: "4 days ago",
      applicants: 18,
      category: "data-science",
    },
    {
      id: 6,
      title: "Logo and Brand Identity Design",
      description:
        "Startup looking for a creative designer to develop a complete brand identity including logo, color palette, typography, and brand guidelines.",
      client: {
        name: "InnovateTech",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.4,
        jobsPosted: 2,
      },
      budget: "$800 - $2000",
      budgetType: "fixed",
      duration: "3-4 weeks",
      skills: ["Logo Design", "Brand Identity", "Adobe Illustrator", "Graphic Design"],
      postedDate: "5 days ago",
      applicants: 25,
      category: "design",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "web-development", label: "Web Development" },
    { value: "design", label: "Design" },
    { value: "writing", label: "Writing" },
    { value: "data-science", label: "Data Science" },
    { value: "marketing", label: "Marketing" },
  ]

  const budgetRanges = [
    { value: "all", label: "All Budgets" },
    { value: "under-500", label: "Under $500" },
    { value: "500-1000", label: "$500 - $1000" },
    { value: "1000-3000", label: "$1000 - $3000" },
    { value: "3000-plus", label: "$3000+" },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleBookmark = (jobId: number) => {
    setBookmarkedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }



  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Find Your Perfect Job</h1>
          <p className="text-xl text-gray-600">Discover opportunities that match your skills and passion</p>
        </div>

        {/*  Search and Filters */}
        <div className="glass-effect rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-0 bg-white/50 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 h-12 rounded-xl border-0 bg-white/50 backdrop-blur-sm">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="w-48 h-12 rounded-xl border-0 bg-white/50 backdrop-blur-sm">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {budgetRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>


        {/* Results */}

             <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-medium">
            Showing <span className="gradient-text font-bold">{filteredJobs.length}</span> of {jobs.length} jobs
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Most Recent</span>
          </div>
        </div>


        {/* Jobs Listing */}

        
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <Card key={job.id}
              className="card-hover gradient-bg-card border-0 shadow-lg rounded-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}>
              
              <CardHeader className="pb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-14 w-14 ring-white">
                      <picture>
                        <AvatarImage  src={job.client.avatar || "/"} alt={job.client.name} />
                      </picture>
                      <AvatarFallback  className="text-white  font-semibold">
                        {job.client.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <CardTitle className="text-xl  mb-2 transition-all duration-300">
                    <Link href={`/jobs/${job.id}`}>
                      {job.title}
                    </Link>
                  </CardTitle>

                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="font-medium">
                      {job.client.name}
                    </span>
                    <span>*</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{ job.client.rating}</span>
                    </div>
                    <span>*</span>
                    <span>{ job.client.jobsPosted} jobs posted</span>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400  rounded-xl hover:text-blue-500 hover:bg-blue-50"
                onClick={() => toggleBookmark(job.id)}>
                  {bookmarkedJobs.includes(job.id) ? (
                    <BookmarkCheck  className="h-5 w-5 text-blue-600"/>
                  ) : (
                      <Bookmark className="h-5 w-5"/>
                  )}
                </Button>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-700 mb-6 leading-relaxed text-base ">
                  {job.description}
                </CardDescription>
                

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue">
                    {skill}
                    </Badge>
                  ))}
                  

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                        <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                        <span className="font-semibold text-green-700">{ job.budget}</span>
                        <span className="ml-1 text-green-600">({job.budgetType})</span>
                    </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-600" />
                        <span>{job.duration}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-medium">{ job.applicants} applicants</span>
                      </div>
                       <div className="flex items-center">
                      <span>Posted {job.postedDate}</span>
                    </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      asChild
                      className="rounded-xl border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 bg-transparent"
                    >
                      <Link href={`/jobs/${job.id}`}>View Details</Link>
                    </Button>
                    <Button
                      asChild
                      className="gradient-bg-primary hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-xl"
                    >
                      <Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>
                    </Button>
                  </div>
                </div>
                </CardContent>
            </Card>

          ))}
        </div>
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No jobs found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

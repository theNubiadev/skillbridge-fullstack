"use client"
import type React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, DollarSign, Star, TrendingUp, Clock, CheckCircle, XCircle, Eye, MessageSquare } from "lucide-react";
import Link  from "next/link";
import { useAuth } from "@/lib/auth-context";
export default function FreelancerDashboard() {
  // const { user } = useAuth();

    const stats = {
    totalEarnings: 12450,
    activeProjects: 3,
    completedProjects: 28,
    rating: 4.9,
    profileViews: 156,
    responseRate: 95,
  }

  const recentApplications = [
    {
      id: 1,
      jobTitle: "E-commerce Website Development",
      client: "TechCorp Inc.",
      budget: "$2000-$5000",
      status: "pending",
      appliedDate: "2024-01-15",
      description: "Looking for a developer to build a modern e-commerce platform",
    },
    {
      id: 2,
      jobTitle: "React Dashboard UI",
      client: "StartupXYZ",
      budget: "$1500-$3000",
      status: "accepted",
      appliedDate: "2024-01-12",
      description: "Need a React developer to create an admin dashboard",
    },
    {
      id: 3,
      jobTitle: "Mobile App Backend",
      client: "AppCo",
      budget: "$3000-$6000",
      status: "rejected",
      appliedDate: "2024-01-10",
      description: "Backend development for a fitness tracking mobile app",
    },
  ]

  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "TechCorp Inc.",
      progress: 75,
      deadline: "2024-02-15",
      budget: "$4500",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Company Website Redesign",
      client: "DesignCo",
      progress: 40,
      deadline: "2024-02-28",
      budget: "$2800",
      status: "in-progress",
    },
  ]

    const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "accepted":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  //  if (!user) {
  //   return <div>Loading...</div>
  // }


  return (
      <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar> */}
              <div>
                {/* <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1> */}
                <p className="text-gray-600">Here&apos;s what&apos;s happening with your freelance work</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <Link href="/profile">Edit Profile</Link>
              </Button>
              <Button asChild>
                <Link href="/jobs">Find Jobs</Link>
              </Button>
            </div>
          </div>
        </div>

        
          {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground">2 due this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.rating}</div>
              <p className="text-xs text-muted-foreground">From {stats.completedProjects} reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.profileViews}</div>
              <p className="text-xs text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>
        </div>

        
                {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="applications">Job Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Projects you`&apos`re currently working on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-gray-600">Client: {project.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">{project.budget}</p>
                          <p className="text-sm text-gray-600">Due: {project.deadline}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Badge variant="outline">In Progress</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message Client
                          </Button>
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Job Applications</CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getStatusIcon(application.status)}
                            <h3 className="font-semibold">{application.jobTitle}</h3>
                            <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{application.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Client: {application.client}</span>
                            <span>Budget: {application.budget}</span>
                            <span>Applied: {application.appliedDate}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Job
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Response Rate</span>
                    <span className="text-sm text-gray-600">{stats.responseRate}%</span>
                  </div>
                  <Progress value={stats.responseRate} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Project Success Rate</span>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Client Satisfaction</span>
                    <span className="text-sm text-gray-600">4.9/5</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Completed project for TechCorp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">New message from DesignCo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Received 5-star review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Profile views increased by 15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

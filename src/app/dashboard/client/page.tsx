"ue client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, DollarSign, Briefcase, Users, TrendingUp, MessageSquare, Eye , CheckCircle} from "lucide-react";
import Link from "next/link";
import type React from "react";

export default function ClientDashboard() {
  const stats = {
    totalSpent: 28750,
    activeProjects: 4,
    completedProjects: 12,
    totalFreelancers: 8,
    avgProjectRating: 4.7,
  };

  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      freelancer: "Sarah Johnson",
      freelancerAvatar: "/placeholder.svg?height=40&width=40",
      progress: 75,
      deadline: "2024-02-15",
      budget: "$4500",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      freelancer: "Mike Chen",
      freelancerAvatar: "/placeholder.svg?height=40&width=40",
      progress: 60,
      deadline: "2024-02-20",
      budget: "$2800",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Content Writing for Blog",
      freelancer: "Emily Rodriguez",
      freelancerAvatar: "/placeholder.svg?height=40&width=40",
      progress: 90,
      deadline: "2024-02-10",
      budget: "$1200",
      status: "review",
    },
  ];

  const recentApplications = [
    {
      id: 1,
      jobTitle: "React Dashboard Development",
      applicants: 12,
      budget: "$3000-$5000",
      postedDate: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      jobTitle: "Logo Design Project",
      applicants: 8,
      budget: "$500-$1000",
      postedDate: "2024-01-12",
      status: "closed",
    },
    {
      id: 3,
      jobTitle: "WordPress Website Setup",
      applicants: 15,
      budget: "$1000-$2000",
      postedDate: "2024-01-10",
      status: "active",
    },
  ];

  const topFreelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.9,
      projectsCompleted: 3,
      totalEarned: 12450,
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "UI/UX Designer",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.8,
      projectsCompleted: 2,
      totalEarned: 8200,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Writer",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.9,
      projectsCompleted: 4,
      totalEarned: 5600,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                {/* <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback> */}
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, user.name!
                </h1>
                <p className="text-gray-600">
                  Manage your projects and find talented freelancers
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <Link href="/freelancers">Find Freelancers</Link>
              </Button>
              <Button asChild>
                <Link href="/jobs/post">
                  <Plus className="h-4 w-4 mr-2" />
                  Post a Job
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/*  Status Grid */}
        <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {" "}
                Total Spent{" "}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-background" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${stats.totalSpent.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Across {stats.completedProjects} projects
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 mb-2">
              <CardTitle className="text-sm font-medium">
                {" "}
                Active Projects{" "}
              </CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> {stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground"> 2 due this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Freelancers Hired
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalFreelancers}</div>
              <p className="text-xs text-muted-foreground">
                Avg rating: {stats.avgProjectRating}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">
                Project completion rate
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs >
          <TabsList defaultValue="projects" className="space-y-6 gap-2">
            <TabsTrigger value="projects"> Active Projects   </TabsTrigger>
            <TabsTrigger value="jobs">Posted Jobs   </TabsTrigger>
            <TabsTrigger value="freelancers">  Top Freelancers </TabsTrigger>
            
          </TabsList>


          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle> Active Projects</CardTitle>
                <CardDescription> Projects currently in progress</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <picture>
                            <AvatarImage
                            src={project.freelancerAvatar}
                            alt={ project.freelancer} />
                          </picture>
                          <AvatarFallback >{project.freelancer.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-gray-600">by  {project.freelancer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{project.budget}</p>
                        <p className="text-sm text-gray-600">{project.deadline }</p>
                      </div>

                                            <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Badge variant={project.status === "review" ? "default" : "outline"}>
                          {project.status === "review" ? "Ready for Review" : "In Progress"}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
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

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle> Posted Jobs</CardTitle>
                <CardDescription> Jobs you&apos;ve posted and their application status</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{job.jobTitle}</h3>
                            <Badge variant={job.status === "active" ? "default" : "secondary"}>{job.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.applicants} applicants
                            </span>
                            <span>Budget: {job.budget}</span>
                            <span>Posted: {job.postedDate}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Applications
                          </Button>
                          <Button size="sm">Edit Job</Button>
                        </div>
                      </div>
                    </div>
                    ))}
                </div>
              </CardContent>
              </Card>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Freelancers</CardTitle>
                <CardDescription>Freelancers you&apos;ve worked with and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topFreelancers.map((freelancer) => (
                    <div className="border rounded-lg p-4" key={freelancer.id}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <picture>
                              <AvatarImage
                                src={freelancer.avatar || "/placeholder.svg"}
                                alt={freelancer.name} />
                           </picture>
                            <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h3 className="font-semibold">{freelancer.name}</h3>
                             <p className="text-sm text-gray-600">{freelancer.title}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                              <span className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                                {freelancer.projectsCompleted} projects
                              </span>
                              <span className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />${freelancer.totalEarned.toLocaleString()} earned
                              </span>
                            </div>
                          </div>
                        </div>
                        
                          <div className="text-right">
                          <div className="flex items-center mb-2">
                            <span className="text-lg font-semibold mr-1">{freelancer.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(freelancer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            <Button size="sm">Hire Again</Button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </TabsContent>
        </Tabs>

      </div>
      </div>
  );
}

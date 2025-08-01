"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  HeartHandshake,
  Heart,
  DollarSign,
  Briefcase,
  MessageSquare
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function FreelancersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCategory, setSelectedCategory] = useState("all");
  const [selectedRate, setSelectedRate] = useState("all");
  const [favoriteFreelancers, setFavoriteFreelancers] = useState<number[]>([]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "design", label: "Design" },
    { value: "writing", label: "Writing" },
    { value: "data-science", label: "Data Science" },
    { value: "marketing", label: "Marketing" },
  ];

  const rateRanges = [
    { value: "all", label: "All Rates" },
    { value: "under-25", label: "Under $25/hr" },
    { value: "25-50", label: "$25-$50/hr" },
    { value: "50-75", label: "$50-$75/hr" },
    { value: "75-plues", label: "$75+/hr" },
  ];

  const freelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      reviewCount: 47,
      hourlyRate: 75,
      completedJobs: 52,
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      bio: "Experienced full-stack developer with 6+ years building scalable web applications. Specialized in React, Node.js, and cloud deployment.",
      location: "San Francisco, CA",
      responseTime: "1 hour",
      category: "web-development",
      portfolio: [
        {
          title: "E-commerce Platform",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "SaaS Dashboard",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "UI/UX Designer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      reviewCount: 32,
      hourlyRate: 60,
      completedJobs: 38,
      skills: [
        "Figma",
        "Adobe XD",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      bio: "Creative UI/UX designer passionate about creating intuitive and beautiful user experiences. 5+ years of experience in product design.",
      location: "New York, NY",
      responseTime: "2 hours",
      category: "design",
      portfolio: [
        {
          title: "Mobile App Design",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "Website Redesign",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Writer & SEO Specialist",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      reviewCount: 28,
      hourlyRate: 45,
      completedJobs: 67,
      skills: [
        "SEO",
        "Content Writing",
        "Copywriting",
        "Blog Writing",
        "Technical Writing",
      ],
      bio: "Professional content writer and SEO specialist with expertise in creating engaging, search-optimized content across various industries.",
      location: "Austin, TX",
      responseTime: "30 minutes",
      category: "writing",
      portfolio: [
        {
          title: "Tech Blog Articles",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "Marketing Copy",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
    {
      id: 4,
      name: "David Kim",
      title: "Mobile App Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.7,
      reviewCount: 19,
      hourlyRate: 80,
      completedJobs: 25,
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      bio: "Mobile app developer specializing in cross-platform development. Built 20+ apps with millions of downloads.",
      location: "Seattle, WA",
      responseTime: "3 hours",
      category: "mobile-development",
      portfolio: [
        {
          title: "Fitness Tracking App",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "Food Delivery App",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Data Scientist",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      reviewCount: 15,
      hourlyRate: 90,
      completedJobs: 18,
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "TensorFlow",
        "SQL",
      ],
      bio: "Data scientist with PhD in Statistics. Specialized in machine learning, predictive modeling, and data visualization.",
      location: "Boston, MA",
      responseTime: "4 hours",
      category: "data-science",
      portfolio: [
        {
          title: "Predictive Analytics Dashboard",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "ML Model Implementation",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
    {
      id: 6,
      name: "Alex Thompson",
      title: "Digital Marketing Specialist",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.6,
      reviewCount: 41,
      hourlyRate: 55,
      completedJobs: 73,
      skills: [
        "Google Ads",
        "Facebook Ads",
        "SEO",
        "Analytics",
        "Email Marketing",
      ],
      bio: "Digital marketing expert with 7+ years helping businesses grow their online presence and increase conversions.",
      location: "Los Angeles, CA",
      responseTime: "1 hour",
      category: "marketing",
      portfolio: [
        {
          title: "PPC Campaign Results",
          image: "/placeholder.svg?height=150&width=200",
        },
        {
          title: "SEO Case Study",
          image: "/placeholder.svg?height=150&width=200",
        },
      ],
    },
  ];

  //  CODE FOR SEARCH and filtering
  //  converts 1st to lowercase and then uses dsa to find the result
  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesSearch =
      freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectCategory === "all" || freelancer.category === selectCategory;

    //  result brings the search result and category results
    return matchesSearch && matchesCategory;
  });

  //  toggle favorite freelancer
  const toggleFavorite = (freelancerId: number) => {
    setFavoriteFreelancers((prev) =>
      prev.includes(freelancerId)
        ? prev.filter((id) => id !== freelancerId)
        : [...prev, freelancerId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3x font-bold text-gray-900 mb-2">
            Find Freelancers
          </h1>
          <p className="text-gray-600">Discover talented professionals</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute lefy-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search freelancers, skills, or specialities ..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select
                value={selectCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRate} onValueChange={setSelectedRate}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Hourly Rate" />
                </SelectTrigger>
                <SelectContent>
                  {rateRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/*  Results for the search */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredFreelancers.length} of {freelancers.length}{" "}
            freelancers
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600"> Sort by: Best Match </span>
          </div>
        </div>

        {/* Freelancer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-md ">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={freelancer.avatar || "/placeholder.svg"}
                        alt={freelancer.name}
                      />
                      <AvatarFallback>
                        {freelancer.name.charAt(0)}{" "}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">
                        <Link
                          href={`/freelancers/${freelancer.id}`}
                          className="hover:text-blue-600"
                        >
                          {freelancer.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base font-meduim">
                        {" "}
                        {freelancer.title}{" "}
                      </CardDescription>
                      <div className="flex itmes-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yelow-400 fill-current mr-1" />
                          <span className="font-medium">
                            {" "}
                            {freelancer.rating}
                          </span>
                          <span className="ml-1">
                            {freelancer.reviewCount} reviews
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{freelancer.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(freelancer.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    {favoriteFreelancers.includes(freelancer.id) ? (
                      <HeartHandshake className="h-5 w-5 text-red-500" />
                    ) : (
                      <Heart className="h-5 w-5 " />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-index">
                  {freelancer.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.slice(0, 5).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {freelancer.skills.length > 5 && (
                    <Badge variant="outline">
                      + {freelancer.skills.length - 5} more{" "}
                    </Badge>
                  )}
                </div>

                {/*  Portfolio Preview */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {freelancer.portfolio.slice(0, 2).map((item, index) => (
                    <div key={index} className="relative">
                      <picture>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-20 object-cover rounded-md"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-medium text-center px-2">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="font-medium"> { freelancer.hourlyRate}/hr </span>
                    </div>

                    <div className="flex">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{ freelancer.completedJobs}</span>
                    </div>
                    <div className="flex items-center">
                      <span> Respomds in { freelancer.responseTime}</span>
                    </div>
</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare  className="h-4 w-4 mr-1"/> Message
                      </Button>
                      <Button  size="sm" asChild>
                        <Link  href={`/freelancers/${freelancer.id}`}>View Profile
                        </Link>
                      </Button>
                    </div>
                    </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFreelancers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto"/>
            </div>
             <h3 className="text-lg font-medium text-gray-900 mb-2">No freelancers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
          )}
      </div>
    </div>
  );
}
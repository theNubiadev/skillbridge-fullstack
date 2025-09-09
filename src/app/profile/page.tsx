"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    hourlyRate: "",
    skills: [],
  });

  const [currentSkill, setCurrentSkill] = useState("");
  const [portfolioItems, setPortfolioItems] = useState("");
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  // const

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    // const addSkill = () => {
    //     if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim()))  {
    //         setFormData((prev) => ({
    //             ...prev, skills: [...prev.skills, currentSkill.trim()],
    //         }))
    //         setCurrentSkill("")
    //     }
    // }

    // const addSkill = () => {
    //     if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {

    //     }
    // }

    

    const removeSkill = (skillToRemove: string) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToRemove),

        }))
    }
  return (
    <div className="min-h-screen bg-gray=50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600">
            Manage your profile information and portfolio
          </p>
        </div>

        <Tabs className="space-y-6" defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            {/* {"freelancer" && <TabsTrigger value="portfolio">Portfolio</TabsTrigger>} */}
            {/* {"freelancer" && <TabsTrigger value="reviews">Reviews</TabsTrigger>} */}
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle> Profile Information </CardTitle>
                    <CardDescription>
                      Update your profile details and skills
                    </CardDescription>
                  </div>

                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit profile"}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Avatar section */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-28 w-20">
                    <picture>
                      {" "}
                      {/* <AvatarImage src={} alt={} /> */}
                    </picture>
                    <AvatarFallback className="text-2xl"></AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  )}
                </div>

                {/*  Basic information panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      disabled={!isEditing}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    onChange={handleInputChange}
                    value={formData.bio}
                    disabled={!isEditing}
                    rows={4}
                    placeholder={
                      "Freelancer"
                      //   ?  "Tell clients about your experience and expertisse..."
                      //   : "Tell freelancers about your company and projects..."
                    }
                  />
                </div>

                {/*  here is the hourlu rate for freelancers alone */}
                {/* {
                                &&  (
                                      
                                  )
                              } */}
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    min="0"
                  />
                </div>

                {/*  Skills */}
                <div className="space-y-2">
                  <Label>Skills</Label>
                  {isEditing && (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addSkill())
                        }
                      />
                      <Button
                        type="button"
                        onClick={addSkill}
                        variant="outline"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

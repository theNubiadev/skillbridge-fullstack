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
// import { AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge, Plus, X, Upload } from "lucide-react";

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

  const addPortfolioItem = () => {
    if (newPortfolioItem.title && newPortfolioItem.description) {
      const newItem = {
        ...newPortfolioItem,
        image: newPortfolioItem.image || "./"
      }
      setPortfolioItems((prev) => [...prev, newItem])
      setNewPortfolioItem({title: "", description: "", 
        image: "", link: ""
      })
    }
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
      const reviews = [
         {
      id: 1,
      clientName: "TechCorp Inc.",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment:
        "Excellent work on our e-commerce platform. Sarah delivered high-quality code and was very responsive throughout the project.",
      project: "E-commerce Website Development",
      date: "2024-01-15",
    },
    {
      id: 2,
      clientName: "StartupXYZ",
      clientAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Outstanding developer! Completed the project ahead of schedule and exceeded our expectations.",
      project: "React Dashboard",
      date: "2024-01-10",
    },
      ]
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
            {"freelancer" && <TabsTrigger value="portfolio">Portfolio</TabsTrigger>}
            {"freelancer" && <TabsTrigger value="reviews">Reviews</TabsTrigger>}
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
                        ?  "Tell clients about your experience and expertisse..."
                        : "Tell freelancers about your company and projects..."
                    }
                  />
                </div>

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
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} 
                        className="flex items-center gap-1">
                          {skill}
                          {isEditing && 
                            <X className="h-3 w-3 cursor-pointer"
                              onClick={() => removeSkill(skill)} />}
                          </Badge>
                        ))}
                    </div>
                  )}
                  {isEditing && (
                    <div className="flex">
                      <Button variant="outline"  onClick={() => setIsEditing(false)}>
                        Save
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="portfolio">
            <div className="space-y-6">
              {/*  Add New Portfolio Item */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Portfolio Item</CardTitle>
                  <CardDescription>
                    Showcase your best work to attract client
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="portfolioTitle">
                        Project Title
                      </Label>
                      <Input
                       id="portfolioTitle"
                        placeholder="E-commerce Platform"
                        value="newPortfolio.title"
                         onChange={(e) => setNewPortfolioItem((prev) => ({ ...prev, title: e.target.value }))}
                        // onChange={(e) => setPortfolioItems(prev) => ({ ...prev, title: e.target.value}) }
                      />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="portfolioLink">Project Link (Optional)</Label>
                        <Input
                          id="portfolioLink"
                          placeholder="https://example.com"
                          value={newPortfolioItem.link}
                          onChange={(e) => setNewPortfolioItem((prev) => ({ ...prev, link: e.target.value }))}
                        />
                      </div>
                  </div>
 <div className="space-y-2">
                      <Label htmlFor="portfolioDescription">Description</Label>
                      <Textarea
                        id="portfolioDescription"
                        placeholder="Describe the project, technologies used, and your role..."
                        value={newPortfolioItem.description}
                        onChange={(e) => setNewPortfolioItem((prev) => ({ ...prev, description: e.target.value }))}
                        rows={3}
                      />
                  </div>
                     <div className="space-y-2">
                      <Label>Project Image</Label>
                      <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
                        </Button>
                        <span className="text-sm text-gray-500">Or provide image URL</span>
                      </div>
                  </div>
                  
                   <Button
                      onClick={addPortfolioItem}
                      disabled={!newPortfolioItem.title || !newPortfolioItem.description}
                    >
                      Add to Portfolio
                    </Button>

                  </CardContent>
              </Card>

              <Card>
              <  CardHeader>
                                  <CardTitle>Portfolio Items</CardTitle>
                    <CardDescription>Your showcase of completed projects</CardDescription>
                </CardHeader>

                <CardContent>
                  {portfolioItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {portfolioItems.map((item ,index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="relative mb-4">
                            <picture>
                              <img 
                              src={item.image || "./placeholder.svg"}
                              alt={item.title}
                            className="w-full h-40 object-cover rounded-md"
/>
</picture>
<Button size="sm" className="absolute top-2 right-2" onClick={() => removePortfolioItem(index)}>
  <Trash2  className="h-4 w-4"/>
  </Button>
                
                            </div>
                             <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                              >
                                View Project →
                              </a>
                            )}
                          </div>
                      ))}
                      </div>
                  )
                 
                 
                 
                 : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No Portfolio Items yet. Add your files </p>
                      </div>
                  )}
                  </CardContent>
                </Card>
                  </div>
          </TabsContent>



          <TabsContent value="reviews">
                    <Card> 
                      <CardHeader> Client Reviews </CardHeader>
                        <CardDescription className="ml-6 -mt-6">Feedback from your completed projects </CardDescription>
                        <CardContent> 
                          {reviews.length > 0  ? (
                            <div>
                              </div>
                          ) 
                          :
                           (
                             <div className="text-center py-8">
                      <p className="text-gray-500">No reviews yet. Complete your first project to receive feedback!</p>
                    </div>
                           )}
                          </CardContent>
                      </Card>
            </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

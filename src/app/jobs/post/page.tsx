"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostJobPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budgetType: "",
    budgetMin: "",
    budgetMax: "",
    duration: "",
    experienceLevel: "",
    skills: [] as string[],
  });


  console.log(formData.skills);
  const [currentSkill, setCurrentSkill] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
    } catch (error) {
      console.log(error);
      
    }
  };

  const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "design", label: "Design" },
    { value: "writing", label: "Writing & Content" },
    { value: "data-science", label: "Data Science" },
    { value: "marketing", label: "Marketing" },
    { value: "other", label: "Other" },
  ];

  const experienceLevels = [
    { value: "entry", label: "Entry Level" },
    { value: "intermediate", label: "Intermediate" },
    { value: "expert", label: "Expert" },
  ];

  const durations = [
    { value: "1-week", label: "Less than 1 week" },
    { value: "1-4-weeks", label: "1-4 weeks" },
    { value: "1-3-months", label: "1-3 months" },
    { value: "3-6-months", label: "3-6 months" },
    { value: "6-months-plus", label: "6+ months" },
    { value: "ongoing", label: "Ongoing" },
  ];

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
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Post a New Job
          </h1>
          <p className="text-gray-600">
            Find the perfect freelancer for your project
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>
              Provide clear and detailed information to attract the right
              freelancer
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
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Full Stack Developer for E-commerce website"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project in detail. Include requirements, deliverables, and any specific instructions..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label> Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Category" />
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
              <div className="space-y-2">
                <Label>Required Skills</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                   <Plus className="h-4 w-4"/>
                  </Button>
                </div>
                {formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill) => (
                      <Badge key={skill}
                        variant="secondary"
                       className="flex items-center gap-1">
                        {skill}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    Add
                  </Button>
                </div>
                {formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="flex items-center gap-1"
                      >
                        {skill}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                  </div> 
                )}
              </div> */}

              {/* Budget Type */}
              <div className="space-y-4">
                <Label>Budget Type *  </Label>

                {formData.budgetType === "fixed" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budgetMin">Minimum Budget ($) </Label>
                      <Input
                        id="budgetMin"
                        name="budgetMin"
                        type="number"
                        placeholder="1000"
                        value={formData.budgetMin}
                        onChange={handleInputChange}
                        min={0}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetMax">Maximum Budget ($) </Label>
                      <Input
                        id="budgetMin"
                        name="budgetMin"
                        type="number"
                        placeholder="1000"
                        value={formData.budgetMax}
                        onChange={handleInputChange}
                        min={0}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="budgetMin">Hourly Rate ($)</Label>
                    <Input
                      id="budgetMin"
                      name="budgetMin"
                      type="number"
                      placeholder="25"
                      value={formData.budgetMin}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                )}
              </div>

              {/* Project Duration Field */}
              <div className="space-y-2">
                <Label>Project Duration </Label>
                <Select
                  value={formData.duration}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, duration: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Project Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/*  Experience Level field */}
              <div className="space-y-2">
                <Label> Experience Level Required</Label>
                <Select
                  value={formData.experienceLevel}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, experienceLevel: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Experience Level" />
                  </SelectTrigger>

                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.label} value={level.label}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button type="button" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Posting Job..." : "Post Job"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

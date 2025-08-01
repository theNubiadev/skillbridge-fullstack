"use client"

import { useState } from "react"
import { Tabs, TabsTrigger } from "@/components/ui/tabs"



export default function ProfilePage() {

    const [isEditing, setIsEditing] = useState(false)

    const [currentSkill, setCurrentSkill] = useState("")
    const [portfolioItems, setPortfolioItems] = useState("")

    
    return (
        <div className="min-h-screen bg-gray=50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                    <p className="text-gray-600">Manage your profile information and portfolio</p>
                </div>

                <Tabs className="space-y-6">
                    <TabsList>
                        <TabsTrigger >Profile</TabsTrigger>
                    </TabsList>
                    </Tabs>
       </div>
        </div>
    )
}
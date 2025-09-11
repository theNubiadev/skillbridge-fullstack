"use client";

import { useState } from "react";
import { MoreVertical, Paperclip, Phone, Search, Send, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage:
        "I've completed the homepage design. Please review and let me know your thoughts.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      project: "E-commerce Website",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The mobile app wireframes are ready for your review.",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      project: "Mobile App Design",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'll have the blog posts ready by tomorrow morning.",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
      project: "Content Writing",
    },
    {
      id: 4,
      name: "TechCorp Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "When can you start on the backend development?",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      project: "Backend Development",
    },
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "Hi! I wanted to update you on the progress of your e-commerce website project.",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: 2,
      senderId: 1,
      senderName: name,
      content: "Great! I'm excited to see what you've been working on.",
      timestamp: "10:32 AM",
      type: "text",
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "I've completed the homepage design and the product catalog. The responsive design looks great on all devices.",
      timestamp: "10:35 AM",
      type: "text",
    },
    {
      id: 4,
      senderId: 1,
      senderName: "Sarah Johnson",
      content: "Here's a preview of the homepage:",
      timestamp: "10:36 AM",
      type: "text",
    },
    {
      id: 5,
      senderId: 1,
      senderName: "Sarah Johnson",
      content: "/placeholder.svg?height=200&width=300",
      timestamp: "10:36 AM",
      type: "image",
    },
    {
      id: 6,
      senderId: 2,
      senderName: name,
      content:
        "This looks fantastic! I love the clean design and the color scheme.",
      timestamp: "10:40 AM",
      type: "text",
    },
    {
      id: 7,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "I've completed the homepage design. Please review and let me know your thoughts.",
      timestamp: "Just now",
      type: "text",
    },
  ];

  const filteredConversation = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConversation = conversations.find(
    (conv) => conv.id === selectedChat
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending Messsgae", newMessage);
      setNewMessage("") 
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - for Conversation List */}

      <div className="w-50 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search Conversations..." className="pl-10" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredConversation.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className={`flex items-center p-3 roulded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === conversation.id
                    ? "bg-blue border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={conversation.avatar || "./placeholder.svg"}
                      alt={conversation.name}
                    />
                    <AvatarFallback>
                      {" "}
                      {conversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-o h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-500 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-blue-500">
                      {conversation.project}
                    </span>
                    {conversation.unread > 0 && (
                      <Badge className="h-5 w-5 items-center justify-center p-0 text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}

            <div className="bg-white border-b p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src={selectedConversation.avatar || "./placeholder.svg"}
                      alt={selectedConversation.name}
                    />
                    <AvatarFallback>
                      {selectedConversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {selectedConversation.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <h2 className="font-semibold">{selectedConversation.name}</h2>
                <p className="text-sm text-gray-600">
                  {selectedConversation.project}
                </p>
              </div>

                <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            </div>

            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id}
                    className={`flex ${message.senderId} ? "justify-end" : "justify-start" `}>
                    <div className={`  max-w-xs lg:max-w-md px-4 py-2 rounded-lg  
                      ${message.senderId ? "bg-black text-white" : "bg-gray-200 text-gray-900"}`}>

                      {message.type === "image" ? (
                        <picture>
                          <img src={message.content || "./placeholder.svg"} alt="shared Image"
                          className="rounded-lg max-w-full h-auto"/>
                        </picture>
                      ) : (
                          <p className="text-sm"> {message.content }</p>
                      )}
                      <p className={`text-xs mt-1 ${message.senderId} ? "text-blue-100"  : "text-gray-500" `}>{ message.timestamp}</p>
                    </div>
                    </div>
                ))}
              </div>
              </ScrollArea>
              
            
            {/* Message Input */}

            <div className="bg-white border-t p-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip  className="h-4 w-4"/>
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1" />
                
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send  className="h-4 w-4"/>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No conversation selected
              </h3>
              <p className="text-gray-600">
                Choose a conversation from the sidebar to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

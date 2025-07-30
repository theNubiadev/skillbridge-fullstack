// import { Star, Users, Briefcase, MessageSquare } from "lucide-react"
export default function Home() {
  const featuredFreelancers = [
    {
      id: 1,
      name: "Sarah Johnson",    
      title: "Full Stack Developer",
      rating: 4.9,
      hourlyRate: 75,
      skills: ["React", "Node.js", "TypeScript"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "UI/UX Designer",
      rating: 4.8,
      hourlyRate: 60,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Writer",
      rating: 4.9,
      hourlyRate: 45,
      skills: ["SEO", "Copywriting", "Blog Writing"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

    const recentJobs = [
    {
      id: 1,
      title: "E-commerce Website Development",
      budget: "$2000-$5000",
      description: "Looking for a developer to build a modern e-commerce platform with React and Node.js",
      tags: ["React", "Node.js", "E-commerce"],
      postedBy: "TechCorp Inc.",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      budget: "$1000-$3000",
      description: "Need a talented designer to create intuitive UI for our fitness tracking app",
      tags: ["UI Design", "Mobile", "Figma"],
      postedBy: "FitLife Startup",
    },
  ]
  return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect with Top <span className="text-blue-600">Freelancers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SkillBridge is the premier platform where talented freelancers meet ambitious clients. Build your dream
            project with the perfect match.
          </p>
          </div>
      </section>
      

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600">Active Freelancers</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">5K+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section> */}



      
            {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of freelancers and clients who trust SkillBridge for their projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Button asChild size="lg" variant="secondary">
              <Link href="/auth/register">Sign Up Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/auth/login">Login</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

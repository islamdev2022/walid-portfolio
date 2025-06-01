"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

const projectData = {
  1: {
    title: "Optimize Jijel Website",
    category: "UX/UI Design",
    duration: "2 weeks",
    year: "2024",
    description:
      "Optimize Jijel is a fully responsive web platform designed to highlight scientific initiatives, promote research in geology and mining, and connect students and professionals through structured, accessible content.",
    image:"/CS.png",
    tags: ["UI/UX", "Web"],
    tools: ["Figma", "Sketch"],
  },
  3: {
    title: "Baklawa Dorée Website",
    category: "UX/UI Design",
    duration: "20 days",
    year: "2025",
    description:
      "Baklawa Dorée is a fully responsive website crafted to showcase traditional Algerian sweets with elegance, offering customers an intuitive browsing experience, rich visuals, and easy access to orders and product details.",
    image: "FlowPay Case Study.png",
    tags: ["UI/UX", "Web"],
    tools: ["Figma", "Sketch"],
  },
  5: {
    title: "JSD Website",
    category: "UX/UI Design",
    duration: "9 weeks",
    year: "2025",
    description:
      "A responsive and desktop-friendly website designed to offer JSD fans an engaging experience with intuitive navigation, real-time updates, and easy access to news, fixtures, and media content.",
    image: "UX Case Study.png",
    tags: ["UI/UX", "Web"],
    tools: ["Figma", "Sketch"],
  },
  7: {
    title: "Cozyfit Website",
    category: "UX/UI Design",
    duration: "3 weeks",
    year: "2025",
    description:
      "CozyFit offers a fully responsive online store focused on comfort and style, providing effortless browsing, clear product displays, and a seamless shopping journey across all devices.",
    image: "Presentation.png",
    tags: ["UI/UX", "Web"],
    tools: ["Figma", "Sketch"],
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const numericProjectId = Number(projectId) as keyof typeof projectData
  const project = projectData[numericProjectId]
  // Remove the selectedImage state since we no longer need it
  // Change this line:
  // To:
  // (Remove this line completely)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Walid DESIGN
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Duration</h3>
              <p className="text-gray-300">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Year</h3>
              <p className="text-gray-300">{project.year}</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Category</h3>
              <p className="text-gray-300">{project.category}</p>
            </div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">{project.description}</p>
        </div>

        {/* Main Image Display */}
        {/* Replace the entire Main Image Display div with: */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Tools Used */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="border-blue-400/50 text-blue-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0">
                <Download className="w-4 h-4 mr-2" />
                Download Case Study
              </Button>
              <Button
                variant="outline"
                className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

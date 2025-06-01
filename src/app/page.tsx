"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Mail, Phone, MapPin, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const portfolioItems = [
  {
    id: 1,
    title: "Optimize Jijel Website",
    category: "ux-ui",
    image: "/CS1.jpg",
    description: "a fully responsive web platform designed to highlight scientific initiatives",
    tags: ["UI/UX", "Web"],
  },
  {
    id: 3,
    title: "Baklawa Dorée Website",
    category: "ux-ui",
    image: "/FlowPay Case Study1.jpg",
    description: "a fully responsive website crafted to showcase traditional Algerian sweets with elegance",
    tags: ["UI/UX", "Web"],
  },
  {
    id: 5,
    title: "JSD Website",
    category: "ux-ui",
    image: "/UX Case Study1.jpg",
    description: "A responsive and desktop-friendly website designed to offer JSD fans an engaging experience with intuitive navigation",
    tags: ["UI/UX", "Web"],
  },
  {
    id: 7,
    title: "CozyFit Website",
    category: "ux-ui",
    image: "/Presentation1.jpg",
    description: "a fully responsive online store focused on comfort and style",
    tags: ["UI/UX", "Web"],
  },
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className=" z-50 p-6 sticky top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Moussaoui Walid DESIGN
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-white hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                CREATIVE
              </span>
              <br />
              <span className="text-white">DESIGNER</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through innovative UX/UI design and stunning visual
              communications that captivate and convert.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 px-8 py-6 text-lg"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">7</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a passionate UX/UI designer and graphic designer with over 3 years of experience creating digital
                experiences that not only look stunning but also solve real problems. My approach combines user-centered
                design principles with cutting-edge visual aesthetics.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                From mobile apps to brand identities, I bring creativity and strategic thinking to every project,
                ensuring that design serves both business goals and user needs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-blue-400 font-semibold mb-2">UX/UI Design</h3>
                  <p className="text-gray-300 text-sm">User research, wireframing, prototyping, and interface design</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-blue-500 font-semibold mb-2">Graphic Design</h3>
                  <p className="text-gray-300 text-sm">Brand identity, social media, and print design</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0">
                Download Resume
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-xl p-8">
                  <Image
                    src="/about.jpg"
                    alt="Designer Portrait"
                    width={400}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my latest projects showcasing innovative design solutions across UX/UI and graphic design
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0"
                  : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              }
            >
              All Work
            </Button>
            <Button
              onClick={() => setActiveFilter("ux-ui")}
              variant={activeFilter === "ux-ui" ? "default" : "outline"}
              className={
                activeFilter === "ux-ui"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0"
                  : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              }
            >
              UX/UI Design
            </Button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/project/${item.id}`}>
                      <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">Walid@designstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">+213 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white font-semibold">Jijel, Algeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 py-3">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 wnehi ale studio. All rights reserved. Crafted with passion and creativity.
          </p>
        </div>
      </footer>
    </div>
  )
}

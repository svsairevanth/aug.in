'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Star, 
  Download, 
  ExternalLink, 
  Github, 
  Zap,
  Database,
  Cloud,
  Code,
  Brain,
  Shield,
  Sparkles,
  TrendingUp
} from 'lucide-react'

const mcpServers = [
  {
    id: 1,
    name: "DataFlow MCP",
    description: "Advanced data processing and transformation server with real-time analytics capabilities.",
    category: "Data Processing",
    icon: Database,
    stars: 1247,
    downloads: "50K+",
    tags: ["Analytics", "Real-time", "ETL"],
    gradient: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    id: 2,
    name: "CloudSync MCP",
    description: "Seamless cloud integration server supporting AWS, Azure, and Google Cloud platforms.",
    category: "Cloud Integration",
    icon: Cloud,
    stars: 892,
    downloads: "32K+",
    tags: ["AWS", "Azure", "GCP"],
    gradient: "from-purple-500 to-pink-500",
    featured: true
  },
  {
    id: 3,
    name: "CodeGen MCP",
    description: "AI-powered code generation server with support for 20+ programming languages.",
    category: "Code Generation",
    icon: Code,
    stars: 2156,
    downloads: "75K+",
    tags: ["AI", "Codegen", "Multi-language"],
    gradient: "from-green-500 to-emerald-500",
    featured: true
  },
  {
    id: 4,
    name: "NeuralNet MCP",
    description: "Deep learning model serving server with optimized inference and batch processing.",
    category: "Machine Learning",
    icon: Brain,
    stars: 1834,
    downloads: "68K+",
    tags: ["ML", "Deep Learning", "Inference"],
    gradient: "from-orange-500 to-red-500",
    featured: false
  },
  {
    id: 5,
    name: "SecureAuth MCP",
    description: "Enterprise-grade authentication and authorization server with multi-factor support.",
    category: "Security",
    icon: Shield,
    stars: 967,
    downloads: "28K+",
    tags: ["Auth", "Security", "MFA"],
    gradient: "from-indigo-500 to-purple-500",
    featured: false
  },
  {
    id: 6,
    name: "RealtimeSync MCP",
    description: "High-performance real-time synchronization server for distributed applications.",
    category: "Real-time",
    icon: Zap,
    stars: 1456,
    downloads: "42K+",
    tags: ["Real-time", "Sync", "Distributed"],
    gradient: "from-teal-500 to-blue-500",
    featured: false
  }
]

const categories = ["All", "Data Processing", "Cloud Integration", "Code Generation", "Machine Learning", "Security", "Real-time"]

export function MCPShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredServers = selectedCategory === "All" 
    ? mcpServers 
    : mcpServers.filter(server => server.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 morphing-blob opacity-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 morphing-blob opacity-10" 
             style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Featured MCP Servers</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Discover Amazing
            <span className="block holographic">MCP Servers</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Explore our curated collection of high-quality Model Context Protocol servers, 
            built by the community for the community.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* MCP Servers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredServers.map((server, index) => (
            <motion.div
              key={server.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              layout
              className="group relative"
            >
              <div className="glass p-6 rounded-3xl h-full hover:bg-white/10 transition-all duration-500 card-3d">
                {/* Featured Badge */}
                {server.featured && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${server.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <server.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-white transition-colors">
                        {server.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {server.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6 leading-relaxed">
                  {server.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {server.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{server.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium">{server.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Install
                  </motion.button>
                  <motion.button
                    className="p-2 glass rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-2 glass rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            className="group relative px-8 py-4 glass rounded-2xl font-semibold hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>View All MCP Servers</span>
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

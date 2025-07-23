'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Zap, 
  Users, 
  BookOpen, 
  Briefcase, 
  Search, 
  Shield, 
  Sparkles,
  Code,
  Brain,
  Rocket,
  Globe,
  Heart
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "MCP Server Directory",
    description: "Discover and integrate the best Model Context Protocol servers for your AI applications.",
    color: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with AI developers, share knowledge, and collaborate on cutting-edge projects.",
    color: "from-purple-500 to-pink-500",
    delay: 0.1
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access comprehensive guides, tutorials, and best practices for AI development.",
    color: "from-green-500 to-emerald-500",
    delay: 0.2
  },
  {
    icon: Briefcase,
    title: "Job Board",
    description: "Find exciting opportunities in AI/ML development and connect with top companies.",
    color: "from-orange-500 to-red-500",
    delay: 0.3
  },
  {
    icon: Search,
    title: "Advanced Discovery",
    description: "Powerful search and filtering capabilities to find exactly what you need.",
    color: "from-indigo-500 to-purple-500",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime for mission-critical applications.",
    color: "from-teal-500 to-blue-500",
    delay: 0.5
  }
]

const stats = [
  { icon: Code, label: "Lines of Code", value: "1M+", color: "text-blue-400" },
  { icon: Brain, label: "AI Models", value: "500+", color: "text-purple-400" },
  { icon: Rocket, label: "Deployments", value: "10K+", color: "text-green-400" },
  { icon: Globe, label: "Countries", value: "50+", color: "text-orange-400" },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

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
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 morphing-blob opacity-10" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 morphing-blob opacity-10" 
             style={{ animationDelay: '3s' }} />
      </div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Powerful Features</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Everything You Need for
            <span className="block holographic">AI Development</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From discovery to deployment, we provide the complete toolkit 
            for building the next generation of AI applications.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={feature.delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative"
            >
              <div className="glass p-8 rounded-3xl h-full hover:bg-white/10 transition-all duration-500 card-3d">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="glass p-8 rounded-3xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Developers
              <span className="holographic"> Worldwide</span>
            </h3>
            <p className="text-gray-300">
              Join thousands of developers building the future of AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold holographic mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Start Building Today</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

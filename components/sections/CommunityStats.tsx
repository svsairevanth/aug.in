'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Users, 
  Code, 
  Star, 
  GitBranch, 
  MessageCircle, 
  Zap,
  Globe,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: "Active Developers",
    value: 12547,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
    description: "Building amazing AI applications"
  },
  {
    icon: Code,
    label: "MCP Servers",
    value: 1284,
    suffix: "+",
    color: "from-purple-500 to-pink-500",
    description: "Ready to integrate and use"
  },
  {
    icon: Star,
    label: "GitHub Stars",
    value: 45892,
    suffix: "+",
    color: "from-yellow-500 to-orange-500",
    description: "Community appreciation"
  },
  {
    icon: GitBranch,
    label: "Contributions",
    value: 8934,
    suffix: "+",
    color: "from-green-500 to-emerald-500",
    description: "Code contributions this month"
  },
  {
    icon: MessageCircle,
    label: "Discussions",
    value: 23456,
    suffix: "+",
    color: "from-indigo-500 to-purple-500",
    description: "Community conversations"
  },
  {
    icon: Globe,
    label: "Countries",
    value: 89,
    suffix: "+",
    color: "from-teal-500 to-blue-500",
    description: "Global reach and impact"
  }
]

const achievements = [
  {
    icon: Award,
    title: "Top AI Platform 2024",
    description: "Recognized by TechCrunch"
  },
  {
    icon: TrendingUp,
    title: "Fastest Growing",
    description: "500% growth this year"
  },
  {
    icon: Heart,
    title: "Community Choice",
    description: "Loved by developers"
  }
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
      let startTime: number
      const startValue = 0
      const endValue = value

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, isVisible])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function CommunityStats() {
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 morphing-blob opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 morphing-blob opacity-10" 
             style={{ animationDelay: '4s' }} />
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
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Community Impact</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Powered by an Amazing
            <span className="block holographic">Community</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join thousands of developers, researchers, and AI enthusiasts 
            building the future of artificial intelligence together.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative"
            >
              <div className="glass p-8 rounded-3xl h-full hover:bg-white/10 transition-all duration-500 card-3d">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                </div>

                {/* Stats */}
                <div className="text-4xl font-bold holographic mb-2">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          variants={itemVariants}
          className="glass p-8 rounded-3xl mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Recognition &
              <span className="holographic"> Achievements</span>
            </h3>
            <p className="text-gray-300">
              Celebrating our community's incredible milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 glass rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to Join the
            <span className="holographic"> Revolution?</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the community that's shaping the future of AI development. 
            Your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="group px-8 py-4 glass rounded-2xl font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Contributing</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { MCPShowcase } from '@/components/sections/MCPShowcase'
import { CommunityStats } from '@/components/sections/CommunityStats'
import { Footer } from '@/components/layout/Footer'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function HomePage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="relative"
    >
      <Navigation />
      
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <FeaturesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <MCPShowcase />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <CommunityStats />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.main>
  )
}

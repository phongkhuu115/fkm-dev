"use client"

import { motion } from "motion/react"
import { Clock, Rocket, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl mx-auto"
      >
        {/* Main Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/30">
            <Rocket className="w-16 h-16 text-primary" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 -right-2"
          >
            <Star className="w-6 h-6 text-primary/60" />
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-2 -left-2"
          >
            <Zap className="w-5 h-5 text-primary/60" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Coming Soon
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-white/70 text-lg">
              Something amazing is brewing in the digital kitchen
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-white/70 text-lg leading-relaxed">
            We're crafting something extraordinary that will blow your mind!
          </p>

          <div className="bg-background border border-primary/30 rounded-lg p-4">
            <p className="text-primary text-sm font-medium">
              🚀 Launching Soon • Stay Tuned for Updates
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild className="group">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Back to Portfolio
            </Link>
          </Button>

          {/* <Button variant="outline" className="group">
            <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            Notify Me
          </Button> */}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="space-y-4 pt-8"
        >
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>

          <p className="text-primary/60 text-sm">
            Development Progress: <span className="font-medium">75%</span>
          </p>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-primary/60 text-sm italic pt-4"
        >
          "The best things in life are worth waiting for."
          <br />
          <span className="text-xs">- Every developer working on a side project</span>
        </motion.p>
      </motion.div>
    </div>
  )
}
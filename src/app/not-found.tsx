"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl mx-auto"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-primary select-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-white/70 text-lg">
            The page you're looking for seems to have wandered off into the digital void.
            Don't worry, even the best developers lose their way sometimes!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild className="group">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline" className="group" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center items-center gap-2 pt-8"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-primary/60 text-sm italic"
        >
          "The best way to find out if you can trust somebody is to trust them."
          <br />
          <span className="text-xs">- Ernest Hemingway (probably about 404 pages)</span>
        </motion.p>
      </motion.div>
    </div>
  )
}
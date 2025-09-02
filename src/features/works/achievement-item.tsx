"use client"

import { motion } from "motion/react"
import { ExternalLink, Award, FileText, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AchievementItemProps {
  achievement: {
    title: string
    description: string
    links: Array<{
      title: string
      href: string
    }>
  }
  index: number
}

export const AchievementItem = ({ achievement, index }: AchievementItemProps) => {
  const getAchievementIcon = () => {
    if (achievement.title.toLowerCase().includes('conference') || achievement.title.toLowerCase().includes('paper')) {
      return FileText
    }
    if (achievement.title.toLowerCase().includes('challenge') || achievement.title.toLowerCase().includes('place')) {
      return Trophy
    }
    return Award
  }

  const Icon = getAchievementIcon()

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1 * index,
        duration: 0.6
      }}
      className="bg-background border border-primary/30 rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-300 group"
    >
      {/* Header with Icon */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
              {achievement.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-primary/30 mx-6 group-hover:bg-primary transition-colors duration-300"></div>

      {/* Links Section */}
      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-2">
          {achievement.links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link"
            >
              <Button
                variant="outline"
                size="sm"
                className="group/link h-auto py-2 px-3 border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                <ExternalLink className="w-3 h-3 text-primary group-hover/link:scale-110 transition-transform duration-300" />
                <span className="text-white text-xs font-medium ml-1 group-hover/link:text-black">
                  {link.title}
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "motion/react"
import { ExternalLink, Archive, Tag, Cpu, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProjectItemProps {
  project: {
    name: string
    thumbnail: string
    technologies: string
    generalDescription: () => React.ReactNode
    briefRole: () => React.ReactNode,
    link: string
  }
  index: number
}

export const ProjectItem = ({ project, index }: ProjectItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1 * index,
        duration: 0.6
      }}
      className="bg-background border border-primary/30 rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-300 group flex flex-col"
    >
      {/* Header Section */}
      <div className="p-6 space-y-4">
        {/* Project Name */}
        <div className="space-y-2">
          <h3 title={project.name} className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 truncate">
            {project.name}
          </h3>
          <div className="h-px bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
        </div>

        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-primary/30">
          <Image
            src={project.thumbnail}
            alt={`${project.name} thumbnail`}
            fill
            className="object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-primary mx-6"></div>

      {/* Content Section */}
      <div className="p-6 space-y-6 flex flex-col flex-1">
        {/* Tech Stack */}
        <div>
          <p className="text-primary font-mono text-sm tracking-wide">
            {project.technologies}
          </p>
        </div>

        {/* Project Description */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">About the Project</h4>
          <div className="text-white/70 text-sm leading-relaxed">
            {project.generalDescription()}
          </div>
        </div>

        {/* Role Description */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">My Role</h4>
          <div className="text-white/70 text-sm leading-relaxed">
            {project.briefRole()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 mt-auto">
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="group/btn flex-1 w-full">
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="text-white">Link</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

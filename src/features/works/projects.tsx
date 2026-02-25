"use client"

import { SectionHeader } from "@/components/common"
import { Description } from "../experiences/description"
import { DescriptionItem } from "../experiences/description-item"
import { ProjectItem } from "./project-item"
import { useCallback } from "react"

const projects = [
  {
    name: 'vHandicap',
    thumbnail: "https://golfnews.vn/images/post/rrJk4v113rCckcmR_720.png",
    technologies: "React Native, ReactJS, Firebase, ExpressJS, NestJS, Firebase, Docker",
    generalDescription: () => (
      <Description>
        <DescriptionItem>vHandicap is the only app in Vietnam, owned by VGA and developed by VGS Holding, that applies USGA Handicap rules and is officially recognized by the USGA.</DescriptionItem>
        <DescriptionItem>The app currently holds data for over 100,000 Vietnamese golfers, and the number is expected to keep growing.</DescriptionItem>
      </Description>
    ),
    briefRole: () => (
      <Description>
        <DescriptionItem>Participate in developing new features while maintaining available features</DescriptionItem>
        <DescriptionItem>Join the refactoring of the codebase which help reduce app's size by 20%.</DescriptionItem>
        <DescriptionItem>Implement offline-first architecture for the app.</DescriptionItem>
        <DescriptionItem>Implement a shared mobile library for the app.</DescriptionItem>
      </Description>
    ),
    link: "https://play.google.com/store/apps/details?id=com.golfervn.vga.vgagolfer&hl=vi"
  },
  {
    name: 'PickleRank',
    thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e7/86/54/e78654b6-6bcd-c991-7a7d-35d4fdaf875a/Simulator_Screenshot_-_iPad_Air_11-inch__U0028M2_U0029_-_2025-05-25_at_22.02.04.png/626x0w.webp",
    technologies: "React Native, ReactJS, Firebase, ExpressJS, Firebase, Docker",
    generalDescription: () => (
      <Description>
        <DescriptionItem>PickleRank is a mobile app that allows you to track your pickleball ranking and elo rating.</DescriptionItem>
        <DescriptionItem>The app provides comprehensive tournament management and court booking features for pickleball enthusiasts.</DescriptionItem>
      </Description>
    ),
    briefRole: () => (
      <Description>
        <DescriptionItem>Participate in developing features like tournaments and courts for both mobile and web application while maintaining available features.</DescriptionItem>
        <DescriptionItem>Participate in developing BE APIs</DescriptionItem>
        <DescriptionItem>Implement real-time ranking calculations and tournament brackets</DescriptionItem>
      </Description>
    ),
    link: "https://play.google.com/store/apps/details?id=com.picklerank&hl=en"
  },
  {
    name: 'Hue International Hospital',
    thumbnail: "https://bvquoctehue.com/opengraph-image.png",
    technologies: "ReactJS, NextJS, Vite, NestJS, Minio, Docker",
    generalDescription: () => (
      <Description>
        <DescriptionItem>Hue International Hospital provides comprehensive healthcare services in Hue city with modern medical equipment, experienced doctors and international standards. Best hospital in Hue for medical treatment.</DescriptionItem>
      </Description>
    ),
    briefRole: () => (
      <Description>
        <DescriptionItem>Participate in developing features like booking appointment, doctor management,....</DescriptionItem>
        <DescriptionItem>Designing i18n content support Back End</DescriptionItem>
        <DescriptionItem>Build an i18n CMS for the website</DescriptionItem>
        <DescriptionItem>Build a CRM for the website</DescriptionItem>
        <DescriptionItem>Deploy and debug the web applications system</DescriptionItem>
      </Description>
    ),
    link: "https://bvquoctehue.com/"
  }
]

export const Projects = () => {
  const renderProject = useCallback((project: typeof projects[0], index: number) => {
    return <ProjectItem key={project.name} project={project} index={index} />
  }, [])

  return (
    <section id="projects" className="space-y-8">
      <SectionHeader title="projects" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map(renderProject)}
      </div>
    </section>
  )
}
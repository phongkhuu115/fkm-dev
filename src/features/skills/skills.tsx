"use client"

import { SectionHeader } from "@/components/common"
import { GeneralItem } from "./general-item"
import { useCallback } from "react"
import { BookA, Bot, Cloud, CodeXml, Database, icons, MonitorCog, TestTube } from "lucide-react"
import { SkillItem } from "./skill-item"

const generals = ['Javascript', 'Typescript', 'Python', 'Mobile App Development', 'Web Development', 'Desktop App Development']

const skillSets = [
  {
    title: "Front End",
    icon: CodeXml,
    skills: ['ReactJS', 'React Native', 'NextJS'],
    main: true
  },
  {
    title: "Back End",
    icon: MonitorCog,
    skills: ['ExpressJS', 'NestJS', 'JWT', 'OAuth2']
  },
  {
    title: "Database",
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'FireStore']
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ['Firebase', 'Cloudflare', 'Google Cloud', 'AWS']
  },
  {
    title: "Automation",
    icon: Bot,
    skills: ['Appium', 'Gauge', 'WebDriverIO', 'Selenium']
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ['Mocha']
  },
  {
    title: "Others",
    icon: BookA,
    skills: ['Monorepo', 'Lerna', 'Turbo']
  }
]

export const Skills = () => {
  const renderGeneral = useCallback((language: string, index: number) => {
    return <GeneralItem key={language} language={language} index={index} />
  }, [])

  const renderSkillSet = useCallback((skillSet: typeof skillSets[0], index: number) => {
    return <SkillItem key={skillSet.title} item={skillSet} icon={skillSet.icon} index={index} />
  }, [])

  return (
    <section id="skills" className="space-y-4">
      <SectionHeader title="skills" />
      <div className="flex flex-wrap items-center gap-4">
        {generals.map(renderGeneral)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillSets.map(renderSkillSet)}
      </div>
    </section>
  )
}
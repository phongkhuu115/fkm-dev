import { SectionHeader } from "@/components/common"
import { GeneralItem } from "./general-item"
import { useCallback } from "react"
import { Bot, Cloud, CodeXml, Database, MonitorCog, TestTube } from "lucide-react"
import { SkillItem } from "./skill-item"

const generals = ['Javascript', 'Typescript', 'Python', 'Mobile App Development', 'Web Development', 'Desktop App Development']

const skillSets = [
  {
    title: "Front End",
    icon: CodeXml,
    skills: ['ReactJS', 'React Native', 'NextJS']
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
  }
]

export const Skills = () => {
  const renderGeneral = useCallback((language: string) => {
    return <GeneralItem key={language} language={language} />
  }, [])

  const renderSkillSet = useCallback((skillSet: typeof skillSets[0]) => {
    return <SkillItem key={skillSet.title} item={skillSet} icon={skillSet.icon} />
  }, [])

  return (
    <section id="skills" className="pt-6 space-y-4">
      <SectionHeader title="skills" />
      <div className="flex items-center gap-4">
        {generals.map(renderGeneral)}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {skillSets.map(renderSkillSet)}
      </div>
    </section>
  )
}
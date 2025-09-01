import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

export const SkillItem = (props: {
  item: {
    skills: string[]
    title: string
  },
  icon: LucideIcon
}) => {
  const { item, icon: Icon } = props

  return (
    <div className="bg-background border border-primary rounded-lg p-4 min-w-[200px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary" />
        <h3 className="text-white font-medium text-sm">{item.title}</h3>
      </div>

      {/* Separator */}
      <div className="h-px bg-primary mb-3"></div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        {item.skills.map((skill) => (
          <Badge
            key={skill}
            className="text-white text-sm font-medium"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
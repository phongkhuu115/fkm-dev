import { Badge } from "../ui/badge"

export const SectionHeader = (props: {
  title: string
}) => {
  const { title } = props

  return (
    <div className="flex items-center gap-4">
      <Badge variant={"outline"} className="text-2xl">
        <span className="text-primary font-semibold">@</span><span className="text-white">{title}</span>
      </Badge>
      <div className="h-[1px] w-[25%] bg-primary" />
    </div>
  )
}
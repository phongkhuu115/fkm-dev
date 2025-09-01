import { Badge } from "@/components/ui/badge"

export const GeneralItem = (props: {
  language: string
}) => {
  const { language } = props

  return (
    <Badge variant={"outline"} className="bg-tertiary/50 border-tertiary text-white text-[16px]">
      {language}
    </Badge>
  )
}
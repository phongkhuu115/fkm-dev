import { SVG } from "@/components/ui/svg"
import Personal from '@/assets/images/developer.svg'

export const IntroductionImage = () => {
  return (
    <div className="relative h-[340px] w-[400px] rounded-lg overflow-hidden flex-1">
      <Personal className="dev-illustration w-full h-full object-center object-cover" />
      <SVG path="icons.square-dots" className="w-[84px] h-[84px] absolute bottom-0 right-12 -z-10" />
    </div>
  )
}
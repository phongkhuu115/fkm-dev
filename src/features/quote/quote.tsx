import { SVG } from "@/components/ui/svg"

export const Quote = () => {
  return (
    <div className="flex justify-center">
      <blockquote className="text-center box-border border border-primary px-6 py-4 relative">
        <SVG path="icons.quote" className="w-[40px] h-[40px] absolute -top-4 left-4" />
        Yesterday is history. Tomorrow is a mystery. Today is a gift. That’s why we call it ‘The Present’
        <span className="absolute right-[-1px] top-full px-6 py-4 border border-primary font-semibold">
          <span className="relative right-4 top-0">
            - Kung Fu Panda (2008)
          </span>
        </span>
        <SVG path="icons.quote" className="w-[40px] h-[40px] absolute -bottom-6 right-4" />
      </blockquote>
    </div>
  )
}
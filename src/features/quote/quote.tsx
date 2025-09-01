import { ShowOnEnterView } from "@/components/common"
import { SVG } from "@/components/ui/svg"

export const Quote = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <ShowOnEnterView>
        <div className="flex flex-col">
          <span className="text-center box-border border border-primary px-6 py-4 relative">
            <SVG path="icons.quote" className="w-[40px] h-[40px] absolute -top-4 left-4" />
            Yesterday is history. Tomorrow is a mystery. Today is a gift. That’s why we call it ‘The Present’
            <SVG path="icons.quote" className="w-[40px] h-[40px] absolute -bottom-6 right-4" />
          </span>
          <span className="px-6 py-4 border border-primary font-semibold max-w-fit self-end">
            - Kung Fu Panda (2008)
          </span>
        </div>
      </ShowOnEnterView>
    </section>
  )
}
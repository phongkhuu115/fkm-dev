import { ScrollDownIndicator } from "../scroll-down-indicator"
import { IntroductionImage } from "./introduction-image"
import { IntroductionParagraphs } from "./introduction-paragraphs"

export const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row py-6 justify-between gap-6 items-center">
      <IntroductionParagraphs />
      <IntroductionImage />
    </section>
  )
}
import { IntroductionImage } from "./introduction-image"
import { IntroductionParagraphs } from "./introduction-paragraphs"

export const Introduction = () => {
  return (
    <section className="flex py-6 justify-between gap-6 items-center">
      <IntroductionParagraphs />
      <IntroductionImage />
    </section>
  )
}
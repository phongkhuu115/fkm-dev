import { Button } from "@/components"

export const IntroductionParagraphs = () => {
  return (
    <div className="space-y-6 text-white">
      <h1 className="font-semibold text-4xl">
        Hi 👋, I'm a <span className="text-primary">Full Stack Developer</span> from Vietnam with a strong focus on web development.
      </h1>
      <p className="text-primary">
        With over 2 years of experience, I specialize in building robust and scalable web applications
      </p>
      <div className="flex items-center gap-4">
        <Button type="button">
          Contact me!!
        </Button>
        <Button variant="outline">
          Download Resume
        </Button>
      </div>
    </div>
  )
}
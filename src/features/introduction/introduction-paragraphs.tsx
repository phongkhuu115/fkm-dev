"use client"

import { Button } from "@/components"
import { ShowOnEnterView } from "@/components/common"
import { Download } from "lucide-react"
import Link from "next/link"

const RESUME_URL = "https://drive.google.com/file/d/1PNckUQ9W6xDRsOEzobaMaynmKvVfDK1q/view?usp=sharing"

export const IntroductionParagraphs = () => {
  const handleDownloadResume = () => {
    window.open(RESUME_URL, "_blank")
  }

  return (
    <ShowOnEnterView>
      <div className="space-y-6 text-white flex-1">
        <h1 className="font-semibold text-4xl">
          Hi <span className="wave-hand">👋</span>, I'm a <span className="text-primary">Full Stack Developer</span> from Vietnam with a strong focus on web development.
        </h1>
        <p className="text-primary">
          With over 2 years of experience, I specialize in building robust and scalable web applications
        </p>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button type="button">
              Contact me!!
            </Button>
          </Link>
          <Button variant="outline" className="flex gap-2" onClick={handleDownloadResume}>
            Download Resume <Download />
          </Button>
        </div>
      </div>
    </ShowOnEnterView>
  )
}
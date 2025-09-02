import { SectionHeader } from "@/components/common"
import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info"

export const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader title="contact" />
      <div className="grid grid-cols-2 gap-8 mt-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  )
}
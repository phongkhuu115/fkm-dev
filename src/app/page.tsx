import { ContactSection } from "@/features/contact-section";
import { Experiences } from "@/features/experiences";
import { Introduction } from "@/features/introduction";
import { Quote } from "@/features/quote";
import { ScrollDownIndicator } from "@/features/scroll-down-indicator";
import { Skills } from "@/features/skills/skills";

export default function Home() {
  return (
    <div className="space-y-20 mb-4">
      <Introduction />
      <Quote />
      <ScrollDownIndicator />
      <Skills />
      <Experiences />
      <ContactSection />
    </div>
  );
}

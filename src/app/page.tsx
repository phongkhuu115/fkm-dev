import { Introduction } from "@/features/introduction";
import { Quote } from "@/features/quote";
import { ScrollDownIndicator } from "@/features/scroll-down-indicator";
import { Skills } from "@/features/skills/skills";

export default function Home() {
  return (
    <div className="space-y-20">
      <Introduction />
      <Quote />
      <ScrollDownIndicator />
      <Skills />
    </div>
  );
}

import { Introduction } from "@/features/introduction";
import { Quote } from "@/features/quote";
import { Skills } from "@/features/skills/skills";

export default function Home() {
  return (
    <div className="space-y-16">
      <Introduction />
      <Quote />
      <Skills />
    </div>
  );
}

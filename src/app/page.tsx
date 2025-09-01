import { Introduction } from "@/features/introduction";
import { Quote } from "@/features/quote";

export default function Home() {
  return (
    <div className="space-y-16">
      <Introduction />
      <Quote />
    </div>
  );
}

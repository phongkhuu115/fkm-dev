import { Achievements, Projects } from "@/features/works";
import { Fragment } from "react";

export default function Works() {
  return (
    <div className="space-y-8 mt-8 pb-4">
      <h1 className="text-2xl font-bold">Ideas that I have contributed to bring them to the world</h1>
      <Projects />
      <Achievements />
    </div>
  )
}
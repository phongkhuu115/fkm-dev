import { registries, TRegistry } from "@/registries"
import { getNestedObject } from "@/utils"
import { ComponentProps } from "react"

export interface ISvgProps extends ComponentProps<"svg"> {
  path: TRegistry
  size?: number
}

export const SVG = (props: ISvgProps) => {
  const { path, size = 24, ...rest } = props

  const Comp = getNestedObject<React.FC<React.SVGProps<SVGElement>>>(path, registries)

  // Add better error handling and logging
  if (!Comp) {
    console.warn(`SVG component not found for path: ${path}`)
    return null
  }

  // Apply size if provided
  const svgProps = size ? { width: size, height: size, ...rest } : rest

  return <Comp {...svgProps} />
}
import { ReactNode } from "react"

export const DescriptionItem = (props: {
  children: ReactNode,
}) => {
  return (
    <li className="text-gray leading-relaxed text-sm list-disc marker:text-success marker:text-xs pl-2">
      {props.children}
    </li>
  )
}
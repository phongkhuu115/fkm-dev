import { ReactNode } from "react"

export const Description = (props: {
  children: ReactNode
}) => {
  return (
    <ul className="list-inside p-4 space-y-2">
      {props.children}
    </ul>
  )
}
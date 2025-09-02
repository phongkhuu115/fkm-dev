"use client"

import { useCallback } from "react"
import { usePathname } from "next/navigation";
import { IHref } from "./data";
import Link from "next/link";
import { cn } from "@/lib";

export const Href = (props: {
  href: IHref
}) => {
  const { href } = props

  const path = usePathname()

  const isActive = useCallback((href: IHref) => {
    return path === href.path
  }, [path])

  return (
    <Link key={href.path} href={{
      pathname: href.path
    }}>
      <code className="bg-gray/20 py-[2px] px-1 rounded-md">
        <span className="text-primary">@</span>
        <span className={cn("text-primary hover:text-white transition-colors duration-300", {
          "text-white": isActive(href)
        })}>
          {href.title}
        </span>
      </code>
    </Link>
  )
}
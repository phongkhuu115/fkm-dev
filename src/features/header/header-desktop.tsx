"use client"

import Link from "next/link"
import { Container } from "../layout"
import { cn } from "@/lib"
import { useCallback } from "react"
import { usePathname } from "next/navigation";

export interface IHref {
  path: string,
  title: string
}

const hrefs: IHref[] = [
  {
    path: "/",
    title: "home"
  },
  {
    path: "/works",
    title: "works"
  },
  {
    path: "/about-me",
    title: "about-me"
  },
  {
    path: "/contacts",
    title: "contacts"
  },
]

export const HeaderDesktop = () => {
  const path = usePathname()

  const isActive = useCallback((href: IHref) => {
    return path === href.path
  }, [path])

  const renderHref = useCallback((href: IHref) => {
    return (
      <Link key={href.path} href={{
        pathname: href.path
      }} className="">
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
  }, [path, isActive])

  return (
    <header className="pt-8">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link href={{
              pathname: "/"
            }} className="text-white font-bold">
              Phong Khuu Minh <span className="text-secondary">(FKM)</span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {hrefs.map(renderHref)}
          </div>
        </div>
      </Container >
    </header>
  )
}
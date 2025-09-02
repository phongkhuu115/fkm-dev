"use client"

import Link from "next/link"
import { Container } from "../layout"
import { hrefs, IHref } from "./data"
import { Href } from "./href"

export const HeaderDesktop = () => {
  const renderHref = (href: IHref) => {
    return (
      <Href href={href} />
    )
  }

  return (
    <header className="pt-8 hidden sm:block">
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
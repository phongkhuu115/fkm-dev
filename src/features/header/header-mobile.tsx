import Link from "next/link"
import { Container } from "../layout"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { hrefs, IHref } from "./data"
import { Href } from "./href"
import { contactMethods, IContactMethod } from "../contact-section/data"

export const HeaderMobile = () => {
  const renderHref = (href: IHref) => {
    return (
      <Href href={href} />
    )
  }

  const renderContactMethod = (method: IContactMethod) => {
    return (
      <Link href={{
        pathname: method.href
      }} target="_blank" rel="noopener noreferrer" className="!text-2xl">
        <method.icon className="h-8 w-8 text-tertiary/70 hover:text-tertiary transition-colors duration-300"></method.icon>
      </Link>
    )
  }

  return (
    <header className="pt-8 block px-4 sm:hidden">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link href={{
              pathname: "/"
            }} className="text-white font-bold">
              Phong Khuu Minh <span className="text-secondary">(FKM)</span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger>
              <Menu className="text-primary" />
            </SheetTrigger>
            <SheetContent className="w-screen flex flex-col justify-between px-8 py-16">
              <div className="flex flex-col gap-8">
                {hrefs.map(renderHref)}
              </div>
              <div className="flex gap-4 items-center justify-center">
                {contactMethods.map(renderContactMethod)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container >
    </header>
  )
}
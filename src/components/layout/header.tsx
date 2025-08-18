
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CalendlyDialog } from "@/components/ui/calendly-dialog"

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false)
  const pathname = usePathname()

  const NavLink = ({
    href,
    label,
    className,
  }: {
    href: string
    label: string
    className?: string
  }) => {
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors px-3 py-2 rounded-md text-gray-700 hover:text-black",
          className
        )}
        onClick={() => setSheetOpen(false)}
      >
        {label}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="container mx-auto flex h-16 items-center bg-gray-100/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
        <div className="mr-auto flex items-center pl-6">
          <Link href="/" className="flex items-center space-x-2 text-black">
            <Image src="/images/logo.png" alt="Nexx Media Logo" width={140} height={40} />
          </Link>
        </div>
        <nav className="hidden items-center space-x-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-4 pl-4 pr-6 ml-auto">
          <CalendlyDialog>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md group overflow-hidden hidden lg:inline-flex">
              <span className="group-hover:-translate-x-2 transition-transform duration-300">
                Book a call with us
              </span>
              <Phone className="absolute right-[1rem] translate-x-12 group-hover:translate-x-0 transition-transform duration-300 h-4 w-4" />
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-8 transition-transform duration-300" />
            </Button>
          </CalendlyDialog>

          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-black hover:bg-black/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2">
                     <Image src="/images/logo.png" alt="Nexx Media Logo" width={140} height={40} />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-gray-700 hover:text-black"
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <CalendlyDialog>
                    <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md w-full group overflow-hidden">
                      <span className="group-hover:-translate-x-2 transition-transform duration-300">
                        Book a call with us
                      </span>
                      <Phone className="absolute right-[1rem] translate-x-12 group-hover:translate-x-0 transition-transform duration-300 h-4 w-4" />
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-8 transition-transform duration-300" />
                    </Button>
                  </CalendlyDialog>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

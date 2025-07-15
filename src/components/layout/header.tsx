"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingBag } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#portfolio", label: "portfolio" },
  { href: "#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "#more", label: "More" },
]

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false)
  const pathname = usePathname()

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
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
            <span className="font-black text-xl tracking-tighter">NEXX MEDIA</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-4 pl-4 pr-6 ml-auto">
           <div className="relative">
             <ShoppingBag className="h-6 w-6 text-gray-700"/>
             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">
               0
             </span>
           </div>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-black hover:bg-black/10">
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
                    <span className="font-black text-xl tracking-tighter">NEXX MEDIA</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 py-6">
                  {navLinks.map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-gray-700 hover:text-primary"
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

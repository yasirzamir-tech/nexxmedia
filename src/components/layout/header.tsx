"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Mountain } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "About" },
  { href: "#testimonials", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
    // For single page app, active state might not be needed or can be handled with scroll spying
    const isActive = pathname === href; 
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors px-3 py-2 rounded-md",
          isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:bg-white/10",
          className
        )}
        onClick={() => setSheetOpen(false)}
      >
        {label}
      </Link>
    )
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className={cn("flex items-center space-x-2", isScrolled ? "text-black" : "text-white")}>
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-lg">WixSite</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("lg:hidden", isScrolled ? "text-black" : "text-white", "hover:bg-white/20")}>
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
                    <Mountain className="h-6 w-6" />
                    <span className="font-bold text-lg">WixSite</span>
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

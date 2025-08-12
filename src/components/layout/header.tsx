
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ArrowRight, Phone, Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false)
  const [isCalendlyLoaded, setCalendlyLoaded] = React.useState(false);
  const [shouldLoadCalendly, setShouldLoadCalendly] = React.useState(false);
  const pathname = usePathname()

  React.useEffect(() => {
    // Start preloading Calendly after a short delay to not block initial page load
    const timer = setTimeout(() => {
        setShouldLoadCalendly(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
  
  const CalendlyContent = () => (
    <div className="h-[650px] overflow-hidden relative">
      {!isCalendlyLoaded && (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white space-y-4">
            <Calendar className="w-12 h-12 text-primary animate-tada" />
            <p className="text-lg font-medium text-gray-800">Gear up — growth mode is activating!</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            </div>
        </div>
      )}
      {shouldLoadCalendly && (
        <iframe
            src="https://calendly.com/nexxmedia-info/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            className={cn("absolute inset-0 w-full h-full transition-opacity duration-500", isCalendlyLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setCalendlyLoaded(true)}
        />
      )}
    </div>
  );

  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="container mx-auto flex h-16 items-center bg-gray-100/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
        <div className="mr-auto flex items-center pl-6">
          <Link href="/" className="flex items-center space-x-2 text-black">
            <span className="font-black text-xl tracking-tighter">
              NEXX MEDIA
            </span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-4 pl-4 pr-6 ml-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md group overflow-hidden hidden lg:inline-flex">
                <span className="group-hover:-translate-x-2 transition-transform duration-300">
                  Book a call with us
                </span>
                <Phone className="absolute right-[1rem] translate-x-12 group-hover:translate-x-0 transition-transform duration-300 h-4 w-4" />
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-8 transition-transform duration-300" />
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-4xl">
              <DialogHeader className="sr-only">
                  <DialogTitle>Schedule a Meeting</DialogTitle>
              </DialogHeader>
              <CalendlyContent />
            </DialogContent>
          </Dialog>

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
                    <span className="font-black text-xl tracking-tighter">
                      NEXX MEDIA
                    </span>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md w-full group overflow-hidden">
                        <span className="group-hover:-translate-x-2 transition-transform duration-300">
                          Book a call with us
                        </span>
                        <Phone className="absolute right-[1rem] translate-x-12 group-hover:translate-x-0 transition-transform duration-300 h-4 w-4" />
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-8 transition-transform duration-300" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 max-w-4xl w-[90vw]">
                        <DialogHeader className="sr-only">
                           <DialogTitle>Schedule a Meeting</DialogTitle>
                        </DialogHeader>
                       <CalendlyContent />
                    </DialogContent>
                  </Dialog>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

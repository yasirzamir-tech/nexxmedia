import Link from "next/link"
import { Mountain, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="font-bold font-headline text-lg">Nexx Media</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Elevating brands in the digital era.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Our Works</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><Link href="/book" className="text-muted-foreground hover:text-foreground transition-colors">Book Online</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="md:justify-self-end">
              <h3 className="font-headline font-semibold">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexx Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* About Column */}
          <div className="space-y-4 md:col-span-1 md:ml-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-black text-xl tracking-tighter">NEXX MEDIA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A clean and modern landing page template to build your vision.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/company/nexxmedia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
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
          
          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-2">Stay updated with our latest news.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="flex-1"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NEXX MEDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

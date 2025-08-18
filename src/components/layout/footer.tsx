
import Link from "next/link"
import { Linkedin, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const XLogo = () => (
    <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" >
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
    </svg>
)

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
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
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
                <a href="https://x.com/nexxmedia_in" target="_blank" rel="noopener noreferrer" aria-label="X" className="twitter-hover"><XLogo /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/nexx.media/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram-gradient-hover"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="facebook-hover"><Facebook className="h-5 w-5" /></a>
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

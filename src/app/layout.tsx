import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'A modern landing page built with Next.js and ShadCN UI.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("antialiased", poppins.variable)} style={{fontFamily: 'var(--font-poppins)'}}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

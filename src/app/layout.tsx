import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import localFont from 'next/font/local'
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'A modern landing page built with Next.js and ShadCN UI.',
};

const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/NHaasGroteskTXPro-Rg.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("antialiased", neueHaasGrotesk.variable)} style={{fontFamily: 'var(--font-neue-haas)'}}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
          <Image
            src="https://placehold.co/1800x1000.png"
            alt="Digital Agency"
            data-ai-hint="digital agency office"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col items-center space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-4xl leading-tight">
                Creative Digital Agency
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                We build beautiful and effective digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                 <Link href="/services">
                    <Button size="lg">Our Services</Button>
                </Link>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

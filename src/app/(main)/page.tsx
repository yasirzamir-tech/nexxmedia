'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import OurStorySection from '@/components/landing/our-story-section';
import ExpertiseSection from '@/components/landing/expertise-section';
import OurMissionSection from '@/components/landing/our-mission-section';

export default function HomePage() {
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowExplore(true);
      } else {
        setShowExplore(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <main>
        <section className="relative h-screen flex items-center bg-gray-900 text-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://placehold.co/1800x1200.png"
              alt="Luxury leather goods"
              data-ai-hint="leather handbag"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative container mx-auto px-4 flex justify-start">
            <div className="bg-white rounded-2xl w-full max-w-2xl p-12 md:p-16 animate-unfold">
              <div className="opacity-0 animate-fade-in [animation-delay:0.5s]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                  TAILORED MARKETING STRATEGIES
                </h1>
                <p className="text-lg text-gray-700 mt-6">
                  Empowering Businesses Digitally
                </p>
              </div>
              <div className={cn("mt-10 transition-opacity duration-500", showExplore ? "opacity-100" : "opacity-0")}>
                <Link href="/services">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-lg">
                    Explore More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ExpertiseSection />
        <OurStorySection />
        <OurMissionSection />
      </main>
    </div>
  );
}

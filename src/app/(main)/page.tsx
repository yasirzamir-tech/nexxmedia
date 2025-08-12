'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import OurStorySection from '@/components/landing/our-story-section';
import ExpertiseSection from '@/components/landing/expertise-section';
import OurMissionSection from '@/components/landing/our-mission-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import WorkflowSection from '@/components/landing/workflow-section';
import ServicesGridSection from '@/components/landing/services-grid-section';
import TailoredMarketingSection from '@/components/landing/tailored-marketing-section';
import ContactSection from '@/components/landing/contact-section';

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
              src="https://images.unsplash.com/photo-1604176424472-17cd740f74e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWF0aGVyJTIwaGFuZGJhZ3xlbnwwfHx8fDE3NTUwMjYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luxury leather goods"
              data-ai-hint="leather handbag"
              fill
              className="object-cover"
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Image
              src="https://images.unsplash.com/photo-1558959356-2f36c7322d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU1MDI2Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern office workplace"
              data-ai-hint="modern office"
              width={1200}
              height={400}
              className="w-full rounded-3xl"
            />
          </div>
        </section>
        <TestimonialsSection />
        <WorkflowSection />
        <TailoredMarketingSection />
        <ServicesGridSection />
        <ContactSection />
      </main>
    </div>
  );
}

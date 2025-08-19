
'use client';

import React, { useState, useEffect } from 'react';
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
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CalendlyDialog } from '@/components/ui/calendly-dialog';

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
              src="/images/Hero Banner 1a.png"
              alt="Digital marketing agency hero banner"
              data-ai-hint="digital marketing"
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
              <div className={cn("mt-10 transition-opacity duration-500 flex flex-col sm:flex-row gap-4", showExplore ? "opacity-100" : "opacity-0")}>
                <Link href="#services">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-lg w-full sm:w-auto">
                      Explore More
                  </Button>
                </Link>
                <CalendlyDialog>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg w-full sm:w-auto">
                      Schedule a call with us
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CalendlyDialog>
              </div>
            </div>
          </div>
        </section>
        <ExpertiseSection />
        <OurStorySection />
        <OurMissionSection />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <img
              src="/images/Our%20Expertise%201a.png"
              alt="A team working on laptops in a modern office, collaborating on a project."
              width={1200}
              height={400}
              className="w-full rounded-3xl"
              data-ai-hint="team working"
            />
          </div>
        </section>
        <TestimonialsSection />
        <WorkflowSection />
        <TailoredMarketingSection />
        <ServicesGridSection id="services" />
        <ContactSection />
      </main>
    </div>
  );
}

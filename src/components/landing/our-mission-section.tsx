
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function OurMissionSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          <div className="bg-black text-white rounded-3xl p-12 md:p-20 flex flex-col justify-center md:col-span-4">
            <div
              className={cn(
                'opacity-0',
                inView && 'animate-unfold-reveal'
              )}
            >
              <h2 className="text-4xl font-bold tracking-tight">OUR MISSION</h2>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed mt-6">
                At Nexx Media, Our mission is to help bold brands and visionary
                entrepreneurs grow with clarity, confidence, and conversions
              </p>
            </div>
          </div>
          <div className="bg-black text-white rounded-3xl p-12 md:p-20 flex items-center justify-center md:col-span-1">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative bg-white text-black border-transparent hover:bg-primary hover:text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/about">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out animate-shine" />
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">Learn More</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
                'space-y-6 transition-all duration-1000 transform-gpu',
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
            >
              <h2 className="text-4xl font-bold tracking-tight">OUR MISSION</h2>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                At Nexx Media, Our mission is to help bold brands and visionary
                entrepreneurs grow with clarity, confidence, and conversions
              </p>
            </div>
          </div>
          <div className="bg-black text-white rounded-3xl p-12 md:p-20 flex items-center justify-center md:col-span-1">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-black border-transparent hover:bg-gray-200 rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

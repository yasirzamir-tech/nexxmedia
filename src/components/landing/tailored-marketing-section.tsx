'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export default function TailoredMarketingSection() {
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
        <div
          className={cn(
            'bg-black text-white rounded-3xl p-12 md:p-20 opacity-0',
            inView && 'animate-unfold-reveal'
          )}
        >
          <p className="text-lg text-gray-300 mb-4 tracking-wider">
            Our Services
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            TAILORED MARKETING SOLUTIONS
          </h2>
        </div>
      </div>
    </section>
  );
}

'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export default function OurStorySection() {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
          <h2 className="text-4xl font-bold tracking-tight mb-6">OUR STORY</h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Nexx Media is a top-tier digital marketing agency dedicated to providing
            specialized online branding solutions and cutting-edge marketing strategies for
            small and mid-sized enterprises. With a team of innovative thinkers and analytical
            experts, we excel in Performance Marketing, SEO, social media campaigns, and
            content marketing, ensuring impactful outcomes for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

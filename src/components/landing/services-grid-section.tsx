'use client';

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'PERFORMANCE MARKETING',
    description: 'Driving measurable results through data-driven campaigns.',
  },
  {
    number: '02',
    title: 'RETENTION MARKETING',
    description: 'Building lasting customer relationships and loyalty.',
  },
  {
    number: '03',
    title: 'SOCIAL MEDIA MARKETING',
    description: 'Engaging communities and building your brand online.',
  },
  {
    number: '04',
    title: 'EMAIL MARKETING',
    description: 'Crafting targeted campaigns that convert and retain.',
  },
];

const ServiceCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  const [rotation, setRotation] = useState(45);
  const itemRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      setRotation(prevRotation => prevRotation - scrollDelta * 0.3);
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lastScrollY.current = window.scrollY;
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={itemRef} className="bg-gray-100 rounded-3xl p-8 transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:-translate-y-2 flex flex-col min-h-[300px]">
      <div 
        className="w-16 h-1 bg-black ml-auto mt-2 transition-transform duration-100 ease-linear"
        style={{ transform: `rotate(-${rotation}deg)` }}
      />
      <div className="flex-grow flex flex-col justify-end">
        <p className="text-sm font-semibold text-gray-600">{number}</p>
        <h3 className="text-xl font-bold tracking-tight text-black mt-2">{title}</h3>
        <p className="text-base text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesGridSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

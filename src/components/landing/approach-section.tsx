'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

const approachItems = [
  {
    title: 'PERFORMANCE MARKETING',
    description: 'Driving measurable results through data-driven campaigns, enhancing online presence and visibility.',
  },
  {
    title: 'RETENTION MARKETING',
    description: 'Building lasting customer relationships and loyalty.',
  },
  {
    title: 'SOCIAL MEDIA MARKETING',
    description: 'Engage your audience with captivating social media strategies designed to boost brand awareness and drive engagement.',
  },
  {
    title: 'CONTENT MARKETING',
    description: 'Tell your brand story effectively with expert content marketing that aligns with your audience\'s preferences and behaviors.',
  },
];

const ApproachItem = ({ title, description }: { title: string; description: string }) => {
  const [rotation, setRotation] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      setRotation(prevRotation => prevRotation + scrollDelta * 0.3);
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
        threshold: 0.5,
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
    <div ref={itemRef} className="bg-gray-50 rounded-2xl p-8 border-none">
       <div className="flex items-center gap-8 w-full">
        <div className="flex-shrink-0 bg-white rounded-2xl p-6">
          <Plus
            className="h-16 w-16 text-gray-900 transition-transform duration-100 ease-linear"
            strokeWidth={1.5}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h3>
            <p className="text-gray-600 text-base font-normal mt-2 hidden md:block">
                {description}
            </p>
        </div>
      </div>
       <p className="text-gray-600 text-base font-normal md:hidden mt-4">
        {description}
      </p>
    </div>
  );
};


export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="w-full space-y-6">
          {approachItems.map((item) => (
            <ApproachItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

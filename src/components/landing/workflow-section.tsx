
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DraftingCompass, LineChart, Target, Check } from 'lucide-react';

const workflowStages = [
  {
    title: 'Consultation',
    description: 'Understanding your business goals and target audience is the first step. We conduct in-depth consultations to align our strategies with your objectives.',
    icon: <Target className="h-8 w-8" />,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'business consultation'
  },
  {
    title: 'Strategy Development',
    description: 'We craft a bespoke marketing strategy, outlining the channels, tactics, and KPIs for success.',
    icon: <DraftingCompass className="h-8 w-8" />,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'strategy whiteboard'
  },
  {
    title: 'Implementation',
    description: 'Our expert team executes the strategy, launching campaigns and creating content with precision.',
    icon: <Check className="h-8 w-8" />,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'team working'
  },
  {
    title: 'Monitoring & Optimisation',
    description: 'We continuously monitor performance, using data to refine and optimize for the best possible results.',
    icon: <LineChart className="h-8 w-8" />,
    image: 'https://placehold.co/600x600.png',
    aiHint: 'analytics dashboard'
  },
];

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetActiveIndex = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300); // Corresponds with transition duration
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSetActiveIndex((activeIndex + 1) % workflowStages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, handleSetActiveIndex]);

  const activeStage = workflowStages[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4 tracking-wider">Our Process</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900">
            EFFICIENT WORKFLOW
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-6">
            Our process involves a strategic blend of creativity and analytics to deliver tailored marketing solutions that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Workflow Stages */}
          <div className="space-y-4">
            {workflowStages.map((stage, index) => (
              <div
                key={stage.title}
                className={cn(
                  "p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2",
                  activeIndex === index
                    ? 'bg-black text-white border-black shadow-2xl'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                )}
                onClick={() => handleSetActiveIndex(index)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={cn("p-2 rounded-full transition-colors duration-300", activeIndex === index ? 'bg-white/20 text-white' : 'bg-white text-black')}>
                    {stage.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{stage.title}</h3>
                </div>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-50'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={cn("leading-relaxed", activeIndex === index ? 'text-gray-300' : 'text-gray-600')}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            <div
              className={cn(
                'absolute inset-0 transition-opacity duration-300 ease-in-out',
                isTransitioning ? 'opacity-0' : 'opacity-100'
              )}
            >
              <Image
                src={activeStage.image}
                alt={activeStage.title}
                fill
                className="object-cover"
                data-ai-hint={activeStage.aiHint}
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {workflowStages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSetActiveIndex(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                activeIndex === index ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to workflow stage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

    
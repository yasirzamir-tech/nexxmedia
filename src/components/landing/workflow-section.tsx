'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Check, DraftingCompass, LineChart, Target } from 'lucide-react';

const workflowStages = [
  {
    title: 'Consultation',
    description: 'Understanding your business goals and target audience is the first step. We conduct in-depth consultations to align our strategies with your objectives.',
    icon: <Target className="h-12 w-12 text-white" />,
    style: {
      gridArea: 'consultation',
      backgroundColor: '#1a1a1a',
    },
    image: {
        src: 'https://placehold.co/400x400.png',
        alt: 'Consultation visual',
        gridArea: 'image',
        aiHint: 'business meeting'
    }
  },
  {
    title: 'Strategy Development',
    description: 'We craft a bespoke marketing strategy, outlining the channels, tactics, and KPIs for success.',
    icon: <DraftingCompass className="h-12 w-12 text-black" />,
    style: {
      gridArea: 'strategy',
      backgroundColor: '#f0f0f0',
      color: '#1a1a1a',
    },
    image: {
        src: 'https://placehold.co/400x400.png',
        alt: 'Strategy visual',
        gridArea: 'image',
        aiHint: 'whiteboard strategy'
    }
  },
  {
    title: 'Implementation',
    description: 'Our expert team executes the strategy, launching campaigns and creating content with precision.',
    icon: <Check className="h-12 w-12 text-white" />,
    style: {
      gridArea: 'implementation',
      backgroundColor: '#1a1a1a',
    },
    image: {
        src: 'https://placehold.co/400x400.png',
        alt: 'Implementation visual',
        gridArea: 'image',
        aiHint: 'launch sequence'
    }
  },
  {
    title: 'Monitoring & Optimisation',
    description: 'We continuously monitor performance, using data to refine and optimize for the best possible results.',
    icon: <LineChart className="h-12 w-12 text-black" />,
    style: {
      gridArea: 'monitoring',
      backgroundColor: '#f0f0f0',
      color: '#1a1a1a'
    },
    image: {
        src: 'https://placehold.co/400x400.png',
        alt: 'Monitoring visual',
        gridArea: 'image',
        aiHint: 'data dashboard'
    }
  },
];

const gridTemplates = [
  `"image consultation" "image empty1"`,
  `"strategy image" "empty2 image"`,
  `"image implementation" "empty1 implementation"`,
  `"monitoring image" "empty2 monitoring"`
];

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % workflowStages.length);
    }, 4000); // Toggles every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const activeStage = workflowStages[activeIndex];
  const gridTemplate = gridTemplates[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4 tracking-wider">Our Process</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900">
            EFFICIENT WORKFLOW
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-6">
            Our process involves a strategic blend of creativity and analytics to deliver tailored marketing solutions that drive results.
          </p>
        </div>

        <div 
          className="grid gap-6 transition-all duration-700 ease-in-out"
          style={{
            gridTemplateAreas: gridTemplate,
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
          }}
        >
          {workflowStages.map((stage, index) => (
            <React.Fragment key={stage.title}>
              {index === activeIndex && (
                <>
                    <div
                        className="rounded-3xl p-12 flex flex-col justify-center transition-all duration-700 ease-in-out"
                        style={stage.style}
                    >
                        <div className="flex items-center gap-6 mb-6">
                            {stage.icon}
                            <h3 className="text-3xl font-bold tracking-tight">{stage.title}</h3>
                        </div>
                        <p className="text-lg leading-relaxed">
                        {stage.description}
                        </p>
                    </div>
                    <div 
                        className="rounded-3xl overflow-hidden transition-all duration-700 ease-in-out"
                        style={{gridArea: stage.image.gridArea}}
                    >
                        <Image
                            src={stage.image.src}
                            alt={stage.image.alt}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                            data-ai-hint={stage.image.aiHint}
                        />
                    </div>
                </>
              )}
            </React.Fragment>
          ))}
          <div style={{gridArea: 'empty1'}} className="bg-gray-100 rounded-3xl min-h-[150px]"></div>
          <div style={{gridArea: 'empty2'}} className="bg-gray-100 rounded-3xl min-h-[150px]"></div>
        </div>
      </div>
    </section>
  );
}

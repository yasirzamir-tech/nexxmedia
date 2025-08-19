
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CalendlyDialog } from '@/components/ui/calendly-dialog';

const workImages = [
  {
    src: 'https://placehold.co/1200x800.png',
    alt: 'Dashboard screenshot 1',
    aiHint: 'dashboard analytics',
  },
  {
    src: 'https://placehold.co/800x1200.png',
    alt: 'Dashboard screenshot 2',
    aiHint: 'dashboard chart',
  },
  {
    src: 'https://placehold.co/1200x800.png',
    alt: 'Dashboard screenshot 3',
    aiHint: 'dashboard graph',
  },
  {
    src: 'https://placehold.co/1200x800.png',
    alt: 'Dashboard screenshot 4',
    aiHint: 'dashboard metrics',
  },
  {
    src: 'https://placehold.co/800x1200.png',
    alt: 'Dashboard screenshot 5',
    aiHint: 'dashboard report',
  },
  {
    src: 'https://placehold.co/1200x800.png',
    alt: 'Dashboard screenshot 6',
    aiHint: 'dashboard interface',
  },
];

export default function OurWorksPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="h-[90vh] min-h-[600px] flex items-center justify-center text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-gray-600 tracking-wider">
                Case Studies
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 max-w-4xl leading-none">
                OUR WORKS
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Explore a collection of our successful projects and client collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {workImages.map((image, index) => (
                <div key={index} className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.aiHint}
                  />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                   <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white text-lg font-semibold">{image.alt}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              Ready to start your project?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <CalendlyDialog>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CalendlyDialog>
          </div>
        </section>
      </main>
    </div>
  );
}

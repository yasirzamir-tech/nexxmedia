import { Button } from '@/components/ui/button';
import React from 'react';

export default function OurMissionSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">OUR MISSION</h2>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              At Nexx Media, Our mission is to help bold brands and visionary
              entrepreneurs grow with clarity, confidence, and conversions
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
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

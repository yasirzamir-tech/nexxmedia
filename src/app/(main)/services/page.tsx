'use client';

import React from 'react';
import ApproachSection from '@/components/landing/approach-section';
import ServicesGridSection from '@/components/landing/services-grid-section';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="h-[90vh] min-h-[600px] flex items-center justify-center text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-gray-600 tracking-wider">
                Our Services
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 max-w-4xl leading-none">
                TAILORED MARKETING SOLUTIONS
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Empower your brand with our strategic expertise.
              </p>
            </div>
          </div>
        </section>

        <ApproachSection />

      </main>
    </div>
  );
}

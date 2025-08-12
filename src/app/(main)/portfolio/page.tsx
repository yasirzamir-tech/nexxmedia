
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="h-[90vh] min-h-[600px] flex items-center justify-center text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-gray-600 tracking-wider">
                Our Work
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 max-w-4xl leading-none">
                OUR PORTFOLIO
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A glimpse into the successful partnerships we've built.
              </p>
            </div>
          </div>
        </section>

        {/* Full-Width Showcase Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
                        E-commerce Performance Boost
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
                        Generated over ₹1 Cr+ in gross sales, increased traffic by 32%, and achieved a 40% returning customer rate through a data-driven marketing strategy.
                    </p>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://storage.googleapis.com/stabl-in-prod/e15d8f6d-dd78-422c-8511-d1007b8b7891.png"
                        alt="E-commerce Performance Dashboard"
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                        data-ai-hint="dashboard analytics"
                    />
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 mb-8">
                Let's create something amazing together. We're ready to bring your vision to life.
            </p>
            <Link href="https://calendly.com/nexxmedia-info/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

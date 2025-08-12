
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
    {
        title: "Innovation",
        description: "We are committed to staying at the forefront of digital marketing, constantly exploring new technologies and strategies to give our clients a competitive edge."
    },
    {
        title: "Partnership",
        description: "We believe in building strong, collaborative relationships with our clients. Your success is our success, and we work as an extension of your team."
    },
    {
        title: "Transparency",
        description: "We provide clear, honest, and regular communication. You'll always know what we're doing, why we're doing it, and the results we're achieving."
    }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="h-[90vh] min-h-[600px] flex items-center justify-center text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-gray-600 tracking-wider">
                Who We Are
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 max-w-4xl leading-none">
                ABOUT NEXX MEDIA
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A passionate team of digital innovators dedicated to your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                        <Image
                        src="https://placehold.co/600x800.png"
                        alt="Team brainstorming"
                        fill
                        className="object-cover"
                        data-ai-hint="team brainstorming office"
                        />
                    </div>
                    <div>
                        <p className="text-lg text-gray-600 mb-2 tracking-wider">Our Journey</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
                            DRIVEN BY PASSION AND EXPERTISE
                        </h2>
                        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                        Nexx Media was founded on the principle that every business, regardless of size, deserves access to world-class digital marketing. We started as a small team of creative minds and analytical thinkers, united by a desire to help visionary entrepreneurs build their brands and achieve remarkable growth. Today, we're a full-service agency that remains committed to our core values of innovation, partnership, and measurable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-lg text-gray-600 mb-4 tracking-wider">Our Core Principles</p>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900">
                        OUR VALUES
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map(value => (
                        <div key={value.title} className="bg-white rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Built to Scale Section */}
        <section className="relative py-20 bg-black text-white">
            <div className="absolute inset-0 z-0 opacity-30">
                <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt="Abstract background"
                    fill
                    className="object-cover"
                    data-ai-hint="abstract growth ambition"
                />
            </div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                    Built to Scale. <span className="text-accent">Are You?</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
                    We thrive on challenges and turn every obstacle into a strategic opportunity. We partner with visionaries who see every setback as a setup for an even greater comeback. We see you.
                </p>
                <div className="mt-10">
                    <Link href="https://calendly.com/nexxmedia-info/30min" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                        >
                            Let's Talk Growth
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

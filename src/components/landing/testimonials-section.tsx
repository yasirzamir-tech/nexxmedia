
'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const clients = [
  { name: "Innovate Inc.", logo: "https://placehold.co/100x100.png", hint: "abstract logo" },
  { name: "Quantum Leap", logo: "https://placehold.co/100x100.png", hint: "tech logo" },
  { name: "Apex Solutions", logo: "https://placehold.co/100x100.png", hint: "mountain logo" },
  { name: "Stellar Co.", logo: "https://placehold.co/100x100.png", hint: "star logo" },
  { name: "Momentum", logo: "https://placehold.co/100x100.png", hint: "arrow logo" },
  { name: "Synergy Corp", logo: "https://placehold.co/100x100.png", hint: "s logo" },
  { name: "Catalyst", logo: "https://placehold.co/100x100.png", hint: "flame logo" },
  { name: "Zenith", logo: "https://placehold.co/100x100.png", hint: "peak logo" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4 tracking-wider">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900">
            OUR CLIENTS
          </h2>
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-infinite-scroll group-hover:pause">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex flex-col items-center justify-center mx-8 w-40 text-center">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-cover"
                    data-ai-hint={client.hint}
                  />
                </div>
                <p className="font-semibold text-gray-700">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

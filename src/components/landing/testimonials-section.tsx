
'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const clients = [
  { name: "Client Logo 1", logo: "https://placehold.co/150x75.png" },
  { name: "Client Logo 2", logo: "https://placehold.co/150x75.png" },
  { name: "Client Logo 3", logo: "https://placehold.co/150x75.png" },
  { name: "Client Logo 4", logo: "https://placehold.co/150x75.png" },
  { name: "Client Logo 5", logo: "https://placehold.co/150x75.png" },
  { name: "Client Logo 6", logo: "https://placehold.co/150x75.png" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={75}
                className="object-contain"
                data-ai-hint="client logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

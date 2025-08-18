
'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const clients = [
  { name: "Escaro Royale", logo: "/images/client-escaro.png", hint: "gold logo" },
  { name: "Mille Dollari", logo: "/images/client-mille.png", hint: "gold logo crown" },
  { name: "Btruss Services", logo: "/images/client-btruss.png", hint: "mountain logo" },
  { name: "Ehsan Ali", logo: "/images/client-ehsan.png", hint: "star logo" },
  { name: "Leder Warren", logo: "/images/client-leder.png", hint: "arrow logo" },
  { name: "xyz", logo: "/images/client-xyz.png", hint: "s logo" },
  { name: "abc", logo: "/images/client-abc.png", hint: "flame logo" },
  { name: "Yasir", logo: "/images/client-yasir.png", hint: "peak logo" },
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
                    className="object-contain p-2"
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

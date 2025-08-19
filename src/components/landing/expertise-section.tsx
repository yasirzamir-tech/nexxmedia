
import React from 'react';
import Image from 'next/image';

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg text-gray-600 mb-4 tracking-wider">
          About Us
        </p>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900">
          OUR EXPERTISE
        </h2>
        <div className="mt-12">
            <Image
                src="/images/Our Expertise 1a.png"
                alt="Our Expertise"
                width={1200}
                height={600}
                className="w-full rounded-3xl"
                data-ai-hint="team working on laptops"
            />
        </div>
      </div>
    </section>
  );
}

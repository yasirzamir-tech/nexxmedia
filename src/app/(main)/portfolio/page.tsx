
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
    {
        title: "Luxe Leather Goods",
        description: "A complete branding and web design overhaul for a luxury leather goods company, focusing on elegance and craftsmanship.",
        category: "Branding",
        image: "https://placehold.co/600x400.png",
        aiHint: "luxury leather bag"
    },
    {
        title: "Tech Startup Launch",
        description: "Developed a go-to-market strategy and performance marketing campaign that exceeded lead generation goals by 150%.",
        category: "Marketing",
        image: "https://placehold.co/600x400.png",
        aiHint: "startup team meeting"
    },
    {
        title: "E-commerce SEO Boost",
        description: "Implemented a comprehensive SEO strategy that increased organic traffic by 80% and sales by 45% in six months.",
        category: "SEO",
        image: "https://placehold.co/600x400.png",
        aiHint: "analytics dashboard graph"
    },
    {
        title: "Social Media Engagement",
        description: "Created and managed a viral social media campaign that grew the client's audience by over 200k followers.",
        category: "Social Media",
        image: "https://placehold.co/600x400.png",
        aiHint: "social media feed"
    },
    {
        title: "SaaS Platform Redesign",
        description: "A complete UI/UX redesign for a SaaS platform, improving user retention and task completion rates.",
        category: "Web Design",
        image: "https://placehold.co/600x400.png",
        aiHint: "saas dashboard interface"
    },
    {
        title: "Content Marketing Hub",
        description: "Built a content hub that became a primary source of inbound leads, positioning the client as a thought leader.",
        category: "Content Marketing",
        image: "https://placehold.co/600x400.png",
        aiHint: "person writing blog"
    }
];

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

        {/* Portfolio Grid Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                           <div className="relative w-full h-64 overflow-hidden">
                             <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={item.aiHint}
                             />
                           </div>
                           <div className="p-6">
                                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">{item.description}</p>
                           </div>
                        </div>
                    ))}
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

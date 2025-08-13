
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, TrendingUp, Package, Repeat, Users, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CalendlyDialog } from '@/components/ui/calendly-dialog';

const caseStudies = [
  {
    image: '/images/case-study-1.png',
    aiHint: 'shopify storefront',
    title: 'Shopify Success Story 1',
    stats: [
        { icon: <ShoppingBag className="w-8 h-8 text-blue-500" />, value: "₹1 Cr+", label: "Gross Sales Generated" },
        { icon: <Repeat className="w-8 h-8 text-green-500" />, value: "40%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹6,100+", label: "Average Order Value" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "4.6L", label: "Top Product Sales" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "36%", label: "Growth in Draft Orders" },
        { icon: <Users className="w-8 h-8 text-pink-500" />, value: "216K+", label: "Visitors" },
    ]
  },
  {
    image: '/images/case-study-2.png',
    aiHint: 'shopify storefront dark',
    title: 'Shopify Success Story 2',
    stats: [
        { icon: <ShoppingBag className="w-8 h-8 text-blue-500" />, value: "₹1.5 Cr+", label: "Gross Sales Generated" },
        { icon: <Repeat className="w-8 h-8 text-green-500" />, value: "18.2%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹3,500+", label: "Average Order Value" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+50%", label: "Conversion Rate Improved" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+65%", label: "Orders Fulfilled" },
        { icon: <Users className="w-8 h-8 text-pink-500" />, value: "45K+", label: "Visitors" },
    ]
  },
  {
    image: '/images/case-study-3.png',
    aiHint: 'shopify storefront fashion',
    title: 'Shopify Success Story 3',
    stats: [
        { icon: <ShoppingBag className="w-8 h-8 text-blue-500" />, value: "₹3.2 Cr+", label: "Gross Sales Generated" },
        { icon: <Repeat className="w-8 h-8 text-green-500" />, value: "22.5%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹5,200+", label: "Average Order Value" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+85%", label: "Conversion Rate Improved" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+70%", label: "Orders Fulfilled" },
        { icon: <Users className="w-8 h-8 text-pink-500" />, value: "60K+", label: "Visitors" },
    ]
  },
  {
    image: '/images/case-study-4.png',
    aiHint: 'shopify storefront tech',
    title: 'Shopify Success Story 4',
    stats: [
        { icon: <ShoppingBag className="w-8 h-8 text-blue-500" />, value: "₹90 Lacs+", label: "Gross Sales Generated" },
        { icon: <Repeat className="w-8 h-8 text-green-500" />, value: "15%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹2,800+", label: "Average Order Value" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+60%", label: "Conversion Rate Improved" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+45%", label: "Orders Fulfilled" },
        { icon: <Users className="w-8 h-8 text-pink-500" />, value: "35K+", label: "Visitors" },
    ]
  },
]

const StatCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
    <div className="p-2 bg-white rounded-lg shadow-inner">
      {icon}
    </div>
  </div>
);

export default function PortfolioPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

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

        {/* Shopify Showcase Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {caseStudies.map((study, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                        <div className="grid lg:grid-cols-5 items-center gap-8 p-0">
                          <div className="lg:col-span-3 relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                             <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover"
                                data-ai-hint={study.aiHint}
                              />
                          </div>
                          <div className="lg:col-span-2 space-y-4">
                            {study.stats.map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                          </div>
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 mb-8">
                Let's create something amazing together. We're ready to bring your vision to life.
            </p>
            <CalendlyDialog>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CalendlyDialog>
          </div>
        </section>
      </main>
    </div>
  );
}

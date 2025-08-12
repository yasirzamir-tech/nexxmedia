
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Users, ShoppingCart, TrendingUp, Package, Percent, Users2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const caseStudies = [
  {
    image: 'https://placehold.co/600x800.png',
    aiHint: 'shopify storefront',
    title: 'Shopify Success Story 1',
    stats: [
        { icon: <BarChart className="w-8 h-8 text-blue-500" />, value: "₹2.9 Cr+", label: "Gross Sales Generated" },
        { icon: <Users className="w-8 h-8 text-green-500" />, value: "13.9%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹4,173+", label: "Average Order Value" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+58%", label: "Orders Fulfilled" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+73%", label: "Conversion Rate Improved" },
        { icon: <Percent className="w-8 h-8 text-indigo-500" />, value: "25%", label: "Sales Grow in 1 Month" },
        { icon: <Users2 className="w-8 h-8 text-pink-500" />, value: "52.7K+", label: "Visitors" },
    ]
  },
  {
    image: 'https://placehold.co/600x800.png',
    aiHint: 'shopify storefront dark',
    title: 'Shopify Success Story 2',
    stats: [
        { icon: <BarChart className="w-8 h-8 text-blue-500" />, value: "₹1.5 Cr+", label: "Gross Sales Generated" },
        { icon: <Users className="w-8 h-8 text-green-500" />, value: "18.2%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹3,500+", label: "Average Order Value" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+65%", label: "Orders Fulfilled" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+50%", label: "Conversion Rate Improved" },
        { icon: <Percent className="w-8 h-8 text-indigo-500" />, value: "20%", label: "Sales Grow in 1 Month" },
        { icon: <Users2 className="w-8 h-8 text-pink-500" />, value: "45K+", label: "Visitors" },
    ]
  },
  {
    image: 'https://placehold.co/600x800.png',
    aiHint: 'shopify storefront fashion',
    title: 'Shopify Success Story 3',
    stats: [
        { icon: <BarChart className="w-8 h-8 text-blue-500" />, value: "₹3.2 Cr+", label: "Gross Sales Generated" },
        { icon: <Users className="w-8 h-8 text-green-500" />, value: "22.5%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹5,200+", label: "Average Order Value" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+70%", label: "Orders Fulfilled" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+85%", label: "Conversion Rate Improved" },
        { icon: <Percent className="w-8 h-8 text-indigo-500" />, value: "30%", label: "Sales Grow in 1 Month" },
        { icon: <Users2 className="w-8 h-8 text-pink-500" />, value: "60K+", label: "Visitors" },
    ]
  },
  {
    image: 'https://placehold.co/600x800.png',
    aiHint: 'shopify storefront tech',
    title: 'Shopify Success Story 4',
    stats: [
        { icon: <BarChart className="w-8 h-8 text-blue-500" />, value: "₹90 Lacs+", label: "Gross Sales Generated" },
        { icon: <Users className="w-8 h-8 text-green-500" />, value: "15%", label: "Returning Customers" },
        { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, value: "₹2,800+", label: "Average Order Value" },
        { icon: <Package className="w-8 h-8 text-orange-500" />, value: "+45%", label: "Orders Fulfilled" },
        { icon: <TrendingUp className="w-8 h-8 text-red-500" />, value: "+60%", label: "Conversion Rate Improved" },
        { icon: <Percent className="w-8 h-8 text-indigo-500" />, value: "18%", label: "Sales Grow in 1 Month" },
        { icon: <Users2 className="w-8 h-8 text-pink-500" />, value: "35K+", label: "Visitors" },
    ]
  },
]

export default function PortfolioPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
        <section className="py-20 bg-gray-50">
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
                      <Card className="rounded-3xl overflow-hidden">
                        <CardContent className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 p-0">
                          <div className="relative w-full h-[600px] lg:col-span-2">
                             <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover"
                                data-ai-hint={study.aiHint}
                              />
                          </div>
                          <div className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12">
                            <h3 className="text-3xl font-bold tracking-tighter text-gray-900 mb-8">{study.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {study.stats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
                                  <div className="p-2 bg-white rounded-lg">
                                    {stat.icon}
                                  </div>
                                  <div>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
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

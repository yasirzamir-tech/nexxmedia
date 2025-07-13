"use client"
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const portfolioItems = [
  { id: 1, title: "E-commerce Platform", category: "Web Development", image: "https://placehold.co/600x400.png", hint: "online shopping" },
  { id: 2, title: "Global Ad Campaign", category: "Digital Marketing", image: "https://placehold.co/600x400.png", hint: "social media" },
  { id: 3, title: "Brand Identity Redesign", category: "Branding", image: "https://placehold.co/600x400.png", hint: "brand guidelines" },
  { id: 4, title: "Corporate Documentary", category: "Video", image: "https://placehold.co/600x400.png", hint: "film production" },
  { id: 5, title: "Mobile App Launch", category: "Web Development", image: "https://placehold.co/600x400.png", hint: "mobile application" },
  { id: 6, title: "Influencer Marketing", category: "Digital Marketing", image: "https://placehold.co/600x400.png", hint: "fashion influencer" },
  { id: 7, "title": "SaaS Product Design", "category": "Branding", "image": "https://placehold.co/600x400.png", hint: "ui design" },
  { id: 8, "title": "Animated Explainer Video", "category": "Video", "image": "https://placehold.co/600x400.png", hint: "animation character" }
];

const categories = ["All", "Web Development", "Digital Marketing", "Branding", "Video"];

export default function PortfolioPage() {

  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Works</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of our finest projects. We take pride in delivering creative and effective solutions for our clients.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-12">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems
                    .filter(item => category === 'All' || item.category === category)
                    .map((item) => (
                      <Card key={item.id} className="group overflow-hidden relative cursor-pointer">
                          <div className="h-72 w-full">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="group-hover:scale-105 transition-transform duration-500"
                              data-ai-hint={item.hint}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <CardContent className="absolute bottom-0 left-0 p-6">
                            <p className="text-sm text-primary font-semibold">{item.category}</p>
                            <h3 className="text-xl font-bold font-headline text-white mt-1">{item.title}</h3>
                          </CardContent>
                      </Card>
                    ))
                  }
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}

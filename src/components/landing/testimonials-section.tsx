'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    quote: "Working with Nexx Media was a game-changer for our business. Their creative approach and analytical insights transformed our marketing efforts."
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    quote: "The team at Nexx Media is incredibly talented and dedicated. They took the time to understand our brand and delivered exceptional results."
  },
  {
    name: "Michael Chen",
    rating: 5,
    quote: "A truly professional and results-driven agency. Our ROI has never been better. Highly recommend their services to anyone looking to grow."
  }
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-12 flex flex-col justify-center">
            <p className="text-gray-600 mb-4">Client Testimonials</p>
            <h2 className="text-5xl font-black tracking-tighter text-gray-900 leading-none">
              CLIENTS' SUCCESS STORIES
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-12">
            <Carousel
              setApi={setApi}
              orientation="vertical"
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="h-[280px]">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={`${testimonial.name}-${index}`} className="pt-4">
                    <div className="flex flex-col h-full justify-between opacity-0 animate-fadeSlideUp" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div>
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={`filled-${i}-${testimonial.name}-${index}`} className="h-5 w-5 text-black fill-black" />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={`empty-${i}-${testimonial.name}-${index}`} className="h-5 w-5 text-black" />
                          ))}
                        </div>
                        <blockquote className="text-xl font-semibold tracking-tight text-gray-900 leading-snug">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <p className="mt-8 text-lg font-medium text-gray-700">{testimonial.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-3 w-3 rounded-full transition-colors",
                    current === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                  )}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
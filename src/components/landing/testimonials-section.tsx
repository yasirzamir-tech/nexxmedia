'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';

const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    quote: "Working with Nexx Media was a game-changer for our business. Their creative approach and analytical insights transformed our marketing efforts.",
    photo: "https://images.unsplash.com/photo-1695470667338-e7e8608ff048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc1NTAyNjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    quote: "The team at Nexx Media is incredibly talented and dedicated. They took the time to understand our brand and delivered exceptional results.",
    photo: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc1NTAyNjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Michael Chen",
    rating: 5,
    quote: "A truly professional and results-driven agency. Our ROI has never been better. Highly recommend their services to anyone looking to grow.",
    photo: "https://images.unsplash.com/photo-1695470667338-e7e8608ff048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc1NTAyNjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const SleekStar = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 .587l3.668 7.426 8.213 1.193-5.944 5.794 1.402 8.17L12 18.897l-7.339 4.273 1.402-8.17L.119 9.206l8.213-1.193L12 .587z" />
    </svg>
  );

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.testimonial-section-observer');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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
      if (api) {
        api.off("select", onSelect);
      }
    };
  }, [api, current]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20 testimonial-section-observer">
       <style jsx>{`
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
          padding: 0 16px;
        }
        
        .dot-button {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .dot-button:hover {
          transform: scale(1.2);
        }
        
        .dot-button.active {
          transform: scale(1.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .dot-button.active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          animation: pulseRing 2s infinite;
        }

        @keyframes pulseRing {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {/* Header Section */}
          <div className={cn(
            "bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-center transition-all duration-1000",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )}>
            <div>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base font-medium tracking-wide">
                Client Testimonials
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-gray-900 leading-tight">
                CLIENTS' SUCCESS STORIES
              </h2>
            </div>
          </div>
          
          {/* Testimonials Carousel */}
          <div className={cn(
            "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-1000",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )} style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden">
              <Carousel
                setApi={setApi}
                orientation="vertical"
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                  }),
                ]}
              >
                <CarouselContent className="h-[200px] sm:h-[220px] lg:h-[240px]">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem 
                      key={`${testimonial.name}-${index}`} 
                      className={cn(
                        "pt-4 transition-all duration-500",
                        isVisible ? "animate-fadeSlideUp" : "opacity-0"
                      )} 
                      style={{animationDelay: `${0.2 * index}s`}}
                    >
                      <div className={cn(
                        "h-full flex flex-col justify-between",
                        current === index ? "active" : ""
                      )}>
                        <div className="pl-1 sm:pl-2 flex-1">
                          <div className="flex items-center gap-2 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <SleekStar
                                  key={`filled-${i}-${testimonial.name}-${index}`}
                                  className="h-4 w-4 sm:h-5 sm:w-5 text-black"
                                />
                              ))}
                              {[...Array(5 - testimonial.rating)].map((_, i) => (
                                <SleekStar
                                  key={`empty-${i}-${testimonial.name}-${index}`}
                                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300"
                                />
                              ))}
                          </div>
                          
                          <blockquote className="text-sm sm:text-base font-medium tracking-tight leading-snug text-gray-800 line-clamp-4">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        
                        <div className="flex items-center gap-4 pl-1 sm:pl-2 mt-4 sm:mt-6">
                           <Image
                              src={testimonial.photo}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full"
                              data-ai-hint="person face"
                            />
                          <p className="text-base sm:text-lg font-medium text-gray-700">
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {/* Navigation Dots */}
              <div className="dots-container">
                {testimonials.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "dot-button",
                      current === index 
                        ? "bg-black active" 
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className="sr-only">Go to slide {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

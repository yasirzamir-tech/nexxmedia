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
    photo: "https://placehold.co/100x100.png"
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    quote: "The team at Nexx Media is incredibly talented and dedicated. They took the time to understand our brand and delivered exceptional results.",
    photo: "https://placehold.co/100x100.png"
  },
  {
    name: "Michael Chen",
    rating: 5,
    quote: "A truly professional and results-driven agency. Our ROI has never been better. Highly recommend their services to anyone looking to grow.",
    photo: "https://placehold.co/100x100.png"
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
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        
        .testimonial-card.active {
          transform: scale(1.02);
        }
        
        .quote-text {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          overflow: hidden;
        }
        
        .quote-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(31, 41, 55, 0.1) 50%, transparent 100%);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .star-container {
          display: flex;
          gap: 2px;
          flex-wrap: wrap;
        }
        
        .name-badge {
          position: relative;
          overflow: hidden;
        }
        
        .name-badge::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #000 0%, #374151 100%);
          transform: scaleX(0);
          animation: underlineExpand 0.8s ease-out 0.5s forwards;
        }
        
        @keyframes underlineExpand {
          to { transform: scaleX(1); }
        }
        
        .profile-photo {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
        }
        
        .profile-photo:hover {
          transform: scale(1.05);
          border-color: #d1d5db;
        }
        
        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-top: 8px;
          flex-wrap: wrap;
        }
        
        @media (max-width: 640px) {
          .testimonial-header {
            gap: 8px;
            margin-bottom: 16px;
          }
          
          .star-container {
            gap: 1px;
          }
        }
        
        .carousel-container {
          position: relative;
          overflow: hidden;
        }
        
        .carousel-item-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
        
        .content-container {
          position: relative;
          z-index: 1;
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .testimonial-card,
          .dot-button,
          .profile-photo {
            transition: none;
          }
          
          .quote-text::before,
          .dot-button.active::after {
            animation: none;
          }
        }
      `}</style>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {/* Header Section */}
          <div className={cn(
            "bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-center transition-all duration-1000 glass-effect",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )}>
            <div className="content-container">
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
            "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-1000 glass-effect",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )} style={{ animationDelay: '0.3s' }}>
            <div className="carousel-container">
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
                        isVisible ? "animate-scaleIn" : "opacity-0"
                      )} 
                      style={{animationDelay: `${0.2 * index}s`}}
                    >
                      <div className={cn(
                        "carousel-item-content testimonial-card",
                        current === index ? "active" : ""
                      )}>
                        <div className="pl-1 sm:pl-2 flex-1">
                          <div className="testimonial-header">
                            <div className="star-container">
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
                          </div>
                          
                          <blockquote className="text-sm sm:text-base font-semibold tracking-tight leading-snug quote-text line-clamp-4">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        
                        <div className="flex items-center gap-4 name-badge pl-1 sm:pl-2 mt-4 sm:mt-6">
                           <Image
                              src={testimonial.photo}
                              alt={testimonial.name}
                              width={40}
                              height={40}
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

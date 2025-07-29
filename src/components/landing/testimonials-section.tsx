'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    quote: "Working with Nexx Media was a game-changer for our business. Their creative approach and analytical insights transformed our marketing efforts.",
    photo: "/images/testimonials/ahmed-khan.jpg"
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    quote: "The team at Nexx Media is incredibly talented and dedicated. They took the time to understand our brand and delivered exceptional results.",
    photo: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    rating: 5,
    quote: "A truly professional and results-driven agency. Our ROI has never been better. Highly recommend their services to anyone looking to grow.",
    photo: "/images/testimonials/michael-chen.jpg"
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
    <div className="min-h-screen bg-gray-50 py-20 testimonial-section-observer">
      <style jsx>{`
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
        }
        
        .quote-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(31, 41, 55, 0.1) 50%, transparent 100%);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .star-container {
          display: flex;
          gap: 2px;
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
          gap: 16px;
          margin-bottom: 24px;
        }
      `}</style>
      
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cn(
            "bg-white rounded-3xl p-12 flex flex-col justify-center transition-all duration-1000",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )}>
            <p className="text-gray-600 mb-4" >
              Client Testimonials
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-gray-900 leading-tight">
              CLIENTS' SUCCESS STORIES
            </h2>
          </div>
          
          <div className={cn(
            "bg-white rounded-3xl p-12 transition-all duration-1000",
            isVisible ? "animate-fadeSlideUp" : "opacity-0"
          )} style={{ animationDelay: '0.3s' }}>
            <Carousel
              setApi={setApi}
              orientation="vertical"
              className="w-full"
               plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent className="h-[220px]">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={`${testimonial.name}-${index}`} className={cn("pt-4 transition-all duration-500", {"opacity-0": !isVisible}) } style={{animationDelay: `${0.2 * index}s`}}>
                    <div className={cn(
                      "flex flex-col h-full justify-between testimonial-card",
                      current === index ? "active" : ""
                    )}>
                      <div>
                        <div className="testimonial-header">
                          <div className="star-container">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <SleekStar
                                key={`filled-${i}-${testimonial.name}-${index}`}
                                className="h-5 w-5 text-black"
                              />
                            ))}
                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                              <SleekStar
                                key={`empty-${i}-${testimonial.name}-${index}`}
                                className="h-5 w-5 text-gray-300"
                              />
                            ))}
                          </div>
                        </div>
                        
                        <blockquote className="text-md font-semibold tracking-tight leading-snug quote-text">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="name-badge">
                        <p className="mt-8 text-lg font-medium text-gray-700">
                          {testimonial.name}
                        </p>
                      </div>
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
                    "h-3 w-3 rounded-full transition-all duration-300 transform hover:scale-110",
                    current === index 
                      ? "bg-black shadow-md scale-110" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

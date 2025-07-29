'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

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
    setIsVisible(true);
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

    // Auto-play functionality
    const interval = setInterval(() => {
      if (api) {
        const nextIndex = (current + 1) % testimonials.length;
        api.scrollTo(nextIndex);
      }
    }, 4000);

    return () => {
      if (api) {
        api.off("select", onSelect);
      }
      clearInterval(interval);
    };
  }, [api, current]);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
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
        
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          50% {
            opacity: 0.7;
            transform: translateY(10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes liquidText {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(90deg);
            filter: blur(8px) hue-rotate(0deg);
          }
          25% {
            opacity: 0.3;
            transform: translateY(30px) rotateX(45deg);
            filter: blur(4px) hue-rotate(90deg);
          }
          50% {
            opacity: 0.7;
            transform: translateY(15px) rotateX(15deg);
            filter: blur(2px) hue-rotate(180deg);
          }
          75% {
            opacity: 0.9;
            transform: translateY(5px) rotateX(5deg);
            filter: blur(1px) hue-rotate(270deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px) hue-rotate(360deg);
          }
        }
        
        @keyframes morphingText {
          0% {
            opacity: 0;
            transform: scale(0.8) skewX(-15deg) translateX(-30px);
            letter-spacing: 10px;
            filter: blur(5px);
          }
          30% {
            opacity: 0.5;
            transform: scale(0.95) skewX(-8deg) translateX(-15px);
            letter-spacing: 5px;
            filter: blur(2px);
          }
          60% {
            opacity: 0.8;
            transform: scale(1.02) skewX(3deg) translateX(5px);
            letter-spacing: 1px;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1) skewX(0deg) translateX(0px);
            letter-spacing: normal;
            filter: blur(0px);
          }
        }
        
        @keyframes quantumText {
          0% {
            opacity: 0;
            transform: translateZ(-100px) rotateY(180deg) scale(0.5);
            text-shadow: 0 0 20px rgba(0,0,0,0.8);
          }
          25% {
            opacity: 0.3;
            transform: translateZ(-50px) rotateY(90deg) scale(0.75);
            text-shadow: 0 0 15px rgba(0,0,0,0.6);
          }
          50% {
            opacity: 0.6;
            transform: translateZ(0px) rotateY(45deg) scale(0.9);
            text-shadow: 0 0 10px rgba(0,0,0,0.4);
          }
          75% {
            opacity: 0.9;
            transform: translateZ(10px) rotateY(15deg) scale(1.05);
            text-shadow: 0 0 5px rgba(0,0,0,0.2);
          }
          100% {
            opacity: 1;
            transform: translateZ(0px) rotateY(0deg) scale(1);
            text-shadow: none;
          }
        }
        
        @keyframes glitchText {
          0% {
            opacity: 0;
            transform: translateX(-20px);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
          }
          10% {
            opacity: 0.2;
            transform: translateX(-15px);
            clip-path: polygon(0 0, 20% 0, 20% 100%, 0% 100%);
          }
          20% {
            opacity: 0.4;
            transform: translateX(-10px);
            clip-path: polygon(0 0, 40% 0, 40% 100%, 0% 100%);
          }
          30% {
            opacity: 0.6;
            transform: translateX(-5px);
            clip-path: polygon(0 0, 60% 0, 60% 100%, 0% 100%);
          }
          40% {
            opacity: 0.8;
            transform: translateX(0px);
            clip-path: polygon(0 0, 80% 0, 80% 100%, 0% 100%);
          }
          50% {
            opacity: 1;
            transform: translateX(2px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
          60% {
            opacity: 1;
            transform: translateX(-1px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes starPop {
          0% {
            transform: scale(0.8) rotate(-180deg);
            opacity: 0;
            filter: brightness(0.5) hue-rotate(0deg);
          }
          50% {
            transform: scale(1.3) rotate(-90deg);
            filter: brightness(1.5) hue-rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
            filter: brightness(1) hue-rotate(360deg);
          }
        }
        
        @keyframes nameSlide {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.8);
            filter: blur(3px);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-10px) scale(1.05);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }
        
        @keyframes photoReveal {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
            filter: grayscale(100%) blur(5px);
            border-radius: 50%;
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1) rotate(2deg);
            filter: grayscale(50%) blur(2px);
            border-radius: 20%;
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: grayscale(0%) blur(0px);
            border-radius: 12px;
          }
        }
        
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
        
        .animate-textReveal {
          animation: textReveal 1s ease-out forwards;
        }
        
        .animate-liquidText {
          animation: liquidText 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
        
        .animate-morphingText {
          animation: morphingText 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-quantumText {
          animation: quantumText 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .animate-glitchText {
          animation: glitchText 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        .animate-starPop {
          animation: starPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-nameSlide {
          animation: nameSlide 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-photoReveal {
          animation: photoReveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
            <p className="text-gray-600 mb-4 animate-liquidText" style={{ animationDelay: '0.2s' }}>
              Client Testimonials
            </p>
            <h2 className="text-5xl font-black tracking-tighter text-gray-900 leading-none animate-morphingText" style={{ animationDelay: '0.4s' }}>
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
            >
              <CarouselContent className="h-[320px]">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={`${testimonial.name}-${index}`} className="pt-4">
                    <div className={cn(
                      "flex flex-col h-full justify-between testimonial-card",
                      current === index ? "active" : ""
                    )}>
                      <div>
                        <div className="testimonial-header">
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name}
                            className="profile-photo animate-photoReveal"
                            style={{ animationDelay: '0.1s' }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
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
                        
                        <blockquote className="text-lg font-semibold tracking-tight leading-snug quote-text animate-quantumText" style={{ animationDelay: '0.6s' }}>
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="name-badge">
                        <p className="mt-8 text-lg font-medium text-gray-700 animate-glitchText" style={{ animationDelay: '0.8s' }}>
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

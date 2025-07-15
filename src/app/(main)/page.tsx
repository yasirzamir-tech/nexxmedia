'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { HeartHandshake, Lightbulb, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: 'Innovative Ideas',
    description: 'We bring fresh perspectives to every project, ensuring unique and creative solutions.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Growth Focused',
    description: 'Our strategies are designed to drive growth and deliver measurable results for your business.',
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: 'Client First',
    description: 'Your success is our priority. We work closely with you to achieve your goals.',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'CEO, Tech Innovators',
    quote:
      'Working with this team was a transformative experience. Their dedication and creativity are unmatched.',
    image: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
  },
  {
    name: 'Michael B.',
    role: 'Marketing Director, Future Co.',
    quote:
      "The results speak for themselves. Our engagement has skyrocketed since we partnered with them.",
    image: 'https://placehold.co/100x100.png',
    hint: 'man smiling',
  },
  {
    name: 'Jessica P.',
    role: 'Founder, Creative Minds',
    quote:
      "I'm blown away by the quality of work and the professionalism of the entire team. Highly recommend!",
    image: 'https://placehold.co/100x100.png',
    hint: 'woman glasses',
  },
];

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-section');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className={`py-20 md:py-28 opacity-0 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};


export default function HomePage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Hero background"
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-50"
              data-ai-hint="abstract background"
              priority
            />
          </div>
          <div className="relative z-10 text-center space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build Your Vision
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Create stunning websites with our intuitive platform. No coding required.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Section id="features">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide the best tools and support to help you succeed in the digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-block p-5 bg-accent/20 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Image + Text Sections */}
        <Section className="bg-gray-50">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/800x800.png"
                alt="Feature one"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="team collaborating"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Powerful by Design</h2>
              <p className="text-muted-foreground text-lg">
                Our platform is engineered for performance and scalability, ensuring your website is always fast and reliable.
              </p>
              <Button asChild>
                <Link href="#contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </Section>
        
        <Section>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Intuitive to Use</h2>
              <p className="text-muted-foreground text-lg">
                With a simple drag-and-drop interface, building your dream website has never been easier.
              </p>
              <Button asChild>
                <Link href="#contact">Start Building</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image
                src="https://placehold.co/800x800.png"
                alt="Feature two"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="person designing"
              />
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials" className="bg-gray-50">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Loved by Creators</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear what our amazing customers have to say about their experience.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full shadow-md">
                      <CardContent className="flex-grow flex flex-col justify-center items-center text-center p-8 space-y-4">
                        <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                        <div className="pt-4">
                           <Avatar className="w-20 h-20 mb-2">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <h4 className="font-semibold">{testimonial.name}</h4>
                           <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] hidden sm:flex" />
            <CarouselNext className="right-[-50px] hidden sm:flex" />
          </Carousel>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start?</h2>
              <p className="text-muted-foreground text-lg">
                Let's talk about your next project. Fill out the form and we'll be in touch shortly.
              </p>
            </div>
            <Card className="p-8 shadow-xl">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </Card>
          </div>
        </Section>

      </main>
    </div>
  );
}

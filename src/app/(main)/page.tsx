import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Megaphone, Code, PenTool, Camera, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: "Digital Marketing",
    description: "Amplify your reach with our data-driven marketing strategies that guarantee results.",
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Web Development",
    description: "Get a stunning, high-performance website that captivates and converts.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Content Creation",
    description: "Engage your audience with compelling content that tells your brand's story.",
  },
  {
    icon: <Camera className="h-8 w-8 text-accent" />,
    title: "Video Production",
    description: "Bring your vision to life with professional video content that leaves an impact.",
  },
];

const portfolioHighlights = [
  { id: 1, title: "Project Alpha", category: "Web Development", image: "https://placehold.co/600x400.png", hint: "modern office" },
  { id: 2, title: "Project Beta", category: "Digital Marketing", image: "https://placehold.co/600x400.png", hint: "creative collaboration" },
  { id: 3, title: "Project Gamma", category: "Content Creation", image: "https://placehold.co/600x400.png", hint: "brand strategy" },
];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    text: "Nexx Media transformed our online presence. Their team is professional, creative, and delivered beyond our expectations. Highly recommended!",
  },
  {
    name: "Samantha Lee",
    title: "Marketing Director, Future Gadgets",
    avatar: "https://placehold.co/100x100.png",
    text: "Working with Nexx Media was a game-changer. Their insights into digital marketing helped us double our engagement in just one quarter.",
  },
  {
    name: "David Chen",
    title: "Founder, Startup Hub",
    avatar: "https://placehold.co/100x100.png",
    text: "The website they developed is not only beautiful but also incredibly fast and user-friendly. Our conversion rates have soared.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
                Creative Digital Solutions for a <span className="text-primary-foreground" style={{color: 'hsl(var(--accent))'}}>Bold New Era</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We are a full-service digital agency specializing in pushing boundaries and delivering exceptional results. Let&apos;s build the future, together.
              </p>
              <div className="flex space-x-4">
                <Button asChild size="lg">
                  <Link href="/book">Book a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">Our Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-96 w-full">
              <Image src="https://placehold.co/800x600.png" alt="Digital Agency Collaboration" fill style={{ objectFit: "cover" }} className="rounded-lg shadow-xl" data-ai-hint="digital agency meeting" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a wide range of services to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s a glimpse of the successful projects we&apos;ve delivered for our amazing clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative h-60 w-full">
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-500" data-ai-hint={project.hint} />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-accent font-semibold">{project.category}</p>
                  <h3 className="text-xl font-bold font-headline mt-1">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on building strong relationships and delivering value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
                <div className="bg-muted/50 p-6 flex items-center space-x-4">
                   <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Megaphone, Code, PenTool, Camera, BarChart, Search, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: "Digital Marketing",
    description: "Full-funnel marketing strategies to boost your online presence. We cover everything from social media campaigns to PPC and content marketing.",
    price: "Starts at $1,500/mo"
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Web Development",
    description: "Custom, responsive, and SEO-friendly websites built on modern technologies to provide a seamless user experience.",
    price: "Starts at $5,000"
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "Branding & Design",
    description: "Crafting unique brand identities that resonate with your target audience. Includes logo design, style guides, and marketing collateral.",
    price: "Starts at $2,500"
  },
  {
    icon: <Camera className="h-8 w-8 text-accent" />,
    title: "Video Production",
    description: "High-quality video content, from promotional videos to corporate storytelling, designed to captivate and engage.",
    price: "Starts at $3,000"
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: "Analytics & Reporting",
    description: "In-depth analysis and regular reporting to track performance, uncover insights, and optimize your strategy for maximum ROI.",
    price: "Starts at $800/mo"
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic with our comprehensive on-page, off-page, and technical SEO services.",
    price: "Starts at $1,200/mo"
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to elevate your brand and accelerate your growth.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <p className="font-semibold text-lg">{service.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Start Your Project?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals. Schedule a free consultation with our experts today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/book">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Laptop, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Branding",
    description: "We create strong, lasting brands that resonate with your audience and stand out in the market.",
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "Web Design",
    description: "Stunning, user-friendly websites designed to convert visitors into loyal customers.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: "Marketing",
    description: "Data-driven marketing strategies to boost your online presence and drive growth.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            We offer a comprehensive suite of services to elevate your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-primary font-semibold">
                  <Link href="#">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

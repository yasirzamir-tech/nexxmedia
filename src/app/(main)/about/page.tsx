import Image from "next/image";
import { Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Jane Doe", role: "Founder & CEO", image: "https://placehold.co/400x400.png", hint: "woman portrait" },
  { name: "John Smith", role: "Creative Director", image: "https://placehold.co/400x400.png", hint: "man portrait" },
  { name: "Emily White", role: "Lead Developer", image: "https://placehold.co/400x400.png", hint: "woman smiling" },
  { name: "Michael Brown", role: "Marketing Strategist", image: "https://placehold.co/400x400.png", hint: "man glasses" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">About Nexx Media</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are innovators, creators, and strategists passionate about building unforgettable digital experiences that drive growth and connect with audiences.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 w-full">
              <Image 
                src="https://placehold.co/800x600.png"
                alt="Our Team"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
                data-ai-hint="team working"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2020, Nexx Media was born from a desire to bridge the gap between creativity and technology. We saw a need for a digital agency that not only understood the art of storytelling but also mastered the science of digital marketing and web development.
              </p>
              <p className="text-muted-foreground">
                Today, we are a thriving team of experts dedicated to helping businesses of all sizes navigate the complexities of the digital world and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To empower brands with innovative digital solutions that deliver measurable results and create lasting impact.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creativity, Integrity, Collaboration, and a relentless pursuit of Excellence guide everything we do.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the leading digital agency recognized for transforming businesses and setting new standards in the industry.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate minds behind our success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center pt-6">
                <CardContent>
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

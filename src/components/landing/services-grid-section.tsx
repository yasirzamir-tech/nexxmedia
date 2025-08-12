'use client';

import { cn } from "@/lib/utils";

const services = [
  {
    number: '01',
    title: 'PERFORMANCE MARKETING',
    description: 'Driving measurable results through data-driven campaigns.',
  },
  {
    number: '02',
    title: 'RETENTION MARKETING',
    description: 'Building lasting customer relationships and loyalty.',
  },
  {
    number: '03',
    title: 'SOCIAL MEDIA MARKETING',
    description: 'Engaging communities and building your brand online.',
  },
  {
    number: '04',
    title: 'EMAIL MARKETING',
    description: 'Crafting targeted campaigns that convert and retain.',
  },
];

const ServiceCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-8 transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between min-h-[300px]">
      <div className="w-16 h-1 bg-black -rotate-45 ml-auto" />
      <div className="mt-auto">
        <p className="text-sm font-semibold text-gray-600">{number}</p>
        <h3 className="text-2xl font-bold tracking-tight text-black mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesGridSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

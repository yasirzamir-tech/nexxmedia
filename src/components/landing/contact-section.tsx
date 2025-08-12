
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactSection() {
    const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you shortly.",
    })
    form.reset();
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden hidden lg:block">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Contact us"
              fill
              className="object-cover"
              data-ai-hint="person working laptop"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-8">
                <p className="text-lg text-gray-600 mb-2 tracking-wider">Get in Touch</p>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900">
                CONTACT US
                </h2>
                <p className="text-lg text-gray-700 max-w-lg mt-4">
                Have a question or want to schedule a meeting? Reach out using the form below or book a time directly in our calendar.
                </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Inquiry about..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                    Send Message
                  </Button>
                  <Link href="https://calendly.com/nexxmedia-info/30min" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button type="button" size="lg" variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule a Meeting
                    </Button>
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

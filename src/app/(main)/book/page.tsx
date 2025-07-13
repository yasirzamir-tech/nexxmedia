import { BookingForm } from "@/components/booking-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BookOnlinePage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Book a Consultation</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? Schedule a free, no-obligation consultation with our experts to discuss your project and goals.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Consultation Details</CardTitle>
                <CardDescription>Please provide your information and select a preferred time for our meeting.</CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

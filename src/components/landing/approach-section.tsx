import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const approachItems = [
  {
    value: "item-1",
    title: "SEO SERVICES",
    description: "Enhance your online presence and reach with our advanced SEO solutions tailored for growth and visibility.",
  },
  {
    value: "item-2",
    title: "PPC MANAGEMENT",
    description: "Drive instant traffic and conversions through targeted PPC campaigns optimized for maximum results.",
  },
  {
    value: "item-3",
    title: "SOCIAL MEDIA CAMPAIGNS",
    description: "Engage your audience with captivating social media strategies designed to boost brand awareness and drive engagement.",
  },
  {
    value: "item-4",
    title: "CONTENT MARKETING",
    description: "Tell your brand story effectively with expert content marketing that aligns with your audience's preferences and behaviors.",
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {approachItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="bg-gray-50 rounded-2xl p-4 border-none data-[state=open]:bg-gray-100 transition-colors">
              <AccordionTrigger className="hover:no-underline p-4 text-left group">
                <div className="flex items-center gap-8 w-full">
                  <div className="flex-shrink-0 bg-white rounded-xl p-4">
                     <Plus className="h-10 w-10 text-gray-900 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45" />
                  </div>
                  <h3 className="flex-1 text-2xl font-semibold tracking-tight text-gray-900">{item.title}</h3>
                  <p className="flex-1 text-gray-600 text-base font-normal hidden md:block">
                    {item.description}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0">
                <p className="text-gray-600 text-base font-normal md:hidden">
                    {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
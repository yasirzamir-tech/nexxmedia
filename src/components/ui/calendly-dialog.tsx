
"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"

const CalendlyContent = () => {
    const [isCalendlyLoaded, setCalendlyLoaded] = React.useState(false);

    React.useEffect(() => {
        // The iframe will start loading immediately, but we only show it when it's ready.
        // This is to avoid a blank space while it loads.
    }, []);

    return (
      <div className="h-[650px] overflow-hidden relative">
        {!isCalendlyLoaded && (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white space-y-4">
              <Calendar className="w-12 h-12 text-primary animate-tada" />
              <p className="text-lg font-medium text-gray-800">Gear up — growth mode is activating!</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              </div>
          </div>
        )}
        <iframe
            src="https://calendly.com/nexxmedia-info/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            className={cn("absolute inset-0 w-full h-full transition-opacity duration-500", isCalendlyLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setCalendlyLoaded(true)}
        />
      </div>
    );
};

export function CalendlyDialog({ children }: { children: React.ReactNode }) {
  const [shouldLoadCalendly, setShouldLoadCalendly] = React.useState(false);

  // We use onOpenChange to detect when the dialog is about to open.
  // This is a bit of a hack to start loading the iframe just-in-time.
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setShouldLoadCalendly(true);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="p-0 max-w-4xl w-[90vw]">
          <DialogHeader className="sr-only">
             <DialogTitle>Schedule a Meeting</DialogTitle>
          </DialogHeader>
         {shouldLoadCalendly && <CalendlyContent />}
      </DialogContent>
    </Dialog>
  )
}

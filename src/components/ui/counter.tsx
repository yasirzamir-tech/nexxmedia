
'use client';

import { useEffect, useState, useRef } from 'react';

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({ value, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          if (start === end) return;

          const totalFrames = Math.round(duration / (1000 / 60));
          const increment = end / totalFrames;

          const counter = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollHighlightProps {
  text: string;
  className?: string;
  variant?: 'color-sweep' | 'underline' | 'background';
  delay?: number;
  fromColor?: string;
  toColor?: string;
}

export default function ScrollHighlight({ 
  text, 
  className = "", 
  variant = 'color-sweep',
  delay = 0,
  fromColor = '#6b7280',
  toColor = '#1f2937'
}: ScrollHighlightProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [delay, isVisible]);

  if (variant === 'color-sweep') {
    return (
      <span 
        className={`relative inline-block ${className}`}
        ref={containerRef}
        style={{ lineHeight: '1.2' }}
      >
        {/* Base text */}
        <span 
          style={{
            color: fromColor,
            display: 'inline-block',
            position: 'relative',
            zIndex: 1
          }}
        >
          {text}
        </span>

        {/* Sweeping overlay */}
        <span 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            color: toColor,
            display: 'inline-block',
            clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
           transition: 'clip-path 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 2,
            lineHeight: '1.2',
            pointerEvents: 'none'
          }}
        >
          {text}
        </span>
      </span>
    );
  }

  // Fallback for other variants
  return (
    <span 
      className={`relative inline-block ${className}`}
      ref={containerRef}
      style={{ lineHeight: '1.2' }}
    >
      <span 
        style={{
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.6s ease-out',
          color: isVisible ? toColor : fromColor
        }}
      >
        {text}
      </span>
    </span>
  );
}

'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types/product';

type Props = {
  items: Product[];
  autoPlay?: boolean;
  interval?: number; // ms
  className?: string;
};

const ProductCarousel: FC<Props> = ({ items, autoPlay = true, interval = 4000, className = '' }) => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const wrapIndex = (i: number) => {
    const len = items.length;
    return ((i % len) + len) % len;
  };

  useEffect(() => {
    if (!autoPlay || isHovering || items.length <= 1) return;

    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => wrapIndex(prev + 1));
    }, interval);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [index, autoPlay, interval, isHovering, items.length]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => wrapIndex(i - 1));
      if (e.key === 'ArrowRight') setIndex((i) => wrapIndex(i + 1));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [items.length]);

  const prev = () => setIndex((i) => wrapIndex(i - 1));
  const next = () => setIndex((i) => wrapIndex(i + 1));
  const goTo = (i: number) => setIndex(wrapIndex(i));

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchMove={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.touches[0].clientX - touchStartX.current;
        // swipe threshold
        if (Math.abs(dx) > 60) {
          if (dx > 0) prev();
          else next();
          touchStartX.current = null;
        }
      }}
    >
      <div className="relative h-[320px] md:h-[380px]">
        <AnimatePresence initial={false} mode="wait">
          {items.map((item, i) =>
            i === index ? (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 p-6"
              >
                <div className="md:w-1/2 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 md:h-72 object-cover rounded-lg shadow-lg border border-gray-700"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                  />
                </div>

                <div className="md:w-1/2 w-full text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-dlaxmi-500 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-dlaxmi-500' : 'bg-gray-600/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

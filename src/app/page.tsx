import React from 'react';
import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import { Product } from '@/types/product';

const products: Product[] = [
  { title: 'CNC Chicken Cutting Machine', desc: 'Precision automated cutting system designed for efficiency and safety in poultry processing.', img: '/products/cnc-chicken-cutting-machine.svg' },
  { title: 'Smart Automation Controller', desc: 'Industrial controller for adaptive control in manufacturing lines.', img: '/products/automation-controller.svg' },
  { title: 'IoT Monitoring System', desc: 'Cloud-enabled data collection platform for real-time analytics.', img: '/products/iot-monitoring.svg' },
  { title: 'AI-Based Safety Sensor', desc: 'Intelligent sensor system under development for predictive safety.', img: '/products/ai-safety-sensor.svg' }
];

export default function Page() {
  return (
    <div>
      <Hero />
      <section id="innovations" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center text-dlaxmi-500 font-semibold mb-8">Our Featured Innovations</h2>
        <ProductCarousel items={products} autoPlay={true} interval={4000} />
      </section>
    </div>
  );
}

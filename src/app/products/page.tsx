import ProductCard from '@/src/components/ProductCard';
import { Product } from '@/src/types/product';
import React from 'react';
const products: Product[] = [
  { title: 'CNC Chicken Cutting Machine', desc: 'Precision automated cutting system designed for efficiency and safety in poultry processing.', img: '/products/cnc-chicken-cutting-machine.svg' },
  { title: 'Smart Automation Controller', desc: 'Industrial controller for adaptive control in manufacturing lines.', img: '/products/automation-controller.svg' },
  { title: 'IoT Monitoring System', desc: 'Cloud-enabled data collection platform for real-time analytics.', img: '/products/iot-monitoring.svg' },
  { title: 'AI-Based Safety Sensor', desc: 'Intelligent sensor system under development for predictive safety.', img: '/products/ai-safety-sensor.svg' }
];

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-dlaxmi-500 mb-6">Products & Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => <ProductCard key={p.title} product={p} index={i} />)}
      </div>
    </section>
  );
}

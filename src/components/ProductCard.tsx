'use client';
import React, { FC } from 'react';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';

type Props = { product: Product; index?: number };

const ProductCard: FC<Props> = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.15 }}
      className="bg-gray-800/60 rounded-2xl p-5"
    >
      <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4" onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
      <h4 className="text-xl font-semibold text-dlaxmi-500">{product.title}</h4>
      <p className="text-gray-300 mt-2 text-sm">{product.desc}</p>
    </motion.div>
  );
};

export default ProductCard;

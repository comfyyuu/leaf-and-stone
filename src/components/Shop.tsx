'use client';

import { motion } from 'motion/react';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/constants';

interface ShopProps {
  limit?: number;
  onSeeMore?: () => void;
}

export default function Shop({ limit, onSeeMore }: ShopProps) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <section id="shop">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-sage-500 font-sans font-semibold text-xs uppercase tracking-[0.2em] block mb-2">Curated</span>
          <h2 className="text-4xl md:text-5xl">Our Products</h2>
        </div>
        {limit && (
          <button
            onClick={onSeeMore}
            className="flex items-center gap-1 text-sage-600 font-sans font-medium hover:gap-2 transition-all"
          >
            オンラインショップへ <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[32px] aspect-square mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ShoppingCart className="w-5 h-5 text-earth-800" />
              </button>
            </div>
            <div className="px-2">
              <span className="text-[10px] sm:text-xs font-sans text-earth-400 uppercase tracking-widest mb-2 block">
                {product.category}
              </span>
              <h3 className="text-lg sm:text-xl text-earth-800 mb-2">{product.name}</h3>
              <p className="text-xs sm:text-sm text-earth-600 font-sans mb-3 line-clamp-2">
                {product.description}
              </p>
              <span className="text-base sm:text-lg font-sans font-semibold text-sage-600">
                ¥{product.price.toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';
import { MenuItem } from '@/types';

interface MenuProps {
  limit?: number;
  onSeeMore?: () => void;
  onItemClick?: (item: MenuItem) => void;
}

export default function Menu({ limit, onSeeMore, onItemClick }: MenuProps) {
  const items = limit ? MENU_ITEMS.slice(0, limit) : MENU_ITEMS;

  return (
    <section id="menu">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-sage-500 font-sans font-semibold text-xs uppercase tracking-[0.2em] block mb-2">Treatments</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Salon Menu</h2>
        </div>
        {limit && (
          <button
            onClick={onSeeMore}
            className="flex items-center gap-1 text-sage-600 font-sans font-medium hover:gap-2 transition-all text-sm sm:text-base"
          >
            すべて見る <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="soft-card p-6 md:p-8 group hover:border-sage-300 transition-colors flex flex-col h-full"
          >
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-earth-800 mb-3 leading-tight break-keep">
                {item.name.split('・').map((part, i, arr) => (
                  <span key={i} className="inline-block">
                    {part}{i < arr.length - 1 ? '・' : ''}
                  </span>
                ))}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-semibold text-sage-600">
                ¥{item.price.toLocaleString()}
                <span className="text-[10px] sm:text-xs font-normal text-earth-400 ml-2">(税込)</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-earth-600 font-sans mb-6 md:mb-8 leading-relaxed flex-grow whitespace-pre-wrap">
              {item.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-earth-100">
              <div className="flex items-center gap-4 text-earth-400 font-sans text-sm">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration} min</span>
                </div>
                <span className="bg-sage-50 text-sage-600 px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>

              <button
                onClick={() => onItemClick?.(item)}
                className="flex items-center gap-1 text-sage-700 font-sans font-semibold text-sm hover:gap-2 transition-all group/btn"
              >
                詳細はこちら
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

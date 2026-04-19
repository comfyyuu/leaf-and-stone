'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Natural clay powders"
          className="w-full h-full object-cover opaity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-earth-900 mb-6 leading-[1.2] md:leading-[1.1]">
            <span className="inline-block">Nature&apos;s</span> <br className="hidden sm:block" />
            <span className="italic font-light text-sage-600 inline-block">Gentle Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-earth-700 font-sans font-light mb-10 leading-relaxed max-w-lg">
            <span className="inline-block">大地の恵みと植物の力。</span><br />
            <span className="inline-block">心と身体を本来の健やかさへと導く、</span><br />
            <span className="inline-block">ナチュラル素材にこだわった</span>
            <span className="inline-block">エステティックサロン。</span>
          </p>
          <button
            onClick={onCtaClick}
            className="group flex items-center gap-3 bg-sage-600 text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-sage-700 shadow-lg shadow-sage-200 transition-all"
          >
            メニューを見る
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-sage-200/30 rounded-full blur-3xl z-0"
      />
    </section>
  );
}

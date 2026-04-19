'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { MenuItem } from '@/types';

interface MenuDetailProps {
  item: MenuItem;
  onBack: () => void;
}

export default function MenuDetail({ item, onBack }: MenuDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sage-600 font-sans mb-12 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> メニュー一覧に戻る
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <span className="text-sage-500 font-sans font-semibold text-xs uppercase tracking-[0.2em] block mb-4">
            {item.category} Treatment
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight break-keep">
            {item.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-sans font-semibold text-sage-600 mb-8">
            ¥{item.price.toLocaleString()} <span className="text-sm font-normal text-earth-400">(税込)</span>
          </p>

          <div className="flex items-center gap-3 text-earth-500 font-sans mb-8 md:mb-12 bg-white px-5 py-3 md:px-6 md:py-4 rounded-2xl inline-flex shadow-sm border border-earth-100">
            <Clock className="w-5 h-5 text-sage-500" />
            <span className="text-base md:text-lg font-medium">施術時間: {item.duration} 分</span>
          </div>

          <div className="space-y-8 text-earth-700 font-sans leading-relaxed text-base md:text-lg whitespace-pre-wrap">
            <p>{item.description}</p>

            {item.details?.features && (
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-sage-700">このコースの特徴</h3>
                <ul className="space-y-2">
                  {item.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-12">
          {item.details?.steps && (
            <div className="soft-card p-8 bg-sage-50/50 border-none">
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-sage-500" />
                施術の流れ
              </h3>
              <ul className="space-y-6">
                {item.details.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-sage-600 flex-shrink-0 shadow-sm">
                      {i + 1}
                    </span>
                    <span className="text-earth-700 font-sans">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-8 rounded-[32px] border-2 border-dashed border-earth-200 flex flex-col items-center text-center">
            <Calendar className="w-10 h-10 text-sage-400 mb-4" />
            <h4 className="text-xl mb-2">ご予約はこちら</h4>
            <p className="text-earth-500 font-sans text-sm mb-6">
              完全予約制となっております。<br />お電話または公式LINEより承ります。
            </p>
            <button className="w-full bg-sage-600 text-white py-4 rounded-full font-sans font-semibold hover:bg-sage-700 transition-colors">
              予約サイトへ移動する
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

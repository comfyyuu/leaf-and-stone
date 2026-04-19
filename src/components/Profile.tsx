'use client';

import { motion } from 'motion/react';
import { Instagram, MapPin, Award } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[60px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=800"
              alt="Therapist profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating element */}
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[32px] shadow-xl max-w-[240px] hidden md:block">
            <p className="font-serif italic text-sage-600 text-lg mb-2">&ldquo;自然の力で、本来の美しさを。&rdquo;</p>
            <p className="font-sans text-xs text-earth-400 uppercase tracking-widest">Owner Therapist</p>
          </div>
        </motion.div>

        <div>
          <span className="text-sage-500 font-sans font-semibold text-xs uppercase tracking-[0.2em] block mb-2">About Us</span>
          <h2 className="text-4xl md:text-5xl mb-8">Profile</h2>

          <div className="space-y-8 text-earth-700 font-sans leading-relaxed">
            <p>
              Leaf & Stone のオーナーセラピスト、佐藤美咲です。
              10年以上のキャリアの中で、何千人ものお客様の肌と向き合ってきました。
            </p>
            <p>
              私たちが大切にしているのは、一時的な美しさではなく、
              「肌本来の力」を呼び覚ますこと。
              化学物質を極力排除し、厳選されたオーガニック素材のみを使用することで、
              身体に優しく、かつ確かな変化を実感していただける施術を追求しています。
            </p>

            <div className="pt-8 space-y-4 border-t border-earth-200">
              <div className="flex items-center gap-4">
                <Award className="w-5 h-5 text-sage-500" />
                <span>国際オーガニックセラピスト協会 認定</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-sage-500" />
                <span>東京都渋谷区神宮前（完全予約制プライベートサロン）</span>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-sage-500" />
                <a href="#" className="hover:text-sage-600 transition-colors">@leaf_and_stone</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

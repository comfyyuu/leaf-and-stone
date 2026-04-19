import { Leaf, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-200/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-serif font-semibold text-sage-700 mb-6">
              <Leaf className="w-8 h-8" />
              <span>Leaf & Stone</span>
            </div>
            <p className="text-earth-600 font-sans leading-relaxed max-w-md">
              私たちは、自然との調和を大切にしています。
              厳選されたオーガニック素材と、確かな技術で、
              あなただけの特別な時間を提供します。
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-earth-600 font-sans">
              <li>東京都渋谷区神宮前 0-0-0</li>
              <li>03-0000-0000</li>
              <li>info@leafandstone.jp</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-earth-700 hover:bg-sage-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-earth-700 hover:bg-sage-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-earth-700 hover:bg-sage-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-300 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-500 font-sans">
          <p>© 2026 Leaf & Stone. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sage-600">Privacy Policy</a>
            <a href="#" className="hover:text-sage-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

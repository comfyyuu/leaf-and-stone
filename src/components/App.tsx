'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, ShoppingBag, BookOpen, User, Home, Leaf } from 'lucide-react';
import Hero from './Hero';
import Menu from './Menu';
import MenuDetail from './MenuDetail';
import Shop from './Shop';
import Note from './Note';
import Profile from './Profile';
import Footer from './Footer';
import { NoteArticle, MenuItem } from '@/types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedNote, setSelectedNote] = useState<NoteArticle | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Leaf },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'note', label: 'Note', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setSelectedNote(null);
    setSelectedMenuItem(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-2xl font-serif font-semibold text-sage-700 hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-8 h-8" />
            <span className="tracking-tighter">Leaf & Stone</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest font-sans font-medium transition-colors hover:text-sage-600 ${
                  activeSection === item.id ? 'text-sage-700 border-b border-sage-700' : 'text-earth-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-earth-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-earth-100 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-4 text-2xl font-serif text-earth-800"
                >
                  <item.icon className="w-6 h-6 text-sage-500" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onCtaClick={() => handleNavClick('menu')} />
              <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
                <Menu
                  limit={3}
                  onSeeMore={() => handleNavClick('menu')}
                  onItemClick={(item) => {
                    setSelectedMenuItem(item);
                    setActiveSection('menu');
                  }}
                />
                <Shop limit={3} onSeeMore={() => handleNavClick('shop')} />
                <Note limit={2} onSeeMore={() => handleNavClick('note')} onNoteClick={(note) => {
                  setSelectedNote(note);
                  setActiveSection('note');
                }} />
              </div>
            </motion.div>
          )}

          {activeSection === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              {selectedMenuItem ? (
                <MenuDetail
                  item={selectedMenuItem}
                  onBack={() => setSelectedMenuItem(null)}
                />
              ) : (
                <Menu onItemClick={setSelectedMenuItem} />
              )}
            </motion.div>
          )}

          {activeSection === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <Shop />
            </motion.div>
          )}

          {activeSection === 'note' && (
            <motion.div
              key="note"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <Note
                selectedNote={selectedNote}
                onNoteClick={setSelectedNote}
                onBack={() => setSelectedNote(null)}
              />
            </motion.div>
          )}

          {activeSection === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <Profile />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

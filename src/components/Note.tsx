'use client';

import { motion } from 'motion/react';
import { Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { NOTES } from '@/constants';
import { NoteArticle } from '@/types';

interface NoteProps {
  limit?: number;
  onSeeMore?: () => void;
  selectedNote?: NoteArticle | null;
  onNoteClick?: (note: NoteArticle) => void;
  onBack?: () => void;
}

export default function Note({ limit, onSeeMore, selectedNote, onNoteClick, onBack }: NoteProps) {
  const items = limit ? NOTES.slice(0, limit) : NOTES;

  if (selectedNote) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sage-600 font-sans mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> 一覧に戻る
        </button>

        <img
          src={selectedNote.image}
          alt={selectedNote.title}
          className="w-full h-[400px] object-cover rounded-[40px] mb-12"
          referrerPolicy="no-referrer"
        />

        <div className="flex items-center gap-4 text-earth-400 font-sans text-sm mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {selectedNote.date}
          </span>
          <span>By {selectedNote.author}</span>
        </div>

        <h1 className="text-4xl md:text-5xl mb-12 leading-tight">
          {selectedNote.title}
        </h1>

        <div className="prose prose-earth max-w-none font-sans leading-relaxed text-earth-700">
          <Markdown>{selectedNote.content}</Markdown>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="note">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-sage-500 font-sans font-semibold text-xs uppercase tracking-[0.2em] block mb-2">Journal</span>
          <h2 className="text-4xl md:text-5xl">Note & Stories</h2>
        </div>
        {limit && (
          <button
            onClick={onSeeMore}
            className="flex items-center gap-1 text-sage-600 font-sans font-medium hover:gap-2 transition-all"
          >
            すべての記事を見る <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((note, index) => (
          <motion.article
            key={note.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 cursor-pointer group"
            onClick={() => onNoteClick?.(note)}
          >
            <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-[32px]">
              <img
                src={note.image}
                alt={note.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-earth-400 font-sans text-xs mb-3">
                <Calendar className="w-3 h-3" /> {note.date}
              </div>
              <h3 className="text-xl sm:text-2xl text-earth-800 mb-4 group-hover:text-sage-600 transition-colors">
                {note.title}
              </h3>
              <p className="text-xs sm:text-sm text-earth-600 font-sans line-clamp-3 leading-relaxed mb-4">
                {note.excerpt}
              </p>
              <span className="text-sage-600 font-sans text-sm font-medium flex items-center gap-1">
                Read More <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

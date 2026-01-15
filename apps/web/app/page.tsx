"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Mic, Book as BookIcon } from 'lucide-react';
import { analyzeVibe } from './vibe-logic';
import { fetchBooksByVibe } from './book-service';

export default function VerityHome() {
  const [search, setSearch] = useState("");
  const [vibe, setVibe] = useState({ label: "Neutral", color: "rgba(88, 28, 135, 0.2)", glow: "" });
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search.length > 5) {
        setLoading(true);
        const result = analyzeVibe(search);
        setVibe(result);
        const bookResults = await fetchBooksByVibe(result.label);
        setBooks(bookResults);
        setLoading(false);
      }
    }, 800); // Wait for user to stop typing
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-x-hidden transition-colors duration-1000">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
         <motion.div 
          animate={{ backgroundColor: vibe.color }}
          className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full blur-[150px] opacity-40 transition-colors duration-1000"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20">
        <header className="text-center mb-16">
          <h1 className="text-8xl font-bold tracking-tighter mb-4 italic">Verity</h1>
          <p className="text-gray-400 tracking-[0.5em] uppercase text-xs">The Future of Sentiment Reading</p>
        </header>

        {/* Search Experience */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className={`liquid-glass rounded-full p-2 flex items-center px-8 transition-all duration-700 ${vibe.glow}`}>
            <Search className="text-gray-500 mr-4" />
            <input 
              onChange={(e) => setSearch(e.target.value)}
              placeholder="I want to feel..." 
              className="bg-transparent border-none outline-none w-full text-xl py-4 placeholder:text-gray-700"
            />
            <Mic className="text-gray-500 ml-4 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* The Bookshelf */}
        <AnimatePresence>
          {books.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {books.map((book, i) => (
                <motion.div 
                  key={book.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[2/3] bg-gray-900 rounded-2xl overflow-hidden mb-3 border border-white/10 shadow-2xl relative">
                    {book.cover ? (
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"><BookIcon className="text-gray-800" /></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <button className="bg-white text-black rounded-full py-2 text-xs font-bold uppercase tracking-widest">Read Now</button>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm truncate">{book.title}</h3>
                  <p className="text-gray-500 text-xs truncate">{book.author}</p>
                </motion.div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
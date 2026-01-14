"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, BookOpen, Ghost, Sun } from 'lucide-react';

export default function VerityHome() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center text-white overflow-hidden p-6">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Verity
          </h1>
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-[0.4em]">Read the Vibe</p>
        </motion.div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex items-center px-6 mb-16 shadow-2xl">
          <Search className="text-gray-500 mr-3" size={20} />
          <input 
            type="text" 
            placeholder="How do you want to feel?" 
            className="bg-transparent border-none outline-none w-full text-lg py-3 text-white placeholder:text-gray-600"
          />
          <Sparkles className="text-purple-400 ml-3 cursor-pointer hover:scale-110 transition-transform" size={20} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <VibeCard icon={<Sun size={32} className="text-yellow-400" />} label="Hopeful" desc="Stories that feel like a sunrise." />
          <VibeCard icon={<Ghost size={32} className="text-indigo-400" />} label="Fearful" desc="Embrace the darkness." />
          <VibeCard icon={<BookOpen size={32} className="text-emerald-400" />} label="Mysterious" desc="For the seeking heart." />
        </div>
      </div>
    </main>
  );
}

function VibeCard({ icon, label, desc }: { icon: any, label: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)" }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[32px] cursor-pointer transition-colors"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
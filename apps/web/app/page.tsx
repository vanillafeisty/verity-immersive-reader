"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, BookOpen, Ghost, Sun } from 'lucide-react';

export default function VerityHome() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8 flex flex-col items-center justify-center text-white font-sans">
      
      {/* Mesh Gradient Background Effect */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Verity
        </h1>
        <p className="text-gray-400 text-lg uppercase tracking-[0.2em]">Where stories come alive</p>
      </motion.div>

      {/* Search Bar (Liquid Glass) */}
      <div className="relative z-10 w-full max-w-2xl p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12">
        <div className="bg-black/40 backdrop-blur-xl w-full p-2 rounded-full flex items-center px-6 border border-white/10">
          <Search className="text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="How do you want to feel?" 
            className="bg-transparent border-none outline-none w-full text-lg py-3 text-white placeholder:text-gray-600"
          />
          <Sparkles className="text-purple-400 ml-3 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Vibe Selection Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <VibeCard 
          icon={<Sun className="text-yellow-400" />} 
          label="Hopeful" 
          description="Stories that feel like a sunrise." 
        />
        <VibeCard 
          icon={<Ghost className="text-indigo-400" />} 
          label="Fearful" 
          description="Embrace the darkness and the unknown." 
        />
        <VibeCard 
          icon={<BookOpen className="text-emerald-400" />} 
          label="Mysterious" 
          description="For the curious mind and seeking heart." 
        />
      </div>
    </main>
  );
}

function VibeCard({ icon, label, description }: { icon: any, label: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] cursor-pointer border border-white/10 hover:bg-white/10 transition-all"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
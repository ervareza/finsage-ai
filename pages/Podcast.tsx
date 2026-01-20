import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Play, Mic, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const Podcast: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
       <div className="text-center mb-16">
           <ScrollReveal>
               <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl rotate-3">
                   <Mic size={32} />
               </div>
               <h1 className="text-5xl font-bold mb-4">The FinSage Daily</h1>
               <p className="text-xl text-gray-500">Market insights, AI trends, and trader psychology. Every morning.</p>
           </ScrollReveal>
       </div>

       <div className="space-y-6">
           {[1, 2, 3, 4].map((ep, i) => (
               <ScrollReveal key={ep} delay={i * 0.1} width="100%">
                   <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center gap-6 group"
                    >
                       <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shrink-0 cursor-pointer group-hover:bg-blue-600 transition-colors">
                           <Play size={24} className="ml-1" />
                       </div>
                       <div className="flex-grow">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Episode {142 - i} • 24 min</span>
                           <h3 className="text-lg font-bold mb-1">AI vs Hedge Funds: Who Wins?</h3>
                           <p className="text-gray-500 text-sm line-clamp-1">In this episode we discuss the rise of retail algorithmic trading and how institutional desks are reacting.</p>
                       </div>
                       <div className="hidden sm:flex items-center gap-2 text-gray-400 text-xs font-medium">
                           <Headphones size={14} />
                           <span>12k plays</span>
                       </div>
                   </motion.div>
               </ScrollReveal>
           ))}
       </div>
    </div>
  );
};

export default Podcast;
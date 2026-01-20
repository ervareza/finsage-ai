import React, { useState } from 'react';
import { ArrowRight, Search, Loader2 } from 'lucide-react';
import { askFinancialAI } from '../services/geminiService';
import { parse } from 'marked';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseHtml, setResponseHtml] = useState<string | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponseHtml(null);
    
    const resultText = await askFinancialAI(query);
    
    try {
      const parsedHtml = parse(resultText);
      setResponseHtml(await Promise.resolve(parsedHtml));
    } catch (err) {
      setResponseHtml(resultText); 
    }
    
    setLoading(false);
  };

  return (
    <section className="relative -mt-20 pt-44 pb-32 overflow-hidden">
      {/* Background Gradients - Animated */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px] opacity-60"
        />
        <motion.div 
           animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-50" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-pink-100 rounded-full blur-[80px] opacity-40" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Abstract Logo */}
        <motion.div 
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
           <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
              cx="50" cy="50" r="48" stroke="black" strokeWidth="1" 
            />
            <ellipse cx="50" cy="50" rx="48" ry="20" stroke="black" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="20" ry="48" stroke="black" strokeWidth="1" />
            <path d="M15 15 L85 85" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
          </svg>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-4 text-sm font-medium tracking-wide"
        >
          On-demand AI insights for stocks, ETFs, crypto, and forex.
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-black tracking-tight leading-[0.9] mb-12 max-w-5xl"
        >
          Data-Powered <br /> Investment Strategies.
        </motion.h1>

        {/* Search / AI Input */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full max-w-2xl relative z-10"
        >
          <form onSubmit={handleAskAI} className="relative group">
            <input
              type="text"
              placeholder="Type a ticker (e.g., TSLA) or question..."
              className="w-full p-5 pr-36 rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-lg placeholder-gray-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : 'Ask AI'}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          {/* AI Response Card */}
          {responseHtml && (
            <motion.div 
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              className="mt-4 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-2xl text-left overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-bold uppercase text-gray-500">FinSage Analysis</span>
              </div>
              <div 
                className="prose prose-sm text-gray-800"
                dangerouslySetInnerHTML={{ __html: responseHtml }} 
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
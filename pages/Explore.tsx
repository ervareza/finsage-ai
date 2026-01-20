import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Search, TrendingUp, Globe, Cpu, DollarSign, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Explore: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal>
             <h1 className="text-5xl font-bold mb-6">Explore Markets</h1>
             <div className="relative">
                 <input type="text" placeholder="Search for stocks, crypto, ETFs..." className="w-full p-4 pl-12 bg-gray-100 rounded-full border-2 border-transparent focus:bg-white focus:border-black focus:outline-none transition-all" />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
        </ScrollReveal>
      </div>

      {/* Categories */}
      <ScrollReveal width="100%" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
              {[
                  { icon: TrendingUp, label: 'Trending' },
                  { icon: Cpu, label: 'Tech' },
                  { icon: Globe, label: 'Global' },
                  { icon: DollarSign, label: 'Forex' },
                  { icon: Layers, label: 'Indices' }
              ].map((cat, i) => (
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    key={i} 
                    className="p-6 bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-600 transition-colors"
                  >
                      <cat.icon size={24} />
                      <span className="font-medium">{cat.label}</span>
                  </motion.button>
              ))}
          </div>
      </ScrollReveal>

      {/* Trending Section */}
      <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal width="100%">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Trending Now</h2>
              <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                              <span className="text-gray-400 font-mono text-sm">0{i}</span>
                              <div>
                                  <div className="font-bold">AI_CORP_{i}</div>
                                  <div className="text-xs text-gray-500">Artificial Intelligence</div>
                              </div>
                          </div>
                          <div className="text-green-600 font-bold">+{(Math.random()*10 + 2).toFixed(2)}%</div>
                      </div>
                  ))}
              </div>
          </ScrollReveal>

           <ScrollReveal width="100%" delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">New Listings</h2>
              <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">N</div>
                              <div>
                                  <div className="font-bold">IPO_TICK_{i}</div>
                                  <div className="text-xs text-gray-500">Just added</div>
                              </div>
                          </div>
                          <div className="text-gray-900 font-bold">$12.{i}0</div>
                      </div>
                  ))}
              </div>
          </ScrollReveal>
      </div>
    </div>
  );
};

export default Explore;
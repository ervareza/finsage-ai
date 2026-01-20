import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { PlayCircle, BookOpen, FileText } from 'lucide-react';

const Academy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">FinSage Academy</h1>
        <p className="text-gray-500 mb-12 max-w-2xl">Master the market with our library of tutorials, courses, and guides.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Categories */}
         <div className="col-span-full flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
             {['All', 'Basics', 'Technical Analysis', 'AI Tools', 'Crypto', 'Strategies'].map((cat, i) => (
                 <button key={cat} className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium ${i===0 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>{cat}</button>
             ))}
         </div>

         {[1, 2, 3, 4, 5, 6].map((item) => (
             <ScrollReveal key={item} delay={item * 0.05}>
                 <div className="group cursor-pointer">
                     <div className="aspect-video bg-gray-200 rounded-2xl mb-4 relative overflow-hidden">
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                             <PlayCircle className="ml-1" size={24}/>
                         </div>
                     </div>
                     <div className="flex gap-2 items-center text-xs text-blue-600 font-bold uppercase mb-2">
                         <BookOpen size={12}/>
                         <span>Tutorial</span>
                     </div>
                     <h3 className="font-bold text-lg leading-tight mb-2 group-hover:underline">How to use AI Signals for Day Trading</h3>
                     <p className="text-sm text-gray-500">Learn the basics of interpreting confidence scores and stop-loss levels.</p>
                 </div>
             </ScrollReveal>
         ))}
      </div>
    </div>
  );
};

export default Academy;
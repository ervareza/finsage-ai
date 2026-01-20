import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const MarketLens: React.FC = () => {
  const sectors = [
    { name: 'Technology', val: 85, color: 'bg-blue-500' },
    { name: 'Energy', val: 45, color: 'bg-yellow-500' },
    { name: 'Healthcare', val: 60, color: 'bg-green-500' },
    { name: 'Finance', val: 70, color: 'bg-purple-500' },
    { name: 'Consumer', val: 55, color: 'bg-pink-500' },
    { name: 'Real Estate', val: 30, color: 'bg-red-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">Market Lens</h1>
        <p className="text-gray-500 mb-12 max-w-2xl">Deep dive into sector performance and macro-economic indicators.</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-16 mb-24">
         {/* Sector Heatmap-ish Visualization */}
         <div>
             <ScrollReveal>
                 <h2 className="text-xl font-bold mb-8">Sector Performance (24h)</h2>
             </ScrollReveal>
             <div className="space-y-6">
                 {sectors.map((s, i) => (
                     <ScrollReveal key={s.name} delay={i * 0.1} width="100%">
                         <div className="flex items-center gap-4 mb-2">
                             <span className="w-24 font-medium text-sm">{s.name}</span>
                             <div className="flex-grow h-3 bg-gray-100 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.val}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full ${s.color}`}
                                 />
                             </div>
                             <span className="w-12 text-right text-xs font-bold">+{s.val / 10}%</span>
                         </div>
                     </ScrollReveal>
                 ))}
             </div>
         </div>

         {/* Macro Indicators */}
         <div>
             <ScrollReveal>
                <h2 className="text-xl font-bold mb-8">Macro Indicators</h2>
             </ScrollReveal>
             <div className="grid grid-cols-2 gap-4">
                 {[
                     { label: 'Inflation (CPI)', val: '3.2%', trend: 'down' },
                     { label: 'Interest Rate', val: '5.50%', trend: 'neutral' },
                     { label: 'GDP Growth', val: '2.1%', trend: 'up' },
                     { label: 'Unemployment', val: '3.9%', trend: 'up' }
                 ].map((m, i) => (
                     <ScrollReveal key={m.label} delay={i * 0.1}>
                         <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                             <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{m.label}</p>
                             <div className="text-3xl font-bold mb-2">{m.val}</div>
                             <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${m.trend === 'up' ? 'bg-green-100 text-green-700' : m.trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-200 text-gray-700'}`}>
                                 {m.trend === 'up' ? 'Rising' : m.trend === 'down' ? 'Falling' : 'Stable'}
                             </div>
                         </div>
                     </ScrollReveal>
                 ))}
             </div>
         </div>
      </div>
    </div>
  );
};

export default MarketLens;
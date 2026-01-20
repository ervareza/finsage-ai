import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const MarketMovers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Market Movers</h1>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-6 text-green-600">Top Gainers</h2>
          {[1,2,3,4,5].map(i => (
             <div key={i} className="flex justify-between py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">{i}</div>
                   <div>
                       <div className="font-bold">GNR{i}</div>
                       <div className="text-xs text-gray-500">Tech Sector</div>
                   </div>
                </div>
                <div className="text-green-600 font-mono">+{(Math.random() * 15).toFixed(2)}%</div>
             </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6 text-red-600">Top Losers</h2>
          {[1,2,3,4,5].map(i => (
             <div key={i} className="flex justify-between py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">{i}</div>
                   <div>
                       <div className="font-bold">LSR{i}</div>
                       <div className="text-xs text-gray-500">Energy Sector</div>
                   </div>
                </div>
                <div className="text-red-600 font-mono">-{(Math.random() * 10).toFixed(2)}%</div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketMovers;
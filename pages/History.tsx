import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Clock, Search, MessageSquare, Eye } from 'lucide-react';

const History: React.FC = () => {
  const history = [
    { date: 'Today, 10:23 AM', action: 'Viewed Signal', detail: 'NVIDIA Corp (NVDA)', icon: Eye },
    { date: 'Today, 09:15 AM', action: 'Chat with InvestGPT', detail: 'Analyzed Q3 Earnings for TSLA', icon: MessageSquare },
    { date: 'Yesterday', action: 'Search', detail: 'Top rated semiconductor ETFs', icon: Search },
    { date: 'Yesterday', action: 'Viewed Alert', detail: 'Bitcoin breakout > 70k', icon: Clock },
    { date: 'Oct 24', action: 'Saved to Watchlist', detail: 'AMD, INTC, SOXL', icon: Eye },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Activity History</h1>
      </ScrollReveal>

      <div className="relative border-l border-gray-200 ml-4 space-y-12 pb-12">
        {history.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction="left" width="100%">
            <div className="relative pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-gray-300 rounded-full border border-white group-hover:bg-black group-hover:scale-125 transition-all"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-4 rounded-xl transition-all hover:shadow-lg">
                <div className="p-3 bg-white rounded-lg shadow-sm text-gray-600">
                    <item.icon size={20} />
                </div>
                <div>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.date}</span>
                    <h3 className="font-bold text-gray-900">{item.action}</h3>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      <ScrollReveal>
          <div className="text-center">
              <button className="text-gray-400 text-sm hover:text-black transition-colors">Load older activity...</button>
          </div>
      </ScrollReveal>
    </div>
  );
};

export default History;
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TickerItem } from '../types';

const tickers: TickerItem[] = [
  { symbol: 'Alphabet', change: 0.85 },
  { symbol: 'Amazon', change: 2.05 },
  { symbol: 'Meta', change: 1.67 },
  { symbol: 'Vanguard', change: 0.90 },
  { symbol: 'Apple', change: 0.78 },
  { symbol: 'Nvidia', change: 2.34 },
  { symbol: 'Tesla', change: 1.12 },
  { symbol: 'Bitcoin', change: 3.45 },
  { symbol: 'Ethereum', change: 2.10 },
  { symbol: 'Microsoft', change: 1.45 },
  { symbol: 'Netflix', change: 0.65 },
];

const Ticker: React.FC = () => {
  // We duplicate the list to ensure the ticker is long enough to loop smoothly
  const tickerContent = (
    <>
      {tickers.map((item, idx) => (
        <span key={`${item.symbol}-${idx}`} className="mx-6 text-xs font-medium uppercase tracking-wider inline-flex items-center">
          <span className="underline decoration-gray-600 underline-offset-4 mr-2">{item.symbol}</span>
          <ArrowUpRight size={12} className="text-green-400 mr-1" />
          <span className="text-green-400">+{item.change}%</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden border-b border-gray-800 z-50 relative flex">
      {/* Two identical sets of content moving left. When set 1 moves out, set 2 replaces it perfectly. */}
      <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center">
        {tickerContent}
      </div>
      <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center">
        {tickerContent}
      </div>
    </div>
  );
};

export default Ticker;
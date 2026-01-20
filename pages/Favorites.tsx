import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';

const Favorites: React.FC = () => {
  const favorites = [
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: '887.00', change: '+2.4%', up: true },
    { symbol: 'TSLA', name: 'Tesla Inc', price: '178.23', change: '-1.2%', up: false },
    { symbol: 'AAPL', name: 'Apple Inc', price: '169.50', change: '+0.5%', up: true },
    { symbol: 'BTC', name: 'Bitcoin', price: '69,420.00', change: '+1.1%', up: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-2">Favorites</h1>
        <p className="text-gray-500 mb-12">Track your most important assets in real-time.</p>
      </ScrollReveal>

      <div className="grid gap-4">
        {favorites.map((stock, i) => (
          <ScrollReveal key={stock.symbol} delay={i * 0.1} width="100%">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-black transition-colors group">
              <div className="flex items-center gap-4">
                <button className="text-yellow-400"><Star fill="currentColor" /></button>
                <div>
                  <h3 className="font-bold text-xl">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-bold text-lg">${stock.price}</div>
                <div className={`flex items-center justify-end text-sm ${stock.up ? 'text-green-600' : 'text-red-500'}`}>
                  {stock.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stock.change}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
        <div className="text-center mt-8">
            <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium">Add New Asset</button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
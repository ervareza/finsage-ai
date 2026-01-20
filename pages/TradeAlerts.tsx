import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Bell, ArrowUpRight, ArrowDownRight, Zap, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const TradeAlerts: React.FC = () => {
  const alerts = [
    { time: '2m ago', symbol: 'NVDA', type: 'bullish', message: 'Breakout above $900 resistance detected.', impact: 'High' },
    { time: '15m ago', symbol: 'BTC', type: 'bearish', message: 'Volume divergence on 1H chart.', impact: 'Medium' },
    { time: '1h ago', symbol: 'EUR/USD', type: 'neutral', message: 'Approaching key support level at 1.0850.', impact: 'Low' },
    { time: '2h ago', symbol: 'TSLA', type: 'bullish', message: 'Golden Cross formation verified.', impact: 'High' },
    { time: '4h ago', symbol: 'AAPL', type: 'bearish', message: 'Insider selling reported.', impact: 'Medium' },
    { time: '5h ago', symbol: 'GOLD', type: 'bullish', message: 'Safe haven inflow increase.', impact: 'Medium' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-100 text-red-600 rounded-full">
            <Bell size={24} />
          </div>
          <h1 className="text-4xl font-bold">Trade Alerts</h1>
        </div>
        <p className="text-gray-500 mb-8 text-lg">Real-time market intelligence and anomaly detection.</p>
        
        {/* Filters */}
        <div className="flex gap-2 mb-12 overflow-x-auto hide-scrollbar pb-2">
            {['All Alerts', 'High Impact', 'Crypto', 'Stocks', 'Forex'].map((f, i) => (
                <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>
                    {f}
                </button>
            ))}
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-500 hover:border-black transition-all flex items-center gap-2">
                <Filter size={14} /> Filter
            </button>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <ScrollReveal key={i} delay={i * 0.1} width="100%">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 md:items-center"
            >
                <div className="flex items-center gap-4 min-w-[150px]">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${alert.type === 'bullish' ? 'bg-green-100 text-green-600' : alert.type === 'bearish' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                        {alert.type === 'bullish' ? <ArrowUpRight /> : alert.type === 'bearish' ? <ArrowDownRight /> : <Zap />}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">{alert.symbol}</h3>
                        <span className="text-xs text-gray-400">{alert.time}</span>
                    </div>
                </div>
                
                <div className="flex-grow">
                    <p className="font-medium text-gray-800">{alert.message}</p>
                </div>

                <div className="flex items-center gap-2 min-w-[100px] justify-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        alert.impact === 'High' ? 'bg-red-50 text-red-600 border border-red-100' : 
                        alert.impact === 'Medium' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 
                        'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                        {alert.impact} Impact
                    </span>
                </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default TradeAlerts;
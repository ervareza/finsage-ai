import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Sparkles, ArrowRight } from 'lucide-react';

const AIPicks: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-4">
             <Sparkles className="text-blue-500" />
             <span className="text-sm font-bold uppercase tracking-wider text-blue-500">Premium Feature</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">AI Stock Picks</h1>
        <p className="text-gray-500 mb-12 max-w-2xl">High-conviction setups identified by our multi-agent system analyzing technical, fundamental, and sentiment data.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <ScrollReveal key={item} delay={item * 0.1}>
            <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-1 rounded-bl-xl font-bold">STRONG BUY</div>
                <div className="mb-6">
                    <h3 className="text-2xl font-bold">AMD</h3>
                    <p className="text-sm text-gray-500">Advanced Micro Devices</p>
                </div>
                
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Confidence</span>
                        <span className="font-bold text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 w-[92%] h-full"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Target</span>
                        <span className="font-bold">$210.00</span>
                    </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Horizon</span>
                        <span className="font-bold">2-4 Weeks</span>
                    </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    Breakout detected above 50-day MA with surging volume. Sentiment analysis shows +15% increase in retail interest.
                </p>

                <button className="w-full py-3 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                    View Full Report <ArrowRight size={14} />
                </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default AIPicks;
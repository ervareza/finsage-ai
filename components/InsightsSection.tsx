import React, { useState } from 'react';
import { Activity, BarChart2, Zap, TrendingUp, ArrowRight as ArrowIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Signals');

  return (
    <section className="bg-gray-50/50 py-24 px-6 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <ScrollReveal>
             <span className="text-xs font-bold uppercase tracking-wider mb-2 block">• Insights</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                24/7 AI-Driven Market<br />Insights Team.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-500 max-w-xl mx-auto">
                Institutional agents analyzing stocks, crypto, forex, and ETFs for insights.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} width="100%">
            <div className="flex flex-wrap justify-center gap-2 mt-8">
                {['Signals', 'Charts', 'Valuation', 'Sentiment', 'Opportunities'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Signals
                </span>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
                <h3 className="text-4xl font-bold tracking-tight leading-tight">
                Real-Time Trade <br />
                Signals for Smarter <br />
                Investment Decisions.
                </h3>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
                <p className="text-gray-500 text-lg leading-relaxed">
                Receive immediate buy/sell recommendations powered by live market data and AI-driven algorithms.
                </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3}>
                <button className="flex items-center gap-2 font-semibold hover:gap-3 transition-all group">
                Execute <ArrowIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
                <div className="pt-8">
                    <p className="text-xs text-gray-500 mb-3">Integrations</p>
                    <div className="flex gap-2">
                        {['API', 'Dashboard', 'Excel', 'Mobile'].map(t => (
                            <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:border-black transition-colors cursor-default">{t}</span>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
          </div>

          {/* Right Card Visualization */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-gray-100 p-8 rounded-3xl relative overflow-hidden">
                {/* Abstract Flow */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "16rem" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-0.5 bg-gray-300"
                ></motion.div>
                
                <div className="space-y-6 relative z-10">
                    {/* Card 1 */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start ml-6 relative hover:scale-105 transition-transform"
                    >
                        <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
                        <div>
                            <h4 className="font-bold text-sm">Market Data</h4>
                            <p className="text-xs text-gray-500 mt-1">Live price feeds, volume & order book</p>
                        </div>
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">Complete</span>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start ml-6 relative hover:scale-105 transition-transform"
                    >
                        <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
                        <div>
                            <h4 className="font-bold text-sm">AI Analysis</h4>
                            <p className="text-xs text-gray-500 mt-1">Live price feeds, volume & order book</p>
                        </div>
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">Processing</span>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start ml-6 relative hover:scale-105 transition-transform"
                    >
                        <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div>
                            <h4 className="font-bold text-sm">Trade Signals</h4>
                            <p className="text-xs text-gray-500 mt-1">Generate buy/sell recommendations</p>
                        </div>
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">Waiting</span>
                    </motion.div>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
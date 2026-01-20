import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Calculator, PieChart, GitCompare, Activity, FileText, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Tools: React.FC = () => {
  const tools = [
    { icon: Calculator, title: 'Position Calculator', desc: 'Determine optimal trade size based on risk percentage.' },
    { icon: PieChart, title: 'Portfolio Balancer', desc: 'Rebalance your holdings to match target allocations.' },
    { icon: GitCompare, title: 'Correlation Matrix', desc: 'Identify hidden risks by checking asset correlations.' },
    { icon: Activity, title: 'Volatility Analyzer', desc: 'Historical volatility charts for risk assessment.' },
    { icon: FileText, title: 'Trade Journal', desc: 'Log and analyze your trading history for patterns.' },
    { icon: Smartphone, title: 'Alert Manager', desc: 'Configure custom push notifications for price levels.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">Portfolio Toolbox</h1>
        <p className="text-gray-500 mb-12 max-w-2xl">Essential utilities for the modern quantitative trader.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
              <ScrollReveal key={tool.title} delay={i * 0.1}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full group"
                  >
                      <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                          <tool.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
                  </motion.div>
              </ScrollReveal>
          ))}
      </div>
    </div>
  );
};

export default Tools;
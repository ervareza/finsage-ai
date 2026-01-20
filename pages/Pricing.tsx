import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal>
             <h1 className="text-5xl font-bold mb-6">Simple Pricing.</h1>
             <p className="text-xl text-gray-500">Start for free, upgrade for power. No hidden fees.</p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Free */}
          <ScrollReveal delay={0} width="100%">
              <div className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-black transition-colors">
                  <h3 className="text-lg font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold mb-6">$0</div>
                  <p className="text-sm text-gray-500 mb-8">Perfect for beginners learning the ropes.</p>
                  <ul className="space-y-4 mb-8">
                      {['Daily Market Summary', '5 Watchlist Items', 'Basic Charts', 'Community Access'].map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><Check size={12}/></div>
                              {f}
                          </li>
                      ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-colors">Get Started</button>
              </div>
          </ScrollReveal>

          {/* Pro */}
          <ScrollReveal delay={0.1} width="100%">
              <div className="p-8 rounded-3xl border-2 border-black bg-black text-white relative transform md:-translate-y-4 shadow-2xl">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                  <h3 className="text-lg font-bold mb-2">Pro Trader</h3>
                  <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                  <p className="text-gray-400 text-sm mb-8">For serious traders needing AI edge.</p>
                  <ul className="space-y-4 mb-8">
                      {['Real-time AI Signals', 'Unlimited Watchlist', 'Portfolio Tools', 'Priority Support', 'Market Lens Access'].map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white"><Check size={12}/></div>
                              {f}
                          </li>
                      ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">Start Free Trial</button>
              </div>
          </ScrollReveal>

          {/* Institutional */}
          <ScrollReveal delay={0.2} width="100%">
              <div className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-black transition-colors">
                  <h3 className="text-lg font-bold mb-2">Institutional</h3>
                  <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                  <p className="text-sm text-gray-500 mb-8">API access and raw data feeds.</p>
                  <ul className="space-y-4 mb-8">
                      {['Everything in Pro', 'Full API Access', 'White-label Reports', 'Dedicated Account Mgr', 'Custom Integrations'].map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><Check size={12}/></div>
                              {f}
                          </li>
                      ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-colors">Contact Sales</button>
              </div>
          </ScrollReveal>
      </div>
    </div>
  );
};

export default Pricing;
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Copy, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const APIPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">FinSage Signal API</h1>
        <p className="text-gray-500 mb-12 text-xl">Integrate our AI market intelligence directly into your algorithmic trading bots or dashboards.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
              <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                      All API requests require a valid API key. You can generate one in your account settings. 
                      Pass the key in the header <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">X-API-Key</code>.
                  </p>
                  
                  <div className="bg-[#1e1e1e] rounded-xl p-6 text-gray-300 font-mono text-sm shadow-2xl overflow-hidden relative group">
                      <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
                          <Copy size={14} className="text-white" />
                      </button>
                      <div className="flex gap-2 mb-4 border-b border-gray-700 pb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <p><span className="text-purple-400">curl</span> -X GET \</p>
                      <p className="pl-4">https://api.finsage.ai/v1/signals/latest \</p>
                      <p className="pl-4">-H <span className="text-green-400">'X-API-Key: YOUR_API_KEY'</span></p>
                  </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                  <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
                  <div className="space-y-4">
                      {[
                          { method: 'GET', path: '/v1/signals', desc: 'Retrieve latest active signals' },
                          { method: 'GET', path: '/v1/sentiment/{symbol}', desc: 'Get AI sentiment analysis for a ticker' },
                          { method: 'POST', path: '/v1/backtest', desc: 'Run a strategy backtest simulation' },
                      ].map((ep, i) => (
                          <div key={i} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 hover:border-black transition-colors">
                              <span className={`px-3 py-1 rounded font-bold text-xs ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{ep.method}</span>
                              <code className="bg-gray-50 px-2 py-1 rounded font-mono text-sm">{ep.path}</code>
                              <span className="text-gray-500 text-sm flex-grow">{ep.desc}</span>
                          </div>
                      ))}
                  </div>
              </ScrollReveal>
          </div>

          <div className="md:col-span-1">
               <ScrollReveal delay={0.3} width="100%">
                   <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 sticky top-32">
                       <h3 className="font-bold mb-4">Developer Plans</h3>
                       <p className="text-sm text-gray-600 mb-6">Get 1,000 free calls per month. Upgrade for higher rate limits.</p>
                       <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors mb-4">Get API Key</button>
                       <a href="#" className="text-center block text-sm text-blue-600 font-semibold hover:underline">View Full Docs</a>
                   </div>
               </ScrollReveal>
          </div>
      </div>
    </div>
  );
};

export default APIPage;
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Users, DollarSign, BarChart } from 'lucide-react';

const Affiliate: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 min-h-screen">
       <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>
               <ScrollReveal>
                   <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 block">Partnership</span>
                   <h1 className="text-5xl font-bold mb-6">Grow with FinSage.</h1>
                   <p className="text-lg text-gray-500 mb-8">
                       Earn up to 30% recurring commission for every user you refer. 
                       Join the fastest growing financial AI community.
                   </p>
                   <div className="flex gap-4">
                       <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all">Become a Partner</button>
                       <button className="px-8 py-3 border border-gray-200 rounded-full font-bold hover:border-black transition-all">Log In</button>
                   </div>
               </ScrollReveal>
           </div>
           
           <div className="grid grid-cols-1 gap-6">
               {[
                   { icon: DollarSign, title: 'High Commission', text: '30% lifetime recurring revenue share.' },
                   { icon: Users, title: 'Easy Tracking', text: 'Real-time dashboard to track clicks and conversions.' },
                   { icon: BarChart, title: 'Marketing Assets', text: 'Get access to high-converting banners and copy.' }
               ].map((item, i) => (
                   <ScrollReveal key={i} delay={i * 0.1} direction="right">
                       <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                           <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                               <item.icon />
                           </div>
                           <div>
                               <h3 className="font-bold text-lg">{item.title}</h3>
                               <p className="text-gray-500 text-sm">{item.text}</p>
                           </div>
                       </div>
                   </ScrollReveal>
               ))}
           </div>
       </div>
    </div>
  );
};

export default Affiliate;
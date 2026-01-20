import React from 'react';
import { BarChart, Briefcase, Users, PlayCircle, BookOpen, Search, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturesAndPromo: React.FC = () => {
  return (
    <>
      {/* Roles Section */}
      <section className="py-24 px-6 bg-white text-center overflow-hidden">
        <ScrollReveal width="100%">
            <span className="text-xs font-bold uppercase tracking-wider mb-6 block flex justify-center items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Roles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Solutions for Every Market Role.
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-16">
                Whether you trade, invest, advise, or research, FinSage seamlessly integrates into your workflow.
            </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
            {[
                { Icon: BarChart, title: "Day Traders", text: "Live signals and momentum indicators to capture intraday and swing opportunities." },
                { Icon: Briefcase, title: "Long-term Investors", text: "In-depth research and strategic value assessment to create lasting wealth through time." },
                { Icon: Users, title: "Advisors & Planners", text: "Client-ready reports and portfolio optimization features for superior advisory outcomes." }
            ].map((role, idx) => (
                <ScrollReveal key={role.title} delay={idx * 0.2} direction="up">
                    <div className="p-8 border-l border-gray-200 hover:border-black transition-colors duration-300 group">
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <role.Icon size={20} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{role.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{role.text}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* Split Promo Section */}
      <section className="bg-white px-6 pb-24">
        <ScrollReveal width="100%" direction="up">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-[500px] overflow-hidden rounded-[2rem]">
                {/* Dark Side */}
                <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                    {/* Abstract graphic */}
                    <div className="relative z-10 w-64 h-64 border border-gray-700 rounded-full flex items-center justify-center opacity-50">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 border border-gray-600 rounded-full flex items-center justify-center"
                        >
                            <div className="w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40"></div>
                            <div className="absolute">
                                <Sparkles className="text-white w-12 h-12" />
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Blue Side */}
                <div className="w-full md:w-1/2 bg-[#537bf7] p-12 md:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-xs font-semibold mb-6 opacity-80">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span> InvestGPT
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            AI Tools for Smarter <br /> Investing Decisions.
                        </h2>
                        <p className="opacity-80 mb-8 text-sm">Your 24/7 AI analyst for instant market answers.</p>
                        
                        <ul className="space-y-2 mb-8 text-sm opacity-90">
                            <li className="flex items-center gap-2"><ArrowRight size={14} /> Live data analysis</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} /> Tech & fundamental insights</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} /> Just ask, get immediate answers</li>
                        </ul>

                        <Link to="/invest-gpt" className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                            Start Chatting <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </section>

      {/* Learning Hub */}
      <section className="py-24 px-6 bg-white overflow-hidden">
         <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                 <ScrollReveal>
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 block flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Insights & Learning
                    </span>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Expert Insights, AI Tools, <br/> Smarter Investing.
                    </h2>
                 </ScrollReveal>
                 <ScrollReveal direction="left" delay={0.2}>
                    <p className="text-gray-500 text-sm max-w-xs">
                        Discover expert analysis, AI-driven guidance, and practical resources designed to help you invest smarter and grow confidently.
                    </p>
                 </ScrollReveal>
             </div>

             <div className="grid md:grid-cols-4 gap-4">
                 {/* Card 1 - Videos */}
                 <ScrollReveal delay={0} width="100%">
                    <div className="bg-[#ffaecb] p-8 rounded-3xl h-80 flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Video Tutorials</h3>
                            <p className="text-sm opacity-80 leading-snug">How-to videos on AI tools, features, and smarter investing.</p>
                        </div>
                        <Link to="/academy" className="flex items-center gap-2 text-sm font-semibold mt-auto z-10 group-hover:gap-3 transition-all">Start Learning <ArrowRight size={14}/></Link>
                        {/* Decorative */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-black/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                    </div>
                 </ScrollReveal>

                 {/* Card 2 - Academy */}
                 <ScrollReveal delay={0.1} width="100%">
                    <div className="bg-[#537bf7] text-white p-8 rounded-3xl h-80 flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Academy</h3>
                            <p className="text-sm opacity-80 leading-snug">Learning center with tutorials, glossary, help docs, and expert tips.</p>
                        </div>
                        <Link to="/academy" className="flex items-center gap-2 text-sm font-semibold mt-auto z-10 group-hover:gap-3 transition-all">Start Learning <ArrowRight size={14}/></Link>
                        <div className="absolute bottom-4 right-4 opacity-20 group-hover:rotate-12 transition-transform duration-500">
                            <BookOpen size={60} />
                        </div>
                    </div>
                 </ScrollReveal>

                 {/* Card 3 - Market Lens */}
                 <ScrollReveal delay={0.2} width="100%">
                    <div className="bg-[#4eeaff] p-8 rounded-3xl h-80 flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Market Lens</h3>
                            <p className="text-sm opacity-80 leading-snug">Actionable ideas and insights across stocks, ETFs, crypto, and forex.</p>
                        </div>
                        <Link to="/market-lens" className="flex items-center gap-2 text-sm font-semibold mt-auto z-10 group-hover:gap-3 transition-all">Start Learning <ArrowRight size={14}/></Link>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-black/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-black/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                    </div>
                 </ScrollReveal>

                  {/* Card 4 - Smart Signals */}
                 <ScrollReveal delay={0.3} width="100%">
                    <div className="bg-[#edb366] p-8 rounded-3xl h-80 flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Smart Signals</h3>
                            <p className="text-sm opacity-80 leading-snug">Explore AI-driven signals for more confident trades.</p>
                        </div>
                        <Link to="/smart-signals" className="flex items-center gap-2 text-sm font-semibold mt-auto z-10 group-hover:gap-3 transition-all">Start Learning <ArrowRight size={14}/></Link>
                    </div>
                 </ScrollReveal>
             </div>
         </div>
      </section>
    </>
  );
};

export default FeaturesAndPromo;
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      {/* Bottom CTA - Only show on homepage or specific pages? For now we keep it global or inside Footer component but typically CTA is per-page. 
          However, to match the original design, we keep it here but we could condition it. 
          Let's assume the Footer component includes this CTA section as part of the site-wide footer. */}
      <section className="px-6 pb-6 bg-white border-t border-gray-100">
        <ScrollReveal width="100%">
            <div className="max-w-6xl mx-auto bg-black rounded-[3rem] py-32 px-6 text-center text-white relative overflow-hidden group mt-12">
                {/* Gradient glow */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-50 pointer-events-none"
                />
                
                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Trade smarter, let <br /> AI handle the market.
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm mb-12">
                        Our AI agents provide in-depth research across stocks, crypto, and forex. They help you make confident, rational trading decisions.
                    </p>
                    <Link 
                        to="/explore"
                        className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </ScrollReveal>
      </section>

      {/* Main Footer */}
      <footer className="bg-white pt-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <ScrollReveal>
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-l-full"></div>
                    </div>
                    <span className="font-bold text-xl">FinSage</span>
                </div>
            </ScrollReveal>

            <div className="flex gap-16 text-sm">
                <ScrollReveal delay={0.1}>
                    <div>
                        <h4 className="font-bold mb-4">Navigation</h4>
                        <ul className="space-y-3 text-gray-600 flex flex-col">
                            <Link to="/" className="hover:text-black">Home</Link>
                            <Link to="/explore" className="hover:text-black">Discover</Link>
                            <Link to="/invest-gpt" className="hover:text-black">InvestGPT</Link>
                            <Link to="/tools" className="hover:text-black">Portfolio Toolbox</Link>
                        </ul>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <div>
                        <h4 className="font-bold mb-4">Tools</h4>
                        <ul className="space-y-3 text-gray-600 flex flex-col">
                            <Link to="/favorites" className="hover:text-black">Watchlist</Link>
                            <Link to="/market-movers" className="hover:text-black">Market Movers</Link>
                            <Link to="/ai-picks" className="hover:text-black">AI Stock Picker</Link>
                            <Link to="/smart-signals" className="hover:text-black">Smart Signals</Link>
                            <Link to="/explore" className="hover:text-black">Stocklist</Link>
                        </ul>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-3 text-gray-600 flex flex-col">
                            <Link to="/affiliate" className="hover:text-black">Affiliate Program</Link>
                            <Link to="/academy" className="hover:text-black">Academy</Link>
                            <Link to="/api" className="hover:text-black">API for Signal DB</Link>
                            <Link to="/pricing" className="hover:text-black">Pricing Plans</Link>
                            <Link to="/podcast" className="hover:text-black">Podcast</Link>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </div>

        <ScrollReveal width="100%">
            <div className="max-w-6xl mx-auto flex gap-8 text-xs text-gray-500 mb-8">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Use</Link>
            </div>
        </ScrollReveal>

        {/* Giant Cropped Text */}
        <motion.div 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center leading-none"
        >
             <h1 className="text-[20vw] font-bold tracking-tighter text-black leading-[0.75]">FinSage</h1>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
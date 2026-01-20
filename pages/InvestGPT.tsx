import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const InvestGPT: React.FC = () => {
  return (
    <div className="min-h-screen">
        <Hero />
        
        {/* Additional context for the dedicated page */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center pb-24 text-gray-400 text-sm"
        >
            <p>Powered by Google Gemini 1.5 Pro</p>
        </motion.div>
    </div>
  );
};

export default InvestGPT;
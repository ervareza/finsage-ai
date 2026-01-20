import React from 'react';
import { NavLink } from '../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const links: NavLink[] = [
    { label: 'Favorites', href: '/favorites' },
    { label: 'Market Movers', href: '/market-movers' },
    { label: 'AI Picks', href: '/ai-picks' },
    { label: 'Trade Alerts', href: '/trade-alerts' },
    { label: 'History', href: '/history' },
    { label: 'Explore', href: '/explore' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-10 left-0 w-full z-40 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
           <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
               <div className="w-3 h-3 bg-black rounded-l-full"></div>
           </div>
           <span className="font-bold text-xl tracking-tight">FinSage</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex flex-col items-end gap-1">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              <Link 
                to={link.href}
                className="text-xs font-medium text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
import React from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Ticker />
      <Navbar />
      <main className="flex-grow pt-20 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
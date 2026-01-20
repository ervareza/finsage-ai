import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.5,
  direction = "up",
  className = ""
}) => {
  const getVariants = (): Variants => {
    const distance = 50;
    const initial = { opacity: 0, y: 0, x: 0 };
    
    if (direction === "up") initial.y = distance;
    if (direction === "down") initial.y = -distance;
    if (direction === "left") initial.x = distance;
    if (direction === "right") initial.x = -distance;

    return {
      hidden: initial,
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: "easeOut"
        }
      }
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
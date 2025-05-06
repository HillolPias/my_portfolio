import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  const colors = ['#1D3557', '#06D6A0', '#FF9F1C'];

  return (
    <div className="flex items-center justify-center space-x-3">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={circleVariants}
          initial="initial"
          animate="animate"
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default Loader;
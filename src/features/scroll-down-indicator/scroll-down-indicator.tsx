'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const ScrollDownIndicator = () => {
  return (
    <div className='space-y-4'>
      <div className='h-[1px] bg-gray' />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 8 }}
        transition={{ ease: 'easeInOut', duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className='flex justify-center'>
        <ArrowDown />
      </motion.div>
    </div>
  );
};

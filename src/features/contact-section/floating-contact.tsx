'use client';

import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { contactMethods } from './data';
import { LucideProps } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'motion/react';

export const FloatingContactMethods = () => {
  const renderContactMethods = (
    method: {
      platform: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >;
      value: string;
      href: string;
    },
    index: number,
  ) => {
    return (
      <motion.div
        key={method.platform}
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index, duration: 0.2 }}>
        <Tooltip>
          <TooltipTrigger className='rounded-full bg-tertiary p-2'>
            <a href={method.href} target='_blank' rel='noopener noreferrer'>
              <method.icon className='w-4 h-4 text-white' />
            </a>
          </TooltipTrigger>
          <TooltipContent side='right' className='z-10'>
            <a href={method.href} target='_blank' rel='noopener noreferrer'>
              {method.value}
            </a>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    );
  };
  return (
    <div className='fixed top-0 left-4 space-y-2 hidden sm:block'>
      <div className='flex justify-center'>
        <motion.div initial={{ height: 0 }} animate={{ height: 250 }} transition={{ duration: 0.5 }} className=' w-[1px] bg-primary'></motion.div>
      </div>
      {contactMethods.map(renderContactMethods)}
    </div>
  );
};

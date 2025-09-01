'use client';

import { Badge } from '@/components/ui/badge';
import { Flame, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillItem = (props: {
  item: {
    skills: string[];
    title: string;
    main?: boolean;
  };
  icon: LucideIcon;
  index: number;
}) => {
  const { item, icon: Icon, index } = props;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -16 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2 * index,
        duration: 1
      }}
      className='bg-background border border-primary rounded-lg p-4 min-w-[200px] relative'>
      {item.main && (
        <Badge className='bg-tertiary absolute -top-2 right-2'>
          <Flame />
          Most Efficient
        </Badge>
      )}
      {/* Header */}
      <div className='flex items-center gap-2 mb-3'>
        <Icon className='w-4 h-4 text-primary' />
        <h3 className='text-white font-medium text-sm'>{item.title}</h3>
      </div>

      {/* Separator */}
      <div className='h-px bg-primary mb-3'></div>

      {/* Skills */}
      <div className='flex flex-col gap-2'>
        {item.skills.map(skill => (
          <Badge key={skill} className='text-white text-sm font-medium'>
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

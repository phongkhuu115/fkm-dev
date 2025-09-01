import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export const GeneralItem = (props: { language: string, index: number }) => {
  const { language, index } = props;

  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2 * index,
        duration: 0.5
      }}
    >
      <Badge
        variant={'outline'}
        className='bg-tertiary/50 border-tertiary text-white text-[16px]'>
        {language}
      </Badge>
    </motion.div>
  );
};

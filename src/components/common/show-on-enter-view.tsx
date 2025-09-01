'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

const MotionDiv = motion.div;

export const ShowOnEnterView = (props: { children: ReactNode }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, translateY: -16 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}>
      {props.children}
    </MotionDiv>
  );
};

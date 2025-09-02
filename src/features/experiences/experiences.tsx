'use client';

import { SectionHeader } from '@/components/common';
import VGCorp from '@/assets/images/vgc.jpg';
import VPB from '@/assets/images/vpb.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Folder } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Description } from './description';
import { DescriptionItem } from './description-item';

export type TExperiences = (typeof experiences)[0];

const experiences = [
  {
    company: 'VG_Corp',
    position: 'Fullstack Developer',
    level: 'Middle - Fulltime',
    from: '02/2024',
    to: 'now',
    icon: VGCorp,
    description: () => {
      return (
        <Description>
          <DescriptionItem>Developed web apps (NextJS) and backend services (NestJS, Strapi) across the ecosystem.</DescriptionItem>
          <DescriptionItem>Refactored mobile app (React Native), introduced offline-first architecture.</DescriptionItem>
          <DescriptionItem>Contributed to building a shared mobile library (React Native) within a monorepo setup, supporting offline-first logic and modular reuse across ecosystem apps.</DescriptionItem>
          <DescriptionItem>Built internal authentication server and shared logic services for multiple applications.</DescriptionItem>
          <DescriptionItem>Reimplemented UI and business logic for eKYC V2 and Settings based on revised product designs.</DescriptionItem>
          <DescriptionItem>Engineered internal logging and error tracing pipeline modeled after Sentry; used company-wide.</DescriptionItem>
          <DescriptionItem>Developed NLP-based test automation tooling (Sentence Transformers, Gauge).</DescriptionItem>
          <DescriptionItem>Built backend services and a cross-team ticket management module inspired by Jira.</DescriptionItem>
        </Description>
      )
    },
  },
  {
    company: 'Viet_PickleBall',
    position: 'Fullstack Developer',
    level: 'Freelancer - Part time',
    from: '10/2024',
    to: '4/2025',
    icon: VPB,
    description: () => {
      return (
        <Description>
          <DescriptionItem>Designed and built tournament logic: scheduling, brackets, match tracking (React Native, Firebase).</DescriptionItem>
          <DescriptionItem>Developed real-time messaging (Firestore, Cloud Messaging) for match updates.</DescriptionItem>
          <DescriptionItem>Built backend APIs (ExpressJS) for authentication, player stats, and tournament workflows.</DescriptionItem>
          <DescriptionItem>Collaborated with stakeholders to improve UX flows and increase user retention.</DescriptionItem>
        </Description>
      )
    },
  },
];

export const Experiences = () => {
  const renderBlinkingCaret = () => {
    return (
      <motion.span
        className='text-success'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.3, repeatType: 'reverse' }}>
        _
      </motion.span>
    );
  };

  const renderExperience = (experience: TExperiences, index: number) => {
    return (
      <motion.div key={experience.company} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}>
        <AccordionItem
          value={experience.company}
          className='border border-primary rounded-md'>
          <AccordionTrigger className='px-4 hover:no-underline cursor-pointer relative'>
            <div className='absolute -top-3 left-2 bg-background px-2'>
              <Folder />
            </div>
            <span>
              <span className='text-success'>$ cd </span>/{experience.company}
              <div>
                <span className='text-success'>$ cd </span>/responsibilities
              </div>
              <div>
                <span className='text-success'>$ ls{renderBlinkingCaret()}</span>
              </div>
            </span>
          </AccordionTrigger>
          <AccordionContent className='border-t-2 border-primary pb-0'>
            <div className='flex'>
              {/* company info */}
              <div className='flex gap-2 flex-4 border-r-2 border-primary p-4'>
                <div className='w-16 h-16 rounded-xl overflow-hidden border'>
                  <Image
                    src={experience.icon}
                    alt={experience.company}
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <div>
                  <div className='text-white font-bold text-lg'>
                    {experience.company.replace('_', ' ')}
                  </div>
                  <div>
                    {experience.position} - {experience.level}
                  </div>
                </div>
              </div>
              {/* experiences */}
              <div className='flex-6'>
                {experience.description()}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    );
  };

  return (
    <section id='experiences'>
      <SectionHeader title='experiences' />
      <div className='mt-4'>
        <Accordion
          type='multiple'
          className='w-full space-y-6'>
          {experiences.map(renderExperience)}
        </Accordion>
      </div>
    </section>
  );
};

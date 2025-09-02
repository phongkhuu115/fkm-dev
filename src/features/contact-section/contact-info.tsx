"use client"

import { SectionHeader } from "@/components/common";
import { motion } from "motion/react";
import { contactMethods } from "./data";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export const ContactInfo = () => {
  const renderContactMethods = (method: {
    platform: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    value: string;
    href: string;
  }, index: number) => {
    const Icon = method.icon;
    return (
      <motion.a
        key={method.platform}
        href={method.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, translateY: -16 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1 * index,
          duration: 0.2
        }}
        className="bg-background border border-primary/70 rounded-lg p-4 hover:border-primary transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-3">
          <Icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
        </div>

        {/* Separator */}
        <div className="h-px bg-primary/70 group-hover:bg-primary mb-3"></div>

        {/* Platform Name */}
        <h3 className="text-white/70 group-hover:text-white font-medium text-sm text-center mb-2">
          {method.platform}
        </h3>

        {/* Contact Value */}
        <p className="text-primary/70 group-hover:text-primary text-xs text-center break-all">
          {method.value}
        </p>
      </motion.a>
    );
  }

  return (
    <div className="px-4 space-y-6">
      <div className="flex items-center justify-around gap-4 px-12">
        <span className="flex-1 h-[1px] bg-primary"></span>
        <h2 className="text-center flex-1 font-bold">Or DM me via</h2>
        <span className="flex-1 h-[1px] bg-primary"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contactMethods.map(renderContactMethods)}
      </div>
    </div >
  );
};
"use client"

import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/common";
import { motion } from "motion/react";

const contactMethods = [
  {
    platform: "Email",
    icon: Mail,
    value: "phongkhuu115@gmail.com",
    href: "mailto:phongkhuu115@gmail.com"
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    value: "linkedin.com/in/phongkhuu115",
    href: "https://www.linkedin.com/in/phongkhuu115/"
  },
  {
    platform: "GitHub",
    icon: Github,
    value: "github.com/phongkhuu115",
    href: "https://github.com/phongkhuu115"
  },
  {
    platform: "Facebook",
    icon: Facebook,
    value: "facebook.com/khuu.minh.phong",
    href: "https://www.facebook.com/khuu.minh.phong"
  }
];

export const ContactInfo = () => {
  return (
    <div className="px-4 space-y-6">
      <div className="flex items-center justify-around gap-4 px-12">
        <span className="flex-1 h-[1px] bg-primary"></span>
        <h2 className="text-center flex-1 font-bold">Or DM me via</h2>
        <span className="flex-1 h-[1px] bg-primary"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contactMethods.map((method, index) => {
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
        })}
      </div>
    </div >
  );
};
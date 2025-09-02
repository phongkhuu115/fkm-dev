import { Facebook, Github, Linkedin, LucideProps, Mail } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IContactMethod {
  platform: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  value: string;
  href: string;
}

export const contactMethods: IContactMethod[] = [
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
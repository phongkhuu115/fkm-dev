import type { Metadata } from "next";
import "./globals.css";
import { HeaderDesktop, HeaderMobile } from "@/features";

export const metadata: Metadata = {
  title: "FKM | Fullstack Developer",
  description: "I'm a Full Stack Developer from Vietnam with a strong focus on web development. With over 2 years of experience, I specialize in building robust and scalable web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-primary`}
      >
        <HeaderDesktop />
        <HeaderMobile />
        <main className="container mx-auto px-4 sm:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}

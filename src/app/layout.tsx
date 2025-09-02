import type { Metadata } from "next";
import "./globals.css";
import { HeaderDesktop } from "@/features";

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
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

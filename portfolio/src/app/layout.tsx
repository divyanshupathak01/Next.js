import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyanshu Pathak | AI Engineer",
  description: "I build AI systems that turn complex ideas into scalable, real-world solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-[#0d0d0d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

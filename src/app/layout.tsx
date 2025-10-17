import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import RandomBackground from "@/components/ui/RandomBackground";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fin Samunphrai | สมุนไพรธรรมชาติ",
  description: "บาล์มและอโรมาออยล์จากสมุนไพรไทย",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${prompt.className} antialiased bg-[#1b4332] text-white relative`}>
        <div className="fixed inset-0 -z-10">
          <RandomBackground />
        </div>
        {children}
      </body>
    </html>
  );
}

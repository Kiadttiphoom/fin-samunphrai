"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Leaf, Award, Truck } from "lucide-react";

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const ref1 = useRef<HTMLElement | null>(null);

  // ✅ ใช้ useScroll เฉพาะใน client side
  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ✅ Smooth animation transform values
  const opacity1 = useTransform(scroll1, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y1 = useTransform(scroll1, [0, 1], [60, -60]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // ✅ Typewriter effect
  const fullText = `Fin Samunphrai คือบาล์มสมุนไพรที่ผสานกลิ่นหอมอโรมาและคุณค่าจากสมุนไพรไทย
                ช่วยบรรเทาอาการปวดเมื่อย คลายกล้ามเนื้อ และเพิ่มความสดชื่นในทุกครั้งที่ใช้
                ผลิตจากส่วนผสมธรรมชาติ 100% ไม่ผสมสารเคมี`;

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < fullText.length) {
        setDisplayed(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 35);
    return () => clearInterval(typing);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% จากธรรมชาติ",
      description:
        "ผลิตจากส่วนผสมธรรมชาติ 100% ไม่ผสมสารเคมี ปลอดภัยต่อผิวหนัง",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "มาตรฐานคุณภาพ",
      description: "คัดสรรสมุนไพรคุณภาพดีที่สุด ผ่านการทดสอบมาตรฐานสากล",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "จัดส่งรวดเร็ว",
      description:
        "จัดส่งรวดเร็วทั่วประเทศ ฟรีค่าส่งเมื่อสั่งซื้อครบ 500 บาท",
    },
  ];

  return (
    <>
      {/* 🌟 Features Section */}
      <motion.section
  ref={ref1}
  style={{ opacity: opacity1, y: y1 }}
  className="py-20 relative overflow-hidden"
>
  <div className="container mx-auto px-6 relative z-10">
    {/* ✅ ปรับให้มือถือแสดง 3 คอลัมน์ */}
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div
            className="relative bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 
              hover:border-amber-400/50 transition-all duration-300 hover:scale-105 
              hover:shadow-2xl text-center hover:shadow-amber-500/20 
              flex flex-col h-full min-h-[240px] sm:min-h-[300px] md:min-h-[380px]"
          >
            {/* Icon */}
            <div className="relative mb-4 md:mb-6">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
              <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mx-auto">
                <div className="text-green-900">{feature.icon}</div>
              </div>
            </div>

            <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-amber-400 mb-3 md:mb-4 group-hover:text-amber-300 transition-colors">
              {feature.title}
            </h3>

            <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-3 md:mb-4"></div>

            <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-xs mx-auto flex-grow">
              {feature.description}
            </p>

            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-12">
      <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
      <div
        className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  </div>
</motion.section>


      {/* 🌿 About Section */}
      <motion.section
        ref={ref}
        style={{ opacity, y }}
        className="py-20 bg-gradient-to-b from-green-50 to-white"
        id="about"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-green-800 mb-6"
            >
              เกี่ยวกับ Fin Samunphrai
            </motion.h2>

            {/* Typewriter Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-500"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                {displayed}
              </p>

              {/* Decorative Dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

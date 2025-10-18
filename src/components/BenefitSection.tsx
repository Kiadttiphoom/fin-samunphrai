"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Clock, Shield } from "lucide-react";

export default function BenefitSection() {
  const ref1 = useRef<HTMLElement | null>(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scroll1, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y1 = useTransform(scroll1, [0, 1], [60, -60]);

  const benefits = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "ผ่อนคลาย",
      desc: "กลิ่นหอมอโรมาช่วยลดความเครียด",
      subtitle: "Relaxation",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "บรรเทาปวด",
      desc: "ลดอาการเมื่อยล้า ปวดหัว และเวียนศีรษะ",
      subtitle: "Pain Relief",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "กลิ่นติดทน",
      desc: "หอมยาวนาน พกพาง่าย ใช้ได้ทุกเวลา",
      subtitle: "Long Lasting",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ปลอดภัย",
      desc: "ส่วนผสมจากธรรมชาติ 100% ไม่มีสารเคมี",
      subtitle: "100% Safe",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          จุดเด่นของ Fin Samunphrai
        </motion.h2>
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
          <p className="text-green-200 mt-4 text-lg">
          คุณประโยชน์ที่คุณจะได้รับจากบาล์มสมุนไพรของเรา
        </p>
      </motion.div>
      <motion.section
        ref={ref1}
        style={{ opacity: opacity1, y: y1 }}
        className="relative overflow-hidden pt-10"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefits, index) => (
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
                    flex flex-col h-full min-h-[280px] md:min-h-[380px]"
                >
                  {/* Icon */}
                  <div className="relative mb-4 md:mb-6">
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mx-auto">
                      <div className="text-green-900">{benefits.icon}</div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-amber-400 mb-3 md:mb-4 group-hover:text-amber-300 transition-colors">
                    {benefits.title}
                  </h3>

                  <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-3 md:mb-4"></div>
                  <p className="text-white/90 text-xs md:text-base leading-relaxed max-w-[200px] md:max-w-xs mx-auto flex-grow">
                    {benefits.desc}
                  </p>
                  <p className="text-white/90 text-xs md:text-base leading-relaxed max-w-[200px] md:max-w-xs mx-auto flex-grow">
                    {benefits.subtitle}
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
    </>

  );
}

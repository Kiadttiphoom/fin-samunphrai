"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden z-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Smooth fade to body background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#1b4332]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
            สมุนไพรไทย
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 leading-tight mb-6">
            เพื่อสุขภาพที่ดีของคุณ
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            ค้นพบสมุนไพรไทยคุณภาพสูงที่คัดสรรมาเพื่อส่งเสริมสุขภาพและความงามของคุณอย่างเป็นธรรมชาติ
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-md font-semibold transition shadow-lg"
            >
              สั่งซื้อเลย
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-amber-500 hover:bg-amber-500/20 text-white px-8 py-3 rounded-md font-semibold transition"
            >
              เรียนรู้เพิ่มเติม
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
}

export default function HeroSection() {
  const products: Product[] = [
    { id: 1, image: "/images/product/1/1_1.jpg", title: "สมุนไพรไทยดั้งเดิม" },
    { id: 2, image: "/images/product/1/1_2.jpg", title: "สมุนไพรออร์แกนิก" },
    { id: 3, image: "/images/product/1/1_4.jpg", title: "สมุนไพรพรีเมียม" },
    { id: 4, image: "/images/product/1/1_6.jpg", title: "สมุนไพรสูตรพิเศษ" },
    { id: 5, image: "/images/product/1/1_7.jpg", title: "สมุนไพรหอมผ่อนคลาย" },
  ];

  const [cards, setCards] = useState(products);

  const handlePrev = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const last = newCards.pop()!;
      return [last, ...newCards];
    });
  };

  const handleNext = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const getCardTransform = (index: number) => {
    const mid = Math.floor(cards.length / 2);
    const pos = index - mid;
    const offset = Math.abs(pos);
    const zIndex = cards.length - offset;
    const translateX = pos * 90;
    const rotateZ = pos * 3;
    const translateZ = -offset * 100;
    const scale = pos === 0 ? 1 : 0.95;

    return {
      zIndex,
      x: translateX,
      rotateZ,
      scale,
      opacity: offset > 2 ? 0 : 1,
      translateZ,
    };
  };

  return (
    <section className="relative h-screen w-full overflow-hidden z-20 flex flex-col md:block">
      {/* ✅ พื้นหลัง Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#1b4332]"></div>
      </div>

      {/* ✅ เนื้อหาด้านซ้าย */}
      <div className="relative h-full container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left z-10 order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
            สมุนไพรไทย
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-400 leading-tight mb-6">
            เพื่อสุขภาพที่ดีของคุณ
          </h2>
          <p className="text-white text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
            ค้นพบสมุนไพรไทยคุณภาพสูงที่คัดสรรมาเพื่อส่งเสริมสุขภาพและความงามของคุณอย่างเป็นธรรมชาติ
          </p>

          <div className="flex justify-center md:justify-start flex-wrap gap-4">
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

        {/* ✅ ส่วนภาพขวาแบบ 3D */}
        <div className="relative order-1 md:order-2 flex items-center justify-center md:justify-end w-full md:w-[50%] md:right-[10%] md:bottom-0 bottom-[5%]">
          <div
            className="relative w-[75%] sm:w-[60%] md:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] md:h-[580px] z-30 select-none"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, index) => {
              const style = getCardTransform(index);
              const isTop = index === Math.floor(cards.length / 2);

              return (
                <motion.div
                  key={card.id}
                  className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                  initial={false}
                  animate={{
                    x: style.x,
                    rotateZ: style.rotateZ,
                    scale: style.scale,
                    z: style.translateZ,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (!isTop) return;
                    const swipe = offset.x * velocity.x;
                    if (offset.x < -100 || swipe < -5000) handleNext();
                    else if (offset.x > 100 || swipe > 5000) handlePrev();
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    {isTop && (
                      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 will-change-transform z-0"></div>
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.25,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className="relative z-10 p-4 md:p-6 text-center md:text-left"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <h3 className="text-white text-sm sm:text-base md:text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                            {card.title}
                          </h3>
                        </motion.div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 pointer-events-none"></div>
                </motion.div>
              );
            })}

            {/* ✅ จุดสถานะ (Indicators) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {products.map((p) => {
                const active = cards[Math.floor(cards.length / 2)].id === p.id;
                return (
                  <div
                    key={p.id}
                    className={`h-2 rounded-full transition-all ${
                      active ? "bg-amber-500 w-8" : "bg-white/50 w-2"
                    }`}
                  />
                );
              })}
            </div>

            {/* ✅ ข้อความ hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm"
            >
              ลากเพื่อเปลี่ยนภาพ
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

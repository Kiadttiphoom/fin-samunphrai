"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  const products = [
    {
      img: "/images/product/1/1_1.jpg",
      title: "พิมเสนน้ำ สูตรโปร่งฟ้า",
      desc: "กลิ่นหอมสมุนไพรโปร่งฟ้า ช่วยผ่อนคลาย ลดความเครียด",
      price: "฿69",
      badge: "ขายดี",
      features: ["100% ธรรมชาติ", "ปลอดภัย", "หอมยาวนาน"],
    },
    {
      img: "/images/product/3/3_1.jpg",
      title: "บาล์มสติ๊กแท่งสูตรตะไคร้",
      desc: "กลิ่นหอมสดชื่น บรรเทาคันจากแมลงกัดต่อย",
      price: "฿69",
      badge: "แนะนำ",
      features: ["ไล่แมลง", "บรรเทาคัน", "พกสะดวก"],
    },
    {
      img: "/images/product/4/4_1.jpg",
      title: "บาล์มสติ๊กแท่งสูตรหญ้าเอ็นยืด",
      desc: "บรรเทาปวดเมื่อย เคล็ดขัดยอก ใช้ง่าย พกสะดวก",
      price: "฿69",
      badge: "ใหม่",
      features: ["คลายปวด", "ใช้ง่าย", "พกพาสะดวก"],
    },
    {
      img: "/images/product/5/5_1.jpg",
      title: "ยาหม่องหญ้าเอ็นยืด",
      desc: "ยาหม่องสมุนไพรแท้ กลิ่นหอมเย็น สดชื่น คลายกล้ามเนื้อ",
      price: "฿49",
      badge: "พรีเมียม",
      features: ["สูตรดั้งเดิม", "หอมเย็น", "คุณภาพสูง"],
    },
    {
      img: "/images/product/6/6_1.jpg",
      title: "ยาหม่องตระไคร้",
      desc: "กลิ่นหอมสดชื่น บรรเทาคันจากแมลงกัดต่อย",
      price: "฿69",
      badge: "พรีเมียม",
      features: ["สูตรดั้งเดิม", "หอมเย็น", "คุณภาพสูง"],
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // autoplay
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay, products.length]);

  const prev = () => setIndex((prev) => (prev - 1 + products.length) % products.length);
  const next = () => setIndex((prev) => (prev + 1) % products.length);

  const calcPos = (i: number) => {
    const diff = (i - index + products.length) % products.length;
    if (diff === 0) return { scale: 1, opacity: 1, z: 50, x: 0, rotate: 0 };
    if (diff === 1 || diff === -products.length + 1)
      return { scale: 0.85, opacity: 0.7, z: 20, x: 280, rotate: -10 };
    if (diff === 2 || diff === -products.length + 2)
      return { scale: 0.7, opacity: 0.3, z: 10, x: 500, rotate: -15 };
    if (diff === products.length - 1)
      return { scale: 0.85, opacity: 0.7, z: 20, x: -280, rotate: 10 };
    if (diff === products.length - 2)
      return { scale: 0.7, opacity: 0.3, z: 10, x: -500, rotate: 15 };
    return { scale: 0, opacity: 0, z: 0, x: 0, rotate: 0 };
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              สินค้าคุณภาพจากธรรมชาติ
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            สินค้าสมุนไพร Fin Samunphrai
          </h2>
          <p className="text-green-200/80 text-lg max-w-2xl mx-auto">
            เลือกสรรสมุนไพรคุณภาพ ผลิตด้วยความใส่ใจ เพื่อสุขภาพที่ดีของคุณ
          </p>
        </div>

        <div
          className="relative h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <button
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-amber-400 hover:bg-amber-500 text-[#081c15] rounded-full shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-amber-400 hover:bg-amber-500 text-[#081c15] rounded-full shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center pb-10">
            {products.map((p, i) => {
              const { scale, opacity, z, x, rotate } = calcPos(i);
              return (
                <div
                  key={i}
                  className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={{
                    transform: `translateX(${x}px) scale(${scale}) rotateY(${rotate}deg) translateZ(${z}px)`,
                    opacity,
                    zIndex: z,
                  }}
                  onClick={() => setIndex(i)}
                >
                  <div className="bg-gradient-to-br from-[#1b4332] to-[#081c15] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden w-[340px]">
                    <div className="relative h-64 overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-amber-400 text-[#081c15] text-xs font-bold rounded-full">
                        {p.badge}
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-amber-400 text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-green-200/70 text-sm mb-4">{p.desc}</p>
                      <p className="text-2xl text-amber-400 font-bold mb-4">{p.price}</p>
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#081c15] font-bold px-6 py-3 rounded-full transition-transform hover:scale-105 shadow-lg">
                        <ShoppingCart className="w-5 h-5" />
                        จองเลย
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50 pt">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 ${
                  i === index
                    ? "w-10 h-3 bg-amber-400 rounded-full"
                    : "w-3 h-3 bg-amber-400/40 hover:bg-amber-400/70 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-green-200/60 mb-4">สนใจสินค้าทั้งหมด?</p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#081c15] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
            ดูสินค้าทั้งหมด
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

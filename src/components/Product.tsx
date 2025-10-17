"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { ShoppingCart, Sparkles, Heart, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function ProductShowcase() {
  const products = [
    {
      img: "/images/product/1/1_1.jpg",
      title: "พิมเสนน้ำ สูตรโปร่งฟ้า",
      desc: "กลิ่นหอมสมุนไพรโปร่งฟ้า ช่วยผ่อนคลาย ลดความเครียด",
      price: "฿120",
      badge: "ขายดี",
      features: ["100% ธรรมชาติ", "ปลอดภัย", "หอมยาวนาน"],
    },
    {
      img: "/images/product/3/3_1.jpg",
      title: "บาล์มสติ๊กแท่งสูตรตะไคร้",
      desc: "กลิ่นหอมสดชื่น บรรเทาคันจากแมลงกัดต่อย",
      price: "฿89",
      badge: "แนะนำ",
      features: ["ไล่แมลง", "บรรเทาคัน", "พกสะดวก"],
    },
    {
      img: "/images/product/4/4_1.jpg",
      title: "บาล์มสติ๊กแท่งสูตรหญ้าเอ็นยืด",
      desc: "บรรเทาปวดเมื่อย เคล็ดขัดยอก ใช้ง่าย พกสะดวก",
      price: "฿89",
      badge: "ใหม่",
      features: ["คลายปวด", "ใช้ง่าย", "พกพาสะดวก"],
    },
    {
      img: "/images/product/6/6_1.jpg",
      title: "ยาหม่องหญ้าเอ็นยืด",
      desc: "ยาหม่องสมุนไพรแท้ กลิ่นหอมเย็น สดชื่น คลายกล้ามเนื้อ",
      price: "฿150",
      badge: "พรีเมียม",
      features: ["สูตรดั้งเดิม", "หอมเย็น", "คุณภาพสูง"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="products">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-400/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">สินค้าคุณภาพจากธรรมชาติ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-400 mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            สินค้าสมุนไพร Fin Samunphrai
          </h2>
          <p className="text-green-200/80 text-lg max-w-2xl mx-auto">
            เลือกสรรสมุนไพรคุณภาพ ผลิตด้วยความใส่ใจ เพื่อสุขภาพที่ดีของคุณ
          </p>
        </div>

        {/* ✅ Fixed Swiper - Remove loop for better behavior */}
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          loop={false} // ✅ ปิด loop เพื่อป้องกันการเริ่มใหม่
          speed={800}
          slidesPerView={"auto"}
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -80, // ✅ ปรับ stretch ให้สมดุลมากขึ้น
            depth: 60,   // ✅ ลด depth
            modifier: 1.8, // ✅ ปรับ modifier
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={false}
          className="product-swiper pb-16"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 0,
                stretch: -60,
                depth: 40,
                modifier: 1.5,
              }
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 5,
                stretch: -70,
                depth: 50,
                modifier: 1.6,
              }
            },
            1024: {
              slidesPerView: "auto", 
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 8,
                stretch: -80,
                depth: 60,
                modifier: 1.8,
              }
            },
            1280: {
              slidesPerView: "auto", 
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 10,
                stretch: -90,
                depth: 70,
                modifier: 2.0,
              }
            }
          }}
        >

          {products.map((product, i) => (
            <SwiperSlide key={i} className="!w-[280px] sm:!w-[320px] md:!w-[360px] lg:!w-[400px]"> 
              <div className="group relative bg-gradient-to-br from-[#1b4332]/80 to-[#081c15]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-400/10 transition-all duration-500">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-amber-400 text-[#081c15] text-xs font-bold rounded-full">
                  {product.badge}
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-transparent to-transparent"></div>

                  <button className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-green-200/70 text-sm mb-4 line-clamp-2">{product.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-400/10 text-green-300 text-xs rounded-md border border-green-400/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-green-200/60 text-xs mb-1">ราคา</p>
                      <p className="text-2xl font-bold text-amber-400">{product.price}</p>
                    </div>
                    <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                      <ShoppingCart className="w-5 h-5" />
                      <span>จองเลย</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-green-200/60 mb-4">สนใจสินค้าทั้งหมด?</p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
            ดูสินค้าทั้งหมด
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Style override */}
      <style jsx global>{`
        .product-swiper {
          width: 100%;
          padding: 20px 0;
        }
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        /* ปรับสไลด์ให้แสดงผลสมดุล */
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.6;
          transform: scale(0.9);
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
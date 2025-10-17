export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-12 text-center">
      <div className="relative z-10 container mx-auto px-6">
        {/* 🌿 Brand Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-3">
          Fin Samunphrai
        </h3>
        <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto mb-6">
          สินค้าสมุนไพรไทย กลิ่นหอม ผ่อนคลายจากธรรมชาติ  
          ผลิตด้วยความใส่ใจในทุกขั้นตอน เพื่อสุขภาพที่ดีจากภายในสู่ภายนอก 🌿
        </p>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300"
          >
            <i className="ri-facebook-circle-fill text-2xl group-hover:scale-110 transition-transform"></i>
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300"
          >
            <i className="ri-tiktok-fill text-2xl group-hover:scale-110 transition-transform"></i>
            <span className="hidden sm:inline">TikTok</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300"
          >
            <i className="ri-line-fill text-2xl group-hover:scale-110 transition-transform"></i>
            <span className="hidden sm:inline">LINE</span>
          </a>
        </div>

        {/* 🌱 Divider Line */}
        <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>

        {/* 📜 Copyright */}
        <p className="text-sm text-green-200">
          © 2025 Fin Samunphrai — Thai Herbal Aroma & Balm.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

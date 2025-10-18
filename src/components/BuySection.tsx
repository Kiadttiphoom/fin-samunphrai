import { ShoppingBag, MessageCircle, Truck, Shield } from "lucide-react";

export default function BuySection() {
  return (
    <section className="py-20 relative overflow-hidden" id="buy">


      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            สั่งซื้อ Fin Samunphrai วันนี้
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-green-200 text-lg md:text-xl max-w-2xl mx-auto">
            พร้อมส่งทั่วประเทศ มีจำหน่ายบน Shopee และ TikTok Shop
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="relative z-10">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a
                  href="#"
                  className="group relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-5 h-5" />
                  สั่งซื้อผ่าน Shopee
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                    HOT
                  </div>
                </a>
                <a
                  href="#"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-amber-400 hover:bg-amber-400/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  ติดต่อทาง LINE
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">ส่งฟรี</p>
                    <p className="text-sm text-green-200">เมื่อสั่งซื้อครบ 500 บาท</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">รับประกันคุณภาพ</p>
                    <p className="text-sm text-green-200">สินค้าของแท้ 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Shipping Info */}
        <div className="text-center">
          <p className="text-green-200 mb-4 text-lg md:text-xl font-medium">
            ช่องทางการชำระเงิน
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 items-center max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 md:px-6 md:py-3 
      rounded-full border border-white/20 text-white font-semibold 
      text-sm md:text-base w-[45%] md:w-auto">
              🏦 โอนผ่านธนาคาร
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 md:px-6 md:py-3 
      rounded-full border border-white/20 text-white font-semibold 
      text-sm md:text-base w-[45%] md:w-auto">
              📱 พร้อมเพย์
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 md:px-6 md:py-3 
      rounded-full border border-white/20 text-white font-semibold 
      text-sm md:text-base w-[90%] md:w-auto">
              💰 เก็บเงินปลายทาง
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
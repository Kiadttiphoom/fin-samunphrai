import { Leaf, Award, Truck } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "ผลิตจากส่วนผสมธรรมชาติ 100% ไม่ผสมสารเคมี ปลอดภัยต่อผิวหนัง"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "คัดสรรสมุนไพรคุณภาพดีที่สุด ผ่านการทดสอบมาตรฐานสากล"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "จัดส่งรวดเร็วทั่วประเทศ ฟรีค่าส่งเมื่อสั่งซื้อครบ 500 บาท"
    }
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1b4332' }}>
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:shadow-amber-500/20">
                  {/* Icon Circle with glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
                    <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <div className="text-green-900">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-4"></div>
                  
                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>

                  {/* Corner dots */}
                  <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Title with decorative line */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
                  เกี่ยวกับ Fin Samunphrai
                </h2>
                <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
              </div>
            </div>
            
            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-500">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                <span className="font-semibold text-green-800">Fin Samunphrai</span> คือบาล์มสมุนไพรที่ผสานกลิ่นหอมอโรมาและคุณค่าจากสมุนไพรไทย 
                ช่วยบรรเทาอาการปวดเมื่อย คลายกล้ามเนื้อ และเพิ่มความสดชื่นในทุกครั้งที่ใช้ 
                ผลิตจากส่วนผสมธรรมชาติ <span className="font-semibold text-amber-600">100%</span> ไม่ผสมสารเคมี
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
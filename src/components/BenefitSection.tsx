import { Sparkles, Heart, Clock, Shield } from "lucide-react";

export default function BenefitSection() {
  const benefits = [
    { 
      icon: <Sparkles className="w-12 h-12" />,
      title: "ผ่อนคลาย", 
      desc: "กลิ่นหอมอโรมาช่วยลดความเครียด",
      subtitle: "Relaxation"
    },
    { 
      icon: <Heart className="w-12 h-12" />,
      title: "บรรเทาปวด", 
      desc: "ลดอาการเมื่อยล้า ปวดหัว และเวียนศีรษะ",
      subtitle: "Pain Relief"
    },
    { 
      icon: <Clock className="w-12 h-12" />,
      title: "กลิ่นติดทน", 
      desc: "หอมยาวนาน พกพาง่าย ใช้ได้ทุกเวลา",
      subtitle: "Long Lasting"
    },
    { 
      icon: <Shield className="w-12 h-12" />,
      title: "ปลอดภัย", 
      desc: "ส่วนผสมจากธรรมชาติ 100% ไม่มีสารเคมี",
      subtitle: "100% Safe"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="benefits">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            จุดเด่นของ Fin Samunphrai
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
          <p className="text-green-200 mt-4 text-lg">
            คุณประโยชน์ที่คุณจะได้รับจากบาล์มสมุนไพรของเรา
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:shadow-amber-500/20 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mx-auto">
                    <div className="text-green-900">
                      {b.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-green-200/70 text-sm italic mb-3">
                    {b.subtitle}
                  </p>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-4"></div>
                  <p className="text-white/90 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                {/* Decorative corner dots */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
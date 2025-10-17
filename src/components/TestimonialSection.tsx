import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const reviews = [
    {
      name: "คุณพิมพ์ใจ",
      text: "ใช้แล้วรู้สึกผ่อนคลายมาก กลิ่นหอมติดทนทั้งวันเลยค่ะ!",
      role: "ผู้ใช้งานจริง",
      rating: 5
    },
    {
      name: "คุณธนวัฒน์",
      text: "เวลาปวดหัวจากงาน ใช้ทาบริเวณขมับแล้วดีขึ้นทันที",
      role: "ลูกค้าประจำ",
      rating: 5
    },
    {
      name: "คุณสุดา",
      text: "บาล์มคุณภาพดีมาก กลิ่นหอมไม่แรง ใช้สบายทุกวัน",
      role: "ผู้ใช้งานจริง",
      rating: 5
    },
    {
      name: "คุณอภิชาติ",
      text: "แนะนำเลยครับ ช่วยบรรเทาอาการเมื่อยล้าได้ดีจริงๆ",
      role: "ลูกค้าใหม่",
      rating: 5
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="reviews">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            รีวิวจากลูกค้า
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
          <p className="text-green-200 mt-4 text-lg">
            ความประทับใจจากผู้ใช้งานจริง
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 will-change-transformh-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-16 h-16 text-amber-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, index) => (
                    <Star 
                      key={index} 
                      className="w-5 h-5 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="relative z-10 mb-6">
                  <p className="text-white/90 text-lg leading-relaxed italic">
                    "{r.text}"
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mb-6"></div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar Circle */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-green-900 font-bold text-xl">
                        {r.name.charAt(2)}
                      </span>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-left">
                    <h4 className="font-bold text-amber-400 text-lg group-hover:text-amber-300 transition-colors">
                      {r.name}
                    </h4>
                    <p className="text-green-200/70 text-sm">
                      {r.role}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-green-200 mb-4">มีลูกค้ามากกว่า 1,000+ คนที่ไว้วางใจ</p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-green-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/50">
            เป็นส่วนหนึ่งของเรา
          </button>
        </div>
      </div>
    </section>
  );
}
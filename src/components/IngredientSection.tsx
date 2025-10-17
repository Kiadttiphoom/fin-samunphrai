import { Leaf } from "lucide-react";

export default function IngredientSection() {
  const herbs = [
    { 
      name: "ไพล", 
      img: "/images/herbs/plai.png",
      desc: "ลดอาการปวด บวม และอักเสบ",
      latin: "Zingiber cassumunar"
    },
    { 
      name: "พิมเสน", 
      img: "/images/herbs/borneo_camphor.png",
      desc: "ให้กลิ่นหอมเย็น สดชื่น",
      latin: "Borneol"
    },
    { 
      name: "การบูร", 
      img: "/images/herbs/camphor.png", 
      desc: "ช่วยคลายกล้ามเนื้อ",
      latin: "Camphor"
    },
    { 
      name: "ยูคาลิปตัส", 
      img: "/images/herbs/eucalyptus.png",
      desc: "ช่วยให้หายใจโล่ง สดชื่น",
      latin: "Eucalyptus"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="ingredients">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ส่วนผสมสมุนไพรหลัก
            </h2>
            <Leaf className="w-8 h-8 text-amber-400" />
          </div>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
          <p className="text-green-200 mt-4 text-lg">
            สมุนไพรไทยแท้คัดสรรเกรดพรีเมียม
          </p>
        </div>

        {/* Herbs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {herbs.map((h, i) => (
            <div 
              key={i} 
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-400/40 transition-all duration-300"></div>
                  <img
                    src={h.img}
                    alt={h.name}
                    className="relative mx-auto w-32 h-32 object-cover rounded-full border-4 border-amber-400/30 group-hover:border-amber-400 transition-all duration-300 shadow-lg"
                  />
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Leaf className="w-4 h-4 text-green-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                    {h.name}
                  </h3>
                  <p className="text-green-200/70 text-sm italic mb-3">
                    {h.latin}
                  </p>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-3"></div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {h.desc}
                  </p>
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
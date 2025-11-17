import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DiverseSectors() {
  const sectors = [
    {
      title: "High Rise",
      description: "Luxury residential and commercial towers with advanced BIM coordination",
      image: "/images/High Rise.jpeg",
    },
    {
      title: "Hospitality",
      description: "Hotels, resorts and entertainment complexes with detailed MEP modeling",
      image: "/images/Hospitality.jpeg",
    },
    {
      title: "Metros",
      description: "Underground and elevated metro stations with comprehensive infrastructure BIM",
      image: "/images/metros.jpeg",
    },
    {
      title: "Theme Parks",
      description: "Entertainment and recreational facilities with innovative design solutions",
      image: "/images/theme-park.jpeg",
    },
    {
      title: "Healthcare",
      description: "Medical complexes and hospitals with specialized MEP systems",
      image: "/images/healthcare.jpeg",
    },
    {
      title: "Education",
      description: "Universities and educational institutions with sustainable design",
      image: "/images/education.jpeg",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary-light/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            BIMWISE CONSULTANTS
          </div>
          <h2 className="text-secondary mb-4">Diverse Sectors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering Excellence Across Multiple Industries with Specialized BIM Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-lg">
                    {sector.title}
                  </span>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm mb-4 leading-relaxed">{sector.description}</p>
                  <div className="flex items-center text-white group-hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">View Projects</span>
                    <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

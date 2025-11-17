"use client";

import { Shield, Eye, Target, Users, Scale } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      icon: Shield,
      title: "COURAGE",
      tagline: "Raising the bar, embracing challenges",
      description: "We move out of our comfort zone, learn from mistakes, and embrace change positively. We speak up when things aren't right and play our part in making them better.",
    },
    {
      icon: Eye,
      title: "CURIOSITY",
      tagline: "Always learning, always exploring",
      description: "We stay curious and seek opportunities to learn. We develop entrepreneurial thinking, increase global perspective, and make sound decisions to continuously improve.",
    },
    {
      icon: Target,
      title: "ACCOUNTABILITY",
      tagline: "Ownership and commitment",
      description: "We take ownership for execution, problem-solving, and achieving results. We honour our commitments and comply with the law and policies.",
    },
    {
      icon: Users,
      title: "INCLUSION",
      tagline: "Building together, growing together",
      description: "We foster collaboration and teamwork. We build a diverse and inclusive environment where everyone feels valued, respected, heard, and supported.",
    },
    {
      icon: Scale,
      title: "FAIRNESS",
      tagline: "People first, always just",
      description: "We put people first and we are fair and just in all our decisions and actions. Equity and integrity guide everything we do.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </div>
            <h2 className="mb-6 text-secondary">BUILDING WORLD'S BEST INFRASTRUCTURE WITH BIM</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>BIMWISE CONSULTANTS</strong> is an Engineering Consultancy that provides Design and BIM Services, Value Engineering, Project Management, Sustainability, and CAFM Services.
              </p>
              <p>
                BIMWise Consultants is a BIM consultancy firm that aims to innovate the construction and design sectors. By deploying cutting-edge methodologies and technologies to catalyze transformative outcomes in the AEC industry.
              </p>
              <p>
                With a team of highly skilled BIM experts, architects, and engineers, we offer comprehensive solutions tailored to meet the unique needs of each project. Our expertise spans across various sectors, including Airports, METRO Stations, high-rise Buildings, Medical Complexes, Educational institutions, MULTIPLEX residential and commercial buildings, and infrastructure.
              </p>
              <p>
                Committed to excellence and innovation, BIMWise Consultants leverages cutting-edge technology and industry best practices. Whether you're embarking on a new construction project or seeking to optimize your existing processes, BIMWise Consultants is your trusted partner for all your BIM consultancy needs.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">BIM</div>
                    <div className="text-sm">Consultancy</div>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/boxbim placeholder.jpeg"
                    alt="BIM Workflow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/bimflowchart.jpeg"
                    alt="BIM Process Flowchart"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="h-48 bg-primary rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
              OUR CORE VALUES
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary">What Drives Us Forward</h3>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {values.map((value, index) => {
                const Icon = value.icon;
                const isHovered = hoveredIndex === index;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex-shrink-0 w-72 snap-start"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>

                      {/* Tagline - always visible */}
                      <p className="text-primary font-semibold mb-3 text-xs uppercase tracking-wide">
                        {value.tagline}
                      </p>

                      {/* Description - revealed on hover with smooth animation */}
                      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      {!isHovered && (
                        <div className="mt-3 text-xs text-gray-400 italic">
                          Hover to learn more
                        </div>
                      )}
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
                  </div>
                );
              })}
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-2">
              <p className="text-xs text-gray-400 italic">← Scroll to see all values →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

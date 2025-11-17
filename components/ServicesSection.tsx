import { Compass, Building2, TrendingUp, Scan, Users, Calculator, Leaf, Database, Network } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ServicesSection() {
  const services = [
    {
      icon: Compass,
      title: "Design Consulting Services",
      description: "Comprehensive architectural and engineering design solutions tailored to your project requirements.",
      color: "bg-blue-500",
    },
    {
      icon: Building2,
      title: "BIM / VDC Consulting Services",
      description: "Advanced Building Information Modeling and Virtual Design & Construction services for efficient project delivery.",
      color: "bg-red-500",
    },
    {
      icon: TrendingUp,
      title: "Value Engineering",
      description: "Optimize project costs while maintaining quality and functionality through systematic analysis.",
      color: "bg-green-500",
    },
    {
      icon: Scan,
      title: "3D Laser Scanning & Scan to BIM Modelling",
      description: "High-precision reality capture and conversion to accurate BIM models for existing structures.",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Professional Staff Deputation",
      description: "Skilled BIM professionals and engineers available for on-site and remote project support.",
      color: "bg-cyan-500",
    },
    {
      icon: Calculator,
      title: "Professional QS, BOQ & Cost Estimations",
      description: "Detailed quantity surveying and cost estimation services following international standards.",
      color: "bg-blue-600",
    },
    {
      icon: Database,
      title: "Computer Aided Facility Management (CAFM)",
      description: "7D BIM models with comprehensive facility management data for lifecycle operations.",
      color: "bg-red-600",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "GSAS consultancy services for sustainable building certifications and green construction practices.",
      color: "bg-green-600",
    },
    {
      icon: Network,
      title: "BIM / GIS / FM Integration",
      description: "Seamless integration of Building Information Modeling with GIS and Facility Management systems.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-secondary mb-4">OUR SERVICES</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive BIM and Engineering Solutions for Modern Construction Projects
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card p-8 group hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-primary font-semibold hover:underline inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

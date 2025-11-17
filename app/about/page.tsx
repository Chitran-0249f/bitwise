import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import { Award, Target, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const mission = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To innovate the construction and design sectors by deploying cutting-edge BIM methodologies and technologies that catalyze transformative outcomes in the AEC industry.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To be the leading BIM consultancy firm recognized globally for excellence, innovation, and delivering world-class infrastructure projects.",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Committed to excellence and innovation, leveraging cutting-edge technology and industry best practices to deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A team of highly skilled BIM experts, architects, and engineers offering comprehensive solutions tailored to meet unique project needs.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/defaultbg.jpeg"
            alt="About BIMWise Consultants"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="mb-6 drop-shadow-2xl">About BIMWise Consultants</h1>
          <p className="text-xl text-white drop-shadow-xl max-w-3xl mx-auto">
            Building World's Best Infrastructure with BIM Technology and Innovation
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card p-8">
                  <div className="w-16 h-16 bg-primary-light/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center text-secondary mb-12">Why Choose BIMWise Consultants?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "20+ years of combined experience in BIM and engineering services across diverse sectors and project types.",
              },
              {
                title: "Technology",
                description: "Utilizing the latest BIM software platforms and advanced tools for precise and efficient project delivery.",
              },
              {
                title: "Quality",
                description: "100% client satisfaction through rigorous QA/QC processes and commitment to excellence in every project.",
              },
              {
                title: "Innovation",
                description: "Constantly evolving with industry trends, implementing cutting-edge methodologies and technologies.",
              },
              {
                title: "Global Reach",
                description: "Successfully delivered projects across 10+ countries with local expertise and global standards.",
              },
              {
                title: "Support",
                description: "Dedicated project teams providing comprehensive support from planning to handover and beyond.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function SixDGreenBuildingPage() {
  const services = [
    "Energy Modeling",
    "Fenestration Analysis",
    "Location Review",
    "Reflection & Glare Plans",
    "Acoustic Simulations",
    "Detailed Energy Analysis",
    "LEED Tracking",
    "Building Energy Consumption Analysis",
    "Daylight Simulations",
    "Light Pollution Detailing",
    "Shadow & Visibility Analysis",
    "Conceptual Energy Analysis",
    "Sustainable Element Tracking",
    "CFD Analysis",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SUSTAINABILITY SERVICES
            </div>
            <h1 className="mb-6">6D Green Building Services</h1>
            <p className="text-xl text-gray-300">
              Energy Modeling and Sustainability Analysis for LEED Certification
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServicesSidebar />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Sustainable Building Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants is an emerging Building Energy Modeling services provider company helping architects, builders and property developers in Green Building initiatives and LEED certification. We have expertise in eQuest modeling services for various parameters like lighting, location, solar insulation and more.
                </p>
                <p>
                  Our building model simulation services help facility managers as well as owners achieve sustainability goals for energy efficient buildings. With proper understanding of sustainability challenges and importance of occupant comfort and safety, we offer complete support throughout designing, analysis, evaluation and verification of minimum energy consumption.
                </p>
                <p>
                  Our team of specialists is well-versed with USA and UK regional codes to assist you in green building planning for necessary local approvals.
                </p>
                <p>
                  Our customized "LEED + Revit" deliverables are very useful for sustainable projects pursuing the USGBC's LEED rating.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our 6D BIM Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Build Green, Build Smart</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Achieve LEED certification and sustainability goals with our 6D BIM services
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Start Your Green Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function ThreeDBIMServicesPage() {
  const services = [
    "3D Modeling Service",
    "2D CAD Drawings to BIM Conversion",
    "Sketch up to BIM",
    "Program / RFP Analysis",
    "Code compliance",
    "Design option study",
    "BIM for Design and Engineering",
    "SD, DD & CD stage 3D BIM modeling",
    "PDF to BIM Conversion",
    "Energy Studies",
    "Virtual validation",
    "Design Coordination",
    "BIM for Construction",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              BIM SERVICES
            </div>
            <h1 className="mb-6">3D BIM Services</h1>
            <p className="text-xl text-gray-300">
              Professional & High Quality 3D BIM Modeling Services for Architects, Engineers, and General Contractors
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
                Comprehensive 3D BIM Modeling Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants delivers a spectrum of professional & high quality 3D BIM modeling services to home builders, retailers, architects, engineers and general contractors.
                </p>
                <p>
                  At BIMWise Consultants, we deliver the project in totality through BIM, covering all disciplines - architecture, interiors, structure, MEPF and site development. This allows the design team to pursue a truly "Integrated Design" approach.
                </p>
                <p>
                  Our BIM expert team delivers 3D BIM services from LOD100 up to LOD500 for different building types, commercial malls, recreational parks, hospitals, airports and railways, residential townships, infrastructure, industrial production plants and much more.
                </p>
                <p>
                  We are well versed with LOD specifications across the world in order to ensure consistent modeling standards. We are experts in creating virtual building models and drawings that can be used for clash detection and coordination before building on-site.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our 3D BIM Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Ready to Start Your BIM Project?</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Get in touch with our BIM experts to discuss your project requirements
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

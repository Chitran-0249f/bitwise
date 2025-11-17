import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function CoordinationClashDetectionPage() {
  const services = [
    "Clash Detection Services",
    "MEP Coordination",
    "Multi-disciplinary Coordination",
    "Navisworks Clash Detection",
    "Clash Resolution Reports",
    "Coordination Meetings Support",
    "Issue Tracking and Resolution",
    "Conflict Detection And Resolution",
    "Design Coordination",
    "Construction Coordination",
    "Pre-construction Clash Analysis",
    "Coordination Drawings",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              BIM COORDINATION
            </div>
            <h1 className="mb-6">Coordination & Clash Detection Services</h1>
            <p className="text-xl text-gray-300">
              Prevent Costly On-site Conflicts with Advanced BIM Coordination
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
                Comprehensive BIM Coordination Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants specializes in comprehensive BIM coordination and clash detection services that identify and resolve conflicts before construction begins. Our expert team uses advanced tools like Navisworks to perform multi-disciplinary coordination across architectural, structural, and MEP systems.
                </p>
                <p>
                  We are experts in creating virtual building models and drawings that can be used for clash detection and coordination before building on-site. This proactive approach saves significant time and costs during construction.
                </p>
                <p>
                  Our team has successfully handled a wide range of BIM projects, of varying complexities, for our clients from countries such as the US, the UK, Australia and the UAE. The passion in delivering exponential work to all our clients is clearly visible in our portfolio.
                </p>
                <p>
                  Our wide felt presence stretches across industries including oil & gas, real estate, retail, renovations, and large scale infrastructure.
                </p>
              </div>

              <div className="mt-8 bg-primary-light/10 border-l-4 border-primary p-6 rounded">
                <h4 className="font-bold text-secondary mb-2">Benefits of Clash Detection</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reduce rework and costly on-site conflicts</li>
                  <li>• Improve construction timeline and efficiency</li>
                  <li>• Enhance collaboration between disciplines</li>
                  <li>• Minimize project risks and delays</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our Coordination Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Eliminate Costly Conflicts</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Let our coordination experts identify and resolve clashes before construction
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Get Coordination Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

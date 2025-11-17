import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function ProjectManagementServicesPage() {
  const services = [
    "Project Planning & Scheduling",
    "Budget Management & Cost Control",
    "Quality Assurance & Control",
    "Risk Management & Mitigation",
    "Stakeholder Communication",
    "Resource Allocation & Management",
    "Contract Administration",
    "Progress Monitoring & Reporting",
    "Environmental Compliance Management",
    "Safety & Health Management",
    "Change Order Management",
    "Project Documentation & Records",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/DESIGN CONSULTING SERVICES.jpeg"
            alt="Project Management Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-secondary/20 p-8 rounded-2xl">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              PROFESSIONAL SERVICES
            </div>
            <h1 className="mb-6 drop-shadow-2xl">Project Management Services</h1>
            <p className="text-xl text-white drop-shadow-xl">
              Expert Project Management Solutions to Control Time, Cost, and Quality Throughout Your Project Lifecycle
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
                Construction Management (CM)
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Construction Management is a specialized professional service that employs advanced project management methodologies to supervise every phase of a project lifecycle—from initial planning and design through to final construction completion.
                </p>
                <p>
                  CM focuses on managing the fundamental project constraints: schedule/delivery timeline, budget/cost control, and quality standards. This comprehensive approach integrates seamlessly with various project delivery methods, including traditional design-bid-build and modern design-build frameworks.
                </p>
                <p>
                  Our experienced team ensures that your project stays on track, within budget, and meets the highest quality standards. We act as the central point of coordination between all stakeholders, ensuring clear communication and efficient decision-making throughout the project lifecycle.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our PM Services</h3>
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

          {/* CEMP Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Construction Environmental Management Plan (CEMP)
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Construction Environmental Management Plan serves as a strategic framework to integrate environmental protection principles throughout construction activities while ensuring full compliance with local regulatory requirements.
                </p>
                <p>
                  The CEMP focuses on minimizing negative impacts on both human populations and natural ecosystems. By adopting a proactive stance toward potentially harmful construction activities, the plan effectively prevents adverse public health effects, reduces environmental nuisances, and mitigates hazards to the surrounding natural and built environment.
                </p>
                <p className="font-semibold text-secondary">
                  Our CEMP services ensure your project meets all environmental standards while maintaining efficiency and safety throughout the construction process.
                </p>
              </div>
            </div>
          </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Project Management?</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Connect with our project management experts to discuss your requirements
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

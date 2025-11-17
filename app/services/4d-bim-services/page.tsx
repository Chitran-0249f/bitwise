import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function FourDBIMServicesPage() {
  const services = [
    "4D Simulation Services",
    "Project Phasing Simulations",
    "Last Planner",
    "Detailed Simulation Installation",
    "Site Logistic & Planning",
    "3D To 4D BIM",
    "Improved Time Management And Construction Scheduling",
    "Lean Scheduling",
    "Just In Time Equipment Deliveries",
    "Visual Validation For Payment Approval",
    "Construction Visualization",
    "Conflict Detection And Resolution",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ADVANCED BIM SERVICES
            </div>
            <h1 className="mb-6">4D BIM Services</h1>
            <p className="text-xl text-gray-300">
              Construction Scheduling and Project Visualization for Enhanced Project Management
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
                Visualize Project Timeline with 4D BIM
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants delivers 4D models that enable various participants (architects, designers, contractors and owners) of a construction project to visualize the entire duration of a series of events and display the progress of construction activities through the lifetime of the project.
                </p>
                <p>
                  Our BIM models are extensively used to extract quantities and 4D sequencing/phasing outputs. We incorporate parameters of the construction activity which are then added to BIM models to study & document sequencing, phasing and site management.
                </p>
                <p>
                  We build these models differently using visual scheduling layering. BIM models built this way can be used to extract IFC exports, which are then integrated with various cost estimating & project management software.
                </p>
              </div>

              <div className="mt-8 bg-primary-light/10 border-l-4 border-primary p-6 rounded">
                <h4 className="font-bold text-secondary mb-2">Key Benefits</h4>
                <p className="text-gray-600">
                  4D BIM helps in improved time management, lean scheduling, just-in-time equipment deliveries, and visual validation for payment approval.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our 4D BIM Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Enhance Your Project Scheduling</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Let our 4D BIM experts help you visualize and optimize your construction timeline
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

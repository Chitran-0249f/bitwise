import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function FiveDBIMServicesPage() {
  const services = [
    "5D Quantity Take-off Services",
    "BIM 4D To 5D",
    "Material Take-Off Report",
    "BID Support",
    "Value Engineering",
    "Visualization",
    "Prefabrication Solutions",
    "Cost Estimation",
    "Quantity Take-Off Report",
    "Bar Bending Schedule",
    "Trade Verification From Fabrication Models: Structural Steel, Rebar, MEP",
    "What-If-Scenarios",
    "Quantity Extractions",
    "Digital Fabrication",
    "Budget Visualization",
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
            <h1 className="mb-6">5D BIM Services</h1>
            <p className="text-xl text-gray-300">
              Cost Management and Quantity Take-off for Accurate Project Budgeting
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
                Complete Cost Control with 5D BIM
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants delivers 5D models which enable various participants (architects, designers, contractors and owners) of a construction project to visualize the progress of construction activities and its related cost over time.
                </p>
                <p>
                  We deliver 5D virtual design & construction models loaded with complete information about the material requirements and costs at every stage of a construction project. Every change in the design has a cascading effect on other factors such as estimation of material quantities and thereby, the related costs.
                </p>
                <p>
                  We enable clients to take BIM to Site with drawings for execution, assembly and installation. Since we have multi-disciplinary teams working at our studio, clients get added benefits in terms of extracting integrated and coordinated drawings.
                </p>
                <p>
                  Our BIM models allow for direct exports to fabrication software, enabling more off-site fabrication and "just in time" delivery.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our 5D BIM Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Optimize Your Project Costs</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Get accurate cost estimates and quantity take-offs with our 5D BIM services
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

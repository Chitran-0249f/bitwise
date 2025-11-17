import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function RevitFamilyCreationPage() {
  const services = [
    "Revit Templates",
    "Structural Components Family Creation",
    "MEP Revit Families Creation",
    "Architectural Revit Family Creation",
    "Building System Components",
    "Legends & Title Blocks",
    "Fixtures, Custom Applications",
    "Partitions, Walls, Windows And Doors",
    "Company Specific Revit Library and Standards",
    "Parametric Family Creation",
    "Family Testing and Quality Control",
    "Custom Family Development",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              BIM CONTENT CREATION
            </div>
            <h1 className="mb-6">Revit Family Creation</h1>
            <p className="text-xl text-gray-300">
              Custom BIM Content and Standardized Revit Family Libraries
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
                Smart BIM Content Creation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We create, extract, standardize & manage BIM content. This includes 2D drafting details, 3D components and project file furniture. We follow a strict and accurate protocol for how the content should be built, named and accessed.
                </p>
                <p>
                  The level of detail in the content is optimized so that the desired result is achieved, without making the files very slow. BIMWise Consultants specializes in creating smart content & templates for different types of project deliverables.
                </p>
                <p>
                  Our Revit family creation services ensure that your BIM models are populated with accurate, detailed, and parametric components that enhance project efficiency and collaboration.
                </p>
              </div>

              <div className="mt-8 bg-primary-light/10 border-l-4 border-primary p-6 rounded">
                <h4 className="font-bold text-secondary mb-2">Why Custom Revit Families?</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Standardized company-specific libraries</li>
                  <li>• Improved model performance and file size</li>
                  <li>• Accurate representation of products</li>
                  <li>• Enhanced data management and scheduling</li>
                  <li>• Consistent documentation across projects</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Family Creation Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Build Your Custom Revit Library</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Get professional Revit families tailored to your project needs and standards
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Request Custom Families
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

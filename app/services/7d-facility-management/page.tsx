import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function SevenDFacilityManagementPage() {
  const services = [
    "BIM As-Built",
    "Streamlined Maintenance & Technical Support",
    "Asset Management Services",
    "Efficient Use Of Energy",
    "Enhance Lifecycle Management",
    "BIM Embedded Q&M Manuals",
    "Improved Space Management",
    "Financials And Budget Management",
    "Economical Retrofits And Renovations",
    "COBie data population and extraction",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FACILITY MANAGEMENT
            </div>
            <h1 className="mb-6">7D Facility Management Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive Facility Management and Asset Lifecycle Solutions
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
                Complete Facility Lifecycle Management
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants delivers 7D models when a construction project is ready to be closed-out. The "As-Built" BIM model contains all relevant building component information such as product data and details, maintenance/operation manuals, cut sheet specifications, photos, warranty data, web links to online sources of the product, manufacturer information and contacts.
                </p>
                <p>
                  This information-centric database is made globally accessible to the users/owners through a customized, proprietary secure, web-based environment. The accuracy of 7D BIM aids facility managers in the operation and maintenance of the facility throughout its life cycle.
                </p>
                <p>
                  <strong>Software used:</strong> Integrated Facility Management Software for complete Operations & Maintenance stage.
                </p>
              </div>

              <div className="mt-8 bg-primary-light/10 border-l-4 border-primary p-6 rounded">
                <h4 className="font-bold text-secondary mb-2">Key Benefits</h4>
                <p className="text-gray-600">
                  7D BIM provides streamlined maintenance, enhanced lifecycle management, improved space management, and economical retrofits through comprehensive asset information.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Our 7D FM Services</h3>
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
                <h3 className="text-3xl font-bold mb-4">Optimize Facility Operations</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Maximize asset value and operational efficiency with our 7D BIM facility management services
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

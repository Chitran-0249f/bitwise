import { Check, Building, Wrench, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function CAFMServicesPage() {
  const cafmFeatures = [
    "Product Data & Specifications",
    "Maintenance & Operation Manuals",
    "Cut Sheet Specifications",
    "Product Photos & Documentation",
    "Warranty Data Management",
    "Manufacturer Web Links & Resources",
    "Manufacturer Contact Information",
    "As-Built BIM Model Integration",
    "Secure Web-Based Access",
    "Global Data Accessibility",
    "Lifecycle Operations Support",
    "Complete Building Component Database",
  ];

  const benefits = [
    "Reduced operational costs",
    "Improved asset lifespan",
    "Enhanced space utilization",
    "Better regulatory compliance",
    "Data-driven decision making",
    "Increased productivity",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/CAFM – Computer Aided Facilities Management Services.jpeg"
            alt="CAFM Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-secondary/20 p-8 rounded-2xl">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              FACILITY MANAGEMENT
            </div>
            <h1 className="mb-6 drop-shadow-2xl">CAFM – Computer Aided Facilities Management Services</h1>
            <p className="text-xl text-white drop-shadow-xl">
              Comprehensive 5D As-Built BIM Models for Lifecycle Facility Operations & Maintenance
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
              {/* Introduction */}
              <div className="max-w-4xl mx-auto text-center mb-16">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary mb-6">
              What is CAFM?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Computer Aided Facilities Management (CAFM) is a sophisticated software-based approach to managing and maintaining building facilities, assets, and spaces. By integrating BIM data with facility management operations, CAFM enables organizations to optimize their built environment throughout the entire building lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Comprehensive CAFM Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BIMWise Consultants provides comprehensive 5D models upon project closeout, delivering fully enriched "As-Built" BIM models that serve as the foundation for effective facility management. These information-rich models contain complete building component data including product specifications, maintenance manuals, operation guides, warranty documentation, and direct web links to manufacturer resources and contact information.
                </p>
                <p>
                  Our information-centric database is accessible globally to facility owners and users through a customized, secure web-based platform. This proprietary environment ensures that critical facility data is available anytime, anywhere, enabling informed decision-making and efficient facility operations.
                </p>
                <p>
                  The precision and completeness of our 5D BIM models empower facility managers to effectively operate and maintain their facilities throughout the entire building lifecycle. By providing accurate, up-to-date information at their fingertips, we enable proactive maintenance strategies, optimize resource allocation, and extend asset lifecycles.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Wrench className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-secondary">As-Built Model Data Includes</h3>
              </div>
              <div className="space-y-3">
                {cafmFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* As-Built BIM Models Section */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="flex items-center mb-6">
              <Database className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-3xl font-bold">5D As-Built BIM Models</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Upon project closeout, we deliver comprehensive 5D "As-Built" BIM models that capture every essential detail of your facility. These models incorporate complete building component information, creating an invaluable resource for facility management teams.
              </p>
              <p className="text-lg leading-relaxed">
                Each model includes product data sheets, maintenance and operation manuals, cut sheet specifications, product photographs, warranty information, and direct links to manufacturer websites and contact details. This comprehensive data repository ensures facility managers have immediate access to all critical information needed for effective operations and maintenance throughout the building's lifecycle.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Software Platform: Integrated Facility Management Software for complete Operations & Maintenance stage management.
              </p>
            </div>
          </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Transform Your Facility Management</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Discover how our CAFM solutions can optimize your operations and reduce costs
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

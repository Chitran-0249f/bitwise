import { Check, Leaf, Building2, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function SustainabilityServicesPage() {
  const gsasServices = [
    "Project Registration with Regulatory Authorities",
    "Sustainability Design Verification and Validation",
    "Feasibility Analysis with Strategic Recommendations",
    "Design Phase Certification Tracking and Monitoring",
    "Letter of Conformance Documentation Review",
    "Client and PMC Meeting Representation",
    "Authority Liaison for Technical Discussions and Meetings",
    "Third-Party Audit Site Preparation",
    "Provisional and Final Certification Acquisition",
  ];

  const greenBuildingBenefits = [
    "Reduces negative environmental impacts",
    "Creates positive impacts on climate action",
    "Preserves natural resources",
    "Enhances quality of life",
    "Promotes biodiversity",
    "Reduces CO2 emissions",
    "Optimizes lifecycle value",
    "Uses renewable energy sources",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Sustainability Services & Solutions.jpeg"
            alt="Sustainability Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl backdrop-blur-sm bg-secondary/20 p-8 rounded-2xl">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              SUSTAINABILITY SERVICES
            </div>
            <h1 className="mb-6 drop-shadow-2xl">Sustainability Services & Solutions</h1>
            <p className="text-xl text-white drop-shadow-xl">
              Creating Harmony Between Humans and Nature for Present and Future Generations
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Definition Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServicesSidebar />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="max-w-4xl mx-auto text-center mb-16">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              As defined by the US National Environmental Policy Act of 1969 (NEPA), sustainability aims to "Create and maintain conditions under which humans and nature can exist in productive harmony, permitting the fulfillment of social, economic, and other requirements of present and future generations."
            </p>
          </div>

          {/* Green Building Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-10 h-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-secondary">
                  Understanding Green Building
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Green Buildings and Sustainable Construction represent the collaborative efforts of scientists, policymakers, and construction professionals to minimize environmental impact. These innovative approaches harness renewable energy sources, champion biodiversity, and utilize recycled local materials—reducing transportation costs while simultaneously lowering CO2 emissions.
                </p>
                <p>
                  The cornerstone of green building lies in developing comprehensive Management Systems that maximize a structure's value throughout its entire lifecycle, encompassing site selection, design, construction, operation, maintenance, renovation, and eventual demolition.
                </p>
                <p>
                  The pursuit of Global Sustainability Goals has catalyzed the worldwide Green Building Movement, resulting in the establishment of various Green Building Rating Systems across different regions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Green Building Benefits</h3>
              <div className="space-y-3">
                {greenBuildingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GSAS Section */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold">GSAS Certification</h2>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-lg leading-relaxed">
                The Global Sustainability Assessment System (GSAS) stands as the MENA region's pioneering performance-based framework for evaluating and certifying the sustainability performance of buildings and infrastructure projects.
              </p>
              <p className="text-lg leading-relaxed">
                As a licensed GSAS service provider, Switzel International delivers expert consultancy and technical support to Main Consultants and Contractors, helping them achieve their targeted certification levels.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Comprehensive Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gsasServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-100">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Build Sustainably?</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Partner with us to achieve your green building and sustainability certification goals
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

import ServicesSection from "@/components/ServicesSection";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const bimModelling = [
    "Architectural/Structure / MEP",
    "Coordination /Clash Detection",
    "Detail Design stage BIM LOD 300",
    "Construction Stage BIM LOD 400",
    "As-Built Stage BIM LOD 500",
    "BIM Execution plan",
    "Asset Management",
    "COBie Services",
    "2D Shop Drawings",
    "2D As-Built Drawings",
  ];

  const advancedBIM = [
    "4D BIM Construction Simulations/Visualization",
    "5D BIM Construction Project Cost Management",
    "6D BIM Sustainability - Energy Efficiency Analysis - BEM",
    "7D BIM - Facility Management",
    "3D Laser Scanning (Scan to BIM)",
    "BIM / GIS / FM Integration",
    "BIM Virtual Reality (VR)",
    "Augmented Reality (AR)",
    "Digital Twin",
    "BIM Virtual Design & Construction (VDC)",
    "BIM Rendering & Flythrough/Walkthrough Services",
    "BIM Revit Family Creation /Object Modeling Services",
  ];

  const qsServices = [
    "Preparation of Bills of Quantities (BOQ)",
    "Cost Estimation & Budgeting",
    "Tender Documentation",
    "POMI, CESSM3, NRM2 Standards",
    "CSI MasterFormat Compliant",
    "2D and 3D Takeoffs",
    "CostX & Planswift Software",
    "Bluebeam Revu Integration",
    "Revit/Navisworks Based QS",
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive BIM and Engineering Solutions for Modern Construction Projects
          </p>
        </div>
      </section>

      {/* Main Services */}
      <ServicesSection />

      {/* BIM Modelling Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-secondary mb-6">BIM MODELLING SERVICES</h2>
              <p className="text-gray-600 mb-8">
                Comprehensive BIM modeling services from concept to as-built stage, ensuring accurate digital representations of your projects.
              </p>
              <ul className="space-y-3">
                {bimModelling.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-secondary mb-6">ADVANCE BIM SERVICES</h2>
              <p className="text-gray-600 mb-8">
                Next-generation BIM services including 4D to 7D BIM, VR/AR, and advanced visualization solutions.
              </p>
              <ul className="space-y-3">
                {advancedBIM.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QS Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-secondary mb-6 text-center">QUANTITY SURVEYING & COST CONSULTANCY</h2>
            <p className="text-gray-600 mb-8 text-center">
              BIMWise Consultants offers specialized Quantity Surveying and Cost Consultancy Services, providing fully itemized Bills of Quantities prepared in line with internationally recognized standards.
            </p>
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qsServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Need a Custom BIM Solution?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to discuss your specific project requirements and provide tailored solutions.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

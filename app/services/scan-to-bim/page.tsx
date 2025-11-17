import { Check } from "lucide-react";
import Link from "next/link";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function ScanToBIMPage() {
  const services = [
    "Tracing And Surface Restructuring From Point Cloud Data",
    "Point cloud to BIM conversion",
    "2D floor plans, elevation and sections from scanned data",
    "Point cloud data modeling",
    "Point Cloud To BIM 4D For Construction Scheduling",
    "Point Cloud To BIM 6D For Sustainability Optimization",
    "3D BIM models from point cloud captured by a drone",
    "Point Cloud to CAD",
    "Convert laser survey data into 3D BIM models",
    "Scan to Revit BIM Services",
    "Point Cloud To BIM 5D For Cost Estimation",
    "Point Cloud To BIM 7D For Facility Management",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              3D LASER SCANNING
            </div>
            <h1 className="mb-6">Scan To BIM Services</h1>
            <p className="text-xl text-gray-300">
              Convert Point Cloud Data to Accurate 3D BIM Models for Renovations and Retrofits
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
                Precise Point Cloud to BIM Conversion
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Since a lot of current projects are renovations & retrofits of old buildings, laser scanning is being used to record these buildings. Designers, constructors and owners want the point-cloud data from these laser scanners converted to Revit models.
                </p>
                <p>
                  The focus here is on doing this in the most accurate and efficient manner, in the shortest possible time. Depending on the project and the use of BIM in the project, we optimize the level of detail in which the point cloud information is converted to Revit.
                </p>
                <p>
                  A step further and we convert them into BIM 4D, 5D, 6D and 7D models.
                </p>
                <p>
                  Our team has successfully handled a wide range of BIM projects, of varying complexities, for our clients from countries such as the US, the UK, Australia and the UAE. The passion in delivering exponential work to all our clients is clearly visible in our portfolio.
                </p>
                <p>
                  Our wide felt presence stretches across industries including oil & gas, real estate, retail, renovations, and large scale infrastructure.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Scan to BIM Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Transform Your Point Cloud Data</h3>
                <p className="text-xl mb-8 text-gray-100">
                  Get accurate BIM models from laser scan data for your renovation projects
                </p>
                <Link href="/contact" className="btn-secondary inline-block">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const bimConsultingServices = [
    "BIM Implementation",
    "BIM Documentation",
    "BIM Execution Plan",
    "BIM Integration",
  ];

  const bimModellingServices = [
    "BIM Architectural Services",
    "BIM Structure / Detailing Services",
    "MEP BIM Services",
    "Interior Design Services",
    "Façade Modelling Services",
    "Rebar Modelling Services",
    "Landscape Modelling Services",
  ];

  const featuredServices = [
    "BIM Dimensions",
    "BIM Automation",
    "BIM Laser Scanning",
    "Asset Information Management",
    "BIM Virtual Reality (VR)",
    "Walk-through / Mock-up Videos",
    "Digital Twin",
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/LOGO.png"
                alt="BIMWise Consultants"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:bd@bimwiseconsultants.com" className="hover:text-primary transition-colors">
                  bd@bimwiseconsultants.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a href="tel:+919560683700" className="hover:text-primary transition-colors">
                  +91-9560683700
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm">
                  #336, First Floor, Kotli, Post Office- Suchan Kotli, Near Hisar Road (NH9),<br />
                  Sirsa, Haryana - 125055
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Projects
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  ✓ Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* BIM Consulting Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">BIM Consulting Services</h3>
            <ul className="space-y-2">
              {bimConsultingServices.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    ✓ {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BIM Modelling Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">BIM Modelling Services</h3>
            <ul className="space-y-2">
              {bimModellingServices.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    ✓ {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Featured Services</h3>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    ✓ {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Follow Us */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BIMWise Consultants. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

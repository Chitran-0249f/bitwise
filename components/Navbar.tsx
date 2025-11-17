"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function MobileSubmenu({ service }: { service: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-primary transition-colors"
      >
        <span>{service.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && service.submenu && (
        <div className="ml-4 mt-2 space-y-2">
          {service.submenu.map((subItem: any) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block text-xs text-gray-500 hover:text-primary transition-colors"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      name: "BIM Services",
      href: "#",
      submenu: [
        { name: "3D BIM Services", href: "/services/3d-bim-services" },
        { name: "4D BIM Services", href: "/services/4d-bim-services" },
        { name: "5D BIM Services", href: "/services/5d-bim-services" },
        { name: "6D Green Building", href: "/services/6d-green-building" },
        { name: "7D Facility Management", href: "/services/7d-facility-management" },
        { name: "Coordination & Clash Detection", href: "/services/coordination-clash-detection" },
        { name: "Scan to BIM", href: "/services/scan-to-bim" },
        { name: "Revit Family Creation", href: "/services/revit-family-creation" },
      ]
    },
    {
      name: "CAFM – Computer Aided Facilities Management Services",
      href: "/services/cafm"
    },
    {
      name: "Project Management Services",
      href: "/services/project-management"
    },
    {
      name: "Sustainability Services & Solutions",
      href: "/services/sustainability"
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO.png"
              alt="BIMWise Consultants"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  {services.map((service, index) => (
                    <div key={index} className="relative group/item">
                      {service.submenu ? (
                        <>
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span>{service.name}</span>
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </div>
                          {/* Nested Submenu */}
                          <div className="absolute left-full top-0 ml-1 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                            <div className="py-2">
                              {service.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          {service.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Projects
            </Link>
            <Link href="/infrastructure" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Infrastructure
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Team
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Careers
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-6">
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About us
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium w-full justify-between"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <div key={index}>
                        {service.submenu ? (
                          <MobileSubmenu service={service} />
                        ) : (
                          <Link
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link href="/infrastructure" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Infrastructure
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Team
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Careers
              </Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-6 text-center">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

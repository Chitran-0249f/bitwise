"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SubService {
  name: string;
  href: string;
}

interface Service {
  name: string;
  href: string;
  submenu?: SubService[];
}

export default function ServicesSidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(["BIM Services"]);

  const services: Service[] = [
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
      name: "CAFM Services",
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

  const toggleExpand = (serviceName: string) => {
    setExpandedItems(prev =>
      prev.includes(serviceName)
        ? prev.filter(item => item !== serviceName)
        : [...prev, serviceName]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isParentActive = (submenu?: SubService[]) => {
    return submenu?.some(sub => pathname === sub.href);
  };

  return (
    <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h3 className="text-lg font-bold text-secondary mb-4 pb-3 border-b border-gray-200">
        Our Services
      </h3>
      <nav className="space-y-1">
        {services.map((service, index) => (
          <div key={index}>
            {service.submenu ? (
              <div>
                <button
                  onClick={() => toggleExpand(service.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isParentActive(service.submenu)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{service.name}</span>
                  {expandedItems.includes(service.name) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedItems.includes(service.name) && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                    {service.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                          isActive(subItem.href)
                            ? "bg-primary-light text-primary font-semibold border-l-2 border-primary -ml-[14px] pl-[13px]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={service.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(service.href)
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {service.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Contact CTA */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-3">
            Need help choosing the right service?
          </p>
          <Link
            href="/contact"
            className="btn-primary text-xs py-2 px-4 w-full text-center block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

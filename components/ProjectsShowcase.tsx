"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "North East Transportation Hub",
      location: "Qiddiya, Riyadh, KSA",
      description: "Parking structure providing a minimum of 1,148 parking spaces across a maximum of 4 levels (includes 3 levels of underground parking, 1 level above ground). Multi-modal road-based transport hub, including transport system interface, organisation of passenger flows, ticketing sequence, transit-related activities, and waiting zones.",
      services: "Project Lead BIM Consultant, LOD 400 & 500, 4D, 5D, 6D & 7D BIM Services, Laser Scanning",
      client: "Al Bawani and UCC (BUJV)",
      image: "/images/NORTH EAST TRANSPORTATION HUB-QIDDIYA, RIYADH, KSA.jpeg",
    },
    {
      title: "Wadi Al Sail Foxhil North Zone 3 & 4",
      location: "Doha, Qatar",
      description: "The Wadi Al Sail Development in Lusail City is a significant urban project comprising multiple zones. These zones are part of the Fox Hills area within Lusail's North District. The development aims to create a vibrant residential and commercial community, contributing to Lusail City's growth as a modern urban center.",
      services: "Project Lead BIM Consultant, LOD 400 & 500, 5D BIM Services, Laser Scanning",
      client: "Qatar Building Engineering Company (QBEC)",
      image: "/images/WADI AL SAIL FOXHIL NORTH ZONE 3 & 4, DOHA, QATAR.jpeg",
    },
    {
      title: "Qetaifan Island North Water Park",
      location: "Qatar",
      description: "State-of-the-art waterpark covering 160,777 SQM with 36 different rides. Features The Icon Tower - the world's highest tower of its kind, located on a small island connected via an overwater bridge. All rides inspired by Qatari culture and the oil & gas industry theme.",
      services: "LOD 400 & 500 MEP, As-Built Drawings, Clash Detection & Resolution, Asset Management/COBie",
      client: "Qatar Electro-Mechanical Group (QEMG)",
      image: "/images/Qetaifan Island North Water Park.jpeg",
    },
    {
      title: "Lusail Stadium",
      location: "Lusail, Qatar",
      description: "The 80,000-seat Lusail Stadium embodies Qatar's ambition and its passion for sharing Arab culture with the world. It hosted the FIFA World Cup Qatar 2022 final, with billions around the globe watching. The design is inspired by the interplay of light and shadow that characterizes the fanar lantern.",
      services: "LOD 300 & 400 BIM Modelling for Infrastructure, Utilities, Roads, Landscape, Asset Information Management (COBie)",
      client: "FIFA World Cup Qatar 2022",
      image: "/images/LUSAIL STADIUM.jpeg",
    },
    {
      title: "Ras Abu Aboud Stadium",
      location: "Doha, Qatar",
      description: "Constructed using shipping containers, removable seats, and other modular building blocks, this innovative 40,000-seat venue has a remarkable design and was entirely dismantled and repurposed after the FIFA World Cup Qatar 2022.",
      services: "LOD 300 & 400 Infrastructure, Utilities, Roads, Landscape, Asset Information Management (COBie)",
      client: "FIFA World Cup Qatar 2022",
      image: "/images/RAS ABU ABOUD STADIUM .jpeg",
    },
    {
      title: "Seef Lusail Project",
      location: "Lusail, Qatar",
      description: "Four residential towers over retail podiums with combined built-up area of 85,000+ square meters. Five apartment towers offering generous living spaces and stunning sea views for 400 residences laid out along the waterfront.",
      services: "LOD 400 & 500 BIM Modelling for Architectural, Structural & MEP, 4D Sequences, 5D Quantity, VR walkthrough",
      client: "Seef Properties",
      image: "/images/SEEF LUSAIL PROJECT.jpeg",
    },
    {
      title: "Agra Metro & NCRTC Metro",
      location: "Agra & Delhi NCR, India",
      description: "Underground Metro Stations including Jama Masjid, Agra Fort, Taj Mahal stations for Agra Metro and Anand Vihar, Meerut Central, Bhaisali, Begumpul stations for NCRTC Metro.",
      services: "Preparation of detailed Shop Drawings, Development of comprehensive 2D Documentation",
      client: "Agra Metro Rail Corporation & NCRTC",
      image: "/images/AGRA METRO & NCRTC METRO.png",
    },
    {
      title: "Qetaifan Island North Development - Package 05 Hotel",
      location: "Qatar",
      description: "Comprehensive hotel development project as part of the Qetaifan Island North development. LOD 400 Model for overall Architecture, Structure & MEP developed in compliance with BIM Guidelines.",
      services: "LOD 400 Architecture, Structure & MEP, 3D Modeling & Shop drawings",
      client: "Qetaifan Island Development",
      image: "/images/Qetaifan Island North Development Project Package -05 Hotel, Qatar.jpeg",
    },
    {
      title: "Musherieb Bus Station",
      location: "Doha, Qatar",
      description: "Modern bus station facility with comprehensive MEP systems and sustainable design features. LOD 300 Model for MEP developed with complete DD stage compliance.",
      services: "LOD 300 Model for MEP, 3D Modeling & DD Stage drawings",
      client: "Qatar Transportation Authority",
      image: "/images/Musherieb Bus Station Doha, Qatar.jpeg",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PRECIOUS CLIENTS
          </div>
          <h2 className="text-secondary mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering Excellence in Major Infrastructure and Construction Projects Worldwide
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Project Image */}
              <div className="relative h-80 md:h-full bg-gradient-navy">
                {projects[currentIndex].image ? (
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2">
                        {currentIndex + 1}/{projects.length}
                      </div>
                      <div className="text-sm">Project Showcase</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {projects[currentIndex].title}
                </h3>
                <div className="flex items-center text-primary mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{projects[currentIndex].location}</span>
                </div>
                <p className="text-gray-600 mb-4">{projects[currentIndex].description}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-secondary mb-2">Services Provided:</div>
                  <p className="text-sm text-gray-600">{projects[currentIndex].services}</p>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-secondary mb-2">Client:</div>
                  <p className="text-sm text-gray-600">{projects[currentIndex].client}</p>
                </div>
                <Link href="/projects" className="btn-primary inline-block text-center">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      title: "North East Transportation Hub",
      location: "Qiddiya, Riyadh, KSA",
      year: "2024",
      category: "Infrastructure",
      description: "Parking structure providing a minimum of 1,148 parking spaces across a maximum of 4 levels (includes 3 levels of underground parking, 1 level above ground). Multi-modal road-based transport hub, including transport system interface, organisation of passenger flows, ticketing sequence, transit-related activities, and waiting zones.",
      scope: "Project Lead BIM Consultant, LOD 400 & LOD 500, 4D, 5D, 6D & 7D BIM Services, Laser Scanning",
      client: "Al Bawani and UCC (BUJV)",
      image: "/images/NORTH EAST TRANSPORTATION HUB-QIDDIYA, RIYADH, KSA.jpeg",
    },
    {
      title: "Wadi Al Sail Foxhil North Zone 3 & 4",
      location: "Doha, Qatar",
      year: "2024",
      category: "Residential",
      description: "The Wadi Al Sail Development in Lusail City, Qatar, is a significant urban project comprising multiple zones, including Zones 3 and 4. These zones are part of the Fox Hills area within Lusail's North District. The development aims to create a vibrant residential and commercial community, contributing to Lusail City's growth as a modern urban center.",
      scope: "Project Lead BIM Consultant, LOD 400 & LOD 500, 5D BIM Services, Laser Scanning",
      client: "Qatar Building Engineering Company (QBEC)",
      image: "/images/WADI AL SAIL FOXHIL NORTH ZONE 3 & 4, DOHA, QATAR.jpeg",
    },
    {
      title: "Qetaifan Island North Water Park",
      location: "Qatar",
      year: "2022",
      category: "Hospitality & Entertainment",
      description: "Splash into a world of excitement and adventure at the Island's main attraction - our state-of-the-art Waterpark covering 160,777 SQM with 36 different rides. All rides inspired by Qatari culture, complementing the theme of the oil and gas industry. Experience the adrenaline rush in The Icon Tower - a distinct zone featuring the world's highest tower of its kind at 80 meters, located on a small island opposite to Qetaifan Island North and linked to it with an overwater bridge.",
      scope: "LOD 400 - BIM Models Updating to correct LOD 400 level for MEP Services with Material Implementation & Metadata, LOD 500 - BIM Modelling and As-Built Drawings for MEP, Overall Project Coordination, Clash Detection and Resolution, Asset Management/COBie",
      client: "Qatar Electro-Mechanical Group (QEMG)",
      image: "/images/Qetaifan Island North Water Park.jpeg",
    },
    {
      title: "Lusail Stadium",
      location: "Lusail, Qatar",
      year: "2022",
      category: "Sports & Entertainment",
      description: "The 80,000-seat Lusail Stadium embodies Qatar's ambition and its passion for sharing Arab culture with the world. It is here that the FIFA World Cup Qatar 2022 final was staged, with billions around the globe watching on. The design of this magnificent stadium is inspired by the interplay of light and shadow that characterizes the fanar lantern.",
      scope: "LOD 300 & 400 BIM Modelling for Infrastructure, Utilities, Roads, Landscape, Asset Information Management (COBie)",
      client: "FIFA World Cup Qatar 2022",
      image: "/images/LUSAIL STADIUM.jpeg",
    },
    {
      title: "Ras Abu Aboud Stadium",
      location: "Doha, Qatar",
      year: "2022",
      category: "Sports & Entertainment",
      description: "Constructed using shipping containers, removable seats, and other modular building blocks, not only will this innovative 40,000-seat venue have a remarkable design, but it was entirely dismantled and repurposed after the FIFA World Cup Qatar 2022.",
      scope: "LOD 300 & 400 BIM Modelling for Infrastructure, Utilities, Roads, Landscape, Asset Information Management (COBie)",
      client: "FIFA World Cup Qatar 2022",
      image: "/images/RAS ABU ABOUD STADIUM .jpeg",
    },
    {
      title: "Seef Lusail Project - Plot D1, D2, D3 & D4",
      location: "Lusail, Qatar",
      year: "2021",
      category: "Residential",
      description: "The project involves the construction of four residential towers standing over retail podiums, covering an overall built-up area (BUA) of around 85,000 square meters along with common commercial areas. At a combined site area of 24,300 square meters, the development comprises five apartment towers that offer generous living spaces and stunning sea views for 400 residences, laid out in an arc along the waterfront.",
      scope: "LOD 400 & 500 BIM Modelling for Architectural, Structural & MEP, 4D Sequences, 5D Quantity, VR walkthrough & Fly through",
      client: "Seef Properties",
      image: "/images/SEEF LUSAIL PROJECT.jpeg",
    },
    {
      title: "Agra Metro & NCRTC Metro",
      location: "Agra & Delhi NCR, India",
      year: "2023",
      category: "Infrastructure",
      description: "Underground Metro Stations including Jama Masjid, Agra Fort, Taj Mahal stations for Agra Metro and Anand Vihar, Meerut Central, Bhaisali, Begumpul stations for NCRTC Metro.",
      scope: "Preparation of detailed Shop Drawings, Development of comprehensive 2D Documentation for Agra Underground Metro Stations & NCRTC",
      client: "Agra Metro Rail Corporation & NCRTC",
      image: "/images/AGRA METRO & NCRTC METRO.png",
    },
    {
      title: "Qetaifan Island North Development - Package 05 Hotel",
      location: "Qatar",
      year: "2022",
      category: "Hospitality & Entertainment",
      description: "Comprehensive hotel development project as part of the Qetaifan Island North development. The overall scope of the work is to provide LOD 400 Model for overall Architecture, Structure & MEP. BIMWise is developing the BIM models and completing the construction stage Models with LOD 400 detailing level in compliance with BIM Guideline and requirement.",
      scope: "LOD 400 BIM Modelling for Architecture, Structure & MEP, 3D Modeling & Shop drawings",
      client: "Qetaifan Island Development",
      image: "/images/Qetaifan Island North Development Project Package -05 Hotel, Qatar.jpeg",
    },
    {
      title: "Musherieb Bus Station",
      location: "Doha, Qatar",
      year: "2021",
      category: "Infrastructure",
      description: "Modern bus station facility with comprehensive MEP systems and sustainable design features. The overall scope of the work is to provide LOD 300 Model for MEP. BIMWise developed the BIM models and complete DD stage Models with LOD 300 detailing level in compliance with BIM Guideline and requirement.",
      scope: "LOD 300 Model for MEP, 3D Modeling & DD Stage drawings, BIM Guideline compliance",
      client: "Qatar Transportation Authority",
      image: "/images/Musherieb Bus Station Doha, Qatar.jpeg",
    },
  ];

  const categories = ["All", "Infrastructure", "Residential", "Hospitality & Entertainment", "Sports & Entertainment"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/defaultbg.jpeg"
            alt="Our Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="mb-6 drop-shadow-2xl">Our Projects</h1>
          <p className="text-xl text-white drop-shadow-xl max-w-3xl mx-auto">
            Delivering Excellence in Major Infrastructure and Construction Projects Worldwide
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all font-semibold ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-primary">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== "All" && <span> in <span className="font-bold">{selectedCategory}</span></span>}
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-full bg-gradient-navy">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl font-bold mb-2">{project.year}</div>
                          <div className="text-sm text-primary font-semibold">{project.category}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-secondary mb-4">{project.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        <span>{project.client}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-secondary mb-2">Scope of Work:</h4>
                      <p className="text-sm text-gray-600">{project.scope}</p>
                    </div>

                    <div className="inline-block bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

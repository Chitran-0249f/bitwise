"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  ArrowRight,
  Box,
  Laptop,
  Server,
  Lightbulb,
  Trophy,
  Layers,
  Glasses
} from "lucide-react";

export default function InfrastructurePage() {
  const softwareCategories = [
    {
      title: "Architecture & BIM",
      color: "bg-blue-500",
      software: [
        "SketchUp",
        "ArchiCAD",
        "Revit ARC",
        "FormIt",
        "Autodesk Revit",
        "GraphiSOFT",
        "AutoCAD",
        "Bentley AECOsim",
        "Civil 3D",
        "Infra-works",
        "Nemetschek Allplan"
      ]
    },
    {
      title: "Sustainability",
      color: "bg-red-500",
      software: [
        "Rhinoceros",
        "Grasshopper",
        "Ecotect",
        "Sefaira",
        "Daysim",
        "Radiance",
        "EnergyPlus"
      ]
    },
    {
      title: "Visualization",
      color: "bg-yellow-500",
      software: [
        "Unreal",
        "3DS Max",
        "Lumion",
        "Enscape"
      ]
    }
  ];

  const workstationSpecs = [
    {
      icon: Cpu,
      title: "Processor",
      value: "Intel Core i9",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: HardDrive,
      title: "Memory",
      value: "64GB RAM",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Server,
      title: "Graphics",
      value: "NVIDIA GeForce",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: HardDrive,
      title: "Storage",
      value: "1TB Hard Disk",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Monitor,
      title: "Display",
      value: "27\" Dual Monitors",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Laptop,
      title: "Operating System",
      value: "Windows 10 64-bit",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    }
  ];

  const capabilities = [
    {
      title: "Highly Proficient",
      description: "Our BIM Studios is highly proficient in various BIM software's",
      icon: Lightbulb,
      image: "/images/infra - high-performance BIM workstation setup.jpeg"
    },
    {
      title: "Extensive Experience",
      description: "Our team gained expertise in numerous projects",
      icon: Trophy,
      image: "/images/infra - wide-angle shot of a row of advanced BIM workstations.jpeg"
    },
    {
      title: "Multi-Platform Mastery",
      description: "Our team is skilled to utilize the benefits of four major BIM platforms",
      icon: Layers,
      image: "/images/infra- professional BIM workstation in a modern office.jpeg"
    },
    {
      title: "Immersive Technologies",
      description: "VR allows to see a project in an immersive virtual environment",
      icon: Glasses,
      image: "/images/infra- professional hardware layout.jpeg"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/infra - wide-angle shot of a row of advanced BIM workstations.jpeg"
            alt="BIM Workstations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-secondary/20 p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h1 className="mb-6 drop-shadow-2xl">IT Infrastructure</h1>
            <p className="text-xl text-white drop-shadow-xl max-w-3xl mx-auto">
              Leading the BIM and 3D visualization tools presents a special challenge to the IT infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Software Proficiency Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center text-secondary mb-4">Our Software Proficiency</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Expertise across major BIM platforms and specialized tools
            </p>
          </motion.div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
                >
                  {/* Background Image */}
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/40 group-hover:from-primary/95 group-hover:via-primary/70 group-hover:to-primary/40 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{capability.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BIM Cycle - Software Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {softwareCategories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 hover:scale-105 transition-transform"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                  <h3 className="text-2xl font-bold text-secondary">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.software.map((soft, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{soft}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM Cycle Visual */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-secondary mb-4">Integrated BIM Workflow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach covers the entire BIM lifecycle
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Box className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Architecture</h3>
                  <p className="text-gray-600 text-sm">Design & Modeling</p>
                </div>
              </motion.div>

              {/* BIM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-white">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">BIM</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Central Hub</h3>
                  <p className="text-white/80 text-sm">Integration Point</p>
                </div>
              </motion.div>

              {/* Sustainability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
                  <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Sustainability</h3>
                  <p className="text-gray-600 text-sm">Energy Analysis</p>
                </div>
              </motion.div>

              {/* Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500">
                  <div className="w-14 h-14 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Visualization</h3>
                  <p className="text-gray-600 text-sm">3D Rendering</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Workstation Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-secondary mb-3">Our Workstation Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              50+ advanced BIM workstations optimized for Revit, Navisworks, and rendering applications
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/infra- professional hardware layout.jpeg"
                alt="Professional Hardware Layout"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right - Specifications */}
            <div className="grid grid-cols-2 gap-4">
              {workstationSpecs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className={`w-12 h-12 ${spec.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-6 h-6 ${spec.color}`} />
                    </div>
                    <h3 className="text-xs font-semibold text-gray-500 mb-1">{spec.title}</h3>
                    <p className="text-sm font-bold text-secondary">{spec.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">Ready to Experience Our Infrastructure?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Our state-of-the-art IT infrastructure ensures optimal performance for all your BIM projects
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

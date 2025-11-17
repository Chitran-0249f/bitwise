"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, MapPin, Clock, GraduationCap, Users, Linkedin } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobPositions = [
    {
      title: "BIM Coordinator",
      location: "Hybrid - Office/Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "We are seeking an experienced BIM Coordinator to lead our BIM initiatives and ensure seamless coordination across multidisciplinary projects.",
      responsibilities: [
        "Coordinate BIM processes across architecture, structure, and MEP disciplines",
        "Conduct clash detection and resolution using Navisworks",
        "Develop and maintain BIM standards and protocols",
        "Lead BIM coordination meetings with project stakeholders",
        "Mentor junior BIM modelers and technicians",
      ],
      requirements: [
        "Bachelor's degree in Architecture, Engineering, or related field",
        "3-5 years of experience in BIM coordination",
        "Proficient in Revit, Navisworks, and BIM 360",
        "Strong understanding of LOD specifications",
        "Excellent communication and coordination skills",
        "Experience with clash detection and resolution",
      ],
      skills: ["Revit", "Navisworks", "BIM 360", "AutoCAD", "Coordination"],
    },
    {
      title: "Senior Revit Architect",
      location: "On-site",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our team as a Senior Revit Architect to design and develop innovative architectural solutions using cutting-edge BIM technology.",
      responsibilities: [
        "Create detailed architectural models in Revit from concept to construction",
        "Develop construction documentation and detail drawings",
        "Collaborate with engineering teams for integrated design",
        "Review and quality-check architectural BIM models",
        "Provide technical guidance to junior architects",
      ],
      requirements: [
        "Bachelor's or Master's degree in Architecture",
        "5+ years of experience in architectural BIM modeling",
        "Expert-level proficiency in Autodesk Revit",
        "Strong design sensibility and technical knowledge",
        "Experience in large-scale commercial or infrastructure projects",
        "Familiarity with local building codes and standards",
      ],
      skills: ["Revit Architecture", "AutoCAD", "SketchUp", "Enscape", "Design Development"],
    },
    {
      title: "BIM Project Manager",
      location: "Hybrid - Office/Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "We're looking for an accomplished BIM Project Manager to oversee multiple BIM projects and drive excellence in our delivery processes.",
      responsibilities: [
        "Manage BIM project delivery from initiation to closeout",
        "Coordinate with clients, consultants, and internal teams",
        "Develop project schedules, budgets, and resource allocation",
        "Ensure quality standards and timely project delivery",
        "Implement BIM execution plans and workflows",
        "Monitor project progress and provide regular status updates",
      ],
      requirements: [
        "Bachelor's degree in Architecture, Engineering, or Construction Management",
        "7+ years of experience in BIM project management",
        "Strong leadership and team management skills",
        "Proven track record of delivering complex BIM projects",
        "Excellent client relationship management abilities",
        "PMP or equivalent project management certification preferred",
      ],
      skills: ["Project Management", "BIM Execution Planning", "Leadership", "Client Relations", "Revit"],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/defaultbg.jpeg"
            alt="Careers at BIMWise"
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
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              JOIN OUR TEAM
            </div>
            <h1 className="mb-6 drop-shadow-2xl">Careers at BIMWise</h1>
            <p className="text-xl text-white drop-shadow-xl max-w-3xl mx-auto">
              Build your career with industry leaders in BIM consultancy. Join a team that's shaping the future of construction and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-secondary mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At BIMWise Consultants, we offer more than just a job—we provide opportunities for growth, innovation, and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learning & Development",
                description: "Continuous training and skill enhancement programs",
                color: "bg-blue-500",
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Work with industry experts and talented professionals",
                color: "bg-primary",
              },
              {
                icon: Briefcase,
                title: "Diverse Projects",
                description: "Work on prestigious projects across multiple sectors",
                color: "bg-red-500",
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible working arrangements and remote options",
                color: "bg-purple-500",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 text-center hover:scale-105 transition-transform"
                >
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-secondary mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities and take the next step in your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Job Header */}
                <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                  <div className="space-y-2 text-sm text-white/90">
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-3.5 h-3.5 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{job.description}</p>

                  {/* Apply Button */}
                  <a
                    href="https://www.linkedin.com/company/bimwise-consultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    Apply on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Don't See a Perfect Match?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Connect with us on LinkedIn or send us your resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/company/bimwise-consultants"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Follow us on LinkedIn
              </a>
              <Link href="/contact" className="btn-secondary inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

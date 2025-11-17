import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function TeamPage() {
  // TODO: Add actual team member photos - see REQUIREMENTS.md
  const team = [
    {
      name: "Sushma Rani",
      position: "Managing Director",
      education: "M.Tech in Civil Engineering, Kurukshetra University (KUK)",
      bio: "Ms. Sushma Rani is the visionary Managing Director of BIMWise Consultants and a distinguished leader in the AEC industry. Known for her hands-on leadership style and unwavering commitment to innovation, Ms. Sushma specializes in leveraging Building Information Modeling (BIM) technologies to drive project efficiency, accuracy, and sustainability.",
    },
    {
      name: "Matbar Singh",
      position: "Design & Interface Manager",
      experience: "30+ years",
      bio: "He brings over 30 years of design experience in the MEP and construction industry, with expertise spanning all phases of the design process. His extensive knowledge, coupled with a strong focus on excellence, client satisfaction, and team development, has played a pivotal role in the company's continued growth. Under his leadership, the organization consistently delivers innovative BIM solutions and end-to-end project support.",
    },
    {
      name: "Tilak Raj",
      position: "Team Lead",
      experience: "20+ years",
      bio: "With over 20 years of experience in 2D and 3D design applications, Tilak is a seasoned expert in the MEP services sector of the AEC industry. His comprehensive skill set includes drafting, designing, BIM modeling, coordination, and BIM management. Renowned for his technical acumen and collaborative working style, Tilak plays a vital role in delivering accurate, efficient, and well-coordinated multidisciplinary project outcomes.",
    },
    {
      name: "Jaspal Chand",
      position: "BIM Manager",
      experience: "14+ years",
      bio: "With over 14 years of experience in 2D and 3D design applications, he brings a strong background in the AEC industry. His expertise covers a wide range of areas including drafting, designing, BIM modeling, coordination, site execution, and BIM management. His hands-on experience and deep understanding of project workflows contribute significantly to delivering high-quality, efficient, and well-coordinated project solutions.",
    },
    {
      name: "Sandeep Kumar",
      position: "BIM Coordinator",
      experience: "6+ years",
      bio: "With over 6 years of experience in 2D and 3D design applications, he brings strong technical expertise to the Mechanical, Engineering, and Construction industry. His key competencies include drafting, designing, BIM modeling, coordination, and BIM management. As a BIM Coordinator, he plays a crucial role in ensuring accurate model development, interdisciplinary collaboration, and the effective implementation of BIM workflows across all stages of the project lifecycle.",
    },
    {
      name: "Rohit Jaiya",
      position: "BIM Coordinator",
      experience: "13+ years",
      bio: "With over 13 years of experience in 2D and 3D design applications, he brings deep technical expertise to the Electrical Engineering and Construction industry. His capabilities include drafting, designing, BIM modeling, coordination, and BIM management. As a BIM Coordinator, he plays a critical role in ensuring accurate model development, efficient interdisciplinary collaboration, and the effective implementation of BIM standards throughout all stages of the project lifecycle.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/defaultbg.jpeg"
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="mb-6 drop-shadow-2xl">Our Team</h1>
          <p className="text-xl text-white drop-shadow-xl max-w-3xl mx-auto">
            Meet the Experts Behind BIMWise Consultants' Success
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-secondary mb-6">Our Core Team</h2>
            <p className="text-gray-600 leading-relaxed">
              At BIMWise Consultants, our strength lies in our talented team of BIM experts, architects, and engineers.
              With decades of combined experience across diverse sectors and project types, our team brings technical expertise,
              innovative thinking, and unwavering commitment to every project we undertake.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center hover:shadow-2xl transition-all">
                {/* Profile Picture Placeholder */}
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.position}</p>

                {member.experience && (
                  <div className="inline-block bg-primary-light/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {member.experience} Experience
                  </div>
                )}

                {member.education && (
                  <p className="text-sm text-gray-600 mb-4 italic">{member.education}</p>
                )}

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-secondary mb-6">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented professionals to join our growing team.
            If you're passionate about BIM and want to work on exciting projects worldwide, we'd love to hear from you.
          </p>
          <a href="mailto:bd@bimwiseconsultants.com" className="btn-primary inline-block">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}

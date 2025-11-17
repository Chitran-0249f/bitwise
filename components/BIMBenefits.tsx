import { Zap, DollarSign, BarChart, Eye, MessageSquare, Shield, CheckCircle } from "lucide-react";

export default function BIMBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Maximised Efficiency",
      description: "34% Fewer Errors",
    },
    {
      icon: DollarSign,
      title: "Reduce Costs and Wastage",
      description: "22% Greater Cost Predictability",
    },
    {
      icon: BarChart,
      title: "Improved Cost Estimates",
      description: "Accurate quantity takeoffs",
    },
    {
      icon: Eye,
      title: "Better Insights into Projects",
      description: "20% Better Understanding",
    },
    {
      icon: MessageSquare,
      title: "Communication and Collaboration",
      description: "Enhanced team coordination",
    },
    {
      icon: Shield,
      title: "Less Risk and Wastage",
      description: "Identify issues before construction",
    },
    {
      icon: CheckCircle,
      title: "Better End Results",
      description: "Higher quality deliverables",
    },
  ];

  const stats = [
    { value: "34%", label: "FEWER ERRORS" },
    { value: "22%", label: "GREATER COST PREDICTABILITY" },
    { value: "20%", label: "BETTER UNDERSTANDING OF PROJECT" },
    { value: "16%", label: "IMPROVE SCHEDULE" },
    { value: "8%", label: "OPTIMIZED DESIGN" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-secondary mb-4">BIM AND IT'S BENEFITS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            "The most global project management problems are related to the Cost, Time, Stakeholder decision and Collaboration of the project information. The only solutions is BIM"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary mb-6">BENEFITS OF BIM IN CONSTRUCTION</h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Top ways BIM Expands Process & Project Outcomes</h3>
              </div>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-secondary">{stat.value}</span>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
                        style={{ width: stat.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-navy rounded-2xl text-center">
                <div className="text-6xl font-bold text-white mb-4">BIM</div>
                <div className="text-primary text-sm font-semibold">IN CONSTRUCTION</div>
              </div>
            </div>
          </div>
        </div>

        {/* BIM Process Description */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              BIM is used to digitally design and create a building, it is not a technology but a process. Each instance of the project phase can be strategized digitally, from design, planning, to the eventual start of construction and till operation and maintenance of facilities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The 3D process is aimed at achieving savings through collaboration and visualization of building components into an early design process that will dictate changes & modifications to the actual construction process.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              In short, BIM is a very powerful tool that when used properly will save money, time and simplify the projects process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

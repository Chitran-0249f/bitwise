"use client";

import { Users, Building, Smile, MapPin } from "lucide-react";
import Counter from "./Counter";
import FadeIn from "./FadeIn";

export default function StatsSection() {
  // TODO: Replace with actual company statistics
  // See REQUIREMENTS.md for details
  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Team Members",
      color: "bg-blue-500",
      placeholder: true,
    },
    {
      icon: Building,
      value: 175,
      suffix: "+",
      label: "Projects Completed",
      color: "bg-red-500",
      placeholder: true,
    },
    {
      icon: Smile,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "bg-green-500",
      placeholder: true,
    },
    {
      icon: MapPin,
      value: 10,
      suffix: "+",
      label: "Countries Served",
      color: "bg-purple-500",
      placeholder: true,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="w-8 h-8 text-primary mr-2" />
                    <div className="text-4xl font-bold text-secondary">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

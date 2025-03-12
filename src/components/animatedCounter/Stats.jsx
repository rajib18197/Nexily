"use client";

import { motion } from "framer-motion";
import { Users, Award, Building, Globe } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: 500,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: 10,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      value: 150,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: 25,
      label: "Countries Served",
      suffix: "+",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center"
            >
              {/* <div className="mb-4 p-4 rounded-full bg-primary/10">
                {stat.icon}
              </div> */}
              <h3 className="text-xl font-bold mb-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  delay={300}
                  easing="easeOut"
                  className="text-[hsl(221.2 83.2% 53.3%)]"
                />
              </h3>
              <p className="text-muted-foreground text-[11px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

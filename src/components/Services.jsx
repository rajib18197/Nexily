"use client";

import { motion } from "framer-motion";
import {
  Layers,
  BarChart3,
  Smartphone,
  Globe,
  Shield,
  Lightbulb,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./FAQ.css";
const services = [
  {
    title: "Digital Transformation",
    description:
      "Modernize your business with our comprehensive digital transformation services.",
    icon: Layers,
    color: "bg-chart-1/10 text-chart-1",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
  {
    title: "Data Analytics",
    description:
      "Unlock insights from your data to make informed business decisions.",
    icon: BarChart3,
    color: "bg-chart-2/10 text-chart-2",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
  {
    title: "Mobile Development",
    description:
      "Create stunning, high-performance mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "bg-chart-3/10 text-chart-3",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
  {
    title: "Web Solutions",
    description:
      "Build responsive, modern web applications that engage your customers.",
    icon: Globe,
    color: "bg-chart-4/10 text-chart-4",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with our advanced cybersecurity solutions.",
    icon: Shield,
    color: "bg-chart-5/10 text-chart-5",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
  {
    title: "Innovation Consulting",
    description:
      "Stay ahead of the curve with our strategic innovation consulting.",
    icon: Lightbulb,
    color: "bg-primary/10 text-primary",
    colorbg: "hsl(221.2 83.2% 53.3% / 0.1)",
    colorText: "hsl(221.2 83.2% 53.3%)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Services</h2>
            <p className="text-[30px] font-bold text-muted-foreground">
              We offer a wide range of services to help your business thrive in
              the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-2">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}
                    style={{
                      background: `${service.colorbg}`,
                      color: `${service.colorText}`,
                    }}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

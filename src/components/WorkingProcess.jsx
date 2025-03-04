"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business needs, goals, and challenges through in-depth consultations.",
    icon: Search,
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
    colorbg: "hsl(12 76% 61% / 0.1)",
    colorText: "hsl(12 76% 61%)",
  },
  {
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy tailored to your specific requirements and objectives.",
    icon: Lightbulb,
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    colorbg: "hsl(173 58% 39% / 0.1)",
    colorText: "hsl(173 58% 39%)",
  },
  {
    title: "Development",
    description:
      "We bring your vision to life with cutting-edge technology and industry best practices.",
    icon: Code,
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    colorbg: "hsl(197 37% 24%/ 0.1)",
    colorText: "hsl(197 37% 24%)",
  },
  {
    title: "Launch & Support",
    description:
      "We ensure a smooth launch and provide ongoing support to help your business thrive.",
    icon: Rocket,
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    colorbg: "hsl(43 74% 66% / 0.1)",
    colorText: "hsl(43 74% 66%)",
  },
];

export default function WorkingProcess() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Working Process</h2>
            <p className="text-[30px] font-bold text-muted-foreground">
              We follow a structured approach to deliver exceptional results for
              our clients.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24"
                  } md:text-${index % 2 === 0 ? "right" : "left"}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${step.color}`}
                    style={{
                      background: `${step.colorbg}`,
                      color: `${step.colorText}`,
                    }}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="hidden md:block md:w-0 relative">
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 ${step.color} bg-background z-10 flex items-center justify-center`}
                    style={{
                      background: `${step.colorbg}`,
                      color: `${step.colorText}`,
                    }}
                  >
                    <span className="font-bold">{index + 1}</span>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "dependencies": {
//     "@hookform/resolvers": "^3.9.0",
//     "@next/swc-wasm-nodejs": "13.5.1",
//     "@radix-ui/react-accordion": "^1.2.0",
//     "@radix-ui/react-alert-dialog": "^1.1.1",
//     "@radix-ui/react-aspect-ratio": "^1.1.0",
//     "@radix-ui/react-avatar": "^1.1.0",
//     "@radix-ui/react-checkbox": "^1.1.1",
//     "@radix-ui/react-collapsible": "^1.1.0",
//     "@radix-ui/react-context-menu": "^2.2.1",
//     "@radix-ui/react-dialog": "^1.1.1",
//     "@radix-ui/react-dropdown-menu": "^2.1.1",
//     "@radix-ui/react-hover-card": "^1.1.1",
//     "@radix-ui/react-label": "^2.1.0",
//     "@radix-ui/react-menubar": "^1.1.1",
//     "@radix-ui/react-navigation-menu": "^1.2.0",
//     "@radix-ui/react-popover": "^1.1.1",
//     "@radix-ui/react-progress": "^1.1.0",
//     "@radix-ui/react-radio-group": "^1.2.0",
//     "@radix-ui/react-scroll-area": "^1.1.0",
//     "@radix-ui/react-select": "^2.1.1",
//     "@radix-ui/react-separator": "^1.1.0",
//     "@radix-ui/react-slider": "^1.2.0",
//     "@radix-ui/react-slot": "^1.1.0",
//     "@radix-ui/react-switch": "^1.1.0",
//     "@radix-ui/react-tabs": "^1.1.0",
//     "@radix-ui/react-toast": "^1.2.1",
//     "@radix-ui/react-toggle": "^1.1.0",
//     "@radix-ui/react-toggle-group": "^1.1.0",
//     "@radix-ui/react-tooltip": "^1.1.2",
//     "@types/node": "20.6.2",
//     "@types/react": "18.2.22",
//     "@types/react-dom": "18.2.7",
//     "autoprefixer": "10.4.15",
//     "class-variance-authority": "^0.7.0",
//     "clsx": "^2.1.1",
//     "cmdk": "^1.0.0",
//     "date-fns": "^3.6.0",
//     "embla-carousel-react": "^8.3.0",
//     "eslint": "8.49.0",
//     "eslint-config-next": "13.5.1",
//     "framer-motion": "^11.0.8",
//     "input-otp": "^1.2.4",
//     "lucide-react": "^0.446.0",
//     "next": "13.5.1",
//     "next-themes": "^0.3.0",
//     "postcss": "8.4.30",
//     "react": "18.2.0",
//     "react-day-picker": "^8.10.1",
//     "react-dom": "18.2.0",
//     "react-hook-form": "^7.53.0",
//     "react-resizable-panels": "^2.1.3",
//     "recharts": "^2.12.7",
//     "tailwind-merge": "^2.5.2",
//     "tailwindcss": "3.3.3",
//     "tailwindcss-animate": "^1.0.7",
//     "typescript": "5.2.2",
//     "vaul": "^0.9.9",
//     "zod": "^3.23.8"
//   }

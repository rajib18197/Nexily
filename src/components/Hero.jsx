"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const features = ["Innovative Solutions", "Expert Team", "24/7 Support"];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Transform Your Business with{" "}
                <span className="text-primary">Nexily</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We help businesses leverage cutting-edge technology to drive
                growth, improve efficiency, and create exceptional customer
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  variant="default"
                  className="group"
                  style={{
                    background: `hsl(221.2 83.2% 53.3%)`,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ border: "2px solid #888", cursor: "pointer" }}
                >
                  Learn More
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle
                      className="h-5 w-5 text-primary"
                      style={{ color: "hsl(221.2 83.2% 53.3%)" }}
                    />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-card rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

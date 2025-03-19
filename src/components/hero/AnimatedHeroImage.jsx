"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroImage({ imageUrl }) {
  return (
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
            src={imageUrl || "/placeholder.svg"}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";

export default function AnimatedHeroImage({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleChangeInc() {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  function handleChangeDec() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  return (
    <div
      className="relative w-full aspect-square max-w-lg mx-auto"
      style={{ overflow: "hidden" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
      <div style={{}}>
        {images.map((image, index) => {
          return (
            <div
              className="absolute inset-0 bg-card rounded-2xl shadow-xl overflow-hidden"
              style={{
                transform: `translateX(100 * ${index - currentIndex})%`,
              }}
            >
              <img
                src={image || ""}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

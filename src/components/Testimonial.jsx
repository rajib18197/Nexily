"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Nexily transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations. Working with Nexily was a game-changer for our company. Their strategic approach and technical expertise helped us achieve our goals faster than we thought possible.",
    author: "Sarah Johnson",
    position: "CEO, TechVision",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "SJ",
  },
  {
    quote:
      "Working with Nexily was a game-changer for our company. Their strategic approach and technical expertise helped us achieve our goals faster than we thought possible.",
    author: "Michael Chen",
    position: "CTO, InnovateCorp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "MC",
  },
  {
    quote:
      "The team at Nexily delivered exceptional results. Their attention to detail and commitment to quality made them the perfect partner for our digital transformation journey.",
    author: "Emily Rodriguez",
    position: "Marketing Director, GrowthLabs",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "ER",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">What Our Clients Say</h2>
            <p className="text-[30px] font-bold text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to
              say about working with Nexily.
            </p>
          </motion.div>
        </div>

        <div
          className=""
          style={{
            boxShadow:
              "0 0 0 transparent,0 0 0 transparent, 0 0 3rem rgba(76, 103, 150, 0.3)",
            padding: "30px 0",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="border-none bg-card">
                      <CardContent className="p-8 md:p-10">
                        {/* <div className="mb-6">
                          <Quote
                            className="h-10 w-10 text-primary/20"
                            style={{ color: "hsl(221.2 83.2% 53.3%)" }}
                          />
                        </div> */}
                        <p
                          className="text-lg md:text-xl mb-8"
                          style={{ lineHeight: "1.7" }}
                        >
                          "{testimonial.quote}"
                        </p>
                        <div
                          className="flex items-center"
                          style={{
                            width: "max-content",
                            margin: "60px 0 0 0",
                          }}
                        >
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.author}
                            />
                            <AvatarFallback>
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                style={{
                  background: `hsl(221.2 83.2% 53.3%)`,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                style={{
                  background: `hsl(221.2 83.2% 53.3%)`,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

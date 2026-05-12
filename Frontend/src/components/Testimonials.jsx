import React from "react";
import TestimonialCard from "./TestimonialCard";
import avatar1 from "../assets/testimonials/avatar1.png";
import avatar2 from "../assets/testimonials/avatar2.png";
import avatar3 from "../assets/testimonials/avatar3.png";

const testimonialsRow1 = [
  {
    quote: "Partner turned my scattershot prep into a focused plan — I doubled my interview success rate in one month.",
    name: "Aisha K",
    role: "Senior Engineer",
    company: "Fintech Co.",
    avatar: avatar1,
  },
  {
    quote: "The role-specific simulations felt uncannily like my real interviews. I landed the offer at ScaleOps.",
    name: "Daniel R",
    role: "Product Manager",
    company: "ScaleOps",
    avatar: avatar2,
  },
  {
    quote: "Practical, fast, and relentlessly focused on what matters. Saved me weeks of wasted studying.",
    name: "Maya S",
    role: "Data Scientist",
    company: "RetailAI",
    avatar: avatar3,
  },
  {
    quote: "The AI feedback highlighted gaps I had missed for years — I finally felt interview-ready for FAANG.",
    name: "Luca P",
    role: "Frontend Engineer",
    company: "Shoply",
    avatar: null,
  },
];

const testimonialsRow2 = [
  {
    quote: "The calibration metrics are a game changer. I knew exactly when I was ready to step into the room.",
    name: "Sarah M",
    role: "UX Designer",
    company: "CreativeFlow",
    avatar: null,
  },
  {
    quote: "I was struggling with behavioral questions. The STAR method generator in Partner is pure magic.",
    name: "James T",
    role: "Backend Dev",
    company: "CloudCore",
    avatar: avatar3,
  },
  {
    quote: "Best investment I made for my career transition. The specific role-matching is impressively accurate.",
    name: "Elena G",
    role: "ML Engineer",
    company: "NeuralNet",
    avatar: avatar2,
  },
  {
    quote: "Finally, a tool that doesn't just give generic advice but actually simulates the pressure of a real interview.",
    name: "Kevin L",
    role: "QA Lead",
    company: "SoftTest",
    avatar: avatar1,
  },
];

const Testimonials = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 pause-animation">
      {/* Row 1: Left to Right Marquee */}
      <div className="flex gap-6 mb-8 animate-marquee whitespace-nowrap">
        {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
          <div key={`row1-${i}`} className="inline-block">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
        {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
          <div key={`row2-${i}`} className="inline-block">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>

      {/* Fading Edges Mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface to-transparent z-10"></div>
    </div>
  );
};

export default Testimonials;

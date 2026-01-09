"use client";

import { useEffect, useState } from "react";

const HERO_CONTENT = [
  {
    image: "/assets/hero/green-city.jpg",
    title: "Where Data Meets Green Living",
    subtitle: "Insights on sustainable finance, ESG metrics, and practical eco-solutions for a resilient future.",
  },
  {
    image: "/assets/hero/nature-light.webp",
    title: "Sustainability, Measured & Meaningful",
    subtitle: "Analyzing ESG scores, climate data, and emerging technologies shaping greener lifestyles.",
  },
  {
    image: "/assets/hero/forest.jpg",
    title: "The Economics of a Greener Tomorrow",
    subtitle: "How finance, policy, and innovation are driving sustainable systems and eco-conscious choices.",
  },
  {
    image: "/assets/hero/eco-home.jpg",
    title: "From Metrics to Real-World Impact",
    subtitle: "Exploring sustainable investing, energy innovation, and everyday practices for a healthier planet.",
  },
  {
    image: "/assets/hero/diy-home.jpg",
    title: "Sustainable DIY for Every Home",
    subtitle: "Practical guides and eco-friendly tips to transform your space while reducing waste and energy use.",
  },
  {
    image: "/assets/hero/green-renovation.webp",
    title: "DIY Projects with a Purpose",
    subtitle: "Step-by-step home improvement ideas that merge creativity, sustainability, and smart living.",
  }
];

  
  

export default function OutOfTheBoxHero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_CONTENT.length);
    setHero(HERO_CONTENT[randomIndex]);
  }, []);

  if (!hero) return null;

  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {hero.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                {hero.subtitle}
            </p>
        </div>
      </div>
    </section>
  );
}

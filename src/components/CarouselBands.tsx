// src/components/Carousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/img/imgProtfolio/bands/img1.jpeg",
  "/img/imgProtfolio/bands/img2.jpeg",
  "/img/imgProtfolio/bands/img3.jpeg",
  "/img/imgProtfolio/bands/img4.jpeg",
  "/img/imgProtfolio/bands/img5.jpg",
  "/img/imgProtfolio/bands/img6.jpg",
  "/img/imgProtfolio/bands/img7.jpg",
  "/img/imgProtfolio/bands/img8.jpg",
  "/img/imgProtfolio/bands/img9.jpg",
  "/img/imgProtfolio/bands/img10.jpg",
  "/img/imgProtfolio/bands/img11.jpg",
  "/img/imgProtfolio/bands/img12.jpg",
];

export default function CarouselBands() {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  console.log(total);

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden  shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

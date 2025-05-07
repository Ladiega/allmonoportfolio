// src/components/Carousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/img/imgProtfolio/portrait/img1.jpg",
  "/img/imgProtfolio/portrait/img2.jpg",
  "/img/imgProtfolio/portrait/img3.jpg",
  "/img/imgProtfolio/portrait/img4.jpg",
  "/img/imgProtfolio/portrait/img5.jpg",
  "/img/imgProtfolio/portrait/img6.jpg",
  "/img/imgProtfolio/portrait/img7.jpg",
  "/img/imgProtfolio/portrait/img8.jpg",
  "/img/imgProtfolio/portrait/img9.jpg",
  "/img/imgProtfolio/portrait/img10.jpg",
  "/img/imgProtfolio/portrait/img11.jpg",
  "/img/imgProtfolio/portrait/img12.jpg",
  "/img/imgProtfolio/portrait/img13.jpg",
  "/img/imgProtfolio/portrait/img14.jpg",
];

export default function CarouselPortrait() {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  console.log(total);

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-black">
      <div className="relative h-68 sm:h-80 md:h-96">
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
              className="w-screen"
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

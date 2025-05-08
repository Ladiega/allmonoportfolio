"use client";

import { useEffect, useRef } from "react";
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
];

export default function GridGalleryPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".fade-in");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("opacity-100", "translate-y-0");
            target.classList.remove("opacity-0", "translate-y-10");
          } else {
            target.classList.remove("opacity-100", "translate-y-0");
            target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el, i) => {
      // añade delay con inline style
      (el as HTMLElement).style.transitionDelay = `${i * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   min-h-screen bg-white"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="fade-in transform transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          <Image
            src={src}
            alt={`Imagen ${i + 1}`}
            width={800}
            height={600}
            className="w-full h-64 object-cover  shadow-md"
          />
        </div>
      ))}
    </div>
  );
}

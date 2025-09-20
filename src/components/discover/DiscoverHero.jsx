import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BATIK_COUNT = 15;

export const DiscoverHero = () => {
  const batikRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const batikElementsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animasi teks utama
    tl.fromTo(
      batikRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        [subtitleRef.current, paragraphRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

    // Animasi batik kecil di background
    batikElementsRef.current.forEach((el, i) => {
      const delay = Math.random() * 2;
      const duration = 4 + Math.random() * 3;
      const xMove = (Math.random() - 0.5) * 30; // gerakan horizontal kecil
      const yMove = (Math.random() - 0.5) * 30; // gerakan vertikal kecil

      gsap.to(el, {
        x: `+=${xMove}`,
        y: `+=${yMove}`,
        opacity: 0.3 + Math.random() * 0.4,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });
    });
  }, []);

  // Animasi hover tombol
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#FCAD34",
      color: "#4C2514",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "#4C2514",
      color: "#FCAD34",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  // Render elemen batik kecil di background
  const renderBatikElements = () => {
    const elements = [];
    for (let i = 0; i < BATIK_COUNT; i++) {
      // Posisi acak dalam viewport
      const style = {
        position: "absolute",
        width: 20 + Math.random() * 30,
        height: 20 + Math.random() * 30,
        borderRadius: "50%",
        backgroundColor: "rgba(76, 37, 20, 0.15)", // warna coklat transparan
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        pointerEvents: "none",
        filter: "blur(1px)",
      };
      elements.push(
        <div
          key={i}
          style={style}
          ref={(el) => (batikElementsRef.current[i] = el)}
        />
      );
    }
    return elements;
  };

  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col bg-[#FCAD34] text-[#4C2514] relative overflow-hidden"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Batik kecil animasi di background */}
      {renderBatikElements()}

      <h1
        ref={batikRef}
        className="font-extrabold text-[260px] leading-52 select-none z-10"
      >
        BATIK
      </h1>
      <h2
        ref={subtitleRef}
        className="text-6xl font-extrabold text-center max-w-5xl z-10"
      >
        INDONESIA'S INTANGIBLE CULTURAL HERITAGE
      </h2>
      <p ref={paragraphRef} className="font-medium text-2xl mt-4 z-10">
        Discover the beauty and philosophy of Batik
      </p>
      <div
        ref={buttonRef}
        className="px-6 py-3 text-[#FCAD34] bg-[#4C2514] rounded-full mt-4 font-medium cursor-pointer select-none z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Explore Now
      </div>
    </section>
  );
};

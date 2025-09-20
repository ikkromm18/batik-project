import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Ikon
const BatikIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
    ></path>
  </svg>
);

const batikHistoryData = [
  {
    tag: "Origins",
    title: "Awal Mula Batik",
    text: "Batik is believed to have existed since ancient times, starting with simple patterns of lines and dots.",
  },
  {
    tag: "Kingdom Era",
    title: "Masa Jaya Kerajaan",
    text: "Batik flourished in Javanese royal courts as a symbol of social status and spirituality.",
  },
  {
    tag: "Colonial Period",
    title: "Pengaruh Kolonial",
    text: "Batik became more widespread outside the palaces, influenced by foreign cultures, and grew rapidly across regions.",
  },
  {
    tag: "Modern Times",
    title: "Fashion Kontemporer",
    text: "Batik is now part of daily fashion, from formal to casual wear, enriched with contemporary motifs.",
  },
];

export const AboutBatik = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const strongRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION background fade
      gsap.fromTo(
        sectionRef.current,
        { backgroundColor: "#4C2514", opacity: 0 },
        {
          backgroundColor: "#FCAD34",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // TITLE animation
      gsap.fromTo(
        titleRef.current,
        { y: -80, scale: 0.8, opacity: 0, color: "#843514" },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          color: "#4C2514",
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // PARAGRAPH animation
      gsap.fromTo(
        paraRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 85%",
          },
        }
      );

      // Garis tengah timeline
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        },
      });

      // Timeline card animasi per item
      cardsRef.current.forEach((card, i) => {
        const direction = i % 2 === 0 ? -100 : 100;
        gsap.from(card, {
          opacity: 0,
          x: direction,
          rotate: i % 2 === 0 ? -10 : 10,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      // UNESCO strong text
      gsap.fromTo(
        strongRef.current,
        { color: "#843514", opacity: 0 },
        {
          color: "#FCAD34",
          opacity: 1,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: strongRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-16 py-8 text-[#4C2514]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h1 ref={titleRef} className="text-center mb-8 font-bold text-6xl">
        About Batik
      </h1>

      <p
        ref={paraRef}
        className="text-center max-w-5xl font-medium mx-auto mb-12"
      >
        Batik is the art of decorating fabric using wax-resist dyeing
        techniques. Every motif in Batik carries a deep philosophy, reflecting
        values, prayers, and hopes of Indonesian society. Today, Batik is not
        only a traditional garment but also a global cultural identity of
        Indonesia.
      </p>

      {/* Timeline */}
      <div className="container mx-auto w-full h-full p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4C2514] mb-12">
          History of Batik
        </h2>

        <div className="relative wrap overflow-hidden h-full">
          {/* Garis Vertikal */}
          <div
            ref={lineRef}
            className="hidden md:block absolute bg-[#843514] opacity-40 w-1 h-full left-1/2 transform -translate-x-1/2"
          ></div>

          {batikHistoryData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const alignment = isLeft ? "md:flex-row-reverse" : "";

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`timeline-item mb-12 flex justify-between items-center w-full ${alignment}`}
              >
                <div className="hidden md:block w-5/12"></div>

                {/* Icon */}
                <div className="z-20 flex items-center bg-[#FCAD34] shadow-xl w-10 h-10 rounded-full border-4 border-[#4C2514]">
                  <div className="mx-auto text-[#4C2514]">
                    <BatikIcon />
                  </div>
                </div>

                {/* Konten */}
                <div className="bg-white rounded-lg shadow-xl w-full md:w-5/12 p-6 border-l-4 border-[#843514]">
                  <span className="inline-block bg-[#843514] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-[#4C2514] text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <strong ref={strongRef} className="block text-center mt-6 text-2xl">
        In 2009, UNESCO recognized Batik as an Intangible Cultural Heritage.
      </strong>
    </section>
  );
};

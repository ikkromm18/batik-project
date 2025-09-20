import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- SUGGESTION: Using Pekalongan-specific motifs for more authentic content ---
const motifData = [
  {
    name: "Jlamprang (Pekalongan)",
    philosophy:
      "Terinspirasi dari bunga teratai, melambangkan hubungan antara manusia, alam semesta, dan Sang Pencipta.",
    imageUrl: "https://i.imgur.com/8a8p7gC.jpg", // Placeholder - ganti dengan gambar asli
  },
  {
    name: "Tujuh Rupa (Pekalongan)",
    philosophy:
      "Menggambarkan kekayaan alam pesisir dengan motif tumbuhan dan hewan, simbol akulturasi budaya yang harmonis.",
    imageUrl: "https://i.imgur.com/Y3dO4xL.jpg", // Placeholder - ganti dengan gambar asli
  },
  {
    name: "Buketan (Pekalongan)",
    philosophy:
      "Pengaruh Eropa yang kuat dengan motif rangkaian bunga, melambangkan keindahan, kebahagiaan, dan kecantikan.",
    imageUrl: "https://i.imgur.com/sW2m9yF.jpg", // Placeholder - ganti dengan gambar asli
  },
];

const MotifBatik = () => {
  const sectionRef = useRef(null);
  // Kita tidak perlu array ref lagi jika kita menargetkan anak dari sebuah kontainer
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(cardsContainerRef.current.children);

    const ctx = gsap.context(() => {
      // --- Animasi Header (Sudah Baik) ---
      gsap.from(".motif-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".motif-header",
          start: "top 80%",
        },
      });

      // --- Animasi Kartu (Stagger) ---
      gsap.from(cards, {
        opacity: 0,
        y: 100,
        rotate: -5, // Sedikit mengurangi rotasi agar lebih subtle
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2, // Sedikit mempercepat stagger
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 75%",
        },
      });

      // --- EFEK HOVER DENGAN GSAP ---
      cards.forEach((card) => {
        gsap.set(card, { transformOrigin: "center center" }); // Set titik pusat transformasi

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8, // Efek angkat sedikit lebih terasa
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FCAD34] py-20 px-4 sm:px-6 lg:px-8 text-[#4C2514]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center motif-header">
          <h2 className="text-base font-semibold tracking-wide uppercase text-[#843514]">
            Filosofi Batik Pekalongan
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-[#4C2514] tracking-tight sm:text-4xl">
            Makna di Balik Setiap Corak
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#4C2514]/80">
            Setiap motif batik pesisir memiliki makna yang mencerminkan nilai
            budaya, alam, doa, dan harapan masyarakatnya.
          </p>
        </div>

        {/* --- Grid Kartu Motif --- */}
        <div
          ref={cardsContainerRef}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {motifData.map((motif) => (
            <div
              key={motif.name}
              // HAPUS: class 'transform' dan 'transition' agar tidak konflik dengan GSAP
              // GANTI: dengan transisi untuk shadow saja
              className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-56 w-full object-cover" // Sedikit lebih tinggi agar proporsional
                  src={motif.imageUrl}
                  alt={`Motif Batik ${motif.name}`}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-bold text-[#843514]">
                    {motif.name}
                  </p>
                  <p className="mt-3 text-base text-[#4C2514]">
                    {motif.philosophy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotifBatik;

// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardAbout from "../components/CardAbout";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pinSectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cardData = [
    {
      title: "INTRODUCING MY CULTURE",
      body: "I grew up in Pekalongan, one of the biggest batik-producing cities in Indonesia. Batik is everywhere here — from school lessons to everyday outfits. It’s part of who I am.",
    },
    {
      title: "CLEARING MISCONCEPTIONS",
      body: "Many people, even Indonesians, still think “batik” is just a cloth or the name of a fashion style. But actually, it’s more than that — it’s a centuries-old wax-resist dyeing technique with patterns that tell stories, carry meaning, and reflect identity.",
    },
    {
      title: "KEEPING TRADITION ALIVE (WITH A MODERN TWIST)",
      body: "Batik is an ancient tradition, but that doesn’t mean it has to be boring. I want to make it feel alive, relatable, and Instagram-worthy for younger generations — without losing its roots.",
    },
    {
      title: "BATIK DESERVES THE SPOTLIGHT",
      body: "Batik isn’t just fabric; it’s culture, history, and identity woven into every thread. If we don’t talk about it, share it, and celebrate it, it might fade away. And I’m not letting that happen on my watch.",
    },
    {
      title: "I CAN’T GRADUATE WITHOUT IT",
      body: "Yes, this is my graduation project — and yes, I do want to graduate. Which means if you’re reading this and learning something about batik, you’re already helping me get one step closer to my diploma.",
    },
  ];

  useLayoutEffect(() => {
    if (!pinSectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: pinSectionRef.current,
      start: "top top",
      end: () => "+=" + document.querySelector(".card").scrollHeight,
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.batch(cardsRef.current, {
      start: "top 80%",
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        }),
      once: true,
    });

    // ScrollTrigger.refresh();

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="">
        <section className="relative h-screen bg-[url('/images/bg-about.jpg')] bg-cover bg-center bg-no-repeat pt-16">
          {/* Garis atas */}
          <hr className="relative z-0 w-full border-dashed custom-dash" />

          {/* Teks BATIK */}
          <h1
            className="relative z-0 text-[300px] font-bold text-[#FCAD34] text-center leading-none"
            style={{ fontFamily: "Irish Grover, cursive" }}
          >
            BATIK
          </h1>

          {/* Garis bawah */}
          <hr className="relative z-0 w-full border-dashed custom-dash" />

          {/* Gambar di tengah bawah */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
            <img
              className="max-w-[400px] w-full"
              src="/images/batik-pw2.png"
              alt="Batik"
            />
          </div>
        </section>

        <section className="min-h-screen bg-[#843514]">
          <div className="flex flex-col p-16 space-y-4 pt-28">
            {/* Icon Information */}
            <div className="flex items-center justify-center p-5 rounded-full bg-[#FCAD34] w-16 h-16">
              <p className="text-4xl font-bold">i</p>
            </div>

            <h2
              className="text-4xl text-[#FCAD34] font-extrabold leading-relaxed max-w-4xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              THIS WEBSITE IS A PLATFORM TO SHARE STORIES ABOUT BATIK, THE THEME
              OF MY GRADUATION PROJECT. ALL PHOTOS, VIDEOS, AND INFORMATION ARE
              TAKEN AND WRITTEN BY ME
            </h2>
          </div>
        </section>

        <section className="min-h-screen bg-[#843514]">
          <div className="flex flex-col items-center justify-center p-16 space-y-4 pt-28">
            {/* Bagian Title yang akan ngefreeze */}
            <div
              ref={pinSectionRef}
              className="flex flex-col items-center justify-center min-h-screen"
            >
              <div className="flex items-center justify-center p-5 rounded-full bg-[#FCAD34] w-16 h-16">
                <p className="text-4xl font-bold">i</p>
              </div>
              <h2
                className="text-8xl text-[#FCAD34] font-extrabold leading-28 max-w-2xl text-center"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                WHY I MADE THIS ?
              </h2>
            </div>

            {/* Bagian Card */}
            <div className="w-full card">
              {cardData.map((cd, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`min-h-screen flex 
        ${index % 3 === 0 ? "justify-start" : ""} 
        ${index % 3 === 1 ? "justify-end" : ""} 
        ${index % 3 === 2 ? "justify-center" : ""}`}
                >
                  <div className="max-w-xl">
                    <CardAbout title={cd.title} body={cd.body} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=" bg-[#4C2514]">
          <div className="flex space-x-8">
            {/* Text */}
            <div className="flex flex-col justify-between max-w-3xl px-4 py-7">
              <h2
                className="text-4xl text-[#FCAD34] font-extrabold leading-relaxed "
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                HOPE YOU ENJOY EXPLORING MORE ABOUT BATIK !
              </h2>
              <p
                className=" text-[#FCAD34] font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quas molestiae distinctio cum fuga itaque nihil
                perspiciatis totam in accusantium.
              </p>
            </div>

            {/* Background Image Box */}
            <div
              className="w-full bg-center bg-cover shadow-lg h-[700px] rounded-2xl"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/1200x/18/8b/53/188b530790d5b24f66ba7bcf9cd7e741.jpg')",
              }}
            ></div>
          </div>
        </section>
      </div>
    </>
  );
}

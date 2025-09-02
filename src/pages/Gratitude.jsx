import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const peoples = [
  {
    id: 1,
    name: "Andi",
    role: "Classmate",
    photo: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    name: "Bu Sari",
    role: "Lecturer",
    photo: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    name: "Rina",
    role: "Friend",
    photo: "https://i.pravatar.cc/50?img=3",
  },
];

const Gratitude = () => {
  const pinSectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    if (!pinSectionRef.current) return;

    // Pin "GRATITUDE WALL"
    const gratitudeTrigger = ScrollTrigger.create({
      trigger: pinSectionRef.current,
      start: "top top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });

    // Pin "For People"
    const forPeopleTrigger = ScrollTrigger.create({
      trigger: ".for-people",
      start: "top-=150 top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });

    // Animasi cards (miring -> lurus)
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotate: i % 2 === 0 ? -15 : 15, // zigzag
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // ✅ bolak-balik
          },
        }
      );
    });

    return () => {
      gratitudeTrigger.kill();
      forPeopleTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={pinSectionRef}
        className="gratitude min-h-screen bg-[url('/images/bg-about.jpg')] 
           bg-cover bg-center bg-no-repeat 
           flex justify-center items-center p-4 text-[#FCAD34]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="font-extrabold text-9xl max-w-5xl text-center">
          GRATITUDE WALL
        </h1>
      </section>

      <section
        className="people bg-[#2D0D01] min-h-screen"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="min-h-screen text-center for-people pt-8">
          <div className=" inline rounded-4xl font-semibold outline-1 px-10 py-2 outline-[#FCAD34] text-5xl max-w-5xl text-[#FCAD34]">
            For People
          </div>
        </div>

        <div className="w-full flex flex-col gap-14 px-16">
          {peoples.map((people, index) => (
            <div
              key={people.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`min-h-[50vh] flex 
        ${index % 3 === 0 ? "justify-start" : ""} 
        ${index % 3 === 1 ? "justify-end" : ""} 
        ${index % 3 === 2 ? "justify-center" : ""}`}
            >
              <div className="max-w-xl card p-6 bg-[#FCAD34] rounded shadow-lg flex flex-col items-center">
                <div className="mb-4">
                  <img
                    src={people.photo}
                    className="w-72 rounded-lg"
                    alt={people.name}
                  />
                </div>
                <p className="font-bold text-xl mb-2">{people.name}</p>
                <p className="font-medium text-lg text-gray-700">
                  {people.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen bg-[#2D0D01] "></section>
    </>
  );
};

export default Gratitude;

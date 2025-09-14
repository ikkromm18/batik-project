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

const collabolators = [
  {
    id: 1,
    collabolators_name: "Batik Pusaka",
    address: "Jln Lhiend",
    photo: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 2,
    collabolators_name: "Tenun Nusantara",
    address: "Jl. Merdeka No. 10",
    photo: "https://i.pravatar.cc/50?img=5",
  },
];

const visitors = [
  {
    id: 1,
    name: "Willy",
    favorite_part: "Membatik",
    rating: "5",
  },
  {
    id: 2,
    name: "Ikrom",
    favorite_part: "About",
    rating: "5",
  },
];

const Gratitude = () => {
  const pinSectionRef = useRef(null);
  const peopleCardsRef = useRef([]);
  const collabCardsRef = useRef([]);

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
      start: "top-=200 top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });

    // Pin "For Collabolators"
    const forCollabTrigger = ScrollTrigger.create({
      trigger: ".for-collabolators",
      start: "top-=150 top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });

    const forVisitorsTrigger = ScrollTrigger.create({
      trigger: ".for-visitors",
      start: "top-=150 top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });

    // Animasi cards People
    peopleCardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotate: i % 2 === 0 ? -15 : 15 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Animasi cards Collabolators
    collabCardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotate: i % 2 === 0 ? -10 : 10 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      gratitudeTrigger.kill();
      forPeopleTrigger.kill();
      forCollabTrigger.kill();
      forVisitorsTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {/* HEADER */}
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

      {/* PEOPLE */}
      <section
        className="people bg-[#2D0D01] min-h-screen mb-16"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="sticky top-[150px] z-10  pt-8 text-center">
          <div className="inline rounded-4xl font-semibold outline-1 px-10 py-2 outline-[#FCAD34] text-5xl max-w-5xl text-[#FCAD34]">
            For People
          </div>
        </div>

        <div className="w-full flex flex-col gap-14 px-16">
          {peoples.map((people, index) => (
            <div
              key={people.id}
              ref={(el) => (peopleCardsRef.current[index] = el)}
              className={`min-h-[50vh] flex 
          ${index % 3 === 0 ? "justify-start" : ""} 
          ${index % 3 === 1 ? "justify-end" : ""} 
         `}
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

      {/* COLLABOLATORS */}
      <section
        className="collabolators bg-[#2D0D01] min-h-screen"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="sticky top-[150px] z-10 pt-8 text-center">
          <div className="inline rounded-4xl font-semibold outline-1 px-10 py-2 outline-[#FCAD34] text-5xl max-w-5xl text-[#FCAD34]">
            For Collabolators
          </div>
        </div>

        <div className="w-full flex flex-col gap-14 px-16">
          {collabolators.map((collab, index) => (
            <div
              key={collab.id}
              ref={(el) => (collabCardsRef.current[index] = el)}
              className={`min-h-[50vh] flex 
          ${index % 3 === 0 ? "justify-start" : ""} 
          ${index % 3 === 1 ? "justify-end" : ""} 
       `}
            >
              <div className="max-w-xl card p-6 bg-[#FCAD34] rounded shadow-lg flex flex-col items-center">
                <div className="mb-4">
                  <img
                    src={collab.photo}
                    className="w-72 rounded-lg"
                    alt={collab.collabolators_name}
                  />
                </div>
                <p className="font-bold text-xl mb-2">
                  {collab.collabolators_name}
                </p>
                <p className="font-medium text-lg text-gray-700">
                  {collab.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISITORS */}
      <section
        className="visitors bg-[#2D0D01] min-h-screen"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="sticky top-0 z-10 pt-8 text-center for-visitors">
          <div className="inline rounded-4xl font-semibold outline-1 px-10 py-2 outline-[#FCAD34] text-5xl max-w-5xl text-[#FCAD34]">
            For Visitors
          </div>
        </div>

        {/* Bagian sini tidak Muncul */}
        <div className="w-full flex flex-col gap-14 px-16">
          {peoples.map((people, index) => (
            <div
              key={people.id}
              ref={(el) => (peopleCardsRef.current[index] = el)}
              className={`min-h-[50vh] flex 
          ${index % 3 === 0 ? "justify-start" : ""} 
          ${index % 3 === 1 ? "justify-end" : ""} 
         `}
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
        {/* sampai sini */}
      </section>

      <section className="min-h-screen bg-[#2D0D01] "></section>
    </>
  );
};

export default Gratitude;

import { FaPencilAlt, FaStamp, FaPrint } from "react-icons/fa";
import CardDiscoverBatik from "../components/CardDiscoverBatik";

export default function DiscoverBatik() {
  const CardDiscoverData = [
    {
      icon: FaPencilAlt,
      title: "Batik Tulis",
      link: "https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg",
    },
    {
      icon: FaStamp,
      title: "Batik Cap",
      link: "https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg",
    },
    {
      icon: FaPrint,
      title: "Batik Printing",
      link: "https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg",
    },
  ];

  return (
    <>
      <section
        className="bg-[#FCAD34] min-h-screen py-16 px-8"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="max-w-2xl font-extrabold text-8xl text-[#4C2514]">
          DISCOVER BATIK
        </h1>
        <p className="max-w-sm mt-4 font-medium">
          Jelajahi berbagai jenis batik Indonesia dengan keindahan dan filosofi
          masing-masing.
        </p>

        <div className="mt-12">
          {CardDiscoverData.map((card, index) => (
            <CardDiscoverBatik
              key={index}
              icon={card.icon}
              title={card.title}
              link={card.link}
              reverse={index % 2 === 0} // Zigzag: index ganjil = reverse
            />
          ))}
        </div>
      </section>

      <section
        className="grid grid-cols-3 bg-[#FCAD34] text-[#4C2514]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col p-3 border-r-2 border-r-[#4C2514]">
          <div className="flex items-center gap-2">
            <div className="icon bg-[#4C2514] p-3 rounded-full">
              <FaPencilAlt color="#fff" />
            </div>
            <h5 className="text-lg font-semibold">Batik Tulis</h5>
          </div>
          <div className="mt-2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in
            mollitia ipsum amet molestias. Voluptates sequi maiores consequatur
            voluptatem asperiores?
          </div>
          <div className="mt-28">
            <img
              className="object-cover w-full rounded-sm h-96"
              src="https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col p-3 border-r-2 border-r-[#4C2514]">
          <div className="flex items-center gap-2">
            <div className="icon bg-[#4C2514] p-3 rounded-full">
              <FaPencilAlt color="#fff" />
            </div>
            <h5 className="text-lg font-semibold">Batik Tulis</h5>
          </div>
          <div className="mt-2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in
            mollitia ipsum amet molestias. Voluptates sequi maiores consequatur
            voluptatem asperiores?
          </div>
          <div className="mt-28">
            <img
              className="object-cover w-full rounded-sm h-96"
              src="https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col p-3 border-r-2 border-r-[#4C2514]">
          <div className="flex items-center gap-2">
            <div className="icon bg-[#4C2514] p-3 rounded-full">
              <FaPencilAlt color="#fff" />
            </div>
            <h5 className="text-lg font-semibold">Batik Tulis</h5>
          </div>
          <div className="mt-2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro in
            mollitia ipsum amet molestias. Voluptates sequi maiores consequatur
            voluptatem asperiores?
          </div>
          <div className="mt-28">
            <img
              className="object-cover w-full rounded-sm h-96"
              src="https://i.pinimg.com/736x/7e/75/b1/7e75b14439f4b4cd47139d0fc5bdfb74.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

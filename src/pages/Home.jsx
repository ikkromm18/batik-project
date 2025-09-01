import { Footer, FooterIcon } from "flowbite-react";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/homepage.mp4" // simpan di public/videos/
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay hitam tipis biar teks jelas */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Tulisan di Tengah */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ fontFamily: "Irish Grover, cursive" }}
      >
        <p className="text-3xl font-semibold text-yellow-300">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="text-3xl font-semibold text-yellow-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sit.
        </p>
        <h1 className="font-bold text-7xl sm:text-9xl md:text-[200px] lg:text-[300px] text-yellow-300">
          BATIK
        </h1>
        <p className="text-3xl font-semibold text-yellow-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sit.
        </p>
        <p className="text-3xl font-semibold text-yellow-300">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Footer Sosial Media */}
      <Footer
        container
        className="absolute bottom-0 left-0 w-full px-8 py-4 bg-transparent"
      >
        <div className="flex justify-center space-x-6">
          <FooterIcon
            href="#"
            icon={BsYoutube}
            className="text-2xl text-yellow-300 hover:text-yellow-400"
          />
          <FooterIcon
            href="#"
            icon={FaTiktok}
            className="text-2xl text-yellow-300 hover:text-yellow-400"
          />
          <FooterIcon
            href="#"
            icon={BsInstagram}
            className="text-2xl text-yellow-300 hover:text-yellow-400"
          />
        </div>
      </Footer>
    </div>
  );
}

export default Home;

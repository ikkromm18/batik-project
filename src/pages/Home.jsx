import { Footer } from "flowbite-react";

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
        <p className="text-2xl font-semibold text-yellow-300 mb-2">
          Noble Heritage, Pride of the Indonesian Nation
        </p>
        <h1 className="font-bold text-[200px] text-yellow-300 leading-none">
          PATTERNS
        </h1>
        <h1 className="font-bold text-[200px] text-yellow-300 leading-none -mt-8">
          OF HERITAGE
        </h1>
        <p className="text-2xl font-semibold text-yellow-300 mt-4">
          Discover the timeless beauty of Indonesia traditional motifs
        </p>
      </div>

      {/* Footer Language Selector */}
      <Footer
        container
        className="absolute bottom-0 left-0 w-full px-8 py-4 bg-transparent"
      ></Footer>
    </div>
  );
}

export default Home;

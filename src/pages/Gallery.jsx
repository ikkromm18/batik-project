import GalleryList from "./../components/GalleryList";

const Gallery = () => {
  return (
    <>
      <div className="min-h-screen bg-[#4C2514]/95">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-[#FCAD34]">
            Indonesian Batik Gallery
          </h1>
          <p className="text-[#FCAD34]/80 mt-2 text-sm">
            Explore the beauty and meaning behind Indonesia's traditional batik
            patterns
          </p>
        </header>

        <GalleryList />

        <footer className="text-center py-6 text-[#FCAD34]/60 text-sm">
          © {new Date().getFullYear()} Galeri Batik Nusantara — Crafted with ❤️
        </footer>
      </div>
    </>
  );
};

export default Gallery;

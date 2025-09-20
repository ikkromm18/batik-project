import React, { useState } from "react";

// --- Data untuk item galeri ---
const galleryItems = [
  {
    id: 1,
    name: "Batik Parang",
    origin: "Yogyakarta",
    philosophy:
      "Motif Parang melambangkan kekuatan, keberanian, dan pantang menyerah. Garis diagonal yang tegas menggambarkan ombak lautan yang tak pernah berhenti bergerak, sebagai nasihat untuk tidak pernah menyerah menghadapi tantangan hidup.",
    // Ganti dengan path gambar Anda
    imageUrl: "https://i.ibb.co/L63Jg00/batik-parang.jpg",
  },
  {
    id: 2,
    name: "Batik Kawung",
    origin: "Solo",
    philosophy:
      "Kawung adalah simbol kesucian, keseimbangan, dan umur panjang. Terinspirasi dari buah aren yang dibelah empat, motif ini melambangkan empat penjuru mata angin dan harapan agar manusia selalu ingat akan asal-usulnya.",
    imageUrl: "https://i.ibb.co/hK5Xj1W/batik-kawung.jpg",
  },
  {
    id: 3,
    name: "Batik Mega Mendung",
    origin: "Cirebon",
    philosophy:
      "Mega Mendung mewakili kesabaran, keteduhan, dan harapan akan kehidupan yang tenang. Bentuk awan yang berlapis-lapis menggambarkan proses kehidupan manusia yang harus dilalui dengan sabar untuk mencapai kebijaksanaan.",
    imageUrl: "https://i.ibb.co/2Z5d2hJ/batik-megamendung.jpg",
  },
  {
    id: 4,
    name: "Batik Pesisir",
    origin: "Pekalongan",
    philosophy:
      "Batik Pekalongan atau Pesisir terkenal dengan polanya yang cerah dan beragam. Motifnya banyak dipengaruhi oleh budaya global seperti Tiongkok dan Eropa, menampilkan gambar bunga, burung, dan buket yang dinamis.",
    imageUrl: "https://i.ibb.co/Y0V7nQp/batik-pekalongan.jpg",
  },
  // Anda bisa menambahkan lebih banyak item di sini
];

const GaleriBatik = () => {
  // State untuk mengelola modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk membuka modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section id="galeri" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Galeri Batik
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi ragam corak batik dari seluruh Indonesia. Setiap karya
            menyimpan cerita dan filosofi yang mendalam.
          </p>
        </div>

        {/* --- Grid Galeri --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openModal(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white text-lg font-semibold p-4">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Komponen Modal --- */}
      {isModalOpen && selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Menutup modal saat area luar diklik
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam diklik
          >
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedItem.name}
              </h2>
              <p className="text-sm font-semibold text-purple-600 mt-1">
                {selectedItem.origin}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {selectedItem.philosophy}
              </p>
              <button
                onClick={closeModal}
                className="mt-6 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg self-start hover:bg-gray-300 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GaleriBatik;

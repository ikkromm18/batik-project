import { Link } from "react-router-dom"; // kalau React Router
// import Link from "next/link"; // kalau Next.js

export default function GalleryCard({ id, name, origin, image, category }) {
  return (
    <Link to={`/gallery/${id}`}>
      <div className="group bg-[#4C2514] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#FCAD34]/20 hover:border-[#FCAD34]/40 relative">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {category && (
            <div className="absolute top-3 left-3 bg-[#FCAD34] text-[#4C2514] px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              {category}
            </div>
          )}
        </div>

        <div className="p-5 relative z-10">
          <div className="flex items-center text-[#FCAD34]/90 mb-2">
            <svg
              className="w-3 h-3 mr-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs font-medium truncate">{origin}</p>
          </div>
          <h2 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-[#FCAD34] transition-colors duration-300">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

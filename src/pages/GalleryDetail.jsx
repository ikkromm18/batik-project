import React from "react";
import { useParams, Link } from "react-router-dom";
import batikData from "../data/galeryData";

export default function GalleryDetail() {
  const { id } = useParams();
  const batik = batikData.find((b) => b.id === parseInt(id));

  if (!batik) return <p className="text-white p-10">Batik not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3A1C0F] to-[#5C2E18] p-6 pt-16">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          to="/gallery"
          className="inline-flex items-center text-[#FCAD34]/90 hover:text-[#FCAD34] transition-colors duration-300 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Gallery
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FCAD34] to-[#FF6B35] rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <img
                src={batik.image}
                alt={batik.name}
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#4C2514]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#FCAD34]/20 shadow-2xl">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-5 h-5 text-[#FCAD34]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#FCAD34] font-semibold text-lg">
                    {batik.origin}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {batik.name}
                </h1>

                {batik.category && (
                  <span className="inline-block bg-gradient-to-r from-[#FCAD34] to-[#FF8C34] text-[#4C2514] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {batik.category}
                  </span>
                )}
              </div>

              {/* Symbolism Section */}
              <div className="mb-6 p-4 bg-[#843514]/40 rounded-xl border-l-4 border-[#FCAD34]">
                <h3 className="text-[#FCAD34] font-bold text-lg mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Symbolic Meaning
                </h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  {batik.symbolism}
                </p>
              </div>

              {/* Description Section */}
              <div className="mb-6">
                <h3 className="text-[#FCAD34] font-bold text-lg mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Cultural Significance
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {batik.description}
                </p>
              </div>

              {/* Additional Info (if needed in future) */}
              <div className="pt-4 border-t border-[#FCAD34]/20">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Traditional Batik Motif</span>
                  <span>Cultural Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FCAD34]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

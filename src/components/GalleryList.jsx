// src/components/GalleryList.jsx
import React from "react";
import GalleryCard from "./GalleryCard";
import batikData from "../data/galeryData";

export default function GalleryList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[#FCAD34]/10">
      {batikData.map((batik) => (
        <GalleryCard key={batik.id} {...batik} />
      ))}
    </div>
  );
}

import React from "react";

export const DiscoverHero = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col bg-[#FCAD34] text-[#4C2514]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h1 className="font-extrabold text-[260px] leading-52">BATIK</h1>
      <h2 className="text-6xl font-extrabold text-center max-w-5xl">
        INDONESIA'S INTANGIBLE CULTURAL HERITAGE
      </h2>
      <p className="font-medium text-2xl mt-4">
        Discover the beauty and philosophy of Batik
      </p>
      <div className="px-6 py-3 text-[#FCAD34] bg-[#4C2514] rounded-full mt-4 font-medium">
        Exprole Now
      </div>
    </section>
  );
};

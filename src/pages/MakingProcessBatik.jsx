import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MakingProcessBatik() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const materials = [
    {
      name: "Kain Mori",
      image: "/materials/mori-cloth.jpg",
      description:
        "The main fabric made of 100% cotton with smooth surface that easily absorbs wax and dye. Must be clean and dry before use.",
      features: ["100% Cotton", "Smooth Surface", "High Absorbency"],
    },
    {
      name: "Malam (Wax)",
      image: "/materials/malam-wax.jpg",
      description:
        "A mixture of beeswax and paraffin that functions as dye-resist. Different compositions affect melting point and cracking patterns.",
      features: ["Beeswax & Paraffin", "Dye-Resist", "Adjustable Composition"],
    },
    {
      name: "Canting",
      image: "/materials/canting-tool.jpg",
      description:
        "Traditional tool with copper bowl and spout attached to bamboo handle. Used for applying hot wax with precision.",
      features: ["Copper Bowl", "Bamboo Handle", "Precision Application"],
    },
  ];

  const processes = [
    {
      step: 1,
      name: "Nyungging",
      subtitle: "Designing the Motif",
      type: "video",
      src: "./videos/nyungging.webm",
      description:
        "The artist begins by drawing the initial batik design on paper. This stage requires creativity and deep understanding of traditional batik patterns and meanings.",
      details: [
        "Creative design process",
        "Traditional pattern research",
        "Master reference creation",
      ],
    },
    {
      step: 2,
      name: "Njaplak / Jiplak",
      subtitle: "Transferring the Pattern",
      type: "video",
      src: "./videos/njaplak.webm",
      description:
        "The completed paper design is placed under the mori cloth, and outlines are traced onto fabric using pencil for accurate proportions.",
      details: ["Pattern tracing", "Proportion accuracy", "Pencil outlining"],
    },
    {
      step: 3,
      name: "Nglowong",
      subtitle: "Outlining with Wax",
      type: "video",
      src: "./videos/nglowong.webm",
      description:
        "Using a canting, hot malam is carefully applied to trace over pencil outlines. Waxed lines protect areas from dye - requires steady hands and focus.",
      details: ["Canting technique", "Wax application", "Steady hand required"],
    },
    {
      step: 4,
      name: "Ngiseni",
      subtitle: "Filling the Motif",
      type: "video",
      src: "./videos/ngiseni.webm",
      description:
        "Artist adds smaller details and patterns inside larger motifs using canting. Fine details like dots, curves, and lines give character and texture.",
      details: ["Detail work", "Texture creation", "Pattern refinement"],
    },
    {
      step: 5,
      name: "Nyolet",
      subtitle: "Coloring with a Brush",
      type: "video",
      src: "./videos/nyolet.webm",
      description:
        "Color is added to specific parts using a brush for gentle blending and shading effects. Usually done before first full dyeing process.",
      details: ["Brush application", "Color blending", "Shading effects"],
    },
    {
      step: 6,
      name: "Mopok",
      subtitle: "Covering Colored Areas",
      type: "video",
      src: "./videos/mopok.webm",
      description:
        "After brushing color, areas are covered with wax to protect them from next dye bath. Ensures colors stay bright and don't mix.",
      details: ["Color protection", "Wax covering", "Layer preservation"],
    },
    {
      step: 7,
      name: "Ngelir",
      subtitle: "Dyeing the Fabric",
      type: "video",
      src: "./videos/ngelir.webm",
      description:
        "Fabric is dipped into dye bath. Unwaxed areas absorb color while waxed parts remain unchanged. Repeated for multiple colors.",
      details: [
        "Dye bath immersion",
        "Color absorption",
        "Multi-layer process",
      ],
    },
    {
      step: 8,
      name: "Nglorod",
      subtitle: "Removing the Wax",
      type: "video",
      src: "./videos/nglorod.webm",
      description:
        "Fabric is boiled in hot water to remove wax. Wax melts and floats to surface, revealing colorful design underneath.",
      details: ["Hot water boiling", "Wax removal", "Design revelation"],
    },
    {
      step: 9,
      name: "Ngrentesi",
      subtitle: "Adding Fine Details",
      type: "video",
      src: "./videos/ngrentesi.webm",
      description:
        "Artist adds tiny dots, thin lines, or textures using canting. Adds depth and refinement - signature of batik tulis craftsmanship.",
      details: ["Fine dot work", "Depth creation", "Final refinement"],
    },
    {
      step: 10,
      name: "Nglorod",
      subtitle: "Final Wax Removal",
      type: "video",
      src: "./videos/nglorod.webm",
      description:
        "Last wax removal process completely clears all remaining wax. After rinsing and drying, batik cloth is ready - a unique handmade artwork.",
      details: ["Complete wax removal", "Final rinsing", "Artwork completion"],
    },
  ];

  // Reset video states when step changes
  useEffect(() => {
    setIsVideoLoading(true);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeStep]);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
    console.error("Video failed to load");
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3A1C0F] to-[#5C2E18] py-8">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Batik <span className="text-[#FCAD34]">Making Process</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the intricate art of traditional batik creation, from
            initial design to final masterpiece. Each step reflects centuries of
            craftsmanship and cultural heritage.
          </p>
        </div>
      </div>

      {/* Materials & Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FCAD34] mb-4">
            Materials & Tools
          </h2>
          <p className="text-white/80 text-lg">
            Essential elements that bring batik art to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="group">
              <div className="bg-[#4C2514]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#FCAD34]/20 hover:border-[#FCAD34]/40 transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4C2514]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {material.name}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {material.description}
                  </p>

                  <div className="space-y-2">
                    {material.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-[#FCAD34] text-sm"
                      >
                        <svg
                          className="w-4 h-4 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FCAD34] mb-4">
            10 Steps of Batik Creation
          </h2>
          <p className="text-white/80 text-lg">
            The meticulous journey from blank cloth to cultural masterpiece
          </p>
        </div>

        {/* Process Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {processes.map((process, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeStep === index
                    ? "bg-[#FCAD34] text-[#4C2514] shadow-lg"
                    : "bg-[#4C2514] text-[#FCAD34]/80 border border-[#FCAD34]/30 hover:border-[#FCAD34]/60"
                }`}
              >
                Step {process.step}
              </button>
            ))}
          </div>
        </div>

        {/* Process Display */}
        <div className="bg-[#4C2514]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#FCAD34]/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FCAD34] to-[#FF6B35] rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              <div className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden bg-[#3A1C0F]">
                {processes[activeStep].type === "video" && (
                  <>
                    <iframe
                      src={processes[activeStep].src}
                      title={processes[activeStep].name}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Video Loading Overlay */}

                    {/* Video Play/Pause Overlay */}
                    {!isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={toggleVideoPlay}
                          className="bg-[#FCAD34] text-[#4C2514] p-4 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300"
                        >
                          {isVideoPlaying ? (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Video Controls Bar */}
                    {!isVideoLoading && (
                      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">
                            {processes[activeStep].name}
                          </span>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={toggleVideoPlay}
                              className="text-white hover:text-[#FCAD34] transition-colors"
                            >
                              {isVideoPlaying ? "Pause" : "Play"}
                            </button>
                            <span className="text-white/70 text-xs">
                              Step {processes[activeStep].step}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Step Badge */}
              <div className="absolute top-4 left-4 bg-[#FCAD34] text-[#4C2514] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                Step {processes[activeStep].step}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {processes[activeStep].name}
                </h3>
                <p className="text-xl text-[#FCAD34] font-semibold mb-4">
                  {processes[activeStep].subtitle}
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  {processes[activeStep].description}
                </p>
              </div>

              {/* Process Details */}
              <div className="space-y-3">
                <h4 className="text-[#FCAD34] font-bold text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Key Activities
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {processes[activeStep].details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white/80 bg-[#843514]/30 rounded-lg px-4 py-3"
                    >
                      <div className="w-2 h-2 bg-[#FCAD34] rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeStep === 0
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-[#FCAD34] text-[#4C2514] hover:bg-[#FFB84D] transform hover:scale-105"
                  }`}
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(processes.length - 1, prev + 1)
                    )
                  }
                  disabled={activeStep === processes.length - 1}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeStep === processes.length - 1
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-[#FCAD34] text-[#4C2514] hover:bg-[#FFB84D] transform hover:scale-105"
                  }`}
                >
                  Next
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-white/60 text-sm mb-2">
            <span>
              Step {activeStep + 1} of {processes.length}
            </span>
            <span>
              {Math.round(((activeStep + 1) / processes.length) * 100)}%
              Complete
            </span>
          </div>
          <div className="w-full bg-[#4C2514] rounded-full h-3">
            <div
              className="bg-[#FCAD34] h-3 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((activeStep + 1) / processes.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FCAD34]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

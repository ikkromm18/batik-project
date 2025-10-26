import React from "react";
import { Link } from "react-router-dom";

export default function HistoryBatik() {
  const historyData = [
    {
      period: "Ancient Origins (4th Century BC - 14th Century AD)",
      items: [
        {
          image:
            "https://historicaleve.com/wp-content/uploads/2023/01/Ancient-Egyptian-Mummy-The-Man-Behind-the-Mask-Louvre-Museum.jpg",
          title: "Ancient Egyptian Mummy Wrappings",
          description:
            "Batik-like resist dyeing existed in Egypt in the 4th century BC, where linen was soaked in wax and scratched using a stylus to wrap mummies. This technique continued into the medieval Byzantine era.",
          century: "4th Century BC",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Niya_batik.jpg/250px-Niya_batik.jpg",
          title: "Fragment from Niya, Tarim Basin",
          description:
            "Dyed textile fragments from 3rd-4th century China showing early resist dyeing techniques that predate Javanese batik development.",
          century: "3rd-4th Century AD",
        },
        {
          image:
            "https://collectionapi.metmuseum.org/api/collection/v1/iiif/451718/885655/main-image",
          title: "Byzantine Textile with Biblical Scenes",
          description:
            "Early 6th century hanging from Byzantine Egypt demonstrating sophisticated resist dyeing techniques that influenced textile arts across trade routes.",
          century: "6th Century AD",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ceremonial_Banner_from_India%2C_possibly_14th_century%2C_Honolulu_Museum_of_Art.JPG/960px-Ceremonial_Banner_from_India%2C_possibly_14th_century%2C_Honolulu_Museum_of_Art.JPG?20171104005508",
          title: "Ceremonial Banner from India",
          description:
            "14th century Indian ceremonial banner showing resist dye techniques that may have influenced Southeast Asian batik traditions through maritime trade.",
          century: "14th Century AD",
        },
      ],
    },
    {
      period: "Development in Java (8th - 16th Century)",
      items: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Prajnaparamita_clothes_detail.JPG/250px-Prajnaparamita_clothes_detail.JPG",
          title: "Prajnaparamita Statue Detail",
          description:
            "13th century East Javanese statue showing clothing details with patterns similar to traditional batik motifs, suggesting early development during Java's Hindu-Buddhist period.",
          century: "13th Century",
        },
        {
          image:
            "https://www.murnis.com/murnis_wp/wp-content/uploads/2016/11/batik7-1.jpg",
          title: "Oldest Javanese Batik Fragment",
          description:
            "Blue-white valance carbon dated to 13th-14th century Majapahit period, representing the oldest surviving physical evidence of sophisticated batik techniques in Java.",
          century: "13th-14th Century",
        },
        {
          image:
            "https://www.murnis.com/murnis_wp/wp-content/uploads/2022/03/Antique-Central-Javanese-Batik-14-2-600x600.jpg",
          title: "Early Javanese Court Batik",
          description:
            "Batik craft flourished in Islamic courts of Java, partly motivated by desire to replicate prestigious Indian patola textiles brought through Indian Ocean trade.",
          century: "15th-16th Century",
        },
      ],
    },
    {
      period: "Modern Era (17th - 20th Century)",
      items: [
        {
          image:
            "https://i.pinimg.com/736x/a9/ca/a7/a9caa756c03815af9c496ead231932df.jpg",
          title: "19th Century Javanese Batik Wear",
          description:
            "Depiction from 'The History of Java' showing early 19th century Javanese citizens wearing batik sarongs, documenting the tradition's prevalence.",
          century: "Early 19th Century",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sarong%2C_Northern_Java%2C_Indonesia%2C_1900-1910%2C_cotton_-_Cincinnati_Art_Museum_-_DSC04349.JPG/250px-Sarong%2C_Northern_Java%2C_Indonesia%2C_1900-1910%2C_cotton_-_Cincinnati_Art_Museum_-_DSC04349.JPG",
          title: "Pesisir Coastal Style Sarong",
          description:
            "Early 20th century sarong from northern Javanese coast showing Chinese and European influences in coastal batik production.",
          century: "Early 20th Century",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Batik_pedalaman_-_sidha_drajat.JPG/250px-Batik_pedalaman_-_sidha_drajat.JPG",
          title: "Contemporary Solo Batik",
          description:
            "Modern inland batik from Solo, Indonesia with sidha drajat pattern, maintaining traditional techniques while evolving designs.",
          century: "Contemporary",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Afrikanische_Textilien.jpg/250px-Afrikanische_Textilien.jpg",
          title: "African Wax Print Adaptation",
          description:
            "Waxprint fabrics in Togo, representing African adaptation of Javanese batik with larger motifs, thicker lines, and brighter colors.",
          century: "19th-20th Century",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3A1C0F] to-[#5C2E18] py-8 pt-24">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            History of <span className="text-[#FCAD34]">Batik</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A journey through centuries of cultural heritage, from ancient
            resist dyeing techniques to the sophisticated art form we know
            today.
          </p>
        </div>
      </div>

      {/* Timeline Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {historyData.map((period, periodIndex) => (
          <section key={periodIndex} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#FCAD34]/30 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Period Header */}
            <div className="relative mb-12">
              <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <div className="bg-[#4C2514] border border-[#FCAD34]/30 rounded-2xl px-6 py-4 shadow-2xl inline-block">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#FCAD34] text-center">
                    {period.period}
                  </h2>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-36 gap-8">
              {period.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`relative group ${
                    itemIndex % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:mt-20"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-6 w-4 h-4 bg-[#FCAD34] rounded-full border-4 border-[#3A1C0F] transform -translate-x-1/2 z-10 hidden lg:block"></div>

                  {/* Content Card */}
                  <div className="bg-[#4C2514]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#FCAD34]/20 hover:border-[#FCAD34]/40 transition-all duration-500 transform hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4C2514]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Century Badge */}
                      <div className="absolute top-4 right-4 bg-[#FCAD34] text-[#4C2514] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {item.century}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Historical Significance Section */}
      <div className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4C2514]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#FCAD34]/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#FCAD34] mb-6 text-center">
            Cultural Significance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#FCAD34] text-[#4C2514] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Global Influence
                  </h4>
                  <p className="text-sm">
                    From African wax prints to Aboriginal Australian art, batik
                    techniques have inspired textile traditions worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#FCAD34] text-[#4C2514] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    UNESCO Recognition
                  </h4>
                  <p className="text-sm">
                    Indonesian batik was recognized by UNESCO in 2009 as a
                    Masterpiece of Oral and Intangible Heritage of Humanity.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#FCAD34] text-[#4C2514] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Cultural Exchange
                  </h4>
                  <p className="text-sm">
                    Batik represents centuries of cultural exchange between
                    Java, India, China, Africa, and Europe through trade routes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#FCAD34] text-[#4C2514] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Technological Evolution
                  </h4>
                  <p className="text-sm">
                    From hand-drawn canting to copper stamp (cap) printing,
                    batik techniques have evolved while preserving traditional
                    methods.
                  </p>
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

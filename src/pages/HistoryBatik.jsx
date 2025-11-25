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
            "https://www.batikguild.org.uk/images/wax-resist-textile-niya-xinjiang-china.jpg",
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
            "https://www.batikguild.org.uk/images/13th-century-stone-carving-east-java-batik-patterns.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sarong%2C_Northern_Java%2C_Indonesia%2C_1900-1910%2C_cotton_-_Cincinnati_Art_Museum_-_DSC04349.JPG/960px-Sarong%2C_Northern_Java%2C_Indonesia%2C_1900-1910%2C_cotton_-_Cincinnati_Art_Museum_-_DSC04349.JPG?20130928112027",
          title: "Pesisir Coastal Style Sarong",
          description:
            "Early 20th century sarong from northern Javanese coast showing Chinese and European influences in coastal batik production.",
          century: "Early 20th Century",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Batik_pedalaman_-_sidha_drajat.JPG/960px-Batik_pedalaman_-_sidha_drajat.JPG",
          title: "Contemporary Solo Batik",
          description:
            "Modern inland batik from Solo, Indonesia with sidha drajat pattern, maintaining traditional techniques while evolving designs.",
          century: "Contemporary",
        },
        {
          image:
            "https://scope.cimsa.or.id/wp-content/uploads/2021/10/Afrikanische_Textilien.jpg",
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4C2514]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#FCAD34]/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#FCAD34] mb-6 text-center">
            What Is Batik ?
          </h2>

          <p className="text-sm text-white text-center font-light">
            <strong>Batik</strong> is a dyeing technique using wax resist. The
            term is also used to describe patterned textiles created with that
            technique. Batik is made by drawing or stamping wax on a cloth to
            prevent colour absorption during the dyeing process. This creates a
            patterned negative when the wax is removed from the dyed cloth.
            Artisans may create intricate coloured patterns with multiple cycles
            of wax application and dyeing. Patterns and motifs vary widely even
            within countries. Some patterns hold symbolic significance and are
            used only in certain occasions, while others were created to satisfy
            market demand and fashion trends.
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
                      <h3 className="text-xl font-bold text-[#FCAD34] mb-3 leading-tight">
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

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FCAD34]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CardDiscoverBatik({
  icon: Icon,
  title,
  link,
  reverse = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  // Scale dari kecil (0.8) ke normal (1.05) terus settle di 1
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 1]);

  // Rotate: kalau reverse, awalnya miring kanan, kalau tidak, miring kiri
  const rotate = useTransform(scrollYProgress, [0, 1], [reverse ? 10 : -10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`min-h-[70vvh] flex flex-col md:flex-row items-center gap-8 mb-32 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text + Icon */}
      <div
        className="flex flex-col items-start"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#4C2514] p-3 rounded-full">
            <Icon color="#fff" />
          </div>
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        <p className="max-w-2xs text-[#4C2514]">
          Batik {title} adalah salah satu keunikan budaya Indonesia dengan corak
          khas dan teknik pembuatannya.
        </p>
      </div>

      {/* Image */}
      <img
        className="object-cover shadow-lg w-96 h-96 rounded-xl"
        src={link}
        alt={title}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import home from "../../../assets/LandingPage/home.webp";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
        <img
          src={home}
          alt="Mosaic Imports"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl w-full">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="
            font-black uppercase italic tracking-tighter leading-none
            text-[18vw]
            sm:text-[14vw]
            md:text-[10rem]
            lg:text-[12rem]
          ">
            MOSAIC
          </h1>

          <h1 className="
            font-black uppercase leading-none stroke-text
            text-[18vw]
            sm:text-[14vw]
            md:text-[10rem]
            lg:text-[12rem]
            py-1 sm:py-2
          ">
            IMPORTS
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="
            text-[#B59963] uppercase font-bold
            text-[8px]
            sm:text-[10px]
            md:text-sm
            tracking-[0.35em]
            sm:tracking-[0.6em]
            md:tracking-[1em]
            mt-6 sm:mt-8
          "
        >
          Curating Earths Finest Surfaces
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-16 sm:h-20 w-px bg-white/10">
        <motion.div
          animate={{ y: [0, 64] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-full h-1/2 bg-[#B59963]"
        />
      </div>
    </section>
  );
}

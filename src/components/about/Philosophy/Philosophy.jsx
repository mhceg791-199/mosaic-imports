import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import principles from "../../../data/principles";

gsap.registerPlugin(ScrollTrigger);

const ArchitecturalPhilosophy = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-mainColor text-lightColor py-12 px-6 md:px-24 overflow-hidden"
    >
      {/* ================= GRID BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(224,224,212,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(224,224,212,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(224,224,212,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(224,224,212,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="font-bold mb-16 text-center relative z-10">
        <SectionHeader firstWord="Our Philosophy" />
      </div>

      {/* ================= PRINCIPLES GRID ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {principles.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="
              group relative overflow-hidden
              bg-black/40 backdrop-blur-md
              p-10 border-2 border-lightColor/20
              hover:border-mainGold transition-all duration-500
            "
          >
            {/* ===== HOVER BACKGROUND ICON ===== */}
            <img
              src="/favicon.png"
              alt="background mark"
              className="
                pointer-events-none
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-40 md:w-56
                opacity-0 scale-75
                group-hover:opacity-[0.7]
                group-hover:scale-100
                transition-all duration-700 ease-out
              "
            />

            {/* Corners */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-mainGold/70" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-mainGold/70" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-mainGold/70" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-mainGold/70" />

            {/* Content */}
            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest text-mainGold">
                {item.id}
              </span>

              <h3 className="text-2xl font-bold mt-5 mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-lightColor/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalPhilosophy;
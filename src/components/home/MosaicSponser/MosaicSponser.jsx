import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../../assets/logo/logo2.webp";
import { partners } from "../../../data/partners";

gsap.registerPlugin(ScrollTrigger);

const MosaicSponsor = () => {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.set(coreRef.current, {
      y: 300,
      scale: 0.6,
      opacity: 0,
    });

    gsap.set(cardsRef.current, {
      scale: 1,
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=180%",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(cardsRef.current, {
      scale: 0.75,
      opacity: 0.25,
      stagger: 0.05,
      ease: "power2.out",
    }).to(
      coreRef.current,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "back.out(1.2)",
      },
      "-=0.4"
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden font-sans"
    >
      {/* ================= MAIN STAGE ================= */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        {/* ================= CORE SPONSOR ================= */}
        <div
          ref={coreRef}
          className="absolute z-50 w-72 h-72 md:w-[460px] md:h-[460px]
                     rounded-full flex items-center justify-center
                     bg-black/40 backdrop-blur-2xl
                     border border-secondColor/30
                     shadow-[0_0_120px_rgba(212,175,55,0.15)]"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Mosaic Imports Logo"
              className="w-40 md:w-80 object-contain
                         drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            />

            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="h-px w-28 bg-gradient-to-r from-transparent via-secondColor to-transparent" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-400 font-bold">
                Global Sourcing for the Built World
              </span>
            </div>
          </div>
        </div>

        {/* ================= PARTNERS GRID ================= */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 px-10 max-w-7xl">
            {partners.map((partner, i) => {
              const Wrapper = partner.url ? "a" : "div";

              return (
                <Wrapper
                  key={partner.id}
                  ref={(el) => (cardsRef.current[i] = el)}
                  {...(partner.url && {
                    href: partner.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`group block ${
                    partner.url ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div
                    className={`
                      flex flex-col items-center justify-center gap-5
                      py-8 px-3 rounded-2xl
                      bg-zinc-900/30 border border-white/5
                      backdrop-blur-md transition-all duration-500
                      hover:border-mainColor hover:scale-105
                    `}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 md:h-28 object-contain
                                 opacity-80 group-hover:opacity-100 transition"
                    />

                    <span
                      className="text-[11px] md:text-sm text-parag text-center
                                 opacity-0 translate-y-2 transition-all duration-300
                                 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      {partner.name}
                    </span>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicSponsor;
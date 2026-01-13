import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import EngineeringProgress from "../../shared/Progress/Progress";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // ========= Engineering Progress (Global Scroll) =========
    gsap.to(".scroll-progress-circle", {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    // ========= Overview Section Animations =========
    const ctx = gsap.context(() => {
      // geo lines
      gsap.from(".geo-line", {
        width: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // reveal text
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // floating shapes parallax
      gsap.to(".floating-shape", {
        y: -150,
        rotate: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // accent card
      gsap.from(".accent-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".accent-card",
          start: "top 85%",
        },
      });
    }, sectionRef);

    // cleanup (مهم جدًا)
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] text-white font-sans min-h-screen overflow-x-hidden"
    >
      {/* Global Engineering Progress */}
      <EngineeringProgress />

      {/* Overview Section */}
      <section
        ref={sectionRef}
        className="relative min-h-screen py-24 px-6 md:px-24 overflow-hidden flex items-center"
      >
        {/* Section Header */}
        <div className="absolute top-10 left-1/2 text-lightColor -translate-x-1/2 z-20">
          <SectionHeader firstWord="Overview" />
        </div>

        {/* Background geometry */}
        <div className="absolute inset-0">
          <div className="geo-line absolute top-[50%] right-0 h-[1px] bg-white/5 w-1/3 origin-right" />
          <div className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] border border-[#384e38]/20 rounded-full floating-shape opacity-20" />
          <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] border border-[#b79769]/10 rotate-45 floating-shape opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Left column */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="reveal-text text-5xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter uppercase">
              Global<br />Sourcing<br />
              <span
                className="text-mainColor italic"
                // style={{ WebkitTextStroke: "1px #384e38" }}
              >
                For Built World
              </span>
            </h2>

            <div className="reveal-text p-8 border-r-4 border-[#384e38] bg-[#384e38]/5 backdrop-blur-sm mb-12">
              <p className="text-lg text-gray-400 leading-relaxed font-light italic">
                "Supplying materials, systems, and products that shape
                construction, engineering, architecture, and modern living —
                through intelligent sourcing and trusted global partnerships."
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-10 order-1 lg:order-2">
            <div className="reveal-text space-y-10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Mosaic Imports is a global sourcing and import company operating
                under{" "}
                <span className="text-white font-bold border-b border-secondColor">
                  <Link to="https://mosaicholding.com/" target="_blank"  rel="noopener noreferrer">Mosaic Holding Incorporation</Link>
                </span>
                . It was established to respond to one essential reality of the
                built environment:
                <span className="text-secondColor font-bold mx-1 italic">
                  projects are only as strong as the materials behind them.
                </span>
              </p>

              <div className="accent-card p-10 bg-gradient-to-bl from-[#384e38]/20 to-transparent border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-[2px] bg-mainColor" />
                <div className="absolute top-0 right-0 h-20 w-[2px] bg-mainColor" />

                <p className="text-lg text-gray-400 relative z-10 leading-loose">
                  The company specializes in sourcing, importing, and supplying
                  a wide range of construction, engineering, architectural, and
                  interior materials from international markets. Operating as a
                  standalone commercial entity,{" "}
                  <span className="text-white">
                    Mosaic Imports serves developers, contractors, engineering
                    firms, and architects
                  </span>{" "}
                  across multiple sectors.
                </p>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed pr-8 border-r-2 border-[#b79769]/30">
                With a structured procurement mindset and a deep understanding
                of how projects function on the ground, Mosaic Imports bridges
                the gap between global supply and local execution.
              </p>
            </div>
          </div>
        </div>

        {/* Blueprint text */}
        <div className="absolute left-10 bottom-10 vertical-text hidden xl:block pointer-events-none">
          <span className="text-[180px] font-black text-white/[0.03] tracking-tighter">
            OVERVIEW
          </span>
        </div>
      </section>
    </div>
  );
};

export default Overview;

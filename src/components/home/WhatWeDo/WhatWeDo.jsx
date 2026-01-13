import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  LucideSearch,
  LucideCheckCircle,
  LucideTruck,
  LucideWorkflow,
} from "lucide-react";

import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const mosaicTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. حركة كلمة Mosaic عند السكرول (Parallax Effect)
      gsap.to(mosaicTextRef.current, {
        x: -150,
        opacity: 0.15,
        scrollTrigger: {
          trigger: mosaicTextRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      //       // 2. خط الحركة العمودي (Vertical animated line)
      // Vertical animated line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Steps reveal
      gsap.utils.toArray(".step-node").forEach((node, i) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: i % 2 === 0 ? -120 : 120,
          duration: 1.2,
          ease: "expo.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: "We source intelligently",
      desc: "Identifying reliable suppliers aligned with technical, functional, and design requirements.",
      icon: <LucideSearch size={22} />,
    },
    {
      title: "We align specifications",
      desc: "Ensuring materials match project needs, standards, and performance expectations.",
      icon: <LucideCheckCircle size={22} />,
    },
    {
      title: "We manage imports",
      desc: "Coordinating logistics and supply flows with clarity and consistency.",
      icon: <LucideTruck size={22} />,
    },
    {
      title: "We support projects end-to-end",
      desc: "From early-stage sourcing to phased delivery across project lifecycles.",
      icon: <LucideWorkflow size={22} />,
    },
  ];

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      // className="relative min-h-screen py-12 px-6 font-mono overflow-hidden bg-lightColor text-mainColor"
      className="relative min-h-screen py-12 px-6 font-mono bg-lightColor text-mainColor"
    >
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(theme(colors.secondColor) 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <SectionHeader firstWord="What We Do" />

          <p className="max-w-2xl mx-auto mt-5 text-lg md:text-xl font-light italic border-x border-mainGold/40 px-6 md:px-10">
            “Mosaic Imports manages the critical link between global
            manufacturing and on-site delivery.”
          </p>
        </div>

        {/* Workflow */}
        <div className="relative">
          {/* Static line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-mainColor/20" />

          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top hidden md:block bg-mainGold shadow-[0_0_12px_rgba(197,163,99,0.6)]"
          />

          <div className="space-y-12 md:space-y-32">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`step-node flex flex-col md:flex-row items-center gap-10 md:gap-24 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                    {step.title}
                  </h3>

                  <p className="opacity-70 leading-relaxed">{step.desc}</p>
                </div>

                {/* Node */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-mainGold text-mainColor shadow-[0_0_20px_rgba(197,163,99,0.3)] hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 md:mt-48 py-14 px-4  md:p-14 rounded-3xl relative overflow-hidden bg-white/80 border border-mainColor/20">
          <div
            ref={mosaicTextRef}
            className="absolute top-6 right-[-5%] text-7xl md:text-9xl font-black opacity-5 uppercase select-none pointer-events-none whitespace-nowrap"
          >
            Mosaic
          </div>

          <p className="text-2xl md:text-3xl font-light leading-tight max-w-4xl">
            We work across categories, disciplines, and scales — adapting our
            sourcing approach to each project instead of forcing projects into
            rigid supply models.
          </p>

          <div className="mt-10 h-px w-24 bg-mainGold hover:w-full transition-all duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

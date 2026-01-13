import React, { useState, useRef, useEffect } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import LightPillar from "../LightPillar/LightPillar";
import reasons from "../../../data/reasons";

const DURATION = 4000;
const STEP_TIME = 40;
const STEP = 100 / (DURATION / STEP_TIME);

const WhyMosaicImports = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  /* ================= AUTO + PROGRESS ================= */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + STEP >= 100) {
          setActiveTab((c) => (c + 1) % reasons.length);
          return 0;
        }
        return prev + STEP;
      });
    }, STEP_TIME);

    return () => clearInterval(interval);
  }, [isPaused, reasons.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-mainColor text-lightColor relative overflow-hidden"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 min-h-screen flex flex-col">
        {/* ================= HEADER ================= */}
        <div className="font-bold mb-6">
          <SectionHeader firstWord="Why Mosaic Imports" />
        </div>

        <p className="text-lightColor/70 max-w-3xl text-lg leading-relaxed">
          Mosaic Imports operates at the intersection of technical understanding
          and global access.
        </p>
        <p className="text-lightColor/70 max-w-3xl text-lg leading-relaxed mb-4">
          We are built for professionals who value clarity over complication and quality over shortcuts.
        </p>

        <p className="text-lightColor/70 max-w-3xl text-lg leading-relaxed mb-6">
          What sets us apart is not only what we source, but how we source it.
        </p>

        

        {/* ================= INTERACTIVE AREA ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
          {/* ================= NAVIGATION ================= */}
          <div
            className="lg:col-span-5 space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {reasons.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={`w-full text-left p-6 rounded-2xl border relative overflow-hidden transition-all duration-500 ${
                  activeTab === index
                    ? "bg-lightColor/10 border-lightColor/20"
                    : "border-transparent hover:bg-lightColor/5"
                }`}
              >
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-lightColor/10">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center gap-6">
                  <div
                    className={`p-3 rounded-xl ${
                      activeTab === index
                        ? "bg-lightColor text-mainColor"
                        : "bg-lightColor/10 text-lightColor/50"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-xs tracking-widest text-lightColor/50 uppercase mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ================= PREVIEW CARD ================= */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-mainGold/20 to-secondColor/20 rounded-[2rem] blur-2xl" />

            <div
              key={activeTab}
              className="relative h-full rounded-[2rem] border border-lightColor/10 overflow-hidden"
            >
              {/* ===== LightPillar Background ===== */}
              <div className="absolute inset-0 z-0 opacity-70">
                <LightPillar
                  topColor="#C5A363"
                  bottomColor="#384e38"
                  intensity={1}
                  glowAmount={0.004}
                  pillarWidth={2.6}
                  pillarHeight={0.35}
                  noiseIntensity={0.4}
                  rotationSpeed={0.25}
                  interactive={false}
                  mixBlendMode="screen"
                />
              </div>

              {/* ===== Card Content ===== */}
              <div className="relative z-10 h-full  p-12 flex flex-col justify-center animate-fadeIn">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reasons[activeTab].color} flex items-center justify-center mb-10`}
                >
                  {React.cloneElement(reasons[activeTab].icon, {
                    className: "w-10 h-10 text-lightColor",
                  })}
                </div>

                <h2 className="text-4xl font-bold mb-6">
                  {reasons[activeTab].title}
                </h2>

                <p className="text-xl text-lightColor/80 leading-relaxed">
                  {reasons[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMosaicImports;
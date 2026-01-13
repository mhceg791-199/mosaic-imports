import { useState, useEffect } from "react";
import { Globe, Layers, ShieldCheck } from "lucide-react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

const GlobalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7000;
  const PROGRESS_INTERVAL = 50;

  const slides = [
    {
      id: 0,
      label: "Global Presence",
      title: "GLOBAL PRESENCE",
      icon: <Globe className="w-5 h-5" />,
      highlight: "4,000+ Projects | 20+ Countries",
      description:
        "With experience drawn from more than 4,000 projects delivered across 20+ countries, Mosaic Imports operates with a global perspective shaped by real-world execution across diverse markets and project types.",
    },
    {
      id: 1,
      label: "Integrated Knowledge",
      title: "INTEGRATED ECOSYSTEM",
      icon: <Layers className="w-5 h-5" />,
      highlight: "Engineering & Real-Estate",
      description:
        "We function within a broader ecosystem of architecture, engineering, and real-estate — allowing us to anticipate material requirements beyond theoretical specifications.",
    },
    {
      id: 2,
      label: "Independence",
      title: "STRATEGIC AUTONOMY",
      icon: <ShieldCheck className="w-5 h-5" />,
      highlight: "Independent Operations",
      description:
        "While deeply connected to this network, Mosaic Imports operates independently and serves a wide range of external clients across global markets — without limiting its reach.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section className="min-h-screen bg-lightColor text-lightColor flex items-center justify-center px-6 md:p-6 selection:bg-mainGold/30">
      <div className="w-full h-[80vh] max- bg-mainColor border border-lightColor/10 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="text-center py-14">
          <SectionHeader firstWord="Global Presence & Ecosystem" />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex-[1.4] p-10 md:p-16 flex flex-col justify-center">
            <div
              key={currentSlide}
              className="animate-in fade-in slide-in-from-bottom-6 duration-700"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-mainGold/10 text-mainGold border border-mainGold/30 shadow-[0_0_20px_rgba(197,163,99,0.15)]">
                  {slides[currentSlide].icon}
                </div>

                <div className="h-px w-10 bg-mainGold/40" />

                <span className="text-mainGold tracking-[0.4em] text-[11px] font-black uppercase">
                  {slides[currentSlide].title}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-lightColor">
                {slides[currentSlide].highlight}
              </h2>

              <p className="text-lg text-lightColor/70 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* RIGHT STEPPER */}
          <div className="flex-1 md:max-w-[360px] bg-mainColor/90 border-l border-lightColor/10 p-10 flex flex-col justify-center gap-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => handleSlideClick(index)}
                className={`group cursor-pointer transition-all duration-500 ${
                  currentSlide === index
                    ? "translate-x-2"
                    : "hover:translate-x-1"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                      currentSlide === index
                        ? "text-mainGold"
                        : "text-lightColor/40 group-hover:text-lightColor/70"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}. {slide.label}
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="h-1 w-full bg-lightColor/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-mainGold shadow-[0_0_10px_rgba(197,163,99,0.6)]"
                    style={{
                      width: currentSlide === index ? `${progress}%` : "0%",
                      opacity: currentSlide === index ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSlider;
import { useState } from "react";
import { MoveRight } from "lucide-react";
import sectors from "../../../data/industries";
import { useNavigate } from "react-router-dom";

const Industries = () => {
  const [activeSection, setActiveSection] = useState(0);
  const nav = useNavigate();

  return (
    <div className="relative min-h-[85vh] bg-lightColor text-mainColor font-sans overflow-hidden">
      <section className="flex flex-col md:flex-row h-[85vh] ">
        {/* Intro */}
        <div className="w-full md:w-1/4  p-6 md:p-14 flex flex-col justify-center border-r border-mainColor/10 bg-lightColor">
          <h2 className="text-5xl md:text-5xl font-black mb-8 leading-[0.9] tracking-tight uppercase">
            Industries <br /> We Serve
          </h2>

          <h4 className="text-mainColor/70 paragraph mb-3 font-bold">
            Mosaic Imports works across the built environment, serving:
          </h4>

          <p className="text-mainColor/90 text-sm leading-relaxed mb-10">
            This cross-sector reach allows us to adapt our sourcing approach
            while maintaining consistent standards across industries.
          </p>

          <div className="flex items-center gap-4 text-mainGold">
            <div className="w-11 h-11 rounded-full border border-mainGold flex items-center justify-center">
              <MoveRight className="w-5 h-5" />
            </div>
            <span
              className="text-[10px] font-bold tracking-widest uppercase cursor-pointer transition duration-300 hover:text-mainColor hover:tracking-[0.2em]"
              onClick={() => nav("/services")}
            >
              Explore Sectors
            </span>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              onMouseEnter={() => setActiveSection(index)}
              className="relative h-full flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer"
              style={{ flexGrow: activeSection === index ? 4 : 1 }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${
                  activeSection === index ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundColor: "rgba(56,78,56,0.55)" }}
              />

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={sector.img}
                  alt={sector.title}
                  className={`w-full h-full object-cover transition-all duration-700
                  ${activeSection === index ? "grayscale-0" : "grayscale"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mainColor/90 via-transparent to-mainColor/40" />
              </div>

              {/* Index */}
              <div className="absolute top-10 left-10 z-20 text-mainGold text-4xl font-black font-mono opacity-40">
                {sector.id}
              </div>

              {/* Expanded Content */}
              <div
                className={`absolute bottom-0 left-0 w-full p-10 z-30 transition-all duration-500 ${
                  activeSection === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-mainGold mb-5">{sector.icon}</div>
                <h3 className="text-lightColor text-2xl font-semibold mb-3">
                  {sector.title}
                </h3>
                <p className="text-lightColor/80 text-sm max-w-xs">
                  {sector.content}
                </p>
              </div>

              {/* Collapsed Label */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
                  activeSection === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-lightColor/80 font-bold uppercase tracking-[0.4em] -rotate-90">
                  {sector.title.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;

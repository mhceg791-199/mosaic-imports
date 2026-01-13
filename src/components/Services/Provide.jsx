export default function Provide() {
  return (
    <section className="relative pt-14 md:pt-32 pb-3 md:pb-20 px-6 lg:px-20 overflow-hidden bg-lightColor">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="reveal-text text-5xl md:text-8xl text-white font-black leading-[0.9] mb-10 tracking-tighter uppercase">
              What We<br />
              <span
                className="text-mainColor italic"
              >
                Provide
              </span>
            </h2>
          <p className="max-w-2xl text-mainColor/70 paragraph leading-relaxed font-light ">
            Mosaic Imports delivers comprehensive sourcing and import solutions across the built environment.
          </p>
          <p className="max-w-2xl text-mainColor/70 paragraph leading-relaxed font-light ">
            Our services are designed to integrate seamlessly into project workflows — supporting efficiency, consistency, and dependable execution.
          </p>
        </div>
      </section>
  )
}

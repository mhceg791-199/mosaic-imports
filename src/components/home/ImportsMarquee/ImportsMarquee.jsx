// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { LucideArrowDown } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const ImportsMarquee = () => {
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(marqueeRef.current, {
//         xPercent: -20,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0.5,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-12 md:py-24 bg-mainColor overflow-hidden"
//     >
//       <div
//         ref={marqueeRef}
//         className="flex whitespace-nowrap will-change-transform"
//       >
//         {[1, 2, 3, 4].map((i) => (
//           <div key={i} className="flex items-center gap-16 px-10">
//             <span className="text-black text-[12vw] font-black uppercase tracking-tighter leading-none italic">
//               Mosaic Imports LTD
//             </span>

//             <div className="w-20 h-20 bg-black flex items-center justify-center rotate-45">
//               <LucideArrowDown
//                 size={40}
//                 className="text-secondColor -rotate-45"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImportsMarquee;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ImportsMarquee = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        marqueeRef.current,
        { xPercent: 0 },
        {
          xPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-28 bg-mainColor overflow-hidden"
    >
      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />

      <div
        ref={marqueeRef}
        className="relative z-10 flex whitespace-nowrap will-change-transform"
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center gap-16 px-10 select-none"
          >
            <span
              className="
                text-black
                text-[14vw]
                md:text-[10vw]
                font-black
                uppercase
                tracking-tighter
                leading-none
                italic
              "
            >
              Mosaic Imports LTD
            </span>

            <div
              className="
                w-20 h-20
                bg-black
                flex items-center justify-center
                rotate-45
                border border-black/20
                shadow-[0_0_40px_rgba(0,0,0,0.2)]
              "
            >
              <LucideArrowDown
                size={36}
                className="text-secondColor -rotate-45"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportsMarquee;

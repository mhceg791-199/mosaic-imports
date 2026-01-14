// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function GridSVG() {
//   const svgRef = useRef(null);
//   const pathRef = useRef(null);

//   useEffect(() => {
//     /* ================= DRAWING ANIMATION ================= */
//     const pathLength = 160;

//     gsap.set(pathRef.current, {
//       strokeDasharray: pathLength,
//       strokeDashoffset: pathLength,
//     });

//     const drawingTl = gsap.to(pathRef.current, {
//       strokeDashoffset: 0,
//       duration: 3,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     /* ================= MOUSE PARALLAX ================= */
//     const handleMouseMove = (e) => {
//       const xPos = (e.clientX - window.innerWidth / 2) * 0.01;
//       const yPos = (e.clientY - window.innerHeight / 2) * 0.01;

//       gsap.to(svgRef.current, {
//         x: xPos,
//         y: yPos,
//         duration: 1.5,
//         ease: "power2.out",
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       drawingTl.kill();
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0">
//       <svg
//         ref={svgRef}
//         width="100%"
//         height="100%"
//         className="will-change-transform"
//       >
//         <defs>
//           <pattern
//             id="gridPattern"
//             width="80"
//             height="80"
//             patternUnits="userSpaceOnUse"
//           >
//             {/* Grid Lines */}
//             <path
//               ref={pathRef}
//               d="M 80 0 L 0 0 0 80"
//               fill="none"
//               stroke="rgba(212,175,55,0.3)"
//               strokeWidth="1"
//             />

//             {/* Intersection Glow Dot */}
//             <circle
//               cx="0"
//               cy="0"
//               r="1.5"
//               fill="#D4AF37"
//               style={{
//                 filter: "drop-shadow(0 0 4px #D4AF37)",
//               }}
//             />
//           </pattern>
//         </defs>

//         <rect width="100%" height="100%" fill="url(#gridPattern)" />
//       </svg>
//     </div>
//   );
// }
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GridSVG() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const pathLength = 160;

    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const drawTl = gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    let active = false;

    const move = (e) => {
      if (!active) return;

      const x = (e.clientX - window.innerWidth / 2) * 0.008;
      const y = (e.clientY - window.innerHeight / 2) * 0.008;

      gsap.to(svgRef.current, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    ScrollTrigger.create({
      trigger: svgRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => (active = true),
      onLeave: () => (active = false),
      onEnterBack: () => (active = true),
      onLeaveBack: () => (active = false),
    });

    window.addEventListener("mousemove", move);

    return () => {
      drawTl.kill();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg ref={svgRef} width="100%" height="100%">
        <defs>
          <pattern id="gridPattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              ref={pathRef}
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(212,175,55,0.25)"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
    </div>
  );
}

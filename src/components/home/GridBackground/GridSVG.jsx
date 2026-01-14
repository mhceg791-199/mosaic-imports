import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GridSVG() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    /* ================= DRAWING ANIMATION ================= */
    const pathLength = 160;

    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const drawingTl = gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    /* ================= MOUSE PARALLAX ================= */
    const handleMouseMove = (e) => {
      const xPos = (e.clientX - window.innerWidth / 2) * 0.01;
      const yPos = (e.clientY - window.innerHeight / 2) * 0.01;

      gsap.to(svgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      drawingTl.kill();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="will-change-transform"
      >
        <defs>
          <pattern
            id="gridPattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid Lines */}
            <path
              ref={pathRef}
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(212,175,55,0.3)"
              strokeWidth="1"
            />

            {/* Intersection Glow Dot */}
            <circle
              cx="0"
              cy="0"
              r="1.5"
              fill="#D4AF37"
              style={{
                filter: "drop-shadow(0 0 4px #D4AF37)",
              }}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
    </div>
  );
}

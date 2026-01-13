import React from "react";

const EngineeringProgress = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[100] w-20 h-20 pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        className="transform -rotate-90 drop-shadow-[0_0_8px_rgba(183,151,105,0.3)]"
      >
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="rgba(183, 151, 105, 0.1)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Progress stroke (GSAP target) */}
        <circle
          className="scroll-progress-circle"
          cx="50"
          cy="50"
          r="42"
          stroke="#b79769"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="264"
          strokeDashoffset="264"
          strokeLinecap="square"
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[8px] font-mono tracking-widest text-[#b79769]">
          MOSAIC
        </span>
        <div className="w-1 h-1 bg-[#b79769] rounded-full mt-1 animate-pulse" />
      </div>
    </div>
  );
};

export default EngineeringProgress;

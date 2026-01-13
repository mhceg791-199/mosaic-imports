import { useEffect } from "react";
import { useSpring } from "framer-motion";

export const useSmoothMouse = (config = { damping: 25, stiffness: 150 }) => {
  const mouseX = useSpring(0, config);
  const mouseY = useSpring(0, config);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
};

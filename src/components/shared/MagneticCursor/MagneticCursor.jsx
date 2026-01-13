import { motion } from "framer-motion";
import { useSmoothMouse } from "../../../hooks/useSmoothMouse";

const MagneticCursor = ({
  size = 48,
  color = "#b79769",
  dotSize = 4,
  borderWidth = 1,
  blendMode = "normal",
}) => {
  const { mouseX, mouseY } = useSmoothMouse();

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        borderWidth,
        borderColor: color,
        mixBlendMode: blendMode,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
    >
      <div
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: color,
        }}
        className="rounded-full"
      />
    </motion.div>
  );
};

export default MagneticCursor;

import Overview from "../Overview/Overview";
import GridSVG from "./GridSVG";

const GridBackground = () => {
  return (
    <div className="relative w-full bg-black overflow-hidden flex items-center justify-center">
      <Overview />
      <GridSVG />
    </div>
  );
};

export default GridBackground;
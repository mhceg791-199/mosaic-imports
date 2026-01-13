import HeroSection from "../../components/home/HeroSection/HeroSection";
import GridBackground from "../../components/home/GridBackground/GridBackground";
import ImportsMarquee from "../../components/home/ImportsMarquee/ImportsMarquee";
import WhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";
// import GlobalSection from "../../components/home/GlobalSection/GlobalSection";
import GlobalSlider from "../../components/home/GlobalSlider/GlobalSlider";
import MosaicSponser from "../../components/home/MosaicSponser/MosaicSponser";

const MosaicHome = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <GridBackground />
      <ImportsMarquee />
      <div id="navbar-trigger" className="h-px w-full" />
      <WhatWeDo />
      {/* <GlobalSection /> */}
      <GlobalSlider/>

      <MosaicSponser/>
    </div>
  );
};

export default MosaicHome;
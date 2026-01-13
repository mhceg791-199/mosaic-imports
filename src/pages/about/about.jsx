import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import IndustriesSection from "../../components/about/Industries/Industries";
import Philosophy from "../../components/about/Philosophy/Philosophy";
import WhyMosaicImports from "../../components/about/WhyMosaicImports/WhyMosaicImports";

function About() {
  const paragraphs = [
    "Mosaic Imports is part of a wider vision shaped by Mosaic Holding Corporation — a group built on the idea that complex systems are stronger when individual pieces work together.",
    "Like a mosaic, each company within the group retains its own identity and expertise, while contributing to a larger, interconnected whole. Mosaic Imports was created to serve as the sourcing and supply backbone within this ecosystem — translating global access into practical, project-ready solutions.",
    "Grounded in real industry experience and shaped by collaboration across architecture, engineering, and real estate, Mosaic Imports was built to support how the built world actually operates.",
  ];

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-mosaic-imports"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        particleColors={["#384e38", "#384e38"]}
        height="h-[50vh] md:h-[55vh]"
      />
      <IndustriesSection/>
      <Philosophy/>
      <WhyMosaicImports/>
    </>
  );
}

export default About;
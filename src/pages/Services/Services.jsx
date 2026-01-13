import ProviderCard from "../../components/Services/ProviderCard/ProviderCard";
import Provide from "../../components/Services/Provide";
import Squares from "../../components/Services/Squares/Squares";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  return (
    <>
      <FirstSectionByVideo title="Services" />
      <Provide />
      <ProviderCard />
      <Squares size={50} speed={0.23} />
    </>
  );
}

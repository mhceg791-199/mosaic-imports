import { Compass, Globe, Cpu, Truck, Award } from "lucide-react";

const reasons = [
  {
    id: 0,
    icon: <Compass className="w-8 h-8" />,
    title: "Technical Understanding",
    subtitle: "Built on real engineering and construction expertise",
    description:
      "A clear understanding of construction, engineering, and architectural workflows.",
    color: "from-mainColor to-mainGold",
  },
  {
    id: 1,
    icon: <Cpu className="w-8 h-8" />,
    title: "Integrated Sourcing",
    subtitle: "Unified supply across project needs",
    description:
      "The ability to supply multiple material categories through one structured partner.",
    color: "from-secondColor to-mainGold",
  },
  {
    id: 2,
    icon: <Globe className="w-8 h-8" />,
    title: "Global Access",
    subtitle: "An international supplier network aligned to projects",
    description:
      "A global supplier network aligned with real project requirements.",
    color: "from-mainGold to-secondColor",
  },
  {
    id: 3,
    icon: <Truck className="w-8 h-8" />,
    title: "Flexible Delivery",
    subtitle: "Scalable delivery for diverse projects",
    description: "Flexibility across project size, sector, and complexity.",
    color: "from-mainColor to-secondColor",
  },
  {
    id: 4,
    icon: <Award className="w-8 h-8" />,
    title: "Reliable Partnerships",
    subtitle: "Long-term relationships built on consistency and trust",
    description:
      "A focus on reliability, consistency, and long-term relationships.",
    color: "from-mainGold to-mainColor",
  },
];

export default reasons;

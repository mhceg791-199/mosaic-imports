import {
  Construction,
  Compass,
  Scaling,
  Building,
  Palmtree,
  Warehouse,
} from "lucide-react";
import ind1 from '../assets/industries/photo-1.webp';
import ind2 from '../assets/industries/photo-2.webp';
import ind3 from '../assets/industries/photo-3.webp';
import ind4 from '../assets/industries/photo-4.webp';
import ind5 from '../assets/industries/photo-5.webp';
import ind6 from '../assets/industries/photo-6.webp';



const sectors = [
    {
      id: "01",
      title: "Construction & Contracting",
      content: "Construction and contracting companies",
      icon: <Construction className="w-7 h-7" />,
      img: ind1,
    },
    {
      id: "02",
      title: "Architecture & Design",
      content: "Architecture and design practices",
      icon: <Compass className="w-7 h-7" />,
      img: ind2,
    },
    {
      id: "03",
      title: "Engineering Consultancies",
      content: "Engineering consultancies",
      icon: <Scaling className="w-7 h-7" />,
      img: ind3,
    },
    {
      id: "04",
      title: "Real Estate Developers",
      content: "Real estate developers",
      icon: <Building className="w-7 h-7" />,
      img: ind4,
    },
    {
      id: "05",
      title: "Residential & Mixed-Use",
      content: "Residential and mixed-use projects",
      icon: <Palmtree className="w-7 h-7" />,
      img: ind5,
    },
    {
      id: "06",
      title: "Commercial & Institutional",
      content: "Commercial and institutional developments",
      icon: <Warehouse className="w-7 h-7" />,
      img: ind6,
    },
  ];

  export default sectors;
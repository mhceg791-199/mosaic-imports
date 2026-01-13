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







// import HeroSlider from "../../components/home/HeroSlider/HeroSlider";
// import WorldClock from "../../components/home/WorldClock/WorldClock";
// import LogoAnimation from "../../components/shared/Overview/Overview";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import ConstructionWhy from "../../components/home/ConstructionWhy/ConstructionWhy";

// function Home() {
//   const cities = [
//     { city: "Cairo", tz: "Africa/Cairo" },
//     { city: "Canada", tz: "America/Toronto" },
//     { city: "Dubai", tz: "Asia/Dubai" },
//     { city: "Hong Kong", tz: "Asia/Hong_Kong" },
//     { city: "Amsterdam", tz: "Europe/Amsterdam" },
//     { city: "Tokyo", tz: "Asia/Tokyo" },
//   ];

//   return (
//     <>
//       <HeroSlider />
//       <LogoAnimation />
//       <div className="px-6 my-10">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           // pagination={{
//           //   clickable: true,
//           // }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             480: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//           className="pb-10"
//         >
//           {cities.map((c) => (
//             <SwiperSlide key={c.city}>
//               <WorldClock city={c.city} tz={c.tz} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <ConstructionWhy />
//     </>
//   );
// }

// export default Home;

//////////////////////111111111111111111111111111111111111

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import HeroSection from '../../components/home/HeroSection/HeroSection';
// import GridBackground from '../../shared/GridBackground/GridBackground';
// // import Overview from '../../components/home/Overview/Overview';
// import ImportsMarquee from '../../components/home/ImportsMarquee/ImportsMarquee';
// import WhatWeDo from '../../components/home/WhatWeDo/WhatWeDo';
// import MagneticCursor from '../../components/shared/MagneticCursor/MagneticCursor';
// import GlobalSection from '../../components/home/GlobalSection/GlobalSection';

// // المكون الرئيسي لشركة Mosaic Imports
// const MosaicApp = () => {
//   // const [isLoaded, setIsLoaded] = useState(false);
//   // const containerRef = useRef(null);

//   // تتبع السكرول الأفقي للقسم الخاص بالخامات
//   // const { scrollYProgress } = useScroll({
//   //   target: containerRef,
//   //   offset: ["start start", "end end"]
//   // });

//   // تحويل السكرول العمودي إلى حركة أفقية
//   // const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

//   // useEffect(() => {
//   //   setIsLoaded(true);
//   // }, []);

//   return (
//     <div className="bg-[#0a0a0a] text-white overflow-x-hidden font-sans select-none">

//        <MagneticCursor
//         size={48}
//         color="#b79769"
//         blendMode="normal"
//       />
//       <HeroSection/>
//       <GridBackground/>
//       <ImportsMarquee/>
//       <div id="navbar-trigger" className="h-px w-full" />
//       <WhatWeDo/>
//       <GlobalSection/>
// {/* <GlobalBrife/> */}
//       {/* Navigation - القائمة العلوية */}
//       {/* <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
//         <div className="text-xl font-bold tracking-[0.3em]">MOSAIC <span className="font-light text-zinc-500">IMPORTS</span></div>
//         <div className="space-x-8 hidden md:flex items-center">
//           <a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-[#B59963] transition-colors">The Collection</a>
//           <a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-[#B59963] transition-colors">Our Process</a>
//           <button className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#B59963] hover:text-white transition-all">
//             Inquiry
//           </button>
//         </div>
//       </nav> */}

//       {/* Intro Section - مقدمة عن الشركة */}

//       {/* Horizontal Scroll Showcase - عرض الخامات بتمرير أفقي */}
//       {/* <div ref={containerRef} className="relative h-[400vh] bg-zinc-950">
//         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//           <motion.div style={{ x: xTransform }} className="flex gap-20 px-20">

//             <div className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 group relative overflow-hidden rounded-3xl">
//               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Glass Mosaic" />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute bottom-12 left-12 right-12">
//                 <span className="text-[#B59963] font-mono text-sm mb-2 block">02 / ARTISTRY</span>
//                 <h3 className="text-5xl font-bold mb-4 italic">Hand-cut Glass</h3>
//                 <p className="max-w-md text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   Transforming spaces into a kaleidoscope of light and movement with artisan techniques.
//                 </p>
//               </div>
//             </div>

//             <div className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 group relative overflow-hidden rounded-3xl">
//               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Glass Mosaic" />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute bottom-12 left-12 right-12">
//                 <span className="text-[#B59963] font-mono text-sm mb-2 block">02 / ARTISTRY</span>
//                 <h3 className="text-5xl font-bold mb-4 italic">Hand-cut Glass</h3>
//                 <p className="max-w-md text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   Transforming spaces into a kaleidoscope of light and movement with artisan techniques.
//                 </p>
//               </div>
//             </div>

//             <div className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 group relative overflow-hidden rounded-3xl">
//               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Glass Mosaic" />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute bottom-12 left-12 right-12">
//                 <span className="text-[#B59963] font-mono text-sm mb-2 block">02 / ARTISTRY</span>
//                 <h3 className="text-5xl font-bold mb-4 italic">Hand-cut Glass</h3>
//                 <p className="max-w-md text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   Transforming spaces into a kaleidoscope of light and movement with artisan techniques.
//                 </p>
//               </div>
//             </div>

//             <div className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 group relative overflow-hidden rounded-3xl">
//               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Glass Mosaic" />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute bottom-12 left-12 right-12">
//                 <span className="text-[#B59963] font-mono text-sm mb-2 block">02 / ARTISTRY</span>
//                 <h3 className="text-5xl font-bold mb-4 italic">Hand-cut Glass</h3>
//                 <p className="max-w-md text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   Transforming spaces into a kaleidoscope of light and movement with artisan techniques.
//                 </p>
//               </div>
//             </div>

//             <div className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 group relative overflow-hidden rounded-3xl">
//               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Glass Mosaic" />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
//               <div className="absolute bottom-12 left-12 right-12">
//                 <span className="text-[#B59963] font-mono text-sm mb-2 block">02 / ARTISTRY</span>
//                 <h3 className="text-5xl font-bold mb-4 italic">Hand-cut Glass</h3>
//                 <p className="max-w-md text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   Transforming spaces into a kaleidoscope of light and movement with artisan techniques.
//                 </p>
//               </div>
//             </div>

//           </motion.div>
//         </div>
//       </div> */}

//       {/* CTA Section - طلب الدليل الإرشادي */}
//       {/* <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 py-24">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-6xl md:text-[10rem] font-black mb-12 leading-none tracking-tighter">
//             IMPORTS<br/>OF ART.
//           </h2>
//           <p className="text-zinc-500 max-w-lg mx-auto mb-12 text-lg">
//             Request our exclusive guidebook for architects and designers to explore our latest collections.
//           </p>
//           <button className="group relative px-16 py-6 overflow-hidden rounded-full border border-black hover:text-white transition-colors duration-500">
//             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             <span className="relative z-10 text-xl font-bold tracking-widest uppercase">Request Guidebook</span>
//           </button>
//         </motion.div>
//       </section> */}

//       {/* CSS Styles for unique effects */}
//       {/* <style dangerouslySetInnerHTML={{ __html: `
//         .stroke-text {
//           -webkit-text-stroke: 1px rgba(255,255,255,0.3);
//         }
//         @media (max-width: 768px) {
//           .stroke-text { -webkit-text-stroke: 0.5px rgba(255,255,255,0.3); }
//         }
//         ::selection {
//           background: #B59963;
//           color: white;
//         }
//       `}} /> */}
//     </div>
//   );
// };

// export default MosaicApp;

/////////////////////22222222222222222222222222222222222222222

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// const collections = [
//   {
//     id: "01",
//     name: "CARRARA PURE",
//     origin: "TUSCANY, ITALY",
//     image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=1200",
//     color: "#D1D1D1"
//   },
//   {
//     id: "02",
//     name: "OBSIDIAN GLASS",
//     origin: "MURANO, VENICE",
//     image: "https://images.unsplash.com/photo-1599619351208-3e6c839d7824?q=80&w=1200",
//     color: "#1A1A1A"
//   },
//   {
//     id: "03",
//     name: "EMERALD QUARTZ",
//     origin: "MINAS GERAIS",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
//     color: "#064E3B"
//   }
// ];

// const MosaicImmersive = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   // تتبع حركة الماوس بسلاسة
//   const springConfig = { damping: 25, stiffness: 150 };
//   const mouseX = useSpring(0, springConfig);
//   const mouseY = useSpring(0, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

//   return (
//     <div className="bg-[#050505] text-[#E5E5E5] overflow-x-hidden selection:bg-[#B59963] selection:text-white">

//       {/* Custom Cursor - المؤشر المخصص الذي يعمل ككشاف */}
//       <motion.div
//         style={{ x: mouseX, y: mouseY }}
//         className="fixed top-0 left-0 w-12 h-12 border border-[#B59963] rounded-full pointer-events-none z-[999] flex items-center justify-center -ml-6 -mt-6"
//       >
//         <div className="w-1 h-1 bg-[#B59963] rounded-full" />
//       </motion.div>

//       {/* Hero Section with Parallax Text */}
//       <section className="relative h-screen flex items-center justify-center p-6 overflow-hidden">
//         <motion.div
//           style={{ scale, rotate }}
//           className="absolute inset-0 z-0"
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"
//             className="w-full h-full object-cover opacity-30 grayscale"
//             alt="Main Texture"
//           />
//         </motion.div>

//         <div className="relative z-20 text-center space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           >
//             <span className="text-[#B59963] tracking-[0.8em] text-xs uppercase font-bold block mb-4">The Art of Importing Nature</span>
//             <h1 className="text-[12vw] font-black leading-none uppercase tracking-tighter mix-blend-difference">
//               MOSAIC
//             </h1>
//             <div className="flex justify-center items-center gap-6 -mt-[2vw]">
//               <div className="h-[1px] w-20 bg-[#B59963]" />
//               <h1 className="text-[12vw] font-light leading-none uppercase italic text-[#B59963]">
//                 IMPORTS
//               </h1>
//               <div className="h-[1px] w-20 bg-[#B59963]" />
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-20 w-px bg-white/10">
//           <motion.div
//             animate={{ y: [0, 80] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="w-full h-1/2 bg-[#B59963]"
//           />
//         </div>
//       </section>

//       {/* Interactive Collection Grid */}
//       <section className="py-40 px-6 max-w-7xl mx-auto">
//         <div className="flex flex-col gap-40">
//           {collections.map((item, index) => (
//             <CollectionItem key={item.id} item={item} index={index} />
//           ))}
//         </div>
//       </section>

//       {/* The Guidebook Reveal - قسم طلب الدليل بشكل درامي */}
//       <section className="h-screen flex items-center justify-center relative bg-white text-black px-6">
//         <div className="absolute inset-0 overflow-hidden">
//            <motion.div
//             whileInView={{ scale: [1, 1.2], opacity: [0.1, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="absolute inset-0 flex items-center justify-center text-[30vw] font-black text-black/5"
//            >
//             GUIDE
//            </motion.div>
//         </div>

//         <div className="relative z-10 text-center max-w-3xl">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-xs uppercase tracking-[0.5em] font-bold text-[#B59963] mb-6 block"
//           >
//             Exclusive Access
//           </motion.span>
//           <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tight">MOMKEN TEBA3TY GUIDEBOOK?</h2>
//           <p className="text-zinc-500 mb-12 text-lg leading-relaxed">
//             Our 2024 Blueprint Guide is reserved for industry leaders. Dive deep into the specs, sourcing, and soul of Mosaic Imports.
//           </p>
//           <button className="px-12 py-5 bg-black text-white text-sm font-bold tracking-widest uppercase rounded-none hover:bg-[#B59963] transition-all duration-500 hover:scale-105 active:scale-95">
//             Download Experience Guide
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

// // مكون عرض المجموعة مع تأثير Reveal قوي
// const CollectionItem = ({ item, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });

//   return (
//     <motion.div
//       ref={ref}
//       className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}
//     >
//       <div className="w-full md:w-1/2 relative group">
//         <motion.div
//           initial={{ clipPath: "inset(0 100% 0 0)" }}
//           animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
//           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
//           className="aspect-[4/5] overflow-hidden"
//         >
//           <img
//             src={item.image}
//             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
//             alt={item.name}
//           />
//         </motion.div>
//         <div className="absolute -bottom-10 -right-10 hidden md:block">
//            <span className="text-9xl font-black text-white/5">{item.id}</span>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2 space-y-6" dir={index % 2 === 0 ? 'ltr' : 'rtl'}>
//         <motion.div
//           initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-[#B59963] font-mono text-sm tracking-widest">{item.origin}</span>
//           <h3 className="text-6xl md:text-8xl font-bold mt-2 leading-none uppercase">{item.name}</h3>
//           <div className="h-1 w-20 bg-[#B59963] mt-6" />
//           <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-md">
//             The raw essence of nature, curated for the modern architect. Every piece tells a story of a thousand years under the earth.
//           </p>
//           <button className="mt-8 group flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
//             Discover Collection
//             <div className="w-8 h-px bg-white group-hover:w-16 transition-all duration-500" />
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default MosaicImmersive;

///////////////////////////////3333333333333333333333333333333333333

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
// import { LucideArrowRight, LucideCompass, LucideMaximize2, LucideLayers, LucideMenu, LucideDownload } from 'lucide-react';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('foundation');
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Smooth mouse movement for parallax
//   const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const moveX = (clientX - window.innerWidth / 2) / 25;
//     const moveY = (clientY - window.innerHeight / 2) / 25;
//     mouseX.set(moveX);
//     mouseY.set(moveY);
//   };

//   return (
//     <div
//       className="bg-[#050505] text-[#e0e0e0] font-sans selection:bg-amber-500 selection:text-black min-h-screen overflow-x-hidden"
//       onMouseMove={handleMouseMove}
//     >

//       {/* Background Grid & Technical Noise */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
//           backgroundSize: '32px 32px'
//         }}></div>
//       </div>

//       {/* Persistent Navbar (As requested: Steady & Clean) */}
//       <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center border-b border-white/5 bg-black/40 backdrop-blur-xl">
//         <div className="flex items-baseline gap-1 group cursor-pointer">
//           <span className="text-2xl font-black tracking-tighter uppercase group-hover:text-amber-500 transition-colors">Mosaic</span>
//           <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
//           <span className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-40 ml-2 hidden sm:inline">Structural Arts</span>
//         </div>
//         <div className="hidden lg:flex gap-12 items-center text-[10px] font-bold uppercase tracking-[0.4em]">
//           <a href="#" className="hover:text-amber-500 transition-colors">المواد</a>
//           <a href="#" className="hover:text-amber-500 transition-colors">المشاريع</a>
//           <a href="#" className="hover:text-amber-500 transition-colors">عن موزاييك</a>
//           <a href="#" className="bg-amber-500 text-black px-8 py-3 hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]">ابدأ مشروعك</a>
//         </div>
//         <LucideMenu className="lg:hidden text-amber-500" />
//       </nav>

//       {/* --- REIMAGINED HERO SECTION: ARCHITECTURAL EXPLOSION --- */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">

//         {/* Abstract Geometric Elements (Animated) */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Large Floating Slab */}
//           <motion.div
//             style={{ x: springX, y: springY, rotate: -5 }}
//             className="absolute top-[20%] right-[10%] w-[40vw] h-[60vh] bg-gradient-to-br from-zinc-800/20 to-transparent border border-white/5 backdrop-blur-3xl z-0"
//           >
//             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
//           </motion.div>

//           {/* Floating Technical Lines */}
//           <motion.div
//             style={{ x: useTransform(springX, v => v * -1.5), y: useTransform(springY, v => v * -1.5) }}
//             className="absolute bottom-[15%] left-[5%] w-[30vw] h-[1px] bg-amber-500/20 rotate-45"
//           ></motion.div>

//           {/* Glowing Focus Point */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
//         </div>

//         {/* Content Layer */}
//         <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center">

//           {/* Top Label */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-6 flex items-center gap-4 text-amber-500 font-mono text-[10px] tracking-[0.6em] uppercase"
//           >
//             <span className="w-8 h-[1px] bg-amber-500/40"></span>
//             The Zenith of Import Engineering
//             <span className="w-8 h-[1px] bg-amber-500/40"></span>
//           </motion.div>

//           {/* Main Headline with Masking Effect */}
//           <div className="relative text-center">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//               className="text-7xl md:text-[11rem] font-black leading-[0.85] tracking-tighter uppercase mb-4"
//             >
//               CRAFTING <br />
//               <span className="relative inline-block">
//                  STRENGTH
//                  <motion.span
//                   initial={{ width: 0 }}
//                   animate={{ width: '100%' }}
//                   transition={{ delay: 0.5, duration: 1.2 }}
//                   className="absolute bottom-4 left-0 h-4 bg-amber-500/20 -z-10"
//                  ></motion.span>
//               </span>
//             </motion.h1>

//             {/* Kinetic Secondary Text */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="mt-8 flex flex-col md:flex-row items-center gap-12 justify-center"
//             >
//               <div className="flex -space-x-4">
//                 {[1,2,3].map(i => (
//                   <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden">
//                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" className="grayscale" />
//                   </div>
//                 ))}
//                 <div className="h-12 px-4 flex items-center bg-zinc-900 border border-white/10 rounded-full text-[10px] font-bold tracking-widest pl-8">
//                   +12 CONSULTANTS
//                 </div>
//               </div>

//               <p className="max-w-sm text-zinc-400 text-sm md:text-right leading-relaxed font-light italic">
//                 "نحن لا نستورد الرخام، نحن نعيد هندسة المساحات من خلال أدق التفاصيل التقنية وأفخم المواد العالمية."
//               </p>
//             </motion.div>
//           </div>

//           {/* CTA Group */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//             className="mt-20 flex flex-wrap justify-center gap-6"
//           >
//             <button className="group relative overflow-hidden bg-white text-black px-12 py-5 font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all hover:bg-amber-500">
//               استكشاف المجموعة
//               <LucideArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="border border-white/10 px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-colors">
//               عرض البروفايل الفني
//             </button>
//           </motion.div>

//         </div>

//         {/* Vertical Decorative Elements */}
//         <div className="absolute left-8 bottom-12 hidden md:block space-y-4">
//           <div className="h-20 w-[1px] bg-gradient-to-t from-amber-500 to-transparent mx-auto"></div>
//           <p className="text-[10px] font-mono rotate-180 [writing-mode:vertical-lr] tracking-[0.5em] text-zinc-600 uppercase">
//             ESTABLISHED 1998
//           </p>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
//         >
//           <span className="text-[8px] font-mono tracking-widest uppercase">Scroll to explore</span>
//           <div className="w-[1px] h-12 bg-white/20"></div>
//         </motion.div>
//       </section>

//       {/* --- SECTION: THE DNA OF QUALITY --- */}
//       <section className="py-32 relative">
//         <div className="max-w-7xl mx-auto px-8">
//           <div className="grid lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
//             {[
//               { icon: <LucideCompass />, title: "Precision Mapping", desc: "نستخدم تقنيات المسح الليزري لضمان دقة المقاسات في كل قطعة." },
//               { icon: <LucideLayers />, title: "Material Grading", desc: "تصنيف دقيق للخامات بناءً على الكثافة والصلابة الفيزيائية." },
//               { icon: <LucideMaximize2 />, title: "Scale Efficiency", desc: "حلول لوجستية عالمية تضمن وصول الطلبيات الضخمة في موعدها." }
//             ].map((item, idx) => (
//               <div key={idx} className="bg-[#050505] p-12 hover:bg-zinc-900/40 transition-colors group cursor-pointer">
//                 <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
//                 <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter">{item.title}</h3>
//                 <p className="text-zinc-500 text-sm leading-relaxed text-right">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION: THE ARCHITECTURAL PROTOCOL (Tabs) --- */}
//       <section className="py-40 bg-zinc-950/30">
//         <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-20 items-center">
//           <div className="lg:col-span-6 space-y-12">
//             <div className="space-y-4 text-right">
//               <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter">
//                 Our <br /><span className="text-amber-500">Engineering</span> <br /> Process
//               </h2>
//               <div className="h-1 w-24 bg-amber-500 mr-0 ml-auto"></div>
//             </div>

//             <div className="space-y-4">
//               {['Foundation', 'Analysis', 'Delivery'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab.toLowerCase())}
//                   className={`w-full text-left p-8 flex items-center justify-between transition-all duration-700 ${
//                     activeTab === tab.toLowerCase()
//                     ? 'bg-zinc-900 border-r-4 border-amber-500 pl-12'
//                     : 'bg-transparent border-r border-white/5 opacity-40 grayscale hover:grayscale-0'
//                   }`}
//                 >
//                   <LucideArrowRight className={`transition-transform duration-500 ${activeTab === tab.toLowerCase() ? 'rotate-[-45deg] text-amber-500' : 'text-zinc-700'}`} />
//                   <span className="text-2xl font-black uppercase tracking-[0.2em]">{tab}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-6 aspect-square relative group">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1.1 }}
//                 className="w-full h-full border border-white/10 p-4 relative overflow-hidden bg-black"
//               >
//                 <img
//                   src={
//                     activeTab === 'foundation' ? "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000" :
//                     activeTab === 'analysis' ? "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000" :
//                     "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000"
//                   }
//                   className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
//                   alt="Process"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-12 right-12 left-12 text-right space-y-4">
//                   <div className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em]">Section 0{activeTab === 'foundation' ? '1' : activeTab === 'analysis' ? '2' : '3'}</div>
//                   <h4 className="text-3xl font-black uppercase">التحكم التقني الفائق</h4>
//                   <p className="text-zinc-400 text-sm font-light leading-relaxed">
//                     نحن نؤمن أن الجمال يبدأ من الأرقام، لذا نضمن تطابق كل شحنة مع المواصفات الفنية المطلوبة بدقة 100%.
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//             {/* Tech UI Overlays */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-amber-500/40 pointer-events-none"></div>
//             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-500/40 pointer-events-none"></div>
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER: CONVERSION --- */}
//       <footer className="py-20 border-t border-white/5 bg-black">
//         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
//           <div className="text-center md:text-left">
//             <h5 className="text-4xl font-black uppercase tracking-tighter mb-2">Ready for the <span className="text-amber-500">Mosaic</span> Experience?</h5>
//             <p className="text-zinc-500 text-sm tracking-widest font-mono">ESTABLISHING GLOBAL STANDARDS SINCE 1998</p>
//           </div>
//           <button className="flex items-center gap-4 bg-zinc-900 border border-white/10 px-10 py-5 hover:bg-white hover:text-black transition-all group">
//             <span className="font-bold uppercase tracking-widest text-[10px]">تحميل الكتالوج الهندسي</span>
//             <LucideDownload size={18} className="group-hover:translate-y-1 transition-transform" />
//           </button>
//         </div>
//         <div className="mt-20 text-center border-t border-white/5 pt-10 opacity-20 text-[8px] font-mono tracking-[1em] uppercase">
//           Structural Excellence // Cairo // Milan // Istanbul
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default App;

////////////////////////////44444444444444444444

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { LucideCompass, LucideMaximize, LucideActivity, LucideBox, LucideChevronRight } from 'lucide-react';

// const App = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll();

//   // Smooth scroll progress for heavy animations
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

//   // Rotating elements based on scroll
//   const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
//   const scale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);
//   const xLeft = useTransform(smoothProgress, [0, 1], [0, -500]);
//   const xRight = useTransform(smoothProgress, [0, 1], [0, 500]);

//   return (
//     <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans overflow-x-hidden">

//       {/* --- BACKGROUND ENGINEERING GRID --- */}
//       <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
//         <div className="absolute inset-0"
//              style={{
//                backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
//                backgroundSize: '50px 50px'
//              }}>
//         </div>
//         <motion.div
//           style={{ rotate }}
//           className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-[0.5px] border-dashed border-white/10 rounded-full"
//         />
//       </div>

//       {/* --- PROGRESS RADIAL (ENGINEERING STYLE) --- */}
//       <div className="fixed top-10 right-10 z-50 w-20 h-20">
//         <svg viewBox="0 0 100 100" className="rotate-[-90deg]">
//           <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
//           <motion.circle
//             cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none"
//             style={{ pathLength: smoothProgress }}
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono">
//            <motion.span>{Math.round(scrollYProgress.get() * 100)}</motion.span>%
//         </div>
//       </div>

//       {/* --- SECTION 1: KINETIC HERO --- */}
//       <section className="relative h-[200vh] z-10">
//         <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

//           {/* Dynamic Geometry */}
//           <motion.div style={{ scale, rotate }} className="absolute z-0 opacity-10">
//              <div className="w-[800px] h-[800px] border border-white flex items-center justify-center">
//                 <div className="w-[600px] h-[600px] border border-white rotate-45"></div>
//              </div>
//           </motion.div>

//           <div className="relative z-10 text-center px-4">
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               className="flex items-center justify-center gap-4 mb-8"
//             >
//               <div className="h-[1px] w-20 bg-white"></div>
//               <span className="text-xs tracking-[1em] uppercase font-bold text-yellow-500">Mosaic Engineering</span>
//               <div className="h-[1px] w-20 bg-white"></div>
//             </motion.div>

//             <h1 className="text-[12vw] font-black leading-none tracking-tighter uppercase mb-4">
//               Structural<br/>
//               <span className="outline-text text-transparent italic" style={{ WebkitTextStroke: '2px white' }}>
//                 Precision
//               </span>
//             </h1>

//             <div className="flex gap-20 mt-10 justify-center">
//                <div className="text-left border-l border-white/20 pl-4">
//                   <div className="text-2xl font-bold font-mono">0.001mm</div>
//                   <div className="text-[10px] uppercase opacity-50 tracking-widest">Tolerance Level</div>
//                </div>
//                <div className="text-left border-l border-white/20 pl-4">
//                   <div className="text-2xl font-bold font-mono">4000+</div>
//                   <div className="text-[10px] uppercase opacity-50 tracking-widest">Complex Blueprints</div>
//                </div>
//             </div>
//           </div>

//           {/* Floating Elements that react to scroll */}
//           <motion.div style={{ x: xLeft }} className="absolute left-10 bottom-40 whitespace-nowrap opacity-30 text-[5vw] font-black italic">
//             TECHNICAL DRAFTING // 2026
//           </motion.div>
//           <motion.div style={{ x: xRight }} className="absolute right-10 top-40 whitespace-nowrap opacity-30 text-[5vw] font-black italic text-right">
//             MARBLE CALCULATION // CORE
//           </motion.div>
//         </div>
//       </section>

//       {/* --- SECTION 2: THE ENGINE (DASHBOARD STYLE) --- */}
//       <section className="relative z-10 py-40 px-10 bg-white text-black rounded-t-[100px]">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//             <div>
//               <div className="flex items-center gap-3 mb-10 text-yellow-600">
//                 <LucideCompass className="animate-spin-slow" />
//                 <span className="font-mono text-sm font-bold tracking-widest uppercase">Process Analytics</span>
//               </div>
//               <h2 className="text-7xl font-black tracking-tighter leading-[0.9] mb-10">
//                 نحن لا نصمم واجهات، نحن نهندس تجارب صلبة.
//               </h2>
//               <div className="space-y-8">
//                 {[
//                   { title: "التحليل الإنشائي", desc: "دراسة دقيقة لكل قطعة رخام قبل التركيب." },
//                   { title: "محاكاة الضغط", desc: "اختبارات تحمل لضمان الأداء لعقود." },
//                   { title: "التنفيذ الآلي", desc: "استخدام أذرع روبوتية للقص المتناهي الصغر." }
//                 ].map((item, i) => (
//                   <motion.div
//                     whileInView={{ x: [ -50, 0 ], opacity: [ 0, 1 ] }}
//                     key={i}
//                     className="group border-b border-black/10 pb-6 flex justify-between items-end hover:pl-4 transition-all"
//                   >
//                     <div>
//                       <h4 className="text-2xl font-bold uppercase">{item.title}</h4>
//                       <p className="opacity-60 max-w-sm">{item.desc}</p>
//                     </div>
//                     <LucideChevronRight className="group-hover:translate-x-4 transition-transform" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative bg-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
//                 {/* Simulated Engineering UI */}
//                 <div className="absolute inset-0 opacity-40">
//                   <div className="w-full h-full border-[20px] border-white/5"></div>
//                   <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20"></div>
//                   <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/20"></div>
//                 </div>
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="w-2/3 h-2/3 border-2 border-white/20 border-dashed rounded-full flex items-center justify-center"
//                 >
//                   <LucideBox size={100} className="text-yellow-500" />
//                 </motion.div>
//                 <div className="absolute bottom-10 left-10 text-white font-mono text-[10px] space-y-1">
//                    <p className="animate-pulse">_SYSTEM_ACTIVE</p>
//                    <p>_COORDINATES: 30.0444° N, 31.2357° E</p>
//                    <p>_STATUS: OPTIMIZED</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 3: KINETIC GALLERY --- */}
//       <section className="py-40 bg-[#050505] overflow-hidden">
//         <div className="px-10 mb-20">
//            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase">Project_Log.v2</span>
//            <h3 className="text-8xl font-black italic">GALLERY</h3>
//         </div>

//         <div className="flex gap-10 overflow-hidden px-10">
//           {[1, 2, 3, 4].map(i => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 0.95, rotate: i % 2 === 0 ? 2 : -2 }}
//               className="min-w-[400px] h-[600px] bg-zinc-900 overflow-hidden relative group"
//             >
//               <img
//                 src={`https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop`}
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
//                  <span className="text-xs font-mono mb-2">PROJECT_{i}00</span>
//                  <h4 className="text-3xl font-black">MARBLE_CORE</h4>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- FOOTER: THE BLUEPRINT --- */}
//       <footer className="border-t border-white/10 py-20 px-10 flex flex-col items-center gap-10">
//         <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end gap-10">
//            <div className="space-y-4">
//               <div className="text-[10vw] font-black leading-none italic outline-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>BUILD</div>
//               <div className="text-[10vw] font-black leading-none italic">BEYOND</div>
//            </div>
//            <div className="text-right space-y-4">
//               <div className="flex items-center gap-4 justify-end">
//                 <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
//                 <span className="text-sm font-mono tracking-widest">READY TO ENGINEER</span>
//               </div>
//               <button className="bg-white text-black px-12 py-6 text-xl font-black uppercase hover:bg-yellow-500 transition-colors">
//                 Start Blueprint
//               </button>
//            </div>
//         </div>
//         <div className="w-full pt-10 border-t border-white/5 flex justify-between text-[10px] font-mono opacity-40 uppercase tracking-[0.4em]">
//            <span>All rights reserved 2026</span>
//            <span>Developed by Mosaic Tech</span>
//         </div>
//       </footer>

//       <style>{`
//         .outline-text {
//           -webkit-text-stroke: 1.5px white;
//         }
//         .animate-spin-slow {
//           animation: spin 8s linear infinite;
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         body {
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }
//         body::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;

///////////////////////5555555555555555555555555

// import React, { useEffect, useRef } from 'react';
// import { LucideArrowDown, LucideMousePointer2, LucideLayout, LucideShieldCheck, LucideZap, LucideMenu } from 'lucide-react';

// const App = () => {
//   const containerRef = useRef(null);
//   const block1Ref = useRef(null);
//   const block2Ref = useRef(null);
//   const block3Ref = useRef(null);

//   useEffect(() => {
//     // تحميل مكتبات GSAP ديناميكياً لضمان التوافق مع البيئة
//     const loadGSAP = () => {
//       const gsapScript = document.createElement('script');
//       gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";

//       const stScript = document.createElement('script');
//       stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";

//       gsapScript.onload = () => {
//         document.head.appendChild(stScript);
//         stScript.onload = initAnimations;
//       };

//       document.head.appendChild(gsapScript);
//     };

//     const initAnimations = () => {
//       const gsap = window.gsap;
//       const ScrollTrigger = window.ScrollTrigger;
//       gsap.registerPlugin(ScrollTrigger);

//       // 1. Initial Entrance Animation
//       const tl = gsap.timeline();
//       tl.from(".nav-item", { y: -50, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" })
//         .from(".hero-title span", {
//           y: 150,
//           rotateX: -90,
//           opacity: 0,
//           stagger: 0.08,
//           duration: 1.5,
//           ease: "expo.out"
//         }, "-=0.5")
//         .from(".floating-block", {
//           scale: 0.5,
//           opacity: 0,
//           duration: 2,
//           stagger: 0.3,
//           ease: "power2.out"
//         }, "-=1.2");

//       // 2. Main Title Scroll Animation
//       gsap.to(".hero-title", {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//         },
//         scale: 0.7,
//         opacity: 0.2,
//         y: -150,
//         filter: "blur(20px)"
//       });

//       // 3. Kinetic Block Movement (Advanced Parallax)
//       gsap.to(block1Ref.current, {
//         scrollTrigger: { scrub: 1.5, start: "top top", end: "bottom top" },
//         x: -300, y: -400, rotate: 25, opacity: 0
//       });
//       gsap.to(block2Ref.current, {
//         scrollTrigger: { scrub: 1, start: "top top", end: "bottom top" },
//         x: 400, y: -200, rotate: -35, opacity: 0
//       });
//       gsap.to(block3Ref.current, {
//         scrollTrigger: { scrub: 2, start: "top top", end: "bottom top" },
//         y: -600, scale: 1.5, opacity: 0
//       });

//       // 4. Content Reveal Animation
//       gsap.from(".reveal-content", {
//         scrollTrigger: {
//           trigger: ".section-two",
//           start: "top 85%",
//           end: "top 30%",
//           scrub: 1.5,
//         },
//         y: 200,
//         opacity: 0,
//         rotateX: 10
//       });

//       // 5. Horizontal Marquee Speed Control on Scroll
//       gsap.to(".marquee-inner", {
//         scrollTrigger: {
//           trigger: ".section-marquee",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0.5
//         },
//         xPercent: -20
//       });
//     };

//     loadGSAP();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

//       {/* Fixed Navigation Bar */}
//       <nav className="fixed top-0 w-full z-[100] px-10 py-8 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
//         <div className="nav-item flex items-center gap-3 cursor-pointer">
//           <span className="text-3xl font-black tracking-tighter uppercase text-white hover:text-amber-500 transition-colors">MOSAIC</span>
//           <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
//         </div>

//         <div className="hidden lg:flex gap-16 text-[10px] font-bold uppercase tracking-[0.4em]">
//           {['الرئيسية', 'المواد', 'المشاريع', 'تواصل'].map((link, i) => (
//             <a key={i} href="#" className="nav-item group relative overflow-hidden">
//               <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{link}</span>
//               <span className="absolute top-full left-0 text-amber-500 transition-transform duration-500 group-hover:-translate-y-full">{link}</span>
//             </a>
//           ))}
//         </div>

//         <div className="flex items-center gap-8">
//           <button className="nav-item hidden md:block border border-white/20 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//             كتالوج 2026
//           </button>
//           <LucideMenu className="lg:hidden text-amber-500 cursor-pointer" />
//         </div>
//       </nav>

//       {/* --- HERO SECTION: DECONSTRUCTIVE ART --- */}
//       <section className="relative h-screen flex items-center justify-center perspective-[1500px]">

//         {/* Floating Architectural Slabs (The "Power" elements) */}
//         <div ref={block1Ref} className="floating-block absolute top-[15%] left-[5%] w-[25vw] h-[50vh] bg-zinc-900 border border-white/10 z-0 overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent z-10"></div>
//             <img src="https://images.unsplash.com/photo-1600585154340-be6199f7a009?q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60 scale-110" alt="Marble Slab" />
//             <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-30 text-white uppercase">Spec_No: 8812-X</div>
//         </div>

//         <div ref={block2Ref} className="floating-block absolute bottom-[10%] right-[10%] w-[30vw] h-[40vh] bg-zinc-900 border border-white/10 z-0 overflow-hidden shadow-2xl">
//              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60" alt="Architecture" />
//              <div className="absolute top-4 right-4 font-mono text-[8px] opacity-30 text-white uppercase">Density: 2.7g/cm³</div>
//         </div>

//         <div ref={block3Ref} className="floating-block absolute top-[45%] right-[5%] w-56 h-56 bg-amber-500/5 backdrop-blur-[100px] border border-amber-500/10 z-0 rotate-12"></div>

//         {/* Central Kinetic Content */}
//         <div className="relative z-10 text-center px-4">
//           <div className="nav-item mb-10 inline-flex items-center gap-4 px-6 py-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm shadow-xl">
//             <div className="w-1 h-1 bg-amber-500 rounded-full animate-ping"></div>
//             <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-400">Architectural Evolution</span>
//           </div>

//           <h1 className="hero-title text-8xl md:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase pointer-events-none select-none italic overflow-hidden">
//             {['S', 'O', 'L', 'I', 'D'].map((char, i) => (
//               <span key={i} className="inline-block transition-all duration-700 hover:text-amber-500">{char}</span>
//             ))}
//             <br />
//             <span className="text-transparent font-light not-italic" style={{ WebkitTextStroke: '1px rgba(245,158,11,1)' }}>STONE</span>
//           </h1>

//           <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
//              <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent hidden md:block"></div>
//              <p className="max-w-2xl text-zinc-500 text-lg md:text-2xl font-light leading-relaxed text-right border-r-2 border-amber-500/20 pr-8">
//                "نحن لا نستورد الرخام، نحن نعيد تعريف مفهوم الصلابة والفخامة في العمارة الحديثة."
//              </p>
//           </div>
//         </div>

//         {/* Dynamic Light Background */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-amber-500/5 rounded-full blur-[150px] -z-10"></div>
//       </section>

//       {/* --- SECTION 2: THE REVEAL --- */}
//       <section className="section-two min-h-screen flex flex-col items-center justify-center py-40 relative bg-[#070707]">
//         <div className="reveal-content max-w-7xl mx-auto px-10 w-full">
//           <div className="grid lg:grid-cols-2 gap-32 items-center">

//             <div className="space-y-12 text-right">
//               <div className="space-y-4">
//                 <span className="text-amber-500 font-mono tracking-[0.5em] text-[10px] uppercase">Technical Protocol</span>
//                 <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
//                   Beyond <br /> <span className="text-amber-500">Visuals</span>
//                 </h2>
//               </div>

//               <p className="text-zinc-400 text-xl leading-loose font-light">
//                 كل شريحة حجر تمر عبر معامل موزاييك للفحص المجهري، لضمان خلوها من العيوب الهيكلية وتوافقها مع المعايير الإنشائية العالمية.
//               </p>

//               <div className="grid grid-cols-2 gap-10 pt-10">
//                 <div className="p-8 border border-white/5 bg-zinc-900/20 hover:border-amber-500/30 transition-colors">
//                   <LucideShieldCheck className="text-amber-500 mb-6" size={32} />
//                   <div className="text-4xl font-black mb-1">99.9%</div>
//                   <div className="text-[9px] uppercase tracking-widest text-zinc-500">مقاومة العوامل</div>
//                 </div>
//                 <div className="p-8 border border-white/5 bg-zinc-900/20 hover:border-amber-500/30 transition-colors">
//                   <LucideZap className="text-amber-500 mb-6" size={32} />
//                   <div className="text-4xl font-black mb-1">0.02s</div>
//                   <div className="text-[9px] uppercase tracking-widest text-zinc-500">دقة التوريد</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="grid grid-cols-12 gap-4">
//                  <div className="col-span-8 h-[600px] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
//                     <img src="https://images.unsplash.com/photo-1533033527027-28f00296f13e?q=80&w=1000" className="w-full h-full object-cover" alt="Detail" />
//                  </div>
//                  <div className="col-span-4 h-[600px] flex flex-col gap-4">
//                     <div className="h-1/2 bg-amber-500 flex items-center justify-center p-8">
//                       <LucideLayout size={48} className="text-black" />
//                     </div>
//                     <div className="h-1/2 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
//                       <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" className="w-full h-full object-cover" alt="Detail 2" />
//                     </div>
//                  </div>
//               </div>
//               {/* Decorative Markings */}
//               <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-amber-500/20 pointer-events-none"></div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 3: THE KINETIC MARQUEE --- */}
//       <section className="section-marquee py-24 bg-amber-500 overflow-hidden relative">
//         <div className="marquee-inner flex whitespace-nowrap">
//           {[1,2,3,4].map(i => (
//             <div key={i} className="flex items-center gap-16 px-10">
//                <span className="text-black text-[12vw] font-black uppercase tracking-tighter leading-none italic">
//                  Mosaic Engineering
//                </span>
//                <div className="w-20 h-20 bg-black flex items-center justify-center rotate-45">
//                  <LucideArrowDown size={40} className="text-amber-500 -rotate-45" />
//                </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer Design */}
//       <footer className="py-20 px-10 border-t border-white/5 bg-black">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20">
//           <div className="space-y-8">
//              <h3 className="text-6xl font-black tracking-tighter">LET'S BUILD <br /> <span className="text-amber-500">LEGACIES.</span></h3>
//              <div className="flex gap-4">
//                {['IG', 'FB', 'LI'].map(s => <span key={s} className="w-12 h-12 flex items-center justify-center border border-white/10 text-[10px] font-bold hover:bg-amber-500 hover:text-black cursor-pointer transition-all">{s}</span>)}
//              </div>
//           </div>
//           <div className="text-right space-y-2">
//             <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">© 2026 Mosaic Architecture Collective</p>
//             <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Designed for the bold</p>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         .perspective-1500 { perspective: 1500px; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: #050505; }
//         ::-webkit-scrollbar-thumb { background: #f59e0b; }
//       `}</style>

//     </div>
//   );
// };

// export default App;

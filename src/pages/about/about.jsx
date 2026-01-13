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



//////////////////////////111111111111111111111111

// import React, { useEffect, useRef, useState } from 'react';

// const App = () => {
//   const canvasRef = useRef(null);
//   const [activeSection, setActiveSection] = useState(0);

//   useEffect(() => {
//     // Three.js Background Logic
//     const script = document.createElement('script');
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
//     script.onload = () => {
//       const THREE = window.THREE;
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);

//       // Create Structural Geometry (Wireframe Cube Grid)
//       const geometry = new THREE.BoxGeometry(1, 1, 1);
//       const material = new THREE.MeshBasicMaterial({ color: 0xc5a059, wireframe: true, transparent: true, opacity: 0.15 });
//       const cubes = [];

//       for(let i = 0; i < 50; i++) {
//         const cube = new THREE.Mesh(geometry, material);
//         cube.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
//         cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
//         scene.add(cube);
//         cubes.push(cube);
//       }

//       camera.position.z = 5;

//       const animate = () => {
//         requestAnimationFrame(animate);
//         cubes.forEach(c => {
//           c.rotation.x += 0.001;
//           c.rotation.y += 0.002;
//         });
//         renderer.render(scene, camera);
//       };
//       animate();

//       const handleResize = () => {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//       };
//       window.addEventListener('resize', handleResize);
//     };
//     document.head.appendChild(script);

//     // GSAP Animations
//     const gsapScript = document.createElement('script');
//     gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//     const scrollScript = document.createElement('script');
//     scrollScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";

//     gsapScript.onload = () => {
//       document.head.appendChild(scrollScript);
//       scrollScript.onload = () => {
//         const gsap = window.gsap;
//         gsap.registerPlugin(window.ScrollTrigger);

//         // Hero Text Splitting Animation
//         gsap.from(".hero-block", {
//           scaleY: 0,
//           transformOrigin: "bottom",
//           stagger: 0.2,
//           duration: 1.5,
//           ease: "expo.inOut"
//         });

//         // Massive Parallax Text
//         gsap.to(".scrolling-text", {
//           xPercent: -50,
//           scrollTrigger: {
//             trigger: ".scrolling-text-wrap",
//             scrub: 1,
//             start: "top bottom",
//             end: "bottom top"
//           }
//         });

//         // Section Layering
//         gsap.utils.toArray(".panel").forEach((panel, i) => {
//           gsap.from(panel, {
//             opacity: 0,
//             y: 100,
//             scrollTrigger: {
//               trigger: panel,
//               start: "top 80%",
//               end: "top 20%",
//               scrub: true
//             }
//           });
//         });
//       };
//     };
//     document.head.appendChild(gsapScript);
//   }, []);

//   return (
//     <div className="bg-[#080808] text-[#e0e0e0] font-sans selection:bg-[#c5a059] selection:text-black">
//       {/* Three.js Background Canvas */}
//       <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

//       {/* Header Navigation */}
//       <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-start mix-blend-difference">
//         <div className="text-2xl font-black tracking-tighter leading-none">
//           MOSAIC<br/><span className="text-[#c5a059]">IMPORTS</span>
//         </div>
//         <div className="text-right font-mono text-[10px] tracking-widest uppercase opacity-50">
//           [ Engineering Sourcing ]<br/>v2.0 / 2024
//         </div>
//       </nav>

//       {/* 1. Hero: The Monumental Entry */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
//         <div className="z-10 text-center">
//           <div className="hero-block inline-block bg-[#c5a059] px-4 py-2 mb-4">
//             <span className="text-black font-black uppercase text-sm tracking-[0.5em]">The Blueprint of Excellence</span>
//           </div>
//           <h1 className="text-[15vw] md:text-[12vw] font-black uppercase leading-[0.75] tracking-tighter mb-8">
//             STRUCTURAL<br/><span className="outline-text">INTEGRITY</span>
//           </h1>
//           <div className="flex justify-center gap-12 mt-10">
//               <div className="w-px h-24 bg-gradient-to-b from-[#c5a059] to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* 2. Scrolling Marquee: The Pulse */}
//       <section className="scrolling-text-wrap py-20 border-y border-white/10 bg-white text-black overflow-hidden whitespace-nowrap">
//         <div className="scrolling-text text-[15vw] font-black uppercase leading-none select-none">
//           GLOBAL ACCESS • PROJECT READY • TECHNICAL EXPERTISE • MOSAIC • GLOBAL ACCESS • PROJECT READY • 
//         </div>
//       </section>

//       {/* 3. The Vision: Brutalist Blocks */}
//       <section className="relative py-40 px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-10 overflow-hidden">
//         <div className="md:col-span-7 panel">
//           <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] mb-12">
//             FROM PIECES<br/><span className="text-[#c5a059]">TO WHOLE</span>
//           </h2>
//           <p className="text-2xl md:text-3xl font-light text-zinc-400 max-w-xl">
//             Mosaic Imports is not just a supplier. We are an <span className="text-white font-bold italic">Engineering Conduit</span> between global manufacturing and local construction.
//           </p>
//         </div>
//         <div className="md:col-span-5 relative panel">
//           <div className="bg-zinc-900 p-10 border-t-8 border-[#c5a059] aspect-square flex flex-col justify-end">
//             <div className="text-8xl font-black opacity-10 absolute top-4 right-4 italic">01</div>
//             <h3 className="text-4xl font-bold uppercase mb-4">Holding Power</h3>
//             <p className="text-zinc-500 uppercase tracking-widest text-xs leading-loose">
//               Powered by Mosaic Holding Corp. We translate complex global systems into practical, site-ready solutions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 4. Industries: Data Grid */}
//       <section className="py-40 bg-[#c5a059] text-black px-6 md:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//           <div>
//             <h2 className="text-7xl font-black uppercase leading-none tracking-tighter sticky top-24">
//               INDUSTRIES<br/>WE SHAPE
//             </h2>
//           </div>
//           <div className="space-y-12">
//             {[
//               { id: "01", title: "Construction & Contracting", desc: "Heavy industry sourcing for large-scale operations." },
//               { id: "02", title: "Architecture & Design", desc: "Aesthetic materials backed by technical durability." },
//               { id: "03", title: "Engineering Consultancies", desc: "Bridging the gap between specs and sourcing." },
//               { id: "04", title: "Real Estate Developers", desc: "Scalable solutions for residential and commercial hubs." }
//             ].map((item, idx) => (
//               <div key={idx} className="group border-b-2 border-black/20 pb-8 hover:border-black transition-colors cursor-pointer">
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="font-mono font-bold text-sm bg-black text-[#c5a059] px-2">{item.id}</span>
//                   <h4 className="text-4xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{item.title}</h4>
//                 </div>
//                 <p className="text-black/60 font-medium max-w-sm pl-12">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. Core Philosophy: Kinetic Statement */}
//       <section className="relative h-screen bg-[#080808] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 opacity-10 flex items-center justify-center">
//              <div className="text-[40vw] font-black italic">MOSAIC</div>
//         </div>
//         <div className="z-10 max-w-4xl px-6 text-center">
//             <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter leading-tight">
//                "Materials shape <span className="text-[#c5a059]">performance</span>. We shape the path to them."
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                {["Responsibility", "Technicality", "Clarity", "Reliability"].map((word) => (
//                  <div key={word} className="border border-white/20 p-4 font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                    {word}
//                  </div>
//                ))}
//             </div>
//         </div>
//       </section>

//       {/* Footer: Concrete Conclusion */}
//       <footer className="bg-white text-black py-20 px-6 md:px-20">
//         <div className="flex flex-col md:flex-row justify-between items-end gap-10">
//           <div>
//             <div className="text-9xl font-black leading-none tracking-tighter">M_I</div>
//             <p className="mt-4 max-w-xs font-bold uppercase text-xs opacity-40 italic">Global access, local presence, engineering excellence.</p>
//           </div>
//           <div className="text-right">
//             <div className="font-black text-4xl mb-6">CONNECT_</div>
//             <div className="flex flex-col gap-2 font-mono text-sm uppercase">
//                <a href="#" className="hover:line-through">LinkedIn</a>
//                <a href="#" className="hover:line-through">Inquiry@mosaic.com</a>
//                <a href="#" className="hover:line-through">Download Profile</a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-20 pt-10 border-t border-black/10 flex justify-between font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
//           <span>© Mosaic Imports 2024</span>
//           <span>EST. MIDDLE EAST</span>
//         </div>
//       </footer>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .outline-text {
//           color: transparent;
//           -webkit-text-stroke: 2px #c5a059;
//         }
//         @media (max-width: 768px) {
//           .outline-text { -webkit-text-stroke: 1px #c5a059; }
//         }
//       `}} />
//     </div>
//   );
// };

// export default App;



///////////////////////////22222222222222
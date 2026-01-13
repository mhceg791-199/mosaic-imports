import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InteractiveEcosystem = () => {
  const mountRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let renderer, scene, camera;
    let coreGroup, outerSphere, innerMesh, particles;

    /* ---------------- Scene ---------------- */
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    /* ---------------- Core ---------------- */
    coreGroup = new THREE.Group();
    scene.add(coreGroup);

    outerSphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.MeshBasicMaterial({
        color: 0xc5a363,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      })
    );
    coreGroup.add(outerSphere);

    innerMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        flatShading: true,
        metalness: 0.9,
        roughness: 0.15,
        emissive: 0xc5a363,
        emissiveIntensity: 0.12,
      })
    );
    coreGroup.add(innerMesh);

    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 5;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        size: 0.02,
        color: 0xc5a363,
        transparent: true,
        opacity: 0.8,
      })
    );
    coreGroup.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const light = new THREE.PointLight(0xc5a363, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    /* ---------------- Scroll ---------------- */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.25) setActiveStep(0);
          else if (p < 0.5) setActiveStep(1);
          else if (p < 0.75) setActiveStep(2);
          else setActiveStep(3);
        },
      },
    });

    tl.to(coreGroup.rotation, {
      y: Math.PI * 2,
      x: Math.PI / 2,
      ease: "none",
    });

    // Final expansion (Step 4)
    tl.to(outerSphere.scale, { x: 3, y: 3, z: 3 }, 0.75);
    tl.to(outerSphere.material, { opacity: 0 }, 0.75);
    tl.to(innerMesh.scale, { x: 0, y: 0, z: 0 }, 0.75);
    tl.to(particles.scale, { x: 4, y: 4, z: 4 }, 0.75);

    const animate = () => {
      coreGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  /* ---------------- Content ---------------- */
  const content = [
    {
      title: "Global Presence",
      body: "With experience drawn from more than 4,000 projects delivered across 20+ countries, Mosaic Imports operates with a global perspective shaped by real-world execution across diverse markets and project types.",
    },
    {
      title: "Ecosystem Intelligence",
      body: "The company functions within a broader ecosystem of architecture, engineering, and real-estate expertise — enabling a deep understanding of how projects are designed, engineered, built, and operated.",
    },
    {
      title: "Collaborative Network",
      body: (
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            "Wolsey Structural Engineering",
            "Mosaic Engineering",
            "Kaller Architecture",
            "Mosaic Imports",
            "MHCEG Consultancy",
            "Mosaic Real Estate",
            "Mosaic Property Management",
            "CHESS",
          ].map((item, i) => (
            <li
              key={i}
              className="border border-mainGold/40 px-4 py-3 rounded-lg bg-black/30 text-lightColor"
            >
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "",
      body: "While deeply connected to this network, Mosaic Imports operates independently and serves a wide range of external clients, partners, and projects across global markets — bringing ecosystem intelligence without limiting its reach.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black text-lightColor"
    >
      <div ref={mountRef} className="absolute inset-0 z-0 opacity-70" />

      <div className="absolute inset-0 z-10 flex items-center justify-center p-8 pointer-events-none">
        <div key={activeStep} className="max-w-4xl text-center animate-fade-up">
          <div className="flex justify-center gap-3 mb-10">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-[2px] w-8 transition-all ${
                  i <= activeStep ? "bg-mainColor" : "bg-lightColor/20"
                }`}
              />
            ))}
          </div>

          <h2 className="uppercase font-semibold tracking-tight mb-6 text-4xl md:text-6xl">
            {content[activeStep].title}
          </h2>

          <div className="mx-auto max-w-3xl text-lightColor/70 text-lg leading-relaxed">
            {content[activeStep].body}
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-mainGold transition-opacity duration-1000 ${
          activeStep === 3 ? "opacity-[0.04]" : "opacity-0"
        }`}
      />

      {/* Branding */}
      <div className="absolute top-10 left-10 z-20 border-l border-mainColor pl-4 hidden md:block">
        <p className="text-xs tracking-widest uppercase text-lightColor">
          Mosaic Imports
        </p>
        <p className="text-[10px] text-lightColor/60">
          GLOBAL PRESENCE & ECOSYSTEM
        </p>
      </div>
    </section>
  );
};

export default InteractiveEcosystem;
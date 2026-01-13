import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import services from "../../../data/services";



const ProviderCard = () => {
  return (
    <div className="bg-lightColor overflow-x-hidden">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 md:gap-40">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

/* ================= SERVICE ITEM ================= */

const ServiceItem = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-20`}
    >
      {/* IMAGE */}
      <div className="w-full md:w-1/2 relative group">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="aspect-[4/5] overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
        </motion.div>

        <div className="absolute -bottom-10 -right-10 hidden md:block">
          <span className="text-9xl font-black text-white/5">{service.id}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="w-full md:w-1/2 space-y-6"
        dir={index % 2 === 0 ? "ltr" : "rtl"}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-6xl md:text-8xl text-mainColor font-bold mt-2 leading-none uppercase">
            {service.title}
          </h3>

          <div className="h-1 w-20 bg-[#B59963] mt-6" />

          <ul className="mt-10 space-y-4 text-zinc-500 text-lg leading-relaxed max-w-md">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#B59963] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProviderCard;

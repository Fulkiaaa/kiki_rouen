import { motion } from "framer-motion";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] grid place-items-center overflow-hidden">
      <img
        src="/images/parasol.png"
        alt="Parasols orange"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center text-white px-6"
      >
        <img
          src="/images/logo-sun.jpg"
          alt="Soleil Kiki"
          className="w-20 h-20 rounded-full mx-auto mb-4 shadow-brand"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          {site.tagline}
        </h1>
        <p className="mt-4 text-lg md:text-2xl">{site.slogan}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a
            href="/carte"
            className="bg-brand text-white px-6 py-3 rounded-2xl shadow-brand"
          >
            Découvrir la carte
          </a>
          <a
            href="/infos"
            className="bg-white/90 text-brand px-6 py-3 rounded-2xl"
          >
            Infos & horaires
          </a>
        </div>
      </motion.div>
    </section>
  );
}

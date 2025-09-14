import Hero from "../components/Hero";
import { reviews } from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-brand text-center mb-6">
          Toute la journée, comme vous aimez
        </h2>
        <p className="text-center max-w-3xl mx-auto opacity-80">
          Petit déjeuner pour bien démarrer la journée, déjeuner fait maison,
          goûter sucré et en soirée tapas à partager avec cocktails, bières
          artisanales et vins soigneusement choisis.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <img
            src="/images/basket.jpg"
            alt="Panier de fruits"
            className="rounded-2xl shadow object-cover w-full h-72"
          />
          <img
            src="/images/terrasse.jpg"
            alt="Terrasse Kiki"
            className="rounded-2xl shadow object-cover w-full h-72"
          />
          <img
            src="/images/parasols.jpg"
            alt="Parasols orange"
            className="rounded-2xl shadow object-cover w-full h-72"
          />
        </div>
      </section>

      <section className="bg-[#fff7e6] px-6 py-16">
        <h2 className="text-3xl font-extrabold text-brand text-center mb-8">
          Ils ont adoré ✨
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

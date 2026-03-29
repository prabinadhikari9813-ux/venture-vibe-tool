import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign } from "lucide-react";
import coastalImg from "@/assets/route-coastal.jpg";
import asiaImg from "@/assets/route-asia.jpg";
import europeImg from "@/assets/route-europe.jpg";
import mardiImg from "@/assets/route-mardi.jpg";
import poonhillImg from "@/assets/route-poonhill.jpg";
import abcImg from "@/assets/route-abc.jpg";
import australianCampImg from "@/assets/route-australian-camp.jpg";

const routes = [
  {
    title: "Mardi Himal Trek",
    region: "Nepal · Kaski · Annapurna",
    duration: "5–7 days",
    cost: "NPR 10,000 (Nepali) · $150–$300 (Foreign)",
    description: "Trek through rhododendron forests to stunning viewpoints of Machapuchare and Annapurna South. One of Nepal's most affordable and scenic short treks.",
    image: mardiImg,
  },
  {
    title: "Poon Hill Trek (Ghorepani)",
    region: "Nepal · Kaski · Annapurna",
    duration: "4–5 days",
    cost: "NPR 8,000 (Nepali) · $120–$250 (Foreign)",
    description: "Classic sunrise trek with panoramic views of Dhaulagiri, Annapurna, and Machhapuchhre. Perfect for beginners with well-established teahouse trails.",
    image: poonhillImg,
  },
  {
    title: "Annapurna Base Camp (ABC)",
    region: "Nepal · Kaski · Annapurna",
    duration: "7–12 days",
    cost: "NPR 15,000 (Nepali) · $250–$500 (Foreign)",
    description: "Journey into the heart of the Annapurna Sanctuary — a natural amphitheater surrounded by towering 8,000m peaks. A bucket-list Himalayan experience.",
    image: abcImg,
  },
  {
    title: "Australian Camp & Dhampus",
    region: "Nepal · Kaski · Pokhara",
    duration: "1–2 days",
    cost: "NPR 3,000 (Nepali) · $30–$60 (Foreign)",
    description: "An easy overnight trek from Pokhara with stunning Annapurna panorama. Ideal for families, beginners, or travelers with limited time.",
    image: australianCampImg,
  },
];

const RoutesSection = () => {
  return (
    <section id="routes" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Curated Routes</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Popular Travel Routes
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow duration-500 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1280}
                  height={864}
                />
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-2">{route.region}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{route.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{route.description}</p>
                <div className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" /> {route.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="h-4 w-4 text-primary" /> {route.cost}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" /> {route.region}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;

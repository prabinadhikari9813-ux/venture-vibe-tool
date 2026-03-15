import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign } from "lucide-react";
import coastalImg from "@/assets/route-coastal.jpg";
import asiaImg from "@/assets/route-asia.jpg";
import europeImg from "@/assets/route-europe.jpg";

const routes = [
  {
    title: "Mediterranean Coastal Drive",
    region: "Southern Europe",
    duration: "10–14 days",
    cost: "$1,800 – $3,200",
    description: "Wind along turquoise coastlines from Barcelona to Amalfi, with stops at hidden beaches and clifftop villages.",
    image: coastalImg,
  },
  {
    title: "Southeast Asia Temple Trail",
    region: "Cambodia · Thailand · Laos",
    duration: "21–30 days",
    cost: "$800 – $1,500",
    description: "Explore ancient temples, bustling night markets, and serene rice paddies on one of the world's most budget-friendly routes.",
    image: asiaImg,
  },
  {
    title: "Alpine Village Explorer",
    region: "Switzerland · Austria",
    duration: "7–10 days",
    cost: "$2,500 – $4,000",
    description: "Discover fairytale villages, dramatic mountain passes, and world-class cuisine in the heart of the Alps.",
    image: europeImg,
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
              transition={{ delay: i * 0.15 }}
              className={`group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow duration-500 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

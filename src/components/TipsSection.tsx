import { motion } from "framer-motion";
import { Lightbulb, Shield, Wallet, Compass, Utensils, Wifi } from "lucide-react";

const tips = [
  {
    icon: Wallet,
    title: "Book Flights Midweek",
    description: "Tuesday and Wednesday flights are typically 15–25% cheaper than weekend departures.",
  },
  {
    icon: Shield,
    title: "Travel Insurance First",
    description: "Always purchase comprehensive travel insurance before booking anything else. It's non-negotiable.",
  },
  {
    icon: Compass,
    title: "Travel in Shoulder Season",
    description: "Visit destinations between peak and off-peak for fewer crowds and better prices.",
  },
  {
    icon: Utensils,
    title: "Eat Where Locals Eat",
    description: "Skip tourist-area restaurants. Ask hotel staff or use local food apps for authentic, affordable meals.",
  },
  {
    icon: Wifi,
    title: "Get a Local SIM Card",
    description: "Airport kiosks sell affordable data plans. Avoid expensive roaming charges from your home carrier.",
  },
  {
    icon: Lightbulb,
    title: "Pack Light, Pack Right",
    description: "One carry-on forces better decisions. Roll clothes, use packing cubes, and wear your heaviest shoes.",
  },
];

const TipsSection = () => {
  return (
    <section id="tips" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Expert Advice</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Essential Travel Tips
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <tip.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

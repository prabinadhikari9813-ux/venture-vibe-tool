import { motion } from "framer-motion";
import { Mountain, Clock, DollarSign, Users, MapPin, Footprints } from "lucide-react";
import mardiImg from "@/assets/route-mardi.jpg";

const treks = [
  {
    name: "Mardi Himal Trek",
    altitude: "4,500m",
    duration: "5–7 days",
    costNepali: "NPR 10,000",
    costForeign: "$150–$300",
    difficulty: "Moderate",
    highlights: ["Machapuchare views", "Rhododendron forests", "Less crowded trail", "Teahouse stays"],
  },
];

const costBreakdown = [
  { label: "TIMS Card", nepali: "NPR 1,000", foreign: "$10" },
  { label: "ACAP Permit", nepali: "NPR 200", foreign: "$30" },
  { label: "Food & Lodging (5 days)", nepali: "NPR 5,000", foreign: "$60–$120" },
  { label: "Transport (Pokhara–Kande)", nepali: "NPR 500", foreign: "$5" },
  { label: "Guide/Porter (optional)", nepali: "NPR 3,000", foreign: "$80–$120" },
];

const NepalTrekSection = () => {
  const trek = treks[0];

  return (
    <section id="nepal" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Nepal Special</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Mardi Himal Trek
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            One of Nepal's most affordable treks — just NPR 10,000 per person for Nepali trekkers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={mardiImg}
              alt="Mardi Himal Trek trail with Machapuchare mountain"
              className="w-full h-80 lg:h-[460px] object-cover"
              loading="lazy"
              width={1280}
              height={864}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Mountain, label: "Altitude", value: trek.altitude },
                { icon: Clock, label: "Duration", value: trek.duration },
                { icon: Footprints, label: "Difficulty", value: trek.difficulty },
                { icon: MapPin, label: "Region", value: "Annapurna" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                  <item.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-display text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {trek.highlights.map((h) => (
                <span key={h} className="px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 font-body text-xs text-secondary">
                  {h}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-primary/10 border border-primary/20 text-center">
                <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-body text-xs text-muted-foreground mb-1">Nepali Trekkers</p>
                <p className="font-display text-2xl font-bold text-foreground">{trek.costNepali}</p>
                <p className="font-body text-xs text-muted-foreground">per person</p>
              </div>
              <div className="p-5 rounded-xl bg-accent/10 border border-accent/20 text-center">
                <DollarSign className="h-5 w-5 text-accent mx-auto mb-2" />
                <p className="font-body text-xs text-muted-foreground mb-1">Foreign Trekkers</p>
                <p className="font-display text-2xl font-bold text-foreground">{trek.costForeign}</p>
                <p className="font-body text-xs text-muted-foreground">per person</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Cost Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">Cost Breakdown</h3>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-3 gap-0 px-6 py-3 bg-muted/50 border-b border-border">
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase">Item</p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase text-center">Nepali</p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase text-right">Foreign</p>
            </div>
            {costBreakdown.map((item) => (
              <div key={item.label} className="grid grid-cols-3 gap-0 px-6 py-3 border-b border-border last:border-0">
                <p className="font-body text-sm text-foreground">{item.label}</p>
                <p className="font-body text-sm font-semibold text-foreground text-center">{item.nepali}</p>
                <p className="font-body text-sm font-semibold text-foreground text-right">{item.foreign}</p>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-0 px-6 py-4 bg-primary/5 border-t border-primary/20">
              <p className="font-display text-sm font-bold text-foreground">Total Estimate</p>
              <p className="font-display text-sm font-bold text-primary text-center">NPR ~10,000</p>
              <p className="font-display text-sm font-bold text-primary text-right">$150–$300</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NepalTrekSection;
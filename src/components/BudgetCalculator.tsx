import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Plane, Hotel, Utensils, Train, Camera, ShieldCheck } from "lucide-react";

const destinations = [
  { name: "Nepal Treks", daily: { budget: 15, midrange: 35, comfort: 80 }, currency: "NPR", rate: 133 },
];

const styles = [
  { key: "budget" as const, label: "Budget", desc: "Hostels, street food, public transit" },
  { key: "midrange" as const, label: "Mid-Range", desc: "Hotels, local restaurants, mixed transport" },
  { key: "comfort" as const, label: "Comfort", desc: "Boutique stays, fine dining, private transfers" },
];

const breakdownRatios = [
  { icon: Hotel, label: "Accommodation", pct: 0.40 },
  { icon: Utensils, label: "Food & Drink", pct: 0.25 },
  { icon: Train, label: "Transport", pct: 0.20 },
  { icon: Camera, label: "Activities", pct: 0.15 },
];

const BudgetCalculator = () => {
  const [destination, setDestination] = useState(0);
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState<"budget" | "midrange" | "comfort">("midrange");

  const dest = destinations[destination];
  const daily = dest.daily[style];
  const total = daily * days;
  const isNepal = dest.name === "Nepal Treks";
  const flightEstimate = isNepal ? 0 : style === "budget" ? 400 : style === "midrange" ? 700 : 1200;
  const grandTotal = total + flightEstimate;
  const nprTotal = isNepal ? Math.round(total * (dest.rate || 133)) : null;

  return (
    <section id="calculator" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Plan Your Trip</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Budget Calculator</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-background p-8 md:p-10 space-y-10"
        >
          {/* Destination */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-3">Destination</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {destinations.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setDestination(i)}
                  className={`px-4 py-3 rounded-xl font-body text-sm transition-all duration-200 border ${
                    destination === i
                      ? "bg-primary border-primary text-primary-foreground shadow-md"
                      : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-3">
              Duration — <span className="text-primary">{days} days</span>
            </label>
            <input
              type="range"
              min={3}
              max={60}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
              style={{ accentColor: "hsl(var(--primary))" }}
            />
            <div className="flex justify-between font-body text-xs text-muted-foreground mt-1">
              <span>3 days</span>
              <span>60 days</span>
            </div>
          </div>

          {/* Travel Style */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-3">Travel Style</label>
            <div className="grid sm:grid-cols-3 gap-3">
              {styles.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setStyle(s.key)}
                  className={`px-4 py-4 rounded-xl text-left transition-all duration-200 border ${
                    style === s.key
                      ? "bg-primary border-primary text-primary-foreground shadow-md"
                      : "bg-background border-border hover:border-primary/40"
                  }`}
                >
                  <span className={`font-display text-sm font-semibold block ${style === s.key ? "text-primary-foreground" : "text-foreground"}`}>
                    {s.label}
                  </span>
                  <span className={`font-body text-xs mt-1 block ${style === s.key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {s.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-border pt-8 space-y-6">
            5
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetCalculator;

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Plane, Hotel, Utensils, Train, Camera, ShieldCheck } from "lucide-react";

const destinations = [
  { name: "Nepal Treks", daily: { budget: 15, midrange: 35, comfort: 80 }, currency: "NPR", rate: 133 },
  { name: "Southeast Asia", daily: { budget: 30, midrange: 60, comfort: 120 } },
  { name: "Southern Europe", daily: { budget: 70, midrange: 120, comfort: 200 } },
  { name: "Western Europe", daily: { budget: 100, midrange: 170, comfort: 280 } },
  { name: "South America", daily: { budget: 35, midrange: 75, comfort: 150 } },
  { name: "East Africa", daily: { budget: 40, midrange: 90, comfort: 180 } },
  { name: "Japan & Korea", daily: { budget: 60, midrange: 130, comfort: 250 } },
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
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Daily Breakdown</p>
                {breakdownRatios.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-body text-sm text-foreground">{item.label}</span>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">
                      ${Math.round(daily * item.pct)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center sm:items-end text-center sm:text-right gap-4">
                <div>
                  <p className="font-body text-xs text-muted-foreground">On-ground costs</p>
                  <p className="font-display text-2xl font-bold text-foreground">${total.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground flex items-center gap-1 justify-center sm:justify-end">
                    <Plane className="h-3 w-3" /> Est. round-trip flights
                  </p>
                  <p className="font-display text-lg font-semibold text-muted-foreground">${flightEstimate.toLocaleString()}</p>
                </div>
                <div className="pt-3 border-t border-border w-full text-center sm:text-right">
                  <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">Estimated Total</p>
                  <p className="font-display text-4xl font-bold text-gradient">${grandTotal.toLocaleString()}</p>
                  {nprTotal && (
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      ≈ NPR {nprTotal.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
              <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
              <p className="font-body text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> These are estimates based on average traveler spending. 
                Actual costs vary by season, booking timing, and personal preferences. Add 15–20% as a buffer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetCalculator;

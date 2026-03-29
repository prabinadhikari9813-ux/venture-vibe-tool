import { motion } from "framer-motion";
import { Hotel, Utensils, Train, Camera, ShieldCheck } from "lucide-react";

const regions = [
  {
    name: "Australian Camp",
    daily: "NPR 1,500",
    level: "Easy Trek",
    color: "bg-secondary",
    breakdown: [
      { icon: Hotel, label: "Homestay", value: "NPR 500" },
      { icon: Utensils, label: "Meals", value: "NPR 500" },
      { icon: Train, label: "Transport", value: "NPR 300" },
      { icon: Camera, label: "Guide (opt.)", value: "NPR 200" },
    ],
    note: "Total: ~NPR 3,000 for 1–2 days",
  },
  {
    name: "Mardi Trek",
    daily: "NPR 2,000",
    level: "Budget (Nepali)",
    color: "bg-secondary",
    highlight: true,
    breakdown: [
      { icon: Hotel, label: "Teahouse Stay", value: "NPR 300–500" },
      { icon: Utensils, label: "Dal Bhat & Meals", value: "NPR 600–1,000" },
      { icon: Train, label: "Local Bus/Jeep", value: "NPR 200–400" },
      { icon: Camera, label: "Permits & Tips", value: "NPR 400–600" },
    ],
    note: "Total: ~NPR 10,000/person for 5-day trek",
  },
  {
    name: "Poon Hill Trek",
    daily: "NPR 2,000",
    level: "Budget (Nepali)",
    color: "bg-secondary",
    breakdown: [
      { icon: Hotel, label: "Teahouse Stay", value: "NPR 300–500" },
      { icon: Utensils, label: "Meals", value: "NPR 600–900" },
      { icon: Train, label: "Transport", value: "NPR 200–300" },
      { icon: Camera, label: "Permits", value: "NPR 400–500" },
    ],
    note: "Total: ~NPR 8,000/person for 4-day trek",
  },
  {
    name: "ABC Trek",
    daily: "NPR 1,700",
    level: "Moderate",
    color: "bg-primary",
    breakdown: [
      { icon: Hotel, label: "Teahouse Stay", value: "NPR 300–600" },
      { icon: Utensils, label: "Meals", value: "NPR 700–1,200" },
      { icon: Train, label: "Transport", value: "NPR 200–400" },
      { icon: Camera, label: "Permits & Guide", value: "NPR 500–800" },
    ],
    note: "Total: ~NPR 15,000/person for 9-day trek",
  },
  {
    name: "Southeast Asia",
    daily: "$25–$50",
    level: "Budget",
    color: "bg-secondary",
    breakdown: [
      { icon: Hotel, label: "Accommodation", value: "$5–$15" },
      { icon: Utensils, label: "Food", value: "$5–$12" },
      { icon: Train, label: "Transport", value: "$3–$8" },
      { icon: Camera, label: "Activities", value: "$5–$10" },
    ],
  },
  {
    name: "Southern Europe",
    daily: "$80–$150",
    level: "Mid-Range",
    color: "bg-primary",
    breakdown: [
      { icon: Hotel, label: "Accommodation", value: "$30–$70" },
      { icon: Utensils, label: "Food", value: "$20–$40" },
      { icon: Train, label: "Transport", value: "$15–$25" },
      { icon: Camera, label: "Activities", value: "$15–$25" },
    ],
  },
  {
    name: "Western Europe",
    daily: "$120–$250",
    level: "Comfort",
    color: "bg-accent",
    breakdown: [
      { icon: Hotel, label: "Accommodation", value: "$50–$120" },
      { icon: Utensils, label: "Food", value: "$30–$60" },
      { icon: Train, label: "Transport", value: "$20–$40" },
      { icon: Camera, label: "Activities", value: "$20–$35" },
    ],
  },
];

const CostSection = () => {
  return (
    <section id="costs" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Budget Planning</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Daily Travel Costs
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Average daily budgets per person, excluding international flights and travel insurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-shadow duration-500 ${
                region.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              <div className={`${region.color} px-6 py-5`}>
                <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/70 mb-1">
                  {region.level}
                </p>
                <h3 className="font-display text-lg font-bold text-primary-foreground">{region.name}</h3>
                <p className="font-display text-2xl font-bold text-primary-foreground mt-1">{region.daily}</p>
                <p className="font-body text-xs text-primary-foreground/70">per day</p>
              </div>
              <div className="p-6 space-y-3">
                {region.breakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-body text-sm text-foreground">{item.label}</span>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
                {region.note && (
                  <p className="font-body text-xs font-semibold text-primary pt-2 border-t border-border">
                    {region.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-start gap-3 p-6 rounded-xl bg-secondary/10 border border-secondary/20 max-w-2xl mx-auto"
        >
          <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
          <p className="font-body text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Pro tip:</span> Budget an extra 15–20% as a contingency fund.
            Unexpected costs like medical visits, lost items, or last-minute itinerary changes are common.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;

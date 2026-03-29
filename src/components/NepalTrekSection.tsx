import { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Clock, DollarSign, Users, MapPin, Footprints } from "lucide-react";
import mardiImg from "@/assets/route-mardi.jpg";
import poonhillImg from "@/assets/route-poonhill.jpg";
import abcImg from "@/assets/route-abc.jpg";
import australianCampImg from "@/assets/route-australian-camp.jpg";

const treks = [
  {
    name: "Mardi Himal Trek",
    altitude: "4,500m",
    duration: "5–7 days",
    costNepali: "NPR 10,000",
    costForeign: "$150–$300",
    difficulty: "Moderate",
    region: "Kaski · Annapurna",
    image: mardiImg,
    highlights: ["Machapuchare views", "Rhododendron forests", "Less crowded trail", "Teahouse stays"],
    breakdown: [
      { label: "TIMS Card", nepali: "NPR 1,000", foreign: "$10" },
      { label: "ACAP Permit", nepali: "NPR 200", foreign: "$30" },
      { label: "Food & Lodging (5 days)", nepali: "NPR 5,000", foreign: "$60–$120" },
      { label: "Transport (Pokhara–Kande)", nepali: "NPR 500", foreign: "$5" },
      { label: "Guide/Porter (optional)", nepali: "NPR 3,000", foreign: "$80–$120" },
    ],
    totalNepali: "NPR ~10,000",
    totalForeign: "$150–$300",
  },
  {
    name: "Poon Hill Trek",
    altitude: "3,210m",
    duration: "4–5 days",
    costNepali: "NPR 8,000",
    costForeign: "$120–$250",
    difficulty: "Easy–Moderate",
    region: "Kaski · Myagdi",
    image: poonhillImg,
    highlights: ["Sunrise panorama", "Dhaulagiri views", "Ghorepani village", "Hot springs at Tatopani"],
    breakdown: [
      { label: "TIMS Card", nepali: "NPR 1,000", foreign: "$10" },
      { label: "ACAP Permit", nepali: "NPR 200", foreign: "$30" },
      { label: "Food & Lodging (4 days)", nepali: "NPR 4,000", foreign: "$50–$100" },
      { label: "Transport (Pokhara–Nayapul)", nepali: "NPR 400", foreign: "$4" },
      { label: "Guide/Porter (optional)", nepali: "NPR 2,500", foreign: "$70–$100" },
    ],
    totalNepali: "NPR ~8,000",
    totalForeign: "$120–$250",
  },
  {
    name: "Annapurna Base Camp",
    altitude: "4,130m",
    duration: "7–12 days",
    costNepali: "NPR 15,000",
    costForeign: "$250–$500",
    difficulty: "Moderate–Hard",
    region: "Kaski · Annapurna",
    image: abcImg,
    highlights: ["Annapurna Sanctuary", "8,000m peaks", "Bamboo forests", "MBC sunrise"],
    breakdown: [
      { label: "TIMS Card", nepali: "NPR 1,000", foreign: "$10" },
      { label: "ACAP Permit", nepali: "NPR 200", foreign: "$30" },
      { label: "Food & Lodging (9 days)", nepali: "NPR 9,000", foreign: "$120–$250" },
      { label: "Transport (Pokhara–Nayapul)", nepali: "NPR 400", foreign: "$4" },
      { label: "Guide/Porter (recommended)", nepali: "NPR 4,500", foreign: "$100–$200" },
    ],
    totalNepali: "NPR ~15,000",
    totalForeign: "$250–$500",
  },
  {
    name: "Australian Camp & Dhampus",
    altitude: "2,060m",
    duration: "1–2 days",
    costNepali: "NPR 3,000",
    costForeign: "$30–$60",
    difficulty: "Easy",
    region: "Kaski · Pokhara",
    image: australianCampImg,
    highlights: ["Annapurna panorama", "Family-friendly", "Beginner trek", "Village homestays"],
    breakdown: [
      { label: "No permits required", nepali: "Free", foreign: "Free" },
      { label: "Food & Lodging (1 night)", nepali: "NPR 1,500", foreign: "$15–$30" },
      { label: "Transport (Pokhara–Kande)", nepali: "NPR 500", foreign: "$5" },
      { label: "Guide (optional)", nepali: "NPR 1,000", foreign: "$15–$25" },
    ],
    totalNepali: "NPR ~3,000",
    totalForeign: "$30–$60",
  },
];

const NepalTrekSection = () => {
  const [activeTrek, setActiveTrek] = useState(0);
  const trek = treks[activeTrek];

  return (
    <section id="nepal" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Nepal · Kaski Region</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Kaski Area Treks
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            All major treks from the Pokhara/Kaski region with costs for both Nepali and foreign trekkers.
          </p>
        </motion.div>

        {/* Trek Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {treks.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveTrek(i)}
              className={`px-4 py-2.5 rounded-xl font-body text-sm transition-all duration-200 border ${
                activeTrek === i
                  ? "bg-primary border-primary text-primary-foreground shadow-md"
                  : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <motion.div
          key={trek.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={trek.image}
              alt={`${trek.name} trail`}
              className="w-full h-80 lg:h-[460px] object-cover"
              loading="lazy"
              width={1280}
              height={864}
            />
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Mountain, label: "Altitude", value: trek.altitude },
                { icon: Clock, label: "Duration", value: trek.duration },
                { icon: Footprints, label: "Difficulty", value: trek.difficulty },
                { icon: MapPin, label: "Region", value: trek.region },
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
          </div>
        </motion.div>

        {/* Cost Breakdown Table */}
        <motion.div
          key={`table-${trek.name}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">
            {trek.name} — Cost Breakdown
          </h3>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-3 gap-0 px-6 py-3 bg-muted/50 border-b border-border">
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase">Item</p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase text-center">Nepali</p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase text-right">Foreign</p>
            </div>
            {trek.breakdown.map((item) => (
              <div key={item.label} className="grid grid-cols-3 gap-0 px-6 py-3 border-b border-border last:border-0">
                <p className="font-body text-sm text-foreground">{item.label}</p>
                <p className="font-body text-sm font-semibold text-foreground text-center">{item.nepali}</p>
                <p className="font-body text-sm font-semibold text-foreground text-right">{item.foreign}</p>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-0 px-6 py-4 bg-primary/5 border-t border-primary/20">
              <p className="font-display text-sm font-bold text-foreground">Total Estimate</p>
              <p className="font-display text-sm font-bold text-primary text-center">{trek.totalNepali}</p>
              <p className="font-display text-sm font-bold text-primary text-right">{trek.totalForeign}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NepalTrekSection;

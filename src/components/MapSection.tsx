import { motion } from "framer-motion";

const trekLocations = [
  { name: "Mardi Himal", lat: 28.3974, lng: 83.8714 },
  { name: "Poon Hill", lat: 28.3993, lng: 83.6961 },
  { name: "Annapurna Base Camp", lat: 28.5308, lng: 83.8781 },
  { name: "Australian Camp", lat: 28.2918, lng: 83.8368 },
];

const MapSection = () => {
  const centerLat = 28.4;
  const centerLng = 83.82;
  const markers = trekLocations
    .map((loc) => `markers=color:red%7Clabel:${loc.name[0]}%7C${loc.lat},${loc.lng}`)
    .join("&");

  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120000!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp`;

  return (
    <section id="map" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">Explore Locations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Trek Map — Kaski Region
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            All treks are based around Pokhara, the gateway city to the Annapurna region.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg"
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kaski Region Trek Map"
            className="w-full"
          />
        </motion.div>

        {/* Trek location cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {trekLocations.map((loc, i) => (
            <motion.a
              key={loc.name}
              href={`https://www.google.com/maps/search/${encodeURIComponent(loc.name + " Trek Nepal")}/@${loc.lat},${loc.lng},13z`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{loc.name}</p>
                <p className="font-body text-xs text-muted-foreground">
                  {loc.lat.toFixed(2)}°N, {loc.lng.toFixed(2)}°E
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;

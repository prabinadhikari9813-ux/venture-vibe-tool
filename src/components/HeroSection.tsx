import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Winding mountain road at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 text-sidebar-primary bg-accent-foreground text-center text-sm border-sidebar-primary" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4"
        >
          Your journey starts with prabin web
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Discover Routes,
          <br />
          <span className="italic font-normal">Travel Smarter</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10"
        >
          Expert tips, curated routes, and real cost breakdowns to help you explore the world on any budget.
        </motion.p>
        <motion.a
          href="#routes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="font-body text-sm uppercase tracking-widest">Explore</span>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

import { Map } from "lucide-react";

const Footer = () => (
  <footer id="about" className="py-16 px-6 border-t border-border bg-card">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-foreground mb-3">
            <Map className="h-5 w-5 text-primary" />
            TRAVEL WITH PRABIN
          </a>
          <p className="font-body text-sm text-muted-foreground max-w-xs">
            Curated travel routes, expert tips, and honest cost breakdowns to make your next adventure unforgettable.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Explore</h4>
            <div className="flex flex-col gap-2">
              {["Routes", "Tips", "Costs"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              {["Instagram", "Twitter", "Newsletter"].map((l) => (
                <span key={l} className="font-body text-sm text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="font-body text-xs text-muted-foreground">© 2026 Wanderlust. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

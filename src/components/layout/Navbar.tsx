import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-6xl px-4 md:px-6 flex items-center justify-between rounded-xl glass-card",
          "transition-all duration-300",
          scrolled ? "py-2" : "py-3",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-mono font-bold">
          <Terminal className="w-5 h-5 text-neon-blue" />
          <span className="neon-text-blue">rikin</span>
          <span className="text-muted-foreground">@</span>
          <span className="neon-text-violet">ai-lab</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all duration-200",
                  active === l.id
                    ? "text-neon-blue bg-neon-blue/10 shadow-neon-blue"
                    : "text-foreground/70 hover:text-neon-blue hover:bg-white/5",
                )}
              >
                <span className="text-neon-red">~/</span>
                {l.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-neon-blue"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-4 mt-2 animate-fade-in-up">
          <ul className="glass-card rounded-xl p-3 font-mono text-sm flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-white/5 hover:text-neon-blue"
                >
                  <span className="text-neon-red">~/</span>
                  {l.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
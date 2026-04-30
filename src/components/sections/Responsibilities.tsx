import { useInView } from "@/hooks/useInView";
import { responsibilities } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Award, Calendar } from "lucide-react";

const Responsibilities = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="responsibilities" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> cat positions_of_responsibility.md
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Position of Responsibility
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {responsibilities.map((r, i) => (
            <article
              key={r.role + r.org}
              className={cn(
                "glass-card rounded-xl p-6 neon-border-violet hover:shadow-neon-violet transition-all duration-300 reveal",
                inView && "in-view",
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center neon-border-violet bg-neon-violet/10">
                  <Award className="w-5 h-5 text-neon-violet" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono text-lg font-semibold text-neon-violet">{r.role}</h3>
                  <p className="text-foreground/80 text-sm mt-0.5">{r.org}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {r.period}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-2 leading-relaxed">
                    <span className="font-mono shrink-0 text-neon-violet">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;

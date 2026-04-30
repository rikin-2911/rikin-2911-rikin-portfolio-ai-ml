import { useInView } from "@/hooks/useInView";
import { researchInterests } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

const colorClass = (c: "red" | "blue" | "violet") =>
  c === "red"
    ? "neon-border-red text-neon-red hover:shadow-neon-red"
    : c === "violet"
    ? "neon-border-violet text-neon-violet hover:shadow-neon-violet"
    : "neon-border-blue text-neon-blue hover:shadow-neon-blue";

const Interests = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="interests" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> ls ~/research_interests/
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Research Interests
          </h2>
          <p className="text-foreground/70 max-w-2xl mt-3">
            Directions I'm actively exploring at the intersection of AI, agents, and scientific computing.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchInterests.map((r, i) => (
            <div
              key={r.name}
              className={cn(
                "glass-card rounded-xl p-5 transition-all duration-300 reveal flex items-start gap-3",
                colorClass(r.color),
                inView && "in-view",
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Brain className="w-5 h-5 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-mono text-xs text-muted-foreground">~/research/</p>
                <p className="font-mono text-base font-semibold mt-0.5">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

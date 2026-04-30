import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const chipColor = (c: "red" | "blue" | "violet") =>
  c === "red"
    ? "border-neon-red/50 text-neon-red hover:shadow-neon-red"
    : c === "violet"
    ? "border-neon-violet/50 text-neon-violet hover:shadow-neon-violet"
    : "border-neon-blue/50 text-neon-blue hover:shadow-neon-blue";

const Skills = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> python -c "import skills; skills.list()"
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Skills
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.group}
              className={cn("glass-card rounded-xl p-5 hover-glow-blue reveal", inView && "in-view")}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-mono text-xs text-muted-foreground mb-3">
                <span className="text-neon-red">~/</span>
                {s.group.toLowerCase().replace(/\s|\//g, "_")}
              </p>
              <h3 className="font-mono text-lg font-semibold text-foreground mb-4">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className={cn(
                      "px-2.5 py-1 rounded-md font-mono text-xs border bg-card/40 transition-all duration-300",
                      chipColor(s.color),
                    )}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
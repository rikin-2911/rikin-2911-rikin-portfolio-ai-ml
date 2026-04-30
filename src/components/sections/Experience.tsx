import TerminalWindow from "@/components/effects/TerminalWindow";
import { experiences, achievements } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const colorMap = {
  red: {
    border: "neon-border-red",
    text: "text-neon-red",
    glow: "hover:shadow-neon-red",
    bg: "bg-neon-red/10",
  },
  blue: {
    border: "neon-border-blue",
    text: "text-neon-blue",
    glow: "hover:shadow-neon-blue",
    bg: "bg-neon-blue/10",
  },
  violet: {
    border: "neon-border-violet",
    text: "text-neon-violet",
    glow: "hover:shadow-neon-violet",
    bg: "bg-neon-violet/10",
  },
};

const tagColor = (c: "red" | "blue" | "violet") =>
  c === "red"
    ? "text-neon-red border-neon-red/40"
    : c === "violet"
    ? "text-neon-violet border-neon-violet/40"
    : "text-neon-blue border-neon-blue/40";

const Experience = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { ref: logRef, inView: logIn } = useInView<HTMLDivElement>();

  return (
    <section id="experience" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> cat experience.json | jq .
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Experience &amp; Internships
          </h2>
        </div>

        <div ref={ref} className="flex flex-col gap-6">
          {experiences.map((e, i) => {
            const c = colorMap[e.color];
            return (
              <article
                key={e.role + e.company}
                className={cn(
                  "group glass-card rounded-xl p-5 transition-all duration-300 reveal",
                  c.glow,
                  inView && "in-view",
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Logo placeholder */}
                  <div
                    className={cn(
                      "shrink-0 w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden",
                      c.border,
                      c.bg
                    )}
                  >
                    {e.logo ? (
                      <img
                        src={e.logo}
                        alt={e.company}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition"
                      />
                    ) : (
                      <span className={cn("font-mono font-bold text-lg", c.text)}>
                        {e.initials}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Briefcase className="w-3 h-3" />
                      <span>internship</span>
                    </div>
                    <h3 className={cn("font-mono text-lg font-semibold mt-1", c.text)}>
                      {e.role}
                    </h3>
                    <p className="text-foreground/80 text-sm mt-0.5">{e.company}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {e.period}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2 leading-relaxed">
                      <span className={cn("font-mono shrink-0", c.text)}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className={cn(
                        "px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wide border bg-card/40",
                        tagColor(e.color),
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Achievements log */}
        <div className="mt-12" ref={logRef}>
          <p className="font-mono text-sm text-neon-blue/80 mb-3">
            <span className="text-neon-red">$</span> tail -f achievements.log
          </p>
          <TerminalWindow title="rikin@ai-lab: /var/log/achievements.log">
            <div className="space-y-2">
              <div className="text-muted-foreground">
                <span className="text-neon-red">$</span> cat achievements.log
              </div>
              {achievements.map((a, i) => (
                <div
                  key={a.text}
                  className={cn("flex items-start gap-3 reveal", logIn && "in-view")}
                  style={{ transitionDelay: `${i * 140}ms` }}
                >
                  <span
                    className={cn(
                      "shrink-0 px-2 py-0.5 rounded border text-[10px] font-bold tracking-wider",
                      tagColor(a.color),
                    )}
                  >
                    [{a.tag}]
                  </span>
                  <span className="text-foreground/85">{a.text}</span>
                </div>
              ))}
              <div
                className={cn("text-muted-foreground pt-2 reveal", logIn && "in-view")}
                style={{ transitionDelay: `${achievements.length * 140 + 80}ms` }}
              >
                process completed — exit 0
                <span className="inline-block w-[8px] h-[1em] ml-1 bg-neon-blue align-middle animate-blink" />
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default Experience;

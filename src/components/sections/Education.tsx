import { GraduationCap } from "lucide-react";
import { education, focusAreas } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const SectionHeader = ({ prompt, title }: { prompt: string; title: string }) => (
  <div className="mb-10">
    <p className="font-mono text-sm text-neon-blue/80">
      <span className="text-neon-red">$</span> {prompt}
    </p>
    <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
      {title}
    </h2>
  </div>
);

const Education = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="education" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader prompt="cat education.md" title="Education" />

        <div ref={ref} className={cn("relative pl-6 md:pl-10", inView && "in-view")}>
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-red via-neon-violet to-neon-blue" />

          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={cn("relative mb-8 reveal", inView && "in-view")}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className={cn(
                  "absolute -left-[18px] md:-left-[26px] top-4 w-3 h-3 rounded-full",
                  edu.color === "blue" ? "bg-neon-blue shadow-neon-blue" : "bg-neon-violet shadow-neon-violet",
                )}
              />
              <div className="glass-card rounded-xl p-5 md:p-6 hover-glow-blue">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-mono text-lg md:text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground/75 mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 font-mono text-sm">
                      <span className="text-muted-foreground">
                        <span className="text-neon-violet">period:</span> {edu.period}
                      </span>
                      <span className="text-muted-foreground">
                        <span className="text-neon-violet">CPI:</span>{" "}
                        <span className="text-neon-blue">{edu.cpi}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={cn("reveal", inView && "in-view")} style={{ transitionDelay: "320ms" }}>
            <p className="font-mono text-sm text-neon-blue/80 mb-3">
              <span className="text-neon-red">$</span> ls focus_areas/
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 rounded-md font-mono text-xs glass-card neon-border-blue text-neon-blue"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
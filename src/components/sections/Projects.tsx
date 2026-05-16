import { Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import NeuralPulse from "@/components/effects/NeuralPulse";

const Projects = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> ls -la projects/
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl mt-3">
            A selection of machine learning, deep learning and AI systems built end-to-end.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={cn(
                "terminal-window neon-border-blue hover-glow-blue group reveal",
                inView && "in-view",
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="terminal-header">
                <span className="terminal-dot bg-neon-red" />
                <span className="terminal-dot" style={{ background: "hsl(45 100% 55%)" }} />
                <span className="terminal-dot" style={{ background: "hsl(140 80% 50%)" }} />
                <span className="ml-3 text-[11px] font-mono text-muted-foreground truncate">
                  ~/projects/{p.title.toLowerCase().split(" ").slice(0, 2).join("_")}.py
                </span>
              </div>
              <div className="p-5 flex flex-col h-[calc(100%-2.4rem)]">
                <h3 className="font-mono text-lg font-semibold text-neon-blue group-hover:text-gradient-neon transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/75 mt-2 leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wide bg-neon-violet/10 text-neon-violet border border-neon-violet/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon-blue transition-all w-fit"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 reveal in-view">
          <p className="font-mono text-xs text-neon-blue/80 mb-3">
            <span className="text-neon-red">$</span> model.train() -- incoming projects queue
          </p>
          <NeuralPulse />
          <p className="font-mono text-[11px] text-foreground/65 mt-2 text-center">
            More AI/ML systems are actively training and coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

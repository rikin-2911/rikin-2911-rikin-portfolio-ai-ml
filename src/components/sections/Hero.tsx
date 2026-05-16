import { Download, FolderGit2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingText from "@/components/effects/TypingText";
import InteractiveTerminal from "@/components/effects/InteractiveTerminal";
import ArchSphereNavigator from "@/components/effects/ArchSphereNavigator";
import rikin from "@/assets/11.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start gap-6 animate-fade-in-up">
          <div className="font-mono text-xs text-neon-blue/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-red animate-glow-pulse" />
            booting neural_core.sh ...
          </div>
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl opacity-80 blur-md animate-glow-pulse"
              style={{ background: "var(--gradient-neon)" }}
              aria-hidden
            />
            <img
              src={rikin}
              alt="Rikin Pithadia portrait"
              width={320}
              height={320}
              className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] object-cover rounded-2xl border border-neon-blue/40"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 animate-fade-in-up">
          <p className="font-mono text-sm text-neon-blue">
            <span className="text-neon-red">$</span> whoami
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient-neon">Rikin Pithadia</span>
          </h1>
          <p className="font-mono text-base md:text-lg text-foreground/85">
            AI, ML &amp; Data Science Enthusiast{" "}
            <span className="text-neon-violet">|</span> From DATA to Decisions
          </p>
          <div className="font-mono text-base md:text-lg min-h-[1.6em]">
            <span className="text-neon-red">&gt;</span>{" "}
            <TypingText
              phrases={[
                "Engineering intelligent AI systems...",
                "Working on Generative and Agentic AI...",
                "Designing backend systems for AI...",
                "Turning data into actionable intelligence systems...",
                "Advancing ideas through applied AI research...",
                //"Exploring deep learning...",
                "Creating AI solutions from scratch...",
              ]}
              className="text-foreground"
            />
          </div>
          <p className="text-foreground/75 leading-relaxed max-w-xl">
            I am a dual-degree student exploring and building AI systems across machine learning and deep learning, 
            focusing on how they perform in real-world environments. My work includes 
            generative and agentic AI, scientific machine learning, and integrating AI with robotics, electronics and mechanical systems.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-neon-red text-background hover:bg-neon-red/90 shadow-neon-red font-mono">
              <a href="#projects"><FolderGit2 className="w-4 h-4" /> View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:text-neon-blue font-mono"
            >
              <a href="/resume.pdf" download><Download className="w-4 h-4" /> Download Resume</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-neon-violet hover:bg-neon-violet/10 hover:text-neon-violet font-mono"
            >
              <a href="#contact"><Mail className="w-4 h-4" /> Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Terminal showcase */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid xl:grid-cols-[1.5fr_0.8fr] gap-6 items-start">
          <div>
            <p className="font-mono text-xs text-neon-blue/80 mb-2">
              <span className="text-neon-red">$</span> live shell — try{" "}
              <span className="text-neon-violet">help</span>,{" "}
              <span className="text-neon-violet">whoami</span>,{" "}
              <span className="text-neon-violet">projects</span>
            </p>
            <InteractiveTerminal />
          </div>
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-neon-blue/20">
            <p className="font-mono text-xs text-neon-blue/80 mb-3">
              <span className="text-neon-red">$</span> arch-map --sections
            </p>
            <ArchSphereNavigator />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

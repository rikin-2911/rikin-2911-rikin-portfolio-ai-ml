import { useEffect, useRef, useState, KeyboardEvent } from "react";

type Line = { kind: "in" | "out" | "err"; text: string };

const HELP = [
  "available commands:",
  "  help          show this help",
  "  whoami        about me",
  "  ls            list sections",
  "  cat skills    print skills",
  "  cat contact   show contact info",
  "  experience    list internships",
  "  projects      list projects",
  "  banner        print ascii banner",
  "  clear         clear terminal",
];

const SECTIONS = ["education/", "experience/", "projects/", "responsibilities/", "skills/", "interests/", "contact/"];

const goto = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const InteractiveTerminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Welcome to rikin@ai-lab — type 'help' to begin." },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const push = (next: Line[]) => setLines((p) => [...p, ...next]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    push([{ kind: "in", text: cmd }]);
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHIdx(-1);

    const [base, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ");

    switch (base) {
      case "help":
        push(HELP.map((t) => ({ kind: "out", text: t })));
        break;
      case "whoami":
        push([
          { kind: "out", text: "rikin_pithadia — ai_research_intern" },
          { kind: "out", text: "  focus: Agentic AI · RAG · SciML · Neural ODEs" },
        ]);
        break;
      case "ls":
        push([{ kind: "out", text: SECTIONS.join("  ") }]);
        break;
      case "cat":
        if (arg === "skills")
          push([
            { kind: "out", text: "Programming  : Python, C, Java, R, Linux Scripting" },
            { kind: "out", text: "AI/ML        : Scikit-learn, XGBoost, Feature Eng." },
            { kind: "out", text: "Deep Learning: PyTorch, TensorFlow, CNN, RNN, LSTM, Transformers" },
            { kind: "out", text: "GenAI        : LangChain, RAG, LLMs, FAISS, Chroma, HuggingFace" },
            { kind: "out", text: "Backend      : FastAPI, Docker, Streamlit, Git, GitHub" },
          ]);
        else if (arg === "contact") {
          push([
            { kind: "out", text: "linkedin: linkedin.com/in/rikin-pithadia-20b94729b" },
            { kind: "out", text: "github  : github.com/rikin-2911" },
          ]);
          goto("contact");
        } else push([{ kind: "err", text: `cat: ${arg || "?"}: No such file` }]);
        break;
      case "experience":
        push([
          { kind: "out", text: "[1] AI Intern @ Mirae Flux Labs (CognifyEV) — Aug–Nov 2025" },
          { kind: "out", text: "[2] Robotics + AI Intern @ Early-Stage Startup" },
          { kind: "out", text: "[3] Incoming Research Intern @ IIT Gandhinagar" },
        ]);
        goto("experience");
        break;
      case "projects":
        push([
          { kind: "out", text: "generative_ai/  iot_energy/  fraud_detection/" },
          { kind: "out", text: "sentiment_nlp/  cnn_vision/  stock_predict/" },
        ]);
        goto("projects");
        break;
      case "banner":
        push(
          [
            "  ____  _ _    _         ",
            " |  _ \\(_) | _(_)_ __    ",
            " | |_) | | |/ / | '_ \\   ",
            " |  _ <| |   <| | | | |  ",
            " |_| \\_\\_|_|\\_\\_|_| |_|  ",
          ].map((t) => ({ kind: "out", text: t })),
        );
        break;
      case "clear":
        setLines([]);
        break;
      case "sudo":
        push([{ kind: "err", text: "permission denied: nice try 😏" }]);
        break;
      default:
        push([{ kind: "err", text: `command not found: ${base} — try 'help'` }]);
    }
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = hIdx === -1 ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(next);
      setValue(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx === -1) return;
      const next = hIdx + 1;
      if (next >= history.length) {
        setHIdx(-1);
        setValue("");
      } else {
        setHIdx(next);
        setValue(history[next]);
      }
    }
  };

  return (
    <div
      className="terminal-window neon-border-blue"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header">
        <span className="terminal-dot bg-neon-red" />
        <span className="terminal-dot" style={{ background: "hsl(45 100% 55%)" }} />
        <span className="terminal-dot" style={{ background: "hsl(140 80% 50%)" }} />
        <span className="ml-3 text-xs font-mono text-muted-foreground truncate">
          rikin@ai-lab: ~ — interactive shell (try: help)
        </span>
      </div>
      <div
        ref={scrollRef}
        className="p-5 font-mono text-sm leading-relaxed h-[280px] overflow-y-auto"
      >
        {lines.map((l, i) => {
          if (l.kind === "in")
            return (
              <div key={i} className="whitespace-pre-wrap break-words">
                <span className="text-neon-red">rikin@ai-lab</span>
                <span className="text-foreground">:</span>
                <span className="text-neon-blue">~</span>
                <span className="text-foreground">$ </span>
                <span>{l.text}</span>
              </div>
            );
          if (l.kind === "err")
            return (
              <div key={i} className="text-neon-red whitespace-pre-wrap break-words">
                {l.text}
              </div>
            );
          return (
            <div key={i} className="text-foreground/85 whitespace-pre-wrap break-words">
              {l.text}
            </div>
          );
        })}

        <div className="flex items-center mt-1">
          <span className="text-neon-red">rikin@ai-lab</span>
          <span className="text-foreground">:</span>
          <span className="text-neon-blue">~</span>
          <span className="text-foreground">$&nbsp;</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
            className="flex-1 bg-transparent outline-none border-none text-foreground caret-neon-blue font-mono text-sm"
            aria-label="Terminal input"
          />
          <span className="inline-block w-[8px] h-[1em] ml-0.5 bg-neon-blue animate-blink" />
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;

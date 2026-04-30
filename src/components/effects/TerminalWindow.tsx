import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = "rikin@ai-lab: ~", children, className }: Props) => {
  return (
    <div className={cn("terminal-window neon-border-blue", className)}>
      <div className="terminal-header">
        <span className="terminal-dot bg-neon-red shadow-neon-red" />
        <span className="terminal-dot" style={{ background: "hsl(45 100% 55%)" }} />
        <span className="terminal-dot" style={{ background: "hsl(140 80% 50%)" }} />
        <span className="ml-3 text-xs font-mono text-muted-foreground truncate">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default TerminalWindow;
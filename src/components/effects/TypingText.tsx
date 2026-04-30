import { useEffect, useState } from "react";

interface Props {
  phrases: string[];
  className?: string;
  speed?: number;
  pause?: number;
}

const TypingText = ({ phrases, className = "", speed = 60, pause = 1400 }: Props) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let timer: number;

    if (!deleting && text === current) {
      timer = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timer = window.setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, i, phrases, speed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[10px] h-[1.1em] -mb-1 ml-1 bg-neon-blue animate-blink" />
    </span>
  );
};

export default TypingText;
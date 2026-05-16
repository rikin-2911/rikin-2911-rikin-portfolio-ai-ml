import { MouseEvent, useMemo, useState } from "react";

type Node = {
  id: string;
  x: number;
  y: number;
  stage: number;
};

type Edge = {
  from: Node;
  to: Node;
  key: string;
};

const stageLabels = ["Input Tokens", "Embeddings", "Self-Attention", "FFN", "Output"];
const stageCounts = [5, 5, 4, 4, 3];

const NeuralPulse = () => {
  const [weightShift, setWeightShift] = useState(0.5);

  const nodes = useMemo<Node[]>(() => {
    return stageCounts.flatMap((count, stageIndex) => {
      const x = 10 + stageIndex * 20;
      return Array.from({ length: count }, (_, nodeIndex) => {
        const yStep = 64 / Math.max(count - 1, 1);
        return {
          id: `${stageIndex}-${nodeIndex}`,
          x,
          y: 18 + nodeIndex * yStep,
          stage: stageIndex,
        };
      });
    });
  }, []);

  const links = useMemo<Edge[]>(() => {
    const segments: Edge[] = [];
    for (let stage = 0; stage < stageCounts.length - 1; stage += 1) {
      const current = nodes.filter((n) => n.stage === stage);
      const next = nodes.filter((n) => n.stage === stage + 1);
      current.forEach((from) => {
        next.forEach((to) => {
          segments.push({ from, to, key: `${from.id}-${to.id}` });
        });
      });
    }

    const attentionNodes = nodes.filter((n) => n.stage === 2);
    attentionNodes.forEach((from, i) => {
      attentionNodes.forEach((to, j) => {
        if (i !== j) {
          segments.push({ from, to, key: `attn-${from.id}-${to.id}` });
        }
      });
    });

    return segments;
  }, [nodes]);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / Math.max(rect.width, 1);
    setWeightShift(Math.max(0, Math.min(1, ratio)));
  };

  return (
    <div
      className="neural-shell neural-shell-project"
      aria-label="Transformer training animation"
      onMouseMove={onMove}
      onMouseLeave={() => setWeightShift(0.5)}
    >
      <div className="neural-heading">\"Sometimes you gotta run before you can walk.\" // JARVIS</div>
      <svg viewBox="0 0 100 100" className="neural-svg" role="img" aria-label="Animated transformer-style network">
        <defs>
          <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 90, 35, 0.54)" />
            <stop offset="52%" stopColor="rgba(255, 0, 65, 0.74)" />
            <stop offset="100%" stopColor="rgba(138, 43, 226, 0.62)" />
          </linearGradient>
        </defs>

        {links.map((edge, idx) => {
          const edgeFactor = (idx % 17) / 16;
          const shift = Math.abs(weightShift - edgeFactor);
          const opacity = 0.22 + (1 - shift) * 0.62;
          const strokeWidth = 0.17 + (1 - shift) * 0.34;
          return (
            <line
              key={edge.key}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              className="neural-link"
              style={{
                animationDelay: `${idx * 0.012}s`,
                opacity,
                strokeWidth,
              }}
            />
          );
        })}

        {nodes.map((node, idx) => {
          const className =
            node.stage === 0 || node.stage === stageCounts.length - 1
              ? "neural-node neural-node-io"
              : node.stage === 2
                ? "neural-node neural-node-violet"
                : "neural-node neural-node-hidden";

          return (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="1.35"
              className={className}
              style={{ animationDelay: `${idx * 0.06}s` }}
            />
          );
        })}
      </svg>
      <div className="neural-scanline" aria-hidden />
      <div className="neural-labels neural-transformer-labels" aria-hidden>
        {stageLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default NeuralPulse;

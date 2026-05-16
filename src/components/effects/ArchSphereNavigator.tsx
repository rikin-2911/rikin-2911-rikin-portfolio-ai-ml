import { useEffect, useMemo, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type DotPoint = {
  x: number;
  y: number;
  z: number;
};

type DotProjection = DotPoint & {
  x: number;
  y: number;
  depth: number;
  px: number;
  py: number;
  scale: number;
};

const PHI = Math.PI * (3 - Math.sqrt(5));

const createSpherePoint = (index: number, total: number): DotPoint => {
  const y = 1 - (index / Math.max(total - 1, 1)) * 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = PHI * index;
  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;
  return { x, y, z };
};

const projectToScreen = (point: DotPoint, angle: number): DotProjection => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const rx = point.x * cos + point.z * sin;
  const rz = -point.x * sin + point.z * cos;
  const ry = point.y;
  const scale = 0.62 + (rz + 1) * 0.28;
  return {
    x: rx,
    y: ry,
    z: rz,
    depth: (rz + 1) / 2,
    scale,
    px: rx * 37 * scale,
    py: ry * 40 * scale,
  };
};

const scrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ArchSphereNavigator = () => {
  const basePoints = useMemo(
    () => navLinks.map((_, index) => createSpherePoint(index, navLinks.length)),
    [],
  );
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setAngle((prev) => (prev - dt * 0.00035) % (Math.PI * 2));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const projectedPoints = useMemo(
    () => basePoints.map((point) => projectToScreen(point, angle)),
    [basePoints, angle],
  );

  return (
    <div className="arch-sphere-shell">
      <div className="arch-sphere-aurora" aria-hidden />
      <div className="arch-sphere" aria-label="Section navigator globe">
        <div className="arch-sphere-grid" aria-hidden />
        <svg className="arch-sphere-links" viewBox="0 0 100 100" aria-hidden>
          {projectedPoints.map((from, index) => {
            const to = projectedPoints[(index + 1) % projectedPoints.length];
            const x1 = 50 + from.px;
            const y1 = 50 + from.py;
            const x2 = 50 + to.px;
            const y2 = 50 + to.py;
            const pathDepth = (from.depth + to.depth) / 2;
            return (
              <line
                key={`${index}-${(index + 1) % projectedPoints.length}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="arch-sphere-link-line"
                style={{ opacity: 0.2 + pathDepth * 0.45 }}
              />
            );
          })}
        </svg>
        {navLinks.map((link, index) => {
          const point = projectedPoints[index];
          const size = 6 + point.depth * 6;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "arch-sphere-dot group",
                point.depth > 0.58 ? "arch-sphere-dot-front" : "arch-sphere-dot-back",
              )}
              style={{
                left: `calc(50% + ${point.px}%)`,
                top: `calc(50% + ${point.py}%)`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.45 + point.depth * 0.55,
                transform: `translate(-50%, -50%) scale(${point.scale})`,
              }}
              aria-label={`Go to ${link.label}`}
              title={link.label}
            >
              <span className="arch-sphere-tooltip">{link.label}</span>
            </button>
          );
        })}
      </div>
      <p className="arch-sphere-hint">
        <span className="text-neon-red">$</span> hover + click nodes to jump sections
      </p>
    </div>
  );
};

export default ArchSphereNavigator;

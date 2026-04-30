const GridOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 -z-20 grid-bg opacity-60"
    style={{
      maskImage:
        "radial-gradient(ellipse at center, hsl(0 0% 0% / 0.9), transparent 75%)",
      WebkitMaskImage:
        "radial-gradient(ellipse at center, hsl(0 0% 0% / 0.9), transparent 75%)",
    }}
  />
);

export default GridOverlay;
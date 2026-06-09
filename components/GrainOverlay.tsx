/**
 * A fixed, full-viewport SVG grain overlay. Uses feTurbulence to
 * generate procedural noise (no PNG asset needed). pointer-events
 * disabled so it never intercepts clicks. Opacity + blend mode
 * are controlled in globals.css via .grain-overlay.
 */
export function GrainOverlay() {
  const svg =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="5"/>
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#n)"/>
      </svg>`,
    );

  return (
    <div
      className="grain-overlay"
      aria-hidden="true"
      style={{ backgroundImage: `url("${svg}")` }}
    />
  );
}

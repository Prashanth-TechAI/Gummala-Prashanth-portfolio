import { memo } from 'react';

/** Fine paper grain as an inline SVG, so the page never waits on an image request. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * AmbientStage — fixed-to-viewport backdrop in the hero's poster language:
 * warm off-white paper, a few soft warm glows at the edges and a faint grain.
 * Pure CSS and completely static, so it costs nothing while scrolling.
 */
const AmbientStage = memo(() => (
  <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[#F7F6F3]" />

    {/* Soft warm glows, kept faint so they tint rather than colour the page */}
    <div
      className="absolute -left-48 top-[18%] h-[38rem] w-[38rem] rounded-full blur-3xl opacity-[0.16]"
      style={{ background: 'radial-gradient(circle, #F4845F 0%, #F2A7C3 45%, transparent 72%)' }}
    />
    <div
      className="absolute -right-52 top-[48%] h-[42rem] w-[42rem] rounded-full blur-3xl opacity-[0.16]"
      style={{ background: 'radial-gradient(circle, #E9B872 0%, #F4845F 35%, #C9B6F2 62%, transparent 75%)' }}
    />
    <div
      className="absolute bottom-[-18rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-[0.1]"
      style={{ background: 'radial-gradient(circle, #E9B872 0%, transparent 70%)' }}
    />

    {/* Paper grain */}
    <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: GRAIN }} />
  </div>
));
AmbientStage.displayName = 'AmbientStage';

export default AmbientStage;

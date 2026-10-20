# Interactive isometric mosaic hero background

Replace the photo slideshow behind the homepage hero with a living isometric block mosaic modeled on the reference image. Everything else in the hero (headline, chips, buttons, nav, HUD, project captions, sound, timecode, scroll cue) stays as is.

## What you'll see
- First frame closely matches the reference: deep navy angled planes, a cascade of small cubes drifting from upper-left, and a dense cluster of cyan/blue, yellow/cream and coral/pink prisms, bridges and stacks in the lower-right. The headline area on the left stays mostly empty so it remains readable.
- Moving the cursor acts like a soft force field: nearby blocks ease away, small ones react more, some lift slightly; far blocks barely move. When the cursor leaves, everything springs gently back to the original composition.
- Three depth layers (front / middle / back) give subtle parallax.
- Very faint autonomous drift along the bottom-right to upper-left flow.
- Tablet: smaller radius and push. Phone/touch: only the faint drift, no interference with scrolling.
- Reduced motion: static mosaic, no physics, no drift.
- No particles, lines, trails, dots, text or objects.

## Behavior kept from the current reel
- The project captions, the "01/04" counter and clicking a slide to open its project keep working; only the photos behind them are replaced by the mosaic.

## Technical details
- New file `public/site/mosaic.js`: a single `<canvas aria-hidden>` inserted as the first layer of `#reel` (below `.reel-scrim`, `pointer-events:none`). Pointer position read from a `pointermove` listener on the hero, so links/buttons remain clickable.
- Mosaic defined as data: ~45 blocks with `x, y, w, d, h, color, layer, interactionStrength`, in normalized coordinates relative to the hero, drawn as flat-shaded isometric prisms (top/left/right faces) back-to-front. Background planes drawn once to an offscreen canvas, plus a faint grain.
- Physics: `force = clamp(1 - dist/radius, 0, 1)`, spring (stiffness ~0.08, damping ~0.82) per block toward home + displacement; `requestAnimationFrame`, no React state; pauses when hero is off-screen or tab hidden. DPR-aware resize.
- `public/site/styles.css`: hide `.reel-shot img` (and Ken Burns), make slide backgrounds transparent, style the canvas. Captions/links untouched.
- `src/routes/index.tsx`: load `mosaic.js` after `app.js`. No new dependencies.
- Verify with Playwright: default frame vs reference, cursor reaction and return, buttons clickable, mobile viewport, reduced-motion, no console errors.

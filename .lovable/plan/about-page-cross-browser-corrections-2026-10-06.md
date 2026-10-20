# About page cross-browser corrections

## Audit findings
- Chrome, Firefox, and WebKit load the expected fonts and show no horizontal overflow at 1280, 768, 390, and 320px.
- Firefox and WebKit measure text and `ch`-based heading widths differently from Chrome. This changes some paragraph wrapping and heading widths.
- The page uses regular CSS, not Webflow-specific layout rules. Shared styles must remain unchanged.

## Changes
- Scope all corrections to an About-only wrapper.
- Normalize font measurement and explicitly define heading and emphasized-text weights, preserving the existing font families and visual hierarchy.
- Stabilize heading and paragraph maximum widths against browser-dependent character measurements, using Chrome as the visual reference.
- Add shrink-safe grid/flex sizing where appropriate without changing existing breakpoints, section spacing, content, or navigation.
- Retain the explicit main heading line break and existing font-loading behavior unless further testing identifies a loading defect.

## Verification
- Compare before/after text wrapping, heading lines, alignment, and section positions in Chromium, Firefox, and WebKit across desktop, tablet, and mobile widths.
- Check the About menu and links and confirm that the homepage remains unchanged.
- Check current build diagnostics and run relevant existing tests.
- Clearly distinguish Chromium from actual Chrome/Edge and WebKit from actual Safari; branded Edge and Safari are unavailable in this environment.

## Technical scope
Changes are limited to `src/routes/about.tsx`, About-scoped rules in `public/site/styles.css`, and an architecture note in `AGENTS.md`. No shared selector changes, new plugins, content edits, or browser-specific user-agent hacks.
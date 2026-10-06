<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment
- Cloudflare Pages target: Nitro preset `cloudflare-pages` in vite.config.ts emits `dist/` with `_worker.js`; pages render in the Worker at request time, no TanStack prerender (the prerender step breaks with this preset).
- Site images live in `public/site/img/`, not Lovable-hosted asset URLs — they must ship inside the static output for non-Lovable hosts.
- /about is a native React route that renders its own nav/footer markup with the shared /site/styles.css classes; the legacy /site/*.js scripts run only on the homepage, so links from /about point to /#section anchors.
- About cross-browser typography corrections must be scoped to `.about-page`; use font-relative reading widths and shrink-safe grid tracks without changing shared portfolio styles.

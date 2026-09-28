# aboutme

Personal site for Deb — a BCA student working toward cloud engineering, DevOps
and SRE.

**Live:** <https://aboutme.debnerd.in>

## Stack

Static build, no server, no runtime.

- **Astro 7** — layouts and content, rendered to plain HTML at build time
- **Svelte 5** — one island only: the navigation and theme toggle
- **Tailwind CSS 4** — utility layer
- **Rosé Pine** — colour, borrowed from [rose-pine](https://rosepinetheme.com)
- **Cloudflare Workers** — serves `dist/` as static assets, with the custom
  domain attached in the dashboard

Motion is CSS, not JavaScript: a `--stagger` index on each element times a
fixed step in a keyframe animation. That is most of why the page ships ~16 kB
of gzipped JavaScript.

## Local development

```bash
npm install
npm run dev        # dev server
npm run build      # static output to dist/
npm run preview    # serve the build locally
```

Two convenience scripts, neither required:

```bash
./serve.sh         # serve dist/ on 127.0.0.1:4321
./serve-lan.sh     # same, bound to 0.0.0.0 so a phone on the Wi-Fi can load it
```

## Layout

```
src/
  data/site.ts     all copy and content, single source of truth
  layouts/         Base.astro — document shell, meta, theme bootstrap
  components/      one file per section
    Nav.svelte     the only island
    Doodles.astro  hand-drawn SVG marks
  styles/global.css  design tokens and the component layer
```

`src/data/site.ts` holds every string. Changing copy never means touching
markup.

## Theming

Three schemes: `main` (dark), `dawn` (light), and `moon`, declared once in
`global.css` and swapped by `:root` → `prefers-color-scheme` → `[data-theme]`.
The toggle stores nothing in "system" mode, so an untouched page keeps
following the OS. A blocking inline script in `<head>` applies the stored
choice before first paint, so there is no flash of the wrong theme.

Each scheme exposes two accent sets. `--color-<name>` is the pure upstream
value, for decoration; `--color-<name>-ink` is the same hue darkened until it
clears WCAG AA, for anything a human reads. Every ratio is measured in a
browser rather than estimated — the numbers are recorded beside the values in
`global.css`. If you change a colour, re-check it.

## Deployment

Pushes to `main` deploy through Cloudflare. The build output is `dist/`; the
Worker has no code, only an assets binding.

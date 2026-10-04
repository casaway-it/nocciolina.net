# nocciolina.net

Astro static site for [Nocciolina](https://nocciolina.net), a stone house in the hazelnut groves of Alta Langa.

Based on the [Ombra](https://github.com/andreialba/ombra) theme by Andrei Alba (MIT), adapted for a vacation home.

## Stack

- Astro 7 (static, no client framework runtime)
- `@astrojs/sitemap`
- Self-hosted Cormorant Garamond + Source Sans 3 via `@fontsource`
- `sharp` for image optimisation
- Native lightbox and locale switcher — no runtime JS framework

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type + astro check
npm run build      # dist/
npm run preview    # preview the build
```

Requires Node 22.12 or newer.

## Where things live

| Path | Purpose |
|---|---|
| `src/config/site.ts` | Address, phone, WhatsApp, email, stay specs (locale-neutral) |
| `src/i18n/locales.ts` | Supported locales (`en`, `it`, `de`, `fr`, `nl`, `es`), helpers |
| `src/i18n/content/<locale>.ts` | All translated strings for a locale |
| `src/i18n/pois.ts` | Shared POI directory (names + Google Maps URLs) |
| `src/components/pages/*.astro` | Shared page components, take a `lang` prop |
| `src/pages/*.astro` | English routes (`/`, `/property`, `/langhe`, `/story`, `/guide`, `/contact`, `/tos`, `/404`) |
| `src/pages/[lang]/*.astro` | Non-default locale wrappers via `getStaticPaths` |
| `src/components/` | Nav, Footer, SeoHead, Lightbox, LocaleSwitcher, BottomGallery, GalleryImage, YouTubeEmbed |
| `src/layouts/BaseLayout.astro` | HTML shell, metadata, reveal + locale-detection script |
| `src/styles.css` | All styles — tokens, layout, responsive |
| `src/assets/` | Images processed by Astro's image service |
| `public/` | Static passthrough: `CNAME`, favicon, OG image, `.nojekyll` |

## Internationalisation

Six locales ship: English (default, at root), Italian, German, French, Dutch, Spanish (at `/it/`, `/de/`, `/fr/`, `/nl/`, `/es/`). Each page exists in all six locales. `SeoHead` sets `<html lang>`, `og:locale` and emits `<link rel="alternate" hreflang>` + `x-default` for every page. On first visit a tiny inline script reads `navigator.language` and redirects to the matching prefix once, then stops interfering.

To add or edit a string, open `src/i18n/content/<locale>.ts` — the shape is enforced by `src/i18n/types.ts`.

## Deployment

Deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`. The workflow type-checks, builds and uploads the artifact; `actions/deploy-pages` publishes it. `public/CNAME` carries the custom-domain name so Pages serves the site at `https://nocciolina.net`.

### One-time setup checklist

1. Create an **empty public repo** at [github.com/casaway-it/nocciolina.net](https://github.com/casaway-it/nocciolina.net) — do not add README, license, or `.gitignore` (we push the initial commit from here).
2. Push the first commit (see `GIT-SETUP.md` for the commands we ran).
3. Repo **Settings → Pages → Build and deployment**: set **Source** to **"GitHub Actions"**.
4. Point DNS for `nocciolina.net`:
   - **Apex A records** for `@`:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - *(Optional)* **www CNAME**: `casaway-it.github.io`.
   - *(Optional)* **AAAA records** for IPv6:
     ```
     2606:50c0:8000::153
     2606:50c0:8001::153
     2606:50c0:8002::153
     2606:50c0:8003::153
     ```
5. After the first successful workflow run, in **Settings → Pages**:
   - Confirm **Custom domain**: `nocciolina.net`
   - Tick **Enforce HTTPS** (available once GitHub has provisioned the Let's Encrypt cert, usually within 10–30 min of DNS propagating).

### Verifying

```bash
# locally
npm run build && npm run preview

# after push
gh run watch                        # follow the deploy
curl -I https://nocciolina.net      # check status + cert
```

## License

MIT. See `LICENSE` for the Ombra attribution.

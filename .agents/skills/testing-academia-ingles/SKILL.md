---
name: testing-academia-ingles
description: How to run and end-to-end test the Natural Flow English (academia de inglés) React 19 + Vite + Tailwind landing page and its WhatsApp deep links.
---

# Testing the Natural Flow English landing page

## Environments
- Production: https://academia-ingles-green.vercel.app (Vercel git integration: every push to `main` auto-deploys). Verify a deploy by curling the served `assets/index-*.js` and grepping for new strings.
- Local: Node 22 is required (Node 20 fails with "Cannot find native binding" in rolldown/oxlint). `npm run dev`, or `npm run build && npx vite preview --port 4173`.
- No login, no API keys, no backend. Everything is static client-side React.

## Structure
- Sections: `#inicio` (Hero, photo `public/hero-presencial.jpg`, `order-first` on mobile), `#diferencia` (Difference), `#metodo` (SessionMethod, 5 steps 5+10+25+45+35 = 120 min), `#ruta` (Route, photo `public/ruta-presencial.jpg`), `#demo` (FinalCta), plus footer and `WhatsAppFloat`.
- Horizontal overflow: root uses `overflow-x-clip` (not `hidden`, which would break the sticky navbar); body/main use `overflow-x-hidden`.
- Every WhatsApp link (navbar, hero CTA, final CTA, float) uses `DEMO_WHATSAPP_URL` from `src/config.js`.
- Copy lives in `src/data/content.js`; palette lives in `tailwind.config.js`.

## Quick visual check without a browser session
- `google-chrome --headless=new --hide-scrollbars --virtual-time-budget=4000 --window-size=390,3600 --screenshot=/tmp/m.png http://localhost:4173/` (and 1400 wide for desktop).

## Verifying wa.me deep links
- Clicking a link redirects to `api.whatsapp.com/send/?phone=...&text=...`, which renders the decoded message. Cancel the "Open xdg-open?" dialog.
- Links use `target="_blank"`. If only one tab is open, do not press `ctrl+w`, because that quits Chrome.

## Mobile (390px)
- `wmctrl` cannot shrink Chrome below ~532px. Use DevTools device toolbar (F12 → device icon → 390 x 844).
- The float is `fixed bottom-right`, and the footer has `pb-24` on mobile so the float does not cover its text.
- Check that `document.documentElement.scrollWidth === clientWidth`.

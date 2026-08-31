---
name: testing-academia-ingles
description: How to run and end-to-end test the Fluent Path (academia de inglés) React 19 + Vite + Tailwind landing page, including the interactive level test and the WhatsApp deep links.
---

# Testing the Fluent Path landing page

## Environments
- Production: https://academia-ingles-green.vercel.app — may be STALE. The Vercel token has expired at least once, so production can lag behind the branch under test. When testing a PR/branch, always use the local dev server unless you have confirmed prod was redeployed from that branch.
- Local dev server: `export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22; cd /home/ubuntu/academia-ingles && npm run dev`
  - Node 20 does NOT work (rolldown/oxlint native bindings). Always use Node 22 via nvm.
- No login, no API keys, no backend. Everything is static client-side React.

## Where the logic lives
- `src/config.js`: `WHATSAPP_NUMBER` and `whatsappLink(message)` → `https://wa.me/<number>?text=<encodeURIComponent(message)>`.
- `src/levelTestData.js`: `QUESTIONS` (answer indexes) and `levelForScore(score) = LEVELS[min(score,4)]` → 0→A1, 1→A2, 2→B1, 3→B2, 4→C1.
- `src/components/LevelTest.jsx`: one question at a time, progress `answers.length/QUESTIONS.length`, result panel with ✓/✕ per question and the WhatsApp results link.
- `src/components/Hero.jsx`, `LeadForm.jsx` (B2B redesign) / `Contact.jsx` (older version), `WhatsAppFloat.jsx`: other wa.me entry points.
- Light redesign adds `#programas` (AudienceTabs: 3 audience tabs w/ `role="tab"`+`aria-selected`, 4 photo cards each) and `#modalidad` (Modality). Photos come from `src/data/images.js` via Unsplash URLs, so they need network access.
- Sections and anchors: `#metodologia` (MethodologySteps, 5-step stepper, progress `(activeId-1)/4*100`), `#curriculo` (IndustryCurriculum tabs w/ `role="tab"`+`aria-selected`, 4 phases each), `#comparativa` (Comparison: `hidden md:table` desktop table vs `md:hidden` mobile cards), `#test` (LevelTest), `#contacto` (LeadForm).

## Verifying wa.me deep links without a WhatsApp account
- Hovering a link shows the (truncated) href in Chrome's status bar — good for a quick check, but not enough to read a long message.
- Best evidence: click the link. `wa.me` redirects to `api.whatsapp.com/send/?phone=...&text=...` and renders the **decoded message text on screen**, which is ideal screenshot proof. A Chrome "Open xdg-open?" dialog appears — click **Cancel** and the page stays usable.
- Links use `target="_blank"`; close the tab with ctrl+w afterwards, or use alt+Left if it navigated in place.

## Responsive checks (390px)
- `wmctrl` resizing is unreliable here: Chrome refuses to shrink its outer window below ~532px wide, so you cannot reach a 390px viewport that way.
- Reliable recipe: maximize the window (`wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`), press `F12` to open DevTools, then click the **device-toolbar icon** in the DevTools toolbar (top-left of the DevTools pane, next to the inspect arrow). `ctrl+shift+m` is flaky — if the page has focus instead of DevTools it can open Chrome's profile menu, and it silently toggles device mode off again. Then type the width/height into the "Dimensions: Responsive" boxes (390 x 844) and press Enter.
- Closing DevTools (`F12`) also exits device mode, so keep DevTools docked while doing mobile checks.
- Confirm there is no horizontal overflow with `document.documentElement.scrollWidth === clientWidth` (expect 390 === 390).
- Known overlap to watch for: the floating "Escríbenos" WhatsApp button is `fixed bottom-right`, so at ~390px it can visually overlap whatever sits in the bottom-right of the viewport. Observed on the hero CTA "Solicitar Diagnóstico Operativo Gratis" (still clickable on its left portion). The LevelTest options add `pr-16` on mobile, which keeps option text clear and clickable.

## Devin secrets needed
- None.

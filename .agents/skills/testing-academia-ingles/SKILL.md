---
name: testing-academia-ingles
description: How to run and end-to-end test the Fluent Path (academia de inglés) React 19 + Vite + Tailwind landing page, including the interactive level test and the WhatsApp deep links.
---

# Testing the Fluent Path landing page

## Environments
- Production (preferred for final verification): https://academia-ingles-green.vercel.app
- Local dev server: `export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22; cd /home/ubuntu/academia-ingles && npm run dev`
  - Node 20 does NOT work (rolldown/oxlint native bindings). Always use Node 22 via nvm.
- No login, no API keys, no backend. Everything is static client-side React.

## Where the logic lives
- `src/config.js`: `WHATSAPP_NUMBER` and `whatsappLink(message)` → `https://wa.me/<number>?text=<encodeURIComponent(message)>`.
- `src/levelTestData.js`: `QUESTIONS` (answer indexes) and `levelForScore(score) = LEVELS[min(score,4)]` → 0→A1, 1→A2, 2→B1, 3→B2, 4→C1.
- `src/components/LevelTest.jsx`: one question at a time, progress `answers.length/QUESTIONS.length`, result panel with ✓/✕ per question and the WhatsApp results link.
- `src/components/Contact.jsx`, `Hero.jsx`, `WhatsAppFloat.jsx`: other wa.me entry points.

## Verifying wa.me deep links without a WhatsApp account
- Hovering a link shows the (truncated) href in Chrome's status bar — good for a quick check, but not enough to read a long message.
- Best evidence: click the link. `wa.me` redirects to `api.whatsapp.com/send/?phone=...&text=...` and renders the **decoded message text on screen**, which is ideal screenshot proof. A Chrome "Open xdg-open?" dialog appears — click **Cancel** and the page stays usable.
- Links use `target="_blank"`; close the tab with ctrl+w afterwards, or use alt+Left if it navigated in place.

## Responsive checks
- Resize the real window instead of devtools: `wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz; wmctrl -r :ACTIVE: -e 0,0,0,390,740`, then re-maximize with `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.
- Known cosmetic issue to watch for: at ~390px the floating "Escríbenos" WhatsApp button overlaps the bottom-right corner of the last answer option card in the level test. It did not block clicking options on the left side, but tapping the far-right edge of the last option could hit the floating button.

## Devin secrets needed
- None.

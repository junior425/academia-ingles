# Natural Flow English — Landing Page

Landing corta y ejecutiva en React + Vite + Tailwind CSS para una academia de
inglés práctico (Cali y virtual) dirigida a profesionales y adultos. Su único
objetivo es que el visitante agende su Clase Demo Virtual Gratuita de 35 minutos
por WhatsApp. No muestra precios.

Producción: https://academia-ingles-green.vercel.app

## Secciones

1. **Hero**: entrenamiento presencial uno a uno en Cali; foto a la derecha en desktop y arriba en móvil, CTA dorado.
2. **Diferencia**: comparación en 2 columnas, Metodología Obsoleta vs. Natural Flow English.
3. **Sesión de 120 minutos**: 5 pasos (minutos 1–5, 6–15, 16–40, 41–85, 86–120) con barra proporcional.
4. **Ruta de 4 bloques**: 240 h, avance según el ritmo semanal y modalidad VIP presencial (virtual opcional).
5. **Cierre**: caja con borde dorado, botón verde de WhatsApp y firma de Vicente Hernández, footer y botón flotante.

## Contenido

- `src/config.js`: nombre de la marca y `DEMO_WHATSAPP_URL` (único enlace de WhatsApp).
- `src/data/content.js`: filas de la comparación, pasos de la sesión y datos de la ruta.
- `src/data/images.js`: fotos locales del hero (`public/hero-presencial.jpg`) y de la ruta (`public/ruta-presencial.jpg`).
- `tailwind.config.js`: paleta (`ink`, `card`, `line`, `pearl`, `gold`, `emerald`).

## Desarrollo

Requiere Node 22 o superior.

```bash
npm install
npm run dev     # servidor de desarrollo
npm run lint    # oxlint
npm run build   # build de producción en dist/
```

## Despliegue

Proyecto desplegado en Vercel (framework: Vite, build `npm run build`, output `dist`)
y conectado al repositorio: cada push a `main` redespliega automáticamente.

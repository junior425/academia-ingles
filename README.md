# Natural Flow English — Landing Page

Landing corta y ejecutiva en React + Vite + Tailwind CSS para una academia de
inglés práctico (Cali y virtual) dirigida a profesionales y adultos. Su único
objetivo es que el visitante agende su Clase Demo Virtual Gratuita de 35 minutos
por WhatsApp. No muestra precios.

Producción: https://academia-ingles-green.vercel.app

## Secciones

1. **Hero**: 2 columnas en desktop (texto + foto con tarjeta flotante) y CTA dorado a WhatsApp.
2. **Diferencia**: comparación en 2 columnas, Metodología Obsoleta vs. Natural Flow English.
3. **Sesión de 120 minutos**: 5 pasos (5 + 10 + 25 + 45 + 35 min) con barra proporcional.
4. **Ruta de 4 bloques**: estructura, duración y modalidad, con foto lateral.
5. **Cierre**: caja con borde dorado y botón verde de WhatsApp, footer y botón flotante.

## Contenido

- `src/config.js`: nombre de la marca y `DEMO_WHATSAPP_URL` (único enlace de WhatsApp).
- `src/data/content.js`: filas de la comparación, pasos de la sesión y datos de la ruta.
- `src/data/images.js`: foto del hero (`public/hero-natural-flow.jpg`) y foto de Unsplash de la ruta.
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

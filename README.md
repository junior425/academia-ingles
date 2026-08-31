# Academia de Inglés Personalizada — Landing Page

Landing page en React + Vite + Tailwind CSS con test interactivo de nivelación
(A1 a C1) e integración de WhatsApp.

Producción: https://academia-ingles-green.vercel.app

## Secciones

- **Hero**: propuesta de valor y CTA "Agenda tu Clase Diagnóstico Gratis" (abre WhatsApp).
- **Metodología**: diagnóstico a la medida, clases 1 a 1 enfáticas en conversación, seguimiento constante.
- **Test de nivelación**: 4 preguntas de gramática; el nivel estimado se calcula por aciertos
  (0→A1, 1→A2, 2→B1, 3→B2, 4→C1) y se puede enviar por WhatsApp con el detalle de respuestas.
- **Contacto**: formulario que arma el mensaje y lo abre en WhatsApp.
- **Botón flotante** de WhatsApp visible en toda la página.

## Configuración

El número de WhatsApp y el nombre de la academia se editan en `src/config.js`.
Las preguntas y niveles del test están en `src/levelTestData.js`.

## Desarrollo

Requiere Node 22 o superior.

```bash
npm install
npm run dev     # servidor de desarrollo
npm run lint    # oxlint
npm run build   # build de producción en dist/
```

## Despliegue

Proyecto desplegado en Vercel (framework: Vite, build `npm run build`, output `dist`).

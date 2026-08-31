# Fluent Path — Landing Page de Inglés Corporativo por Industria (ESP)

Landing page B2B/B2C en React + Vite + Tailwind CSS para una academia de inglés
especializada en ESP (English for Specific Purposes) y método de bloques léxicos
(lexical chunking).

Producción: https://academia-ingles-green.vercel.app

## Secciones

- **Hero**: propuesta "8 meses vs. 18 meses de instituto", aprendizaje Zero Waste,
  CTAs "Solicitar Diagnóstico Operativo Gratis" y "Agendar Demo para mi Empresa",
  contadores de prueba social y bloque de ROI (mes 4 / mes 8).
- **Diferenciadores**: 100% adaptado a la industria (70/30), bloques léxicos y ROI medible.
- **Metodología interactiva de 5 pasos**: Real-Audio Input → Chunk Noticing →
  L1 Mental Hack → Block Mutation → Crisis Challenge.
- **Currículo por industria (tabs)**: roadmaps de 8 meses para Logística y Freight
  Forwarding (por defecto), Medicina, Ingeniería y Ejecutivos & Ferias.
- **Comparativa**: instituto tradicional vs. el método (tabla en desktop, tarjetas en móvil).
- **Test de nivelación**: 4 preguntas; el nivel estimado se calcula por aciertos
  (0→A1, 1→A2, 2→B1, 3→B2, 4→C1) y se envía por WhatsApp con el detalle.
- **Formulario B2B**: nombre, empresa, sector, tamaño del equipo y teléfono;
  abre WhatsApp con la solicitud estructurada.
- **Botón flotante** de WhatsApp visible en toda la página.

## Configuración de contenido

- `src/config.js`: número de WhatsApp y nombre/tagline de la academia.
- `src/data/methodology.js`: los 5 pasos del método.
- `src/data/curriculum.js`: sectores y roadmaps de 8 meses.
- `src/data/comparison.js`: filas de la tabla comparativa.
- `src/levelTestData.js`: preguntas y niveles del test.

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

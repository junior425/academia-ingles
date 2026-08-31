# Fluent Path — Landing Page de Inglés Presencial (Cali) y Online

Landing page B2B/B2C en React + Vite + Tailwind CSS para una academia de inglés
presencial en Cali y online en todo el mundo, con método de bloques léxicos (lexical chunking): programas ESP para
empresas y profesionales, conversación para adultos y viajes, y Kids Method para
niños. Paleta clara y vibrante (azul, naranja, cyan, coral) con fotografías de
Unsplash.

Producción: https://academia-ingles-green.vercel.app

## Secciones

- **Hero**: headline "Domina el Inglés Real en Tiempo Récord", CTAs "Ver Programas"
  y "Agendar Diagnóstico / Clases", badges y galería de fotos
  (profesionales, aeropuerto, niños).
- **Diferenciadores**: trabajo, viajes y familia con tarjetas fotográficas.
- **Selector de audiencias (tabs)**: Empresas y Profesionales (ESP), Adultos y
  Viajes, Niños y Juniors (Kids Method), cada uno con 4 tarjetas con foto.
- **Metodología interactiva de 5 pasos**: Audio Input → Chunk Noticing →
  L1 Mental Hack → Block Mutation → Final Challenge, con color, icono y foto por paso.
- **Modalidad**: presencial en Cali u online en vivo, grupal, 1 a 1,
  micro-aprendizaje asíncrono
  y horarios flexibles.
- **Currículo por industria (tabs)**: roadmaps de 8 meses para Logística y Freight
  Forwarding (por defecto), Medicina, Ingeniería y Ejecutivos & Ferias.
- **Comparativa**: instituto tradicional vs. el método (tabla en desktop, tarjetas en móvil).
- **Test de nivelación**: 4 preguntas; el nivel estimado se calcula por aciertos
  (0→A1, 1→A2, 2→B1, 3→B2, 4→C1) y se envía por WhatsApp con el detalle.
- **Formulario dual**: nombre, email, WhatsApp y "Me interesa para" (Mi Empresa /
  Mi Carrera / Viajes y Uso Personal / Mis Hijos); abre WhatsApp con la solicitud.
- **Botón flotante** de WhatsApp visible en toda la página.

## Configuración de contenido

- `src/config.js`: número de WhatsApp y nombre/tagline de la academia.
- `src/data/audiences.js`: los 3 públicos, sus tarjetas y la paleta de acentos.
- `src/data/images.js`: IDs de las fotos de Unsplash y helper `unsplash()`.
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

# Zara / Inditex · De una tienda a un stock conectado

Web estática del Proyecto Digitalización (1ª evaluación) de **Hanin**. Está hecha a partir de la demo de clase: usa HTML5, Bootstrap 5.3.9 por CDN y JavaScript sin dependencias adicionales.

**Pregunta común:** ¿Cómo ha cambiado la tecnología la forma de trabajar, vender y generar valor de esta empresa, y qué mejora digital propondríamos para su futuro?

**Mi pregunta:** ¿Cómo se coordinan el inventario, la tienda física y la venta online?

## Estructura

```text
web_zara/
├── index.html          Inicio: portada, preguntas, datos y recorrido
├── historia.html       Los 7 hitos (acordeón), infografía, álbum y vídeo
├── proceso.html        Antes y después, departamentos, mercados y esquemas
├── diagnostico.html    Diagnóstico y propuesta «Ver la prenda de verdad»
├── contacto.html       Documentos, fuentes, uso de IA y formulario
├── css/style.css       Estilo «lookbook» de revista de moda
├── js/script.js        Envío simulado del formulario (de la demo)
├── js/animaciones.js   Línea del tiempo de la página Historia
├── img/                Fotos, infografía y esquemas
├── docs/               Entrega 1 y Entrega 2 en PDF
└── README.md
```

## Cómo abrirla

1. Descomprime el ZIP conservando las carpetas.
2. Abre `index.html` en el navegador, o abre la carpeta en VS Code y usa Live Server.
3. Mantén la conexión a Internet para que se carguen Bootstrap y las tipografías Bodoni Moda y Jost.

## Componentes de Bootstrap que usa

- Menú adaptable con botón para móvil (todas las páginas).
- Cuadrícula con tarjetas (Inicio, Proceso y Diagnóstico).
- Acordeón (los hitos en Historia y las fuentes en Contacto).
- Tablas adaptables (Proceso).
- Formulario con validación y envío simulado (Contacto).

## Diseño: estilo «lookbook» de revista de moda

- Colores sacados de las fotos de campaña: azul cobalto (chaqueta), gris piedra (pared) y azul denim (vaqueros), con negro y blanco.
- Tipografías: Bodoni Moda para los títulos y Jost para el texto (Google Fonts).
- Portada como la tapa de una revista: el título se invierte de color al pasar sobre la foto (mix-blend-mode) y entra con una animación al cargar.
- Línea del tiempo con puntos que abren cada hito del acordeón (API Collapse de Bootstrap).
- Fotos en blanco y negro que se colorean al pasar el ratón, álbum en rejilla asimétrica y barras de ventas hechas con CSS.
- Maqueta de la propuesta «Ver la prenda de verdad».
- Si el sistema tiene activado «reducir movimiento», la animación de la portada se desactiva.

## Fuentes y créditos

- Datos: fuentes oficiales de Inditex (F1–F17) y prensa económica de apoyo (A1–A4). Todas están enlazadas en `contacto.html`.
- Fotografías de campaña: Zara (zara.com).
- Contenidos de la infografía y los esquemas: NotebookLM a partir de mis fuentes, revisados por mí. Diseño: Claude (IA).

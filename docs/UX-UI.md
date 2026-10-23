# UX-UI — Guía visual de estilos — Roadmap de Cursos UTN

> **Qué es:** la gramática visual de la interfaz. Define tokens, componentes y accesibilidad antes de escribir CSS, cumpliendo estrictamente con la inspiración en Google (estética Material Design) y la regla de Mobile-First con mejora progresiva.

## 1. Principios

1. **Limpieza sobre adorno:** Si un elemento no comunica información ni acción, sobra. Abundante espacio en blanco para separar secciones.
2. **Un solo color de acción por pantalla:** El azul primario de Google marca lo que el usuario puede tocar o hacer.
3. **Mobile primero (Progressive Enhancement):** El layout base se diseña para 360px sin media queries. Las reglas `@media` solo se usan para expandir hacia arriba, nunca para arreglar el diseño base.

## 2. Design tokens

### 2.1 Paleta de colores (Inspiración Google)

| Token | Valor | Uso | Contraste AA |
|-------|-------|-----|--------------|
| `--color-primary` | `#1a73e8` | Botones primarios, links, foco, labels activos | vs white ≈ 4.6:1 ✓ |
| `--color-primary-dark` | `#185abc` | Hover/press del botón primario | — |
| `--color-primary-container`| `#e8f0fe` | Chips seleccionados, fondos de ítem activo del menú | — |
| `--color-on-primary` | `#ffffff` | Texto/iconos sobre primario | vs `#1a73e8` ≈ 4.6:1 ✓ |
| `--color-surface` | `#ffffff` | Tarjetas, drawer, header | — |
| `--color-background` | `#f8f9fa` | Fondo general de la página (gris Google claro) | — |
| `--color-text` | `#202124` | Texto principal | vs `#ffffff` ≈ 16:1 ✓ |
| `--color-text-muted` | `#5f6368` | Texto secundario y metadatos | vs `#ffffff` ≈ 7:1 ✓ |
| `--color-border` | `#dadce0` | Bordes de inputs y divisores | — |
| `--color-error` | `#d93025` | Errores de validación, botón de peligro | vs white ✓ |
| `--color-success` | `#188038` | Toasts de éxito, badge "publicado" | vs white ✓ |

### 2.2 Tipografía

| Token | Familia | Tamaño / line-height | Uso |
|-------|---------|----------------------|-----|
| `--font-family-base` | Roboto, `system-ui` | — | Fuente principal (Material Design) |
| `--text-sm` | | 14px / 20px | Metadatos, badges, tabla |
| `--text-base` | | 16px / 24px | Texto de formulario y párrafo |
| `--text-lg` | | 18px / 24px | Títulos de tarjeta de curso |
| `--text-xl` | | 22px / 28px | Títulos de pantalla |

### 2.3 Espaciado, radios y sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` a `--space-8` | 4, 8, 12, 16, 24, 32, 40, 48px | Escala de ritmos verticales (múltiplos de 4) |
| `--radius-input` | 8px | Campos de texto y selects |
| `--radius-card` | 12px | Tarjetas del catálogo |
| `--radius-button` | 18px (pill) | Botones (estilo Material 3) |
| `--shadow-1` | `0 1px 2px rgba(60,64,67,.1), 0 1px 3px 1px rgba(60,64,67,.15)` | Elevación en reposo (cards) |
| `--shadow-2` | `0 1px 2px rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)` | Hover de card, menú sándwich |

## 3. Estrategia mobile-first con mejora progresiva

| Capa | Dónde aplica | Qué define |
|------|--------------|------------|
| **Base (sin MQ)** | Todos los viewports | Layout de 1 columna; menú sándwich; grid de cards apiladas; listas densas; targets ≥ 44px. |
| `@media (min-width: 768px)` | Tablets | Grid de 2 columnas; header pasa de menú sándwich a navegación horizontal simple; padding ampliado. |
| `@media (min-width: 1024px)` | Desktop | Contenedor centrado con `max-width: 1140px`; grid de 3 columnas para el catálogo. |

## 4. Componentes (anatomía + estados)

### 4.1 Botones
- **Primario (filled):** Fondo `--color-primary`, texto blanco, forma de píldora (`--radius-button`). Estados: `default`, `hover` (sombra y oscurecimiento), `focus-visible` (anillo 2px azul offset), `disabled` (opacidad .38).
- **Secundario (text):** Sin fondo, texto `--color-primary`. Hover con fondo gris claro (`#f1f3f4`).

### 4.2 Campos de formulario (Inputs)
- **Outlined:** Borde `--color-border` de 1px, label flotante superior.
- **Estados:** `focus` (borde 2px `--color-primary`, label azul), `error` (borde `--color-error` + mensaje inferior asociado por aria).

### 4.3 Tarjeta de curso (Card)
- Fondo `--color-surface`, `--shadow-1`, padding de 16px.
- **Estados:** `hover` (cursor pointer, se eleva a `--shadow-2`), `seleccionada` (si está en mi roadmap, borde azul y check).

### 4.4 Menú sándwich (Drawer)
- Se activa con botón hamburguesa (icono Material `menu`).
- Despliega un panel lateral de 280px con fondo blanco y `--shadow-2`, superponiendo un overlay oscuro al resto de la pantalla. Cierre al hacer tap fuera, en la X, o con tecla ESC.

## 5. Accesibilidad mínima (no negociable)

- [ ] Contraste AA verificado (≥ 4.5:1) en todos los textos sobre fondos claros.
- [ ] Todo elemento interactivo tiene estado `:focus-visible` claramente delineado.
- [ ] Menú sándwich utiliza `aria-expanded` y atrapa el foco del teclado al abrirse.
- [ ] Errores en formularios vinculados al `input` mediante `aria-describedby`.
# SPEC — Roadmap Cursos UTN

> **Qué es este documento:** la versión refinada de la SPEC de clase.
> Contiene los requisitos originales más las decisiones incorporadas sobre las ambigüedades del documento inicial.

## 1. Identidad del producto

- **Nombre propio:** Roadmap Cursos UTN
- **Una línea:** WebApp colaborativa para construir un catálogo de cursos gratuitos validados y gestionar roadmaps de aprendizaje personales.

## 2. Problema

Actualmente, los estudiantes se enfrentan a una sobreabundancia de cursos gratuitos dispersos en múltiples plataformas. Resulta difícil saber cuáles son de calidad, si otorgan certificados reales o cómo ordenarlos lógicamente. Al permitir que una comunidad aporte y valide estos cursos, se elimina el "ruido" y se facilita a cada usuario la creación de un plan de estudio estructurado (roadmap) con contenido curado.

## 3. Visión

Convertirse en los próximos 12 meses en la herramienta de referencia para que los estudiantes planifiquen su formación extracurricular, apoyándose en la inteligencia colectiva para descubrir los mejores recursos educativos gratuitos.

## 4. Alcance

### Dentro

- Gestión del roadmap personal de aprendizaje (CRUD básico sobre el propio catálogo).
- Formulario de aporte de cursos con enlace web y metadatos (categoría, tema, versión, docentes, cuestionarios, examen, certificado, aval).
- Declaración obligatoria de si el aportante tomó o no el curso.
- Proceso de validación comunitaria para que los aportes pasen al catálogo público.
- Catálogo comunitario con todos los cursos validados disponibles para incluir en roadmaps personales.
- Autenticación completa: registro, login protegido con rate limiting, cifrado de contraseñas con bcrypt y recuperación de contraseña.

### Fuera (out of scope explícito)

- Alojamiento de videos, PDFs o cualquier material nativo de los cursos.
- Integración con pasarelas de pago (solo se admiten cursos gratuitos).
- Emisión de certificados propios de la plataforma.
- Perfiles públicos de usuarios o mensajería interna.

## 5. Reglas de producto clave

| # | Regla | Origen |
|---|-------|--------|
| BR-001 | Un curso aportado entra en estado de revisión y solo llega al catálogo comunitario tras ser validado explícitamente. | SPEC clase ("cursos cargados y **validados** pasan al catalogo") |
| BR-002 | Quien aporta un curso está obligado a declarar si él o ella lo tomó. | SPEC clase |
| BR-003 | Cada usuario visualiza y gestiona únicamente su propio roadmap personal. | Decisión propia |
| BR-004 | El catálogo comunitario solo lista cursos gratuitos; cualquier enlace de pago es rechazado en validación. | SPEC clase |

## 6. Stack registrado (versiones exactas con las que se va a desarrollar)

| Capa | Tecnología | Versión exacta instalada |
|------|------------|--------------------------|
| Frontend | React + Vite + pnpm | React 19 |
| Backend | FastAPI + uv | FastAPI 0.158.2 |
| Base de datos | PostgreSQL | 18.6 |
| Infra (dev) | Docker + Docker Compose | Última stable |

## 7. Restricciones técnicas heredadas de la SPEC de clase

| # | Restricción | Cómo la vamos a cumplir (1-2 líneas) |
|---|-------------|--------------------------------------|
| 1 | Mobile-first con mejora progresiva: base sin media queries; `@media (min-width: …)` solo para agregar/mejorar. | Los estilos base se diseñarán para 360px. Las media queries se usarán exclusivamente para escalar componentes en tablet y desktop. |
| 2 | Paginación de todas las consultas de listado y de sus tablas. | Se implementará paginación offset + limit en el backend y controles de navegación en el frontend. |
| 3 | Menú sándwich en mobile. | Se creará un componente Header con un botón hamburguesa que despliegue un menú lateral en resoluciones menores a 1024px. |
| 4 | Screaming Architecture. | La estructura de carpetas se agrupará por dominio del negocio (ej. `cursos/`, `aportes/`, `usuarios/`) y no por tipo de archivo. |

## 8. Vacíos de la SPEC de clase y decisiones tomadas

| # | Vacío detectado en la SPEC | Opciones consideradas | Decisión | Dónde se desarrolla |
|---|----------------------------|-----------------------|----------|---------------------|
| 1 | ¿Quién y cómo valida los cursos aportados? | Auto-moderación de la comunidad / Validación por usuarios con rol específico. | **Validación por rol.** Se creará un rol "Validador" o "Admin" encargado de aprobar/rechazar aportes. | PRD / TRD |
| 2 | ¿Existen distintos roles de usuario? | Todos los usuarios son iguales / Diferenciación básica. | **Sí.** Se definen roles básicos: `estudiante` (aporta/arma roadmap) y `admin` (valida). | PRD / BackendSchema |
| 3 | ¿Qué significa "incluir en mi catálogo"? | Duplicar la información del curso / Guardar una referencia. | **Referencia directa.** Se creará una tabla intermedia que relacione al usuario con el ID del curso validado. | BackendSchema |
| 4 | ¿Cómo se buscan los cursos en el catálogo? | Solo listado / Filtros y barra de búsqueda. | **Filtros.** Se permitirá filtrar por categoría y buscar por texto libre en el título/tema. | APPFlow / BackendSchema |

## 9. Historia de la SPEC (autoregistro de cambios)

| Fecha | Cambio | Por qué |
|-------|--------|---------|
| 20/10/2026 | SPEC de clase recibida en el aula | — |
| 23/10/2026 | Primer commit: SPEC de clase tal cual | Regla de la consigna |
| 23/10/2026 | Refinamiento de la SPEC, definición de alcance y resolución de vacíos | Cumplir con la estructuración del producto requerida para la Instancia A |
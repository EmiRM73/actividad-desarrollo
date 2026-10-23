# Roadmap de Cursos

> WebApp de gestión de comunidad de cursos: catálogo comunitario de cursos gratuitos
> + roadmaps personales de aprendizaje.
>
> **Estado:** 📚 Documentación (Instancia A) — desarrollo pendiente de aprobación docente.

**Stack:** React 19 + Vite + pnpm · FastAPI + uv · PostgreSQL 18.6 · Docker Compose (dev)

---

## Qué hace

Una webapp donde una comunidad de estudiantes construye en conjunto un catálogo de cursos gratuitos y gestiona su aprendizaje con roadmaps personales. Cualquier usuario puede aportar un curso y, tras ser validado, pasa al catálogo comunitario para que otros lo descubran.

## Documentación

| Documento | Responde la pregunta | Link |
|-----------|----------------------|------|
| SPEC | ¿Qué nos pidieron construir y qué decidimos nosotros? | [docs/SPEC.md](docs/SPEC.md) |
| PRD | ¿Para quién, qué problema resuelve, qué hace y qué NO hace? | [docs/PRD.md](docs/PRD.md) |
| TRD | ¿Cómo lo construimos técnicamente y por qué? | [docs/TRD.md](docs/TRD.md) |
| UX-UI | ¿Cómo se ve, se siente y se comporta? | [docs/UX-UI.md](docs/UX-UI.md) |
| APPFlow | ¿Qué pantallas hay y cómo se navega? | [docs/APPFlow.md](docs/APPFlow.md) |
| BackendSchema | ¿Qué datos persistimos y qué API expone? | [docs/BackendSchema.md](docs/BackendSchema.md) |
| Implementation Plan | ¿En qué orden construimos y qué significa "hecho"? | [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) |

## Cómo revisar este repo

- Los `.md` se renderizan solos en GitHub.
- Los diagramas Mermaid se renderizan de forma nativa.
- Preview local: VS Code con `Ctrl+Shift+V`.

## Estado del trabajo

| Instancia | Contenido | Estado |
|-----------|-----------|--------|
| A — Documentación | repo + 7 documentos | ⏳ en desarrollo |
| B — Desarrollo del MVP | ejecución del Implementation Plan | ⏳ pendiente de aprobación |
| C — Clase 27/10 | testing, Docker multi-stage, gestión del cambio | ⏳ pendiente |

## Versionado

- **Flujo de Git:** Trunk-based development (uso de ramas cortas para features/docs que se integran rápido a main).
- **Convención de commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `docker:`, `chore:`).

---

## Licencia / uso

Trabajo Práctico — Desarrollo de Software, UTN FR La Plata, 2026.
Alumno: Emilio Benjamin Rivero
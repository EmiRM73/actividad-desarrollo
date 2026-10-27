# Roadmap de Cursos

> WebApp de gestión de comunidad de cursos: catálogo comunitario de cursos gratuitos
> + roadmaps personales de aprendizaje.
>
> **Estado:** 🚀 Desarrollo (Instancia B — Scaffold inicial)

**Stack:** React 19 + Vite + pnpm · FastAPI + uv · PostgreSQL 18.6 · Docker Compose (dev)

---

## Cómo levantar el proyecto (desarrollo)

### Requisitos previos
- Docker y Docker Compose instalados.

### Pasos de ejecución
```bash
git clone <tu-repo>
cd actividad-desarrollo
cp .env.example .env
docker compose up
```

Una vez levantado:
- **Frontend (UI):** [http://localhost:5173](http://localhost:5173)
- **Backend API (Health check):** [http://localhost:8000/health](http://localhost:8000/health)
- **Documentación Swagger API:** [http://localhost:8000/docs](http://localhost:8000/docs)

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
| APPFlow | ¿Qué pantallas hay y cómo se navega? | [docs/appflow.md](docs/appflow.md) |
| BackendSchema | ¿Qué datos persistimos y qué API expone? | [docs/backend_schema.md](docs/backend_schema.md) |
| Implementation Plan | ¿En qué orden construimos y qué significa "hecho"? | [docs/plan_de_implementacion.md](docs/plan_de_implementacion.md) |

## Cómo revisar este repo

- Los `.md` se renderizan solos en GitHub.
- Los diagramas Mermaid se renderizan de forma nativa.
- Preview local: VS Code con `Ctrl+Shift+V`.

## Estado del trabajo

| Instancia | Contenido | Estado |
|-----------|-----------|--------|
| A — Documentación | repo + 7 documentos | ✅ Completada |
| B — Desarrollo del MVP | ejecución del Implementation Plan (Scaffold T1-T5) | 🔄 En curso |
| C — Clase 27/10 | testing, Docker multi-stage, gestión del cambio | ⏳ Pendiente |

## Versionado y Flujo de Git

- **Flujo de Git:**
  - `main`: Solo releases taggeados (`vX.Y.Z`) y `CHANGELOG.md` actualizado.
  - `dev`: Rama de integración continua.
  - `feat/T{N}-*` o `fix/*`: Ramas de trabajo para cada ticket, nacen desde `dev` y se mergean a `dev`.
- **Convención de commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `docker:`, `chore:`).

---

## Licencia / uso

Trabajo Práctico — Desarrollo de Software, UTN FR La Plata, 2026.
Alumno: Emilio Benjamin Rivero

Alumno: Emilio Benjamin Rivero
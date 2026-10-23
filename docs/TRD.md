# TRD — Technical Requirements Document — Roadmap de Cursos UTN

> **Qué es:** el CÓMO técnico. Decisiones de arquitectura, stack, estructura de carpetas y convenciones para la construcción del producto.

## 1. Stack y versiones exactas

| Capa | Elección | Versión exacta | Por qué |
|------|----------|----------------|---------|
| Frontend | React + Vite + pnpm | React 19, Vite 6.x | Definido por SPEC. React 19 optimiza el renderizado concurrente y Vite asegura tiempos de build mínimos. |
| Backend | FastAPI + uv | FastAPI 0.158.2, uv 0.4.x | Definido por SPEC. FastAPI permite desarrollo rápido basado en tipos de Python; uv acelera la resolución de dependencias. |
| ORM / driver | SQLModel | SQLModel 0.0.22 | Unifica la declaración de modelos de Pydantic (para FastAPI) con SQLAlchemy (para persistencia), evitando código duplicado. |
| BD | PostgreSQL | 18.6 | Fijado por SPEC. Motor relacional robusto ideal para estructuras tabulares como el catálogo de cursos. |
| Infra (dev) | Docker + Compose | Docker 27.x | Aísla el entorno de desarrollo y garantiza que la app funcione idénticamente en cualquier máquina. |

## 2. Decisiones técnicas

| # | Decisión | Alternativas consideradas | Elegida | Por qué |
|---|----------|---------------------------|---------|---------|
| TD-001 | Estrategia de autenticación | Sesión en servidor (Cookies) / JWT stateless | **JWT stateless en Cookies HttpOnly** | Evita consultar la base de datos en cada request, mejorando la latencia, pero securizado en cookies para mitigar ataques XSS. |
| TD-002 | Estrategia de paginación | Offset + Limit / Cursor-based | **Offset + Limit** | Cumple con la especificación visual (paginador 1, 2, 3...) requerida para la tabla comunitaria y es más sencillo de implementar en el MVP. |
| TD-003 | Formato de errores de API | Envelope propio / RFC 7807 | **Envelope JSON estándar de FastAPI** | Utilizar `{"detail": "..."}` nativo de FastAPI agiliza el desarrollo y el manejo de excepciones de HTTP. |
| TD-004 | Modelado de "Mi Roadmap" | JSONB en tabla usuarios / Tabla relacional intermedia | **Tabla intermedia `roadmaps`** | Permite consultas relacionales complejas a futuro (ej. "cuántos usuarios están tomando el curso X") y el ordenamiento de los ítems. |

## 3. Arquitectura

### 3.1 Patrón y capas

Implementamos **Screaming Architecture** + arquitectura en capas para separar responsabilidades.

```mermaid
flowchart LR
    HTTP[HTTP / Routers] --> SVC[Services — lógica]
    SVC --> REPO[Repositories — datos]
    REPO --> DB[(PostgreSQL)]
    SVC --> MODELS[Models / Schemas]
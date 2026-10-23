# IMPLEMENTATION PLAN — Roadmap de Cursos UTN

> **Qué es:** la hoja de ruta paso a paso para la Instancia B. Define cómo vamos a construir el MVP iterativamente, integrando frontend y backend, hasta llegar a la entrega final.

## Fases de Desarrollo (Sprints)

### Fase 1: Infraestructura y Setup Base
- [ ] Inicializar proyectos: `backend` (FastAPI/uv) y `frontend` (Vite/React).
- [ ] Configurar `docker-compose.yml` para levantar PostgreSQL, Backend y Frontend en red local.
- [ ] Configurar conexión a la base de datos (SQLModel) y migraciones iniciales.
- [ ] Setup de tokens de diseño CSS (basado en Google/Material) en Frontend.

### Fase 2: Backend Core & Auth
- [ ] Implementar modelos SQLModel (`Usuario`, `Curso`, `Roadmap`).
- [ ] Endpoint de Registro y Login (JWT en HttpOnly cookies).
- [ ] Endpoints CRUD básicos de Cursos (Listar paginado, Aportar curso).
- [ ] Habilitar CORS para comunicación segura con el Frontend.

### Fase 3: Frontend Base y Catálogo
- [ ] Router de React y estructura de Layout global (Header, Drawer mobile).
- [ ] Integración con Auth: Formularios de Login/Registro y manejo de estado de sesión.
- [ ] Pantalla `/catalogo`: Fetch de cursos (`GET /api/v1/cursos`), diseño de Cards y paginador.

### Fase 4: Features de Valor (Roadmap y Admin)
- [ ] Backend: Endpoints para agregar/quitar cursos del roadmap (`/api/v1/roadmaps/items`).
- [ ] Backend: Endpoint de validación (Admin) (`PATCH /api/v1/cursos/:id/estado`).
- [ ] Frontend: Pantalla `/roadmap` con listado personal.
- [ ] Frontend: Pantalla `/aportar` con formulario y validaciones.
- [ ] Frontend: Pantalla `/admin/validar` exclusiva para el rol Admin con tabla de revisión.

### Fase 5: QA y Pulido Final
- [ ] Auditoría de accesibilidad (contraste AA, focus visible, aria-labels).
- [ ] Revisión de usabilidad Mobile-First en dispositivos reales/emulados.
- [ ] Pruebas manuales de los flujos principales (Aporte -> Validación -> Agregar a Roadmap).
- [ ] Limpieza de código y merge final a rama `main`.

## Reglas de Trabajo (Instancia B)
1. **Cero código preventivo:** No se escribirá una sola línea de código fuente hasta recibir la aprobación explícita del docente sobre esta documentación.
2. **Control de Versiones:** El desarrollo seguirá un esquema estructurado; cada tarea se abordará en un commit atómico.
3. **Commits:** Uso estricto de Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`).
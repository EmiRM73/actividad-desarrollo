# PRD — Product Requirements Document — Roadmap de Cursos UTN

> **Qué es:** el QUÉ y el POR QUÉ del producto. Define para quién construimos, qué problema resuelve, qué historias de usuario lo componen y qué queda estrictamente fuera del alcance para el MVP.

## 1. Resumen ejecutivo

Roadmap de Cursos UTN es una plataforma donde estudiantes aportan enlaces a cursos gratuitos encontrados en la web. Tras una revisión por parte de administradores para asegurar su calidad y gratuidad, estos cursos conforman un catálogo comunitario público. Desde allí, cada usuario registrado puede seleccionar cursos y construir su propio roadmap de aprendizaje personalizado.

## 2. Objetivos y métricas de éxito

| Objetivo | Cómo sabemos que lo logramos |
|----------|------------------------------|
| Construir un catálogo comunitario confiable de cursos gratuitos. | Tasa de conversión de aportes validados exitosamente (>60% no son spam ni de pago). |
| Fomentar la planificación educativa personal. | El 70% de los usuarios registrados tiene al menos 2 cursos activos en su roadmap. |

## 3. Personas

### Persona 1 — Ceferino (Estudiante Proactivo)

- **Contexto:** Estudiante de Sistemas, 21 años, busca complementar la universidad con tecnologías modernas (React, FastAPI).
- **Motivaciones:** Quiere armar una ruta clara para conseguir su primer trabajo como Trainee/Junior.
- **Frustraciones hoy:** Pierde tiempo en YouTube y Udemy filtrando cursos desactualizados o de pago camuflados de gratuitos.
- **Historias tipo:** "Quiero saber si este curso de Python da certificado antes de clavarme 40 horas." "Necesito ordenar qué estudiar primero y qué después."

### Persona 2 — Patricia (Validadora / Admin)

- **Contexto:** Ayudante de cátedra o estudiante avanzada.
- **Motivaciones:** Mantener la calidad educativa y ayudar a sus compañeros a no perder el tiempo.
- **Frustraciones hoy:** Ve a alumnos arrancar con tecnologías obsoletas porque encontraron un tutorial viejo.
- **Historias tipo:** "Quiero descartar rápido los links rotos o los cursos que en realidad te cobran al final."

## 4. User stories

| ID | Prioridad | Historia | Criterios de aceptación |
|----|-----------|----------|-------------------------|
| US-001 | P0 | Como visitante, quiero ver el catálogo comunitario paginado, para descubrir cursos sin registrarme. | - [ ] Dado que visito `/catalogo`, veo la primera página (20 items)<br>- [ ] Dado que hay más de 20 cursos, aparece el paginador<br>- [ ] Dado que no hay cursos, veo un empty state. |
| US-002 | P0 | Como usuario logueado, quiero aportar un curso con sus metadatos, para enriquecer el catálogo. | - [ ] Formulario exige URL, título, tema, categoría, declaración de si lo tomó.<br>- [ ] Submit exitoso retorna feedback y deja curso "en revisión". |
| US-003 | P0 | Como administrador, quiero validar o rechazar cursos aportados, para mantener la calidad del catálogo. | - [ ] Acceso exclusivo por rol a lista de aportes pendientes.<br>- [ ] Botones de Aprobar/Rechazar cambian el estado y visibilidad del curso. |
| US-004 | P0 | Como usuario logueado, quiero agregar un curso validado a mi roadmap, para planificar mi aprendizaje. | - [ ] Botón "Agregar a mi roadmap" en card del catálogo.<br>- [ ] Evita duplicados en el mismo roadmap. |
| US-005 | P1 | Como usuario logueado, quiero ver y gestionar mi roadmap, para ajustar mi planificación. | - [ ] Acceso a `/roadmap` muestra mis cursos elegidos.<br>- [ ] Opción para remover cursos del roadmap. |
| US-006 | P1 | Como visitante, quiero filtrar el catálogo por categoría o buscar por texto, para encontrar temas específicos. | - [ ] Select de categorías actualiza la lista.<br>- [ ] Input de texto busca en título/tema. |

## 5. Requisitos funcionales

| ID | Requisito | Historia relacionada |
|----|-----------|----------------------|
| RF-001 | El sistema debe permitir el registro y autenticación de usuarios. | US-002, US-004 |
| RF-002 | Un usuario autenticado puede enviar un formulario con los datos de un curso externo. | US-002 |
| RF-003 | El sistema debe diferenciar entre usuarios normales y administradores. | US-003 |
| RF-004 | Un administrador puede actualizar el estado de un curso (borrador -> publicado/rechazado). | US-003 |
| RF-005 | El sistema permite asociar cursos publicados al perfil de un usuario (Roadmap). | US-004, US-005 |

## 6. Requisitos no funcionales

| ID | Requisito | Notas |
|----|-----------|-------|
| RNF-001 | Todos los listados deben estar paginados en el backend. | Heredado de SPEC clase |
| RNF-002 | Diseño Mobile-first con mejora progresiva. | Heredado de SPEC clase |
| RNF-003 | Autenticación protegida con Rate Limiting en endpoint de login. | Heredado de SPEC clase |
| RNF-004 | Contraseñas almacenadas usando bcrypt. | Heredado de SPEC clase |

## 7. Reglas de negocio

| ID | Regla | Fuente |
|----|-------|--------|
| BR-001 | Un curso aportado no aparece en el catálogo público hasta ser validado (estado: publicado). | SPEC clase |
| BR-002 | Quien aporta un curso debe declarar obligatoriamente si tomó el curso o no. | SPEC clase |
| BR-003 | El roadmap es personal, privado y único por usuario. | Decisión propia |
| BR-004 | Solo se admiten cursos 100% gratuitos. Cursos de pago se rechazan en validación. | SPEC clase |

## 8. Fuera de alcance (out of scope)

- Alojamiento de videos, audios o material descargable del curso.
- Pasarelas de pago, suscripciones o billeteras virtuales.
- Generación o emisión de certificados nativos dentro de la webapp.
- Mensajería directa entre usuarios o foros de discusión.

## 9. Supuestos y decisiones sobre la SPEC de clase

Se asume que la visualización del catálogo es pública (sin login) para favorecer el descubrimiento (SEO y usabilidad), pero la acción de aportar un curso o armar un roadmap requiere cuenta activa. Los roles de Administrador se asignarán directamente en base de datos para el MVP, sin requerir una interfaz de gestión de usuarios completa (ver `docs/SPEC.md` §8).

## 10. Preguntas abiertas

| Pregunta | Impacto | Estado |
|----------|---------|--------|
| ¿Los aportes rechazados se eliminan físicamente de la base de datos o quedan con estado "rechazado"? | Medio | **Decidido:** Quedan en estado "rechazado" para evitar que el mismo usuario o otro vuelva a proponer la misma URL rota o de pago (soft-delete lógico). |
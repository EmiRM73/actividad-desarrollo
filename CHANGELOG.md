# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v0.1.0] - 2026-10-27

### Added
- Scaffold del proyecto: estructura backend/frontend, docker-compose de dev
- Backend mínimo: FastAPI con /health y GET /api/v1/cursos (con alias /cursos)
- Frontend mínimo: React + Vite consumiendo GET /cursos con estados loading, error y lista vacía
- Infraestructura de desarrollo: Docker Compose con servicios PostgreSQL 18.6, backend y frontend
- Configuración de variables de entorno (.env.example) y guía de ejecución en README.md


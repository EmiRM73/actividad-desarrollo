import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Roadmap de Cursos - API",
    description="API comunitaria para catálogo de cursos y roadmaps personales",
    version="0.1.0",
)

# CORS para permitir peticiones desde el frontend en desarrollo
allowed_origins_env = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173")
origins = [origin.strip() for origin in allowed_origins_env.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos iniciales para el MVP (Scaffold) según BackendSchema
CURSOS_MOCK = [
    {
        "id": "1",
        "titulo": "FastAPI desde Cero a Producción",
        "tema": "Backend y APIs REST",
        "categoria": "Backend",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "tiene_certificado": True,
        "estado": "publicado",
    },
    {
        "id": "2",
        "titulo": "React 19 & Vite: Fundamentos Modernos",
        "tema": "Desarrollo Frontend",
        "categoria": "Frontend",
        "url": "https://react.dev/learn",
        "tiene_certificado": True,
        "estado": "publicado",
    },
    {
        "id": "3",
        "titulo": "Docker y Contenedores para Desarrolladores",
        "tema": "DevOps e Infraestructura",
        "categoria": "DevOps",
        "url": "https://docs.docker.com/get-started/",
        "tiene_certificado": False,
        "estado": "publicado",
    },
]

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/v1/cursos")
def get_cursos():
    return CURSOS_MOCK

# Alias para compatibilidad con la consigna T2 (GET /cursos)
@app.get("/cursos")
def get_cursos_alias():
    return CURSOS_MOCK


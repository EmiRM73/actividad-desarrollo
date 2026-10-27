import { useState, useEffect } from 'react'

export default function App() {
  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCursos = async () => {
    setLoading(true)
    setError(null)
    try {
      // Intenta vía proxy de Vite (/api/v1/cursos) o fallback directo
      const response = await fetch('/api/v1/cursos').catch(() =>
        fetch('http://localhost:8000/api/v1/cursos')
      )

      if (!response.ok) {
        throw new Error(`Error en el servidor: HTTP ${response.status}`)
      }

      const data = await response.json()
      setCursos(data)
    } catch (err) {
      setError(err.message || 'No se pudo conectar con el servidor backend.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCursos()
  }, [])

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '16px' }}>
      {/* Header Mobile-First */}
      <header
        style={{
          backgroundColor: 'var(--color-surface)',
          padding: '20px',
          borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-1)',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '24px', color: 'var(--color-primary)' }}>
            Roadmap de Cursos
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
            Catálogo comunitario de aprendizaje colaborativo (UTN)
          </p>
        </div>
        <button
          onClick={fetchCursos}
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            border: 'none',
            padding: '8px 20px',
            borderRadius: 'var(--radius-button)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Actualizar catálogo
        </button>
      </header>

      {/* Main Content: Estados requeridos por el Ticket 3 */}
      <main>
        {/* Estado 1: Loading */}
        {loading && (
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-1)',
              color: 'var(--color-text-muted)',
            }}
          >
            <p style={{ fontSize: '16px', fontWeight: 500 }}>
              ⏳ Cargando catálogo comunitario de cursos...
            </p>
          </div>
        )}

        {/* Estado 2: Error */}
        {!loading && error && (
          <div
            style={{
              padding: '24px',
              backgroundColor: '#fce8e6',
              border: '1px solid var(--color-error)',
              borderRadius: 'var(--radius-card)',
              color: 'var(--color-error)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <p style={{ fontWeight: 600 }}>❌ Error al cargar los cursos</p>
            <p style={{ fontSize: '14px' }}>{error}</p>
            <button
              onClick={fetchCursos}
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'var(--color-error)',
                color: '#fff',
                border: 'none',
                padding: '6px 16px',
                borderRadius: 'var(--radius-button)',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              Reintentar conexión
            </button>
          </div>
        )}

        {/* Estado 3: Lista Vacía */}
        {!loading && !error && cursos.length === 0 && (
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-1)',
              color: 'var(--color-text-muted)',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: 500 }}>
              No hay cursos disponibles todavía.
            </p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>
              Los aportes de la comunidad aparecerán aquí una vez validados.
            </p>
          </div>
        )}

        {/* Estado 4: Lista con datos (Tarjetas inspiradas en Material Design) */}
        {!loading && !error && cursos.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {cursos.map((curso) => (
              <article
                key={curso.id}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '20px',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--color-primary-container)',
                      color: 'var(--color-primary-dark)',
                      padding: '2px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {curso.categoria || 'General'}
                  </span>
                  <h2
                    style={{
                      fontSize: '18px',
                      color: 'var(--color-text)',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    {curso.titulo}
                  </h2>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {curso.tema}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '12px',
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      color: curso.tiene_certificado
                        ? 'var(--color-success)'
                        : 'var(--color-text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {curso.tiene_certificado
                      ? '✓ Con Certificado'
                      : 'Sin Certificado'}
                  </span>
                  <a
                    href={curso.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    Ver curso ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}


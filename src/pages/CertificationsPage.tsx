import { useEffect, useMemo, useState } from 'react'
import SiteLayout from '../components/SiteLayout'
import '../App.css'

interface Certification {
  id: string
  title: string
  description?: string
  organization?: string
  institution?: string
  published_at: string
  file_path?: string
  download_url?: string
}

const CONTENT_URL = (import.meta.env.VITE_CONTENT_BASE_URL ?? 'http://localhost:8000/api').replace(/\/$/, '')

function fileUrl(certification: Certification): string | undefined {
  if (certification.download_url) return certification.download_url
  if (!certification.file_path) return undefined
  return `${CONTENT_URL}/${certification.file_path}`
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const localApi = CONTENT_URL.endsWith('/api')
    const endpoint = localApi
      ? `${CONTENT_URL}/certificates`
      : `${CONTENT_URL}/Certificates/catalog.json`

    fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Não foi possível consultar o arquivo de certificações.')
        return response.json() as Promise<Certification[]>
      })
      .then(setCertifications)
      .catch((reason: Error) => {
        if (reason.name !== 'AbortError') setError('Não foi possível carregar os certificados. Tente novamente mais tarde.')
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')
    if (!normalizedQuery) return certifications

    return certifications.filter((certification) =>
      [certification.title, certification.organization, certification.institution, certification.description]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('pt-BR')
        .includes(normalizedQuery),
    )
  }, [certifications, query])

  return (
    <SiteLayout>
      <section className="page-intro"><h1>Formação complementar</h1><p>Cursos e certificados que fazem parte da minha formação em computação e pesquisa.</p></section>
      <section className="archive" aria-label="Certificados">
        <div className="archive-toolbar">
          <p className="metadata" aria-live="polite">{loading ? 'Carregando certificados…' : error ? 'Arquivo indisponível' : `${filtered.length} ${filtered.length === 1 ? 'certificado' : 'certificados'}`}</p>
          <label className="search-label">Buscar certificado<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Título ou instituição" /></label>
        </div>
        {error && <p className="feedback error-message" role="alert">{error}</p>}
        {!loading && !error && !filtered.length && <p className="feedback">Nenhum certificado encontrado para esta busca.</p>}
        {filtered.map((certification) => {
          const href = fileUrl(certification)
          return (
            <article key={certification.id} className="certificate-entry">
              <div><h2>{certification.title}</h2><p>{certification.organization || certification.institution || 'Certificação'} · {formatDate(certification.published_at)}</p>{certification.description && <p className="certificate-description">{certification.description}</p>}</div>
              {href && <a href={href} target="_blank" rel="noreferrer" aria-label={`Abrir certificado: ${certification.title}`}>Abrir PDF</a>}
            </article>
          )
        })}
      </section>
    </SiteLayout>
  )
}

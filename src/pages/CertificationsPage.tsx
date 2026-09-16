import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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
        if (reason.name !== 'AbortError') setError(reason.message)
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
    <main className="min-h-screen bg-[#0b1014] text-[#e9ece8] selection:bg-[#9fd5c4] selection:text-[#0b1014]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-24 items-center justify-between border-b border-white/15">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-[#9fd5c4]/70 font-mono text-xs text-[#9fd5c4] transition-colors group-hover:bg-[#9fd5c4] group-hover:text-[#0b1014]">LC</span>
            <span className="hidden text-xs uppercase tracking-[0.22em] text-white/60 sm:block">Research Portfolio</span>
          </Link>
          <nav className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 sm:gap-8">
            <Link to="/projects" className="hover:text-white">Projetos</Link>
            <Link to="/materials" className="hover:text-white">Materiais</Link>
            <span className="text-[#9fd5c4]">Certificações</span>
          </nav>
        </header>

        <section className="border-b border-white/15 py-20 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">Arquivo / Formação contínua</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <h1 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.065em]">Certificações<span className="text-[#9fd5c4]">.</span></h1>
            <p className="max-w-md leading-relaxed text-white/48">Cursos, formações e experiências que documentam minha trajetória acadêmica e técnica.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{filtered.length} {filtered.length === 1 ? 'registro' : 'registros'} no arquivo</p>
            <label className="border-b border-white/25 pb-2">
              <span className="sr-only">Buscar certificação</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por título ou instituição..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25 sm:w-80" />
            </label>
          </div>

          {loading && <p className="font-mono text-xs uppercase tracking-widest text-white/35">Consultando arquivo…</p>}
          {error && <div className="border border-red-300/25 p-6 text-red-100">{error}</div>}
          {!loading && !error && !filtered.length && <div className="border border-dashed border-white/20 py-24 text-center"><p className="font-serif text-2xl italic text-white/45">Nenhuma certificação encontrada</p></div>}

          <div className="grid border-l border-t border-white/15 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((certification, index) => {
              const href = fileUrl(certification)
              return (
                <a key={certification.id} href={href} target="_blank" rel="noreferrer" aria-disabled={!href} className="group flex min-h-[340px] flex-col border-b border-r border-white/15 p-7 transition-colors hover:bg-[#111a1f] md:p-9">
                  <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/30"><span>CERT—{String(index + 1).padStart(3, '0')}</span><span>{formatDate(certification.published_at)}</span></div>
                  <div className="mt-auto">
                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9fd5c4]">{certification.organization || certification.institution || 'Certificação'}</p>
                    <h2 className="text-2xl font-normal leading-tight tracking-tight md:text-3xl">{certification.title}</h2>
                    {certification.description && <p className="mt-5 line-clamp-3 leading-relaxed text-white/45">{certification.description}</p>}
                    <div className="mt-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-white/30"><span>Documento PDF</span><span className="text-lg text-[#9fd5c4] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
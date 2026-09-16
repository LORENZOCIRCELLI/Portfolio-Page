import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'
import '../App.css'

export default function ProjectsPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')
    if (!normalizedQuery) return projects
    return projects.filter((project) =>
      `${project.title} ${project.description}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery),
    )
  }, [query])

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
            <span className="text-[#9fd5c4]">Projetos</span>
            <Link to="/materials" className="hover:text-white">Materiais</Link>
            <Link to="/certifications" className="hover:text-white">Certificações</Link>
          </nav>
        </header>

        <section className="border-b border-white/15 py-20 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">Arquivo / Engenharia e ciência</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <h1 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.065em]">Projetos<span className="text-[#9fd5c4]">.</span></h1>
            <p className="max-w-md leading-relaxed text-white/48">Sistemas, experimentos e pesquisas construídos entre engenharia da computação, aprendizado de máquina e ciência.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{filtered.length} {filtered.length === 1 ? 'projeto documentado' : 'projetos documentados'}</p>
            <label className="border-b border-white/25 pb-2"><span className="sr-only">Buscar projeto</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no arquivo..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25 sm:w-72" /></label>
          </div>

          {!filtered.length && <div className="border border-dashed border-white/20 py-24 text-center"><p className="font-serif text-2xl italic text-white/45">Nenhum projeto encontrado</p></div>}

          <div className="space-y-6">
            {filtered.map((project, projectIndex) => (
              <article key={project.id} className="group border border-white/15 bg-[#0b1014]/80 transition-colors hover:border-white/30">
                <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[80px_1fr_1fr]">
                  <span className="font-mono text-xs text-[#9fd5c4]">P.{String(projectIndex + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Projeto / Desenvolvimento</p>
                    <h2 className="text-3xl font-normal leading-tight tracking-tight md:text-4xl">{project.title}</h2>
                  </div>
                  <p className="max-w-xl leading-relaxed text-white/48">{project.description}</p>
                </div>

                <div className="border-t border-white/15 bg-white/[0.012] px-7 py-7 md:px-10">
                  <div className="grid gap-6 lg:grid-cols-[80px_1fr]">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#9fd5c4]">Registro</p>
                    <div className="divide-y divide-white/10">
                      {project.updates.map((update, updateIndex) => (
                        <div key={`${update.date}-${updateIndex}`} className="grid gap-2 py-4 first:pt-0 last:pb-0 md:grid-cols-[140px_1fr] md:gap-8">
                          <time className="font-mono text-[10px] uppercase tracking-widest text-white/30">{update.date}</time>
                          <p className="leading-relaxed text-white/65">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
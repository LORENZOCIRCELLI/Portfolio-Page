import { useMemo, useState } from 'react'
import projects from '../data/projects.json'
import SiteLayout from '../components/SiteLayout'

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' })

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')
    return projects.filter((project) => `${project.title} ${project.description}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery))
  }, [query])

  return (
    <SiteLayout>
      <section className="page-intro"><h1>Projetos</h1><p>Experimentos de programação e sistemas que estou construindo. Aqui registro também as etapas do desenvolvimento.</p></section>
      <section className="archive" aria-label="Arquivo de projetos">
        <div className="archive-toolbar"><p className="metadata" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'projeto' : 'projetos'}</p><label className="search-label">Buscar projeto<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome ou assunto" /></label></div>
        {!filtered.length && <p className="feedback">Nenhum projeto encontrado para esta busca.</p>}
        {filtered.map((project) => (
          <article className="project-entry" key={project.id}>
            <h2>{project.title}</h2><p className="project-description">{project.description}</p>
            <div className="project-updates"><h3>Registros de desenvolvimento</h3>{project.updates.map((update, index) => <div className="project-update" key={`${update.date}-${index}`}><time dateTime={update.date}>{dateFormatter.format(new Date(`${update.date}T00:00:00Z`))}</time><p>{update.content}</p></div>)}</div>
          </article>
        ))}
      </section>
    </SiteLayout>
  )
}

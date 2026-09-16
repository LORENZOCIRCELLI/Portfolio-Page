import './App.css'
import { Link } from 'react-router-dom'

const researchAreas = [
  { index: '01', title: 'Scientific Machine Learning', description: 'Arquiteturas neurais e modelos híbridos orientados por princípios físicos para investigação de sistemas complexos.', tags: ['Redes neurais', 'Modelagem matemática'] },
  { index: '02', title: 'Bioinformática estrutural', description: 'Dinâmica molecular, análise de proteínas e métodos computacionais aplicados à genética e ao desenvolvimento de fármacos.', tags: ['Proteínas', 'Dinâmica molecular'] },
  { index: '03', title: 'Computação de alto desempenho', description: 'Infraestrutura paralela e acelerada por GPU para simulação científica, processamento de dados e treinamento de modelos.', tags: ['HPC', 'GPU computing'] },
]

const projects = [
  { number: 'P.01', title: 'Plataforma SciML para Sistemas Biológicos', description: 'Modelos híbridos — físicos e neurais — para simular e interpretar sistemas biológicos complexos.', field: 'SciML · Pesquisa', year: '2026' },
  { number: 'P.02', title: 'Motor Computacional Distribuído', description: 'Plataforma de simulação de partículas baseada em computação de alto desempenho em nuvem.', field: 'HPC · Cloud', year: '2026' },
  { number: 'P.03', title: 'Guardiões do Planeta', description: 'Tecnologia educacional e experiência interativa voltada à sustentabilidade ambiental.', field: 'Game · Extensão', year: 'Em desenvolvimento' },
]

const credentials = [
  {
    title: 'Engenharia da Computação',
    institution: 'Universidade de Ribeirão Preto',
    date: '2024—2029',
  },
  {
    title: 'C1 - Advanced',
    institution: 'Cultura Inglesa',
    date: '2026—2027',
  },
  {
    title: 'Grupo de Bioinformática',
    institution: 'FMRP — Universidade de São Paulo',
    date: 'Estagiário',
  },
  {
    title: 'Engenharia de Agentes de IA',
    institution: 'Alura',
    date: '2026',
  },
  {
    title: 'Machine Learning',
    institution: 'Imperial College London - Coursera',
    date: 'Em curso',
  },
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b1014] text-[#e9ece8] selection:bg-[#9fd5c4] selection:text-[#0b1014]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-24 items-center justify-between border-b border-white/15">
          <Link to="/" className="group flex items-center gap-3" aria-label="Página inicial">
            <span className="grid h-9 w-9 place-items-center border border-[#9fd5c4]/70 font-mono text-xs text-[#9fd5c4] transition-colors group-hover:bg-[#9fd5c4] group-hover:text-[#0b1014]">LC</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-white/65 sm:block">Research Portfolio</span>
          </Link>
          <nav className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 sm:gap-8">
            <Link to="/research" className="hidden transition-colors hover:text-[#9fd5c4] sm:inline">Pesquisa</Link>
            <Link to="/projects" className="hidden transition-colors hover:text-[#9fd5c4] sm:inline">Projetos</Link>
            <Link to="/materials" className="hidden transition-colors hover:text-[#9fd5c4] sm:inline">Materiais</Link>
            <Link to="/certifications" className="hidden transition-colors hover:text-[#9fd5c4] sm:inline">Formação</Link>
            <a href="https://www.liralab.com.br" className="hidden transition-colors hover:text-[#9fd5c4] sm:inline">LIRA</a>
          </nav>
        </header>

        <section className="grid min-h-[680px] items-end gap-16 border-b border-white/15 py-20 lg:grid-cols-[1fr_330px] lg:py-28">
          <div>
            <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]"><span className="h-px w-12 bg-[#9fd5c4]" />Engenharia computacional para ciência</div>
            <h1 className="max-w-5xl text-[clamp(3.8rem,9vw,8.5rem)] font-light leading-[0.84] tracking-[-0.065em] text-[#f3f4ef]">Lorenzo<span className="mt-3 block font-serif italic text-white/45">Calabrese Circelli</span></h1>
            <p className="mt-12 max-w-2xl text-lg font-light leading-relaxed text-white/58 md:text-xl">Engenheiro da computação e pesquisador em formação, desenvolvendo métodos de aprendizado de máquina para saúde, bioinformática estrutural e sistemas científicos de alto desempenho.</p>
          </div>
          <aside className="border-l border-white/15 pl-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
            <p className="mb-7 text-[#9fd5c4]">Perfil / 2026</p>
            <dl className="space-y-5">
              <div><dt className="mb-1 text-white/25">Vínculo de pesquisa</dt><dd className="leading-relaxed text-white/75">Grupo de Bioinformática<br />FMRP — USP</dd></div>
              <div><dt className="mb-1 text-white/25">Base</dt><dd className="text-white/75">Ribeirão Preto, Brasil</dd></div>
              <div><dt className="mb-1 text-white/25">Disponibilidade</dt><dd className="flex items-center gap-2 text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#9fd5c4]" /> Colaborações científicas</dd></div>
            </dl>
            <div className="mt-9 flex gap-5 text-[#9fd5c4]"><a href="https://lattes.cnpq.br/9066461369543994" target="_blank" rel="noreferrer" className="hover:text-white">Lattes ↗</a><a href="https://github.com/LORENZOCIRCELLI" target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a></div>
          </aside>
        </section>

        <section id="pesquisa" className="border-b border-white/15 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <div><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">01 — Pesquisa</p><h2 className="mt-5 text-4xl font-light tracking-tight md:text-5xl">Linhas de<br /><span className="font-serif italic text-white/45">investigação</span></h2></div>
            <div className="divide-y divide-white/15 border-t border-white/15">
              {researchAreas.map((area) => (
                <article key={area.index} className="group grid gap-5 py-8 md:grid-cols-[52px_1fr_1fr] md:py-10">
                  <span className="font-mono text-xs text-[#9fd5c4]">{area.index}</span><h3 className="text-2xl font-normal tracking-tight transition-colors group-hover:text-[#9fd5c4]">{area.title}</h3>
                  <div><p className="leading-relaxed text-white/52">{area.description}</p><div className="mt-5 flex flex-wrap gap-2">{area.tags.map((tag) => <span key={tag} className="border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/40">{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="border-b border-white/15 py-24 lg:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">02 — Trabalho selecionado</p><h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">Projetos em foco</h2></div>
            <Link to="/projects" className="hidden border-b border-[#9fd5c4]/50 pb-2 font-mono text-[11px] uppercase tracking-widest text-[#9fd5c4] hover:border-white hover:text-white sm:block">Arquivo completo →</Link>
          </div>
          <div className="grid border-l border-t border-white/15 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.number} to="/projects" className="group flex min-h-[390px] flex-col border-b border-r border-white/15 p-7 transition-colors hover:bg-[#111a1f] md:p-9">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/35"><span>{project.number}</span><span>{project.year}</span></div>
                <div className="mt-auto"><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9fd5c4]">{project.field}</p><h3 className="text-2xl font-normal leading-tight tracking-tight md:text-3xl">{project.title}</h3><p className="mt-5 leading-relaxed text-white/48">{project.description}</p><div className="mt-8 flex justify-end text-xl text-[#9fd5c4] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</div></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid border-b border-white/15 py-24 lg:grid-cols-[1fr_1.7fr] lg:gap-24 lg:py-32">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">03 — Produção científica</p><h2 className="mt-5 max-w-md text-4xl font-light leading-tight tracking-tight md:text-5xl">Notas, estudos e <span className="font-serif italic text-white/45">publicações</span></h2><p className="mt-8 max-w-md leading-relaxed text-white/50">Este espaço reunirá artigos, relatórios técnicos, experimentos e registros de pesquisa em andamento.</p></div>
          <div className="mt-12 flex min-h-[280px] items-center justify-center border border-dashed border-white/20 bg-white/[0.015] lg:mt-0"><div className="max-w-xs px-8 text-center"><span className="mx-auto mb-5 block h-2 w-2 rounded-full bg-[#9fd5c4]" /><p className="font-serif text-2xl italic text-white/50">Caderno em preparação</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">Primeiras entradas em breve</p></div></div>
        </section>


        <section className="grid border-b border-white/15 py-24 lg:grid-cols-[280px_1fr]-3 lg:py-32">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9fd5c4]">04 — Formação</p><h2 className="mt-5 text-4xl font-light tracking-tight mb-10">Trajetória</h2></div>
            {credentials.map(({ title, institution, date }) => (
              <div
                key={title}
                className="grid gap-2 py-6 md:grid-cols-[400px_1fr_100px] md:items-center md:gap-8"
              >
                <h3 className="text-lg text-white/90">
                  {title}
                </h3>

                <p className="text-sm text-white/45">
                  {institution}
                </p>

                <p className="text-right font-mono text-[10px] uppercase tracking-widest text-[#9fd5c4]">
                  {date}
                </p>
              </div>
            ))}
        </section>

        <footer className="py-16 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9fd5c4]">Contato / colaboração</p><h2 className="mt-5 max-w-xl text-4xl font-light tracking-tight md:text-5xl">Vamos conversar sobre ciência, engenharia e <span className="font-serif italic text-white/45">boas ideias.</span></h2></div><div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end"><a href="https://github.com/LORENZOCIRCELLI" target="_blank" rel="noreferrer" className="border-b border-white/20 pb-1 text-sm text-white/65 hover:border-[#9fd5c4] hover:text-[#9fd5c4]">GitHub ↗</a><a href="https://www.linkedin.com/in/lorenzocalabresecircelli/" target="_blank" rel="noreferrer" className="border-b border-white/20 pb-1 text-sm text-white/65 hover:border-[#9fd5c4] hover:text-[#9fd5c4]">LinkedIn ↗</a><a href="https://lattes.cnpq.br/9066461369543994" target="_blank" rel="noreferrer" className="border-b border-white/20 pb-1 text-sm text-white/65 hover:border-[#9fd5c4] hover:text-[#9fd5c4]">Lattes ↗</a></div></div>
          <div className="mt-20 flex justify-between border-t border-white/15 pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25"><span>© 2026 Lorenzo Calabrese Circelli</span><span>Computação · Ciência · Pesquisa</span></div>
        </footer>
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import EventsCarousel from './components/EventsCarousel'
import PersonalContent from './components/PersonalContent'
import SoftwareCards from './components/SoftwareCards'
import softwares from './data/softwares.json'
import events from './data/events.json'
import contents from './data/contents.json'

const interests = [
  { title: 'Aprendizado de máquina para ciência', description: 'Tenho interesse em combinar redes neurais e modelos físicos para estudar sistemas biológicos.' },
  { title: 'Bioinformática estrutural', description: 'Proteínas, dinâmica molecular e métodos computacionais aplicados à saúde e ao desenvolvimento de fármacos.' },
  { title: 'Computação de alto desempenho', description: 'Programação paralela e uso de GPUs para simulação científica e treinamento de modelos.' },
]

const projects = [
  { title: 'Plataforma SciML para Sistemas Biológicos', description: 'Modelos físicos e neurais para simulação de sistemas biológicos.', field: 'Aprendizado de máquina' },
  { title: 'Motor Computacional Distribuído', description: 'Simulação de partículas com computação de alto desempenho em nuvem.', field: 'Computação científica' },
  { title: 'Guardiões do Planeta', description: 'Uma experiência interativa sobre sustentabilidade ambiental.', field: 'Educação · Em desenvolvimento' },
]

export default function App() {
  return (
    <SiteLayout>
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">Minha página de pesquisa e projetos</p>
          <h1 id="intro-title">Estudando computação.<br /><em>Fazendo pesquisa.</em></h1>
          <p className="intro-text">Sou Lorenzo Calabrese Circelli, estudante de Engenharia da Computação na Universidade de Ribeirão Preto e estagiário no Grupo de Bioinformática da FMRP–USP.</p>
          <p className="intro-text">Me interesso por aprendizado de máquina, proteínas e computação científica. Aqui compartilho o que estudo, desenvolvo e apresento.</p>
          <div className="intro-links"><a href="#pesquisa">Conheça meus interesses de pesquisa</a><a href="https://lattes.cnpq.br/9066461369543994" target="_blank" rel="noreferrer">Currículo Lattes</a></div>
          <aside className="profile-note" aria-label="Minha trajetória em resumo">
            <p className="note-title">Atualmente</p>
            <div><h2>Engenharia da Computação</h2><p>UNAERP · 2024–2029</p><h2>Estágio em pesquisa</h2><p>Grupo de Bioinformática · FMRP–USP</p></div>
          </aside>
        </div>
        <figure className="intro-figure">
          <div className="intro-photo-frame"><img src="/events/siicusp-2026/fotos/apresentacao-01.jpeg" alt="Lorenzo ao lado do seu pôster de pesquisa no SIICUSP 2026" fetchPriority="high" /></div>
          <figcaption><span>SIICUSP 2026</span>Um registro da minha apresentação sobre dinâmica molecular e aprendizado de máquina.</figcaption>
        </figure>
      </section>

      <section id="pesquisa" className="content-section">
        <div className="section-heading"><p className="eyebrow">Interesses de pesquisa</p><h2>O que estou estudando</h2><p>Os assuntos que aproximam minha formação e minha pesquisa.</p></div>
        <div className="interests-list">{interests.map((interest) => <article key={interest.title}><h3>{interest.title}</h3><p>{interest.description}</p></article>)}</div>
      </section>

      <section className="content-section">
        <div className="section-heading"><p className="eyebrow">Da ideia à implementação</p><h2>Projetos & iniciativas</h2><p>Algumas frentes de trabalho em computação, pesquisa e educação.</p></div>
        <div className="home-projects">{projects.map((project) => <article key={project.title}><p className="metadata">{project.field}</p><h3>{project.title}</h3><p>{project.description}</p></article>)}</div>
        <Link className="section-link" to="/projects">Ver outros projetos e registros de desenvolvimento</Link>
      </section>

      <section id="softwares" className="content-section" aria-labelledby="softwares-title">
        <div className="section-heading"><p className="eyebrow">Ferramentas que construo</p><h2 id="softwares-title">Softwares</h2><p>Ferramentas e aplicações que desenvolvo.</p></div>
        <SoftwareCards softwares={softwares} />
      </section>

      <section id="materiais" className="content-section" aria-labelledby="materials-title">
        <div className="section-heading"><p className="eyebrow">Caderno de estudos</p><h2 id="materials-title">Resumos & conteúdos</h2><p>O que escrevo, organizo e compartilho ao longo dos estudos.</p></div>
        <PersonalContent entries={contents} />
      </section>

      <section id="eventos" className="content-section" aria-labelledby="events-title">
        <div className="section-heading"><p className="eyebrow">Apresentações e encontros</p><h2 id="events-title">Eventos & congressos</h2><p>Encontros, apresentações e experiências fora da sala de aula.</p></div>
        <EventsCarousel events={events} />
      </section>

      <section className="content-section learning-section">
        <div className="section-heading"><p className="eyebrow">Formação contínua</p><h2>Além da graduação</h2><p>Continuo estudando por cursos e formações complementares.</p></div>
        <dl className="learning-list">
          <div><dt>Machine Learning</dt><dd>Imperial College London · Coursera<span>Em curso</span></dd></div>
          <div><dt>Engenharia de Agentes de IA</dt><dd>Alura<span>2026</span></dd></div>
          <div><dt>Inglês · C1 Advanced</dt><dd>Cultura Inglesa<span>2026–2027</span></dd></div>
        </dl>
        <Link className="section-link" to="/certifications">Consultar certificados</Link>
      </section>
    </SiteLayout>
  )
}

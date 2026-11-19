export interface PersonalContentEntry {
  id: string
  title: string
  type: string
  date: string
  description: string
  url: string
}

export default function PersonalContent({ entries }: { entries: PersonalContentEntry[] }) {
  if (!entries.length) return <div className="section-empty"><h3>Meu caderno de estudos</h3><p>Um espaço para compartilhar resumos, anotações e materiais que produzo enquanto estudo.</p></div>

  return <div className="personal-content-list">{entries.map((entry) => <article key={entry.id}>
    <p className="metadata">{entry.type} · {entry.date}</p>
    <h3><a href={entry.url} target="_blank" rel="noreferrer">{entry.title}</a></h3>
    <p>{entry.description}</p>
  </article>)}</div>
}

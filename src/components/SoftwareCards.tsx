import { useState } from 'react'

export interface Software {
  id: string
  name: string
  description: string
  icon?: string
  url?: string
}

function SoftwareIcon({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false)

  return <div className="software-icon" aria-hidden="true">
    {src && !failed ? <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} /> : <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="6" width="22" height="20" rx="3" /><path d="M5 12h22M10 9h.01M14 9h.01M13 17l-3 3 3 3M19 17l3 3-3 3" /></svg>}
  </div>
}

export default function SoftwareCards({ softwares }: { softwares: Software[] }) {
  return <div className="software-grid">
    {softwares.length ? softwares.map((software) => <article className="software-card" key={software.id}>
      <SoftwareIcon key={software.icon} src={software.icon} />
      <h3>{software.name}</h3>
      <p>{software.description}</p>
      {software.url && <a href={software.url} target="_blank" rel="noreferrer">Conhecer o software</a>}
    </article>) : <article className="software-card software-card-empty">
      <SoftwareIcon />
      <h3>Em breve</h3>
      <p>Este espaço reunirá os softwares que desenvolvo, o que cada um faz e onde encontrá-los.</p>
    </article>}
  </div>
}

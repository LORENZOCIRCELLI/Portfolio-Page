import { useState } from 'react'

export interface EventPhoto {
  src: string
  alt: string
  caption?: string
}

interface EventMediaProps {
  title: string
  photos?: EventPhoto[]
  posterUrl?: string
  posterPreview?: string
  photoNote?: string
}

export default function EventMedia({ title, photos = [], posterUrl, posterPreview, photoNote }: EventMediaProps) {
  const [selected, setSelected] = useState(0)
  const photo = photos[selected] || photos[0]

  return <div className={`event-media${!photo && posterUrl ? ' poster-only' : ''}`}>
    {(photo || !posterUrl) && <section className="event-photos" aria-label={`Fotos de participação: ${title}`}>
      <h4>Fotos da participação</h4>
      {photo ? <>
        <figure className="event-photo"><a href={photo.src} target="_blank" rel="noreferrer" aria-label={`Abrir foto: ${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></a>{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>
        {photos.length > 1 && <div className="photo-thumbnails" role="group" aria-label="Escolher foto">{photos.map((item, index) => <button type="button" key={`${item.src}-${index}`} aria-label={`Ver foto ${index + 1}: ${item.alt}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><img src={item.src} alt="" loading="lazy" /></button>)}</div>}
      </> : <div className="media-placeholder"><p>{photoNote || 'Fotos ainda não adicionadas.'}</p></div>}
    </section>}
    <section className="event-poster" aria-label={`Pôster: ${title}`}>
      <h4>Pôster em PDF</h4>
      {!photo && photoNote && <p className="event-photo-note">{photoNote}</p>}
      {posterUrl ? <>
        {posterPreview ? <a className="poster-image-link" href={posterUrl} target="_blank" rel="noreferrer" aria-label={`Abrir pôster em PDF: ${title}`}><img className="poster-image" src={posterPreview} alt={`Prévia do pôster de ${title}`} loading="lazy" /></a> : <object className="poster-preview" data={posterUrl} type="application/pdf" aria-label={`Prévia do pôster de ${title}`}><p>A prévia não está disponível neste navegador. <a href={posterUrl} target="_blank" rel="noreferrer">Abrir pôster em PDF</a></p></object>}
        <a className="poster-link" href={posterUrl} target="_blank" rel="noreferrer">Abrir pôster em PDF</a>
      </> : <div className="media-placeholder"><p>PDF do pôster ainda não adicionado.</p></div>}
    </section>
  </div>
}

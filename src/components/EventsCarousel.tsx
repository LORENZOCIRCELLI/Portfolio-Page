import { useEffect, useId, useRef, useState } from 'react'
import EventMedia from './EventMedia'
import type { EventPhoto } from './EventMedia'

export interface EventParticipation {
  id: string
  title: string
  workTitle?: string
  date: string
  location?: string
  participation: string
  description: string
  image?: string
  imageAlt?: string
  photos?: EventPhoto[]
  posterUrl?: string
  posterPreview?: string
  photoNote?: string
  mediaNote?: string
  url?: string
  linkLabel?: string
}

export default function EventsCarousel({ events }: { events: EventParticipation[] }) {
  const [position, setPosition] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [inView, setInView] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<number | null>(null)
  const viewportId = useId()
  const count = events.length
  const active = count ? (position - 1 + count) % count : 0

  useEffect(() => {
    const element = carouselRef.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [count])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    const updateVisibility = () => setHidden(document.hidden)
    updateMotion()
    updateVisibility()
    media.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => {
      media.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (count < 2 || paused || hovered || focused || reducedMotion || hidden || !inView) return
    const timer = window.setInterval(() => setPosition((current) => current + 1), 6000)
    return () => window.clearInterval(timer)
  }, [count, paused, hovered, focused, reducedMotion, hidden, inView, position])

  useEffect(() => {
    if (animate) return
    const frame = window.requestAnimationFrame(() => setAnimate(true))
    return () => window.cancelAnimationFrame(frame)
  }, [animate])

  if (!count) return <div className="section-empty"><h3>Eventos & congressos</h3><p>Vou reunir aqui minhas participações, apresentações e o que aprendi em cada encontro.</p></div>

  const slides = count > 1 ? [events[count - 1], ...events, events[0]] : events

  function settlePosition() {
    if (position === count + 1 || position === 0) {
      setAnimate(false)
      setPosition(position === 0 ? count : 1)
    }
  }

  return (
    <div ref={carouselRef} className="events-carousel" role="region" aria-roledescription="carrossel" aria-label="Participações em eventos e congressos"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div id={viewportId} className="carousel-viewport"
        onPointerDown={(event) => { if (event.pointerType === 'touch') pointerStart.current = event.clientX }}
        onPointerCancel={() => { pointerStart.current = null }}
        onPointerUp={(event) => {
          if (pointerStart.current === null || count < 2) return
          const distance = event.clientX - pointerStart.current
          pointerStart.current = null
          if (Math.abs(distance) > 50) setPosition((active + (distance < 0 ? 1 : -1) + count) % count + 1)
        }}>
        <div className={`carousel-track${animate && !reducedMotion ? ' is-animated' : ''}`} style={{ transform: `translateX(-${(count > 1 ? position : 0) * 100}%)` }}
          onTransitionEnd={(event) => { if (event.target === event.currentTarget && event.propertyName === 'transform') settlePosition() }}>
          {slides.map((event, index) => {
            const visible = count === 1 || index === position
            return (
              <article className="event-slide" key={`${event.id}-${index}`} role="group" aria-roledescription="slide" aria-label={`${active + 1} de ${count}`} aria-hidden={!visible} inert={!visible}>
                <div className="event-copy"><p className="metadata">{event.date}{event.location && ` · ${event.location}`}</p><h3>{event.title}</h3><p className="event-role">{event.participation}</p>{event.workTitle && <h4 className="event-work-title">{event.workTitle}</h4>}<p className="event-description">{event.description}</p>{event.url && <a href={event.url} target="_blank" rel="noreferrer">{event.linkLabel || 'Sobre o evento'}</a>}</div>
                {event.mediaNote ? <p className="event-media-note">{event.mediaNote}</p> : <EventMedia title={event.title} photos={event.photos || (event.image ? [{ src: event.image, alt: event.imageAlt || event.title }] : [])} posterUrl={event.posterUrl} posterPreview={event.posterPreview} photoNote={event.photoNote} />}
              </article>
            )
          })}
        </div>
      </div>
      {count > 1 && <div className="carousel-controls">
        <div className="carousel-dots" role="group" aria-label="Escolher participação">{events.map((event, index) => <button type="button" key={event.id} className={`carousel-dot${active === index ? ' is-active' : ''}`} aria-label={`Ver participação: ${event.title}`} aria-current={active === index ? 'true' : undefined} aria-controls={viewportId} onClick={() => { setAnimate(true); setPosition(index + 1) }}><span /></button>)}</div>
        <button type="button" className="carousel-pause" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? 'Retomar passagem automática' : 'Pausar passagem automática'}</button>
      </div>}
    </div>
  )
}

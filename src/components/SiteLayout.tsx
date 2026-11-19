import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../App.css'

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { hash, pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash, pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="header-topline"><span>Engenharia da Computação</span><span>Pesquisa, projetos e anotações</span></div>
        <div className="header-identity">
          <Link className="site-name" to="/">Lorenzo Circelli</Link>
          <p className="brand-description">Computação, bioinformática<br />e aprendizado de máquina</p>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? 'Fechar menu' : 'Menu'}</button>
        </div>
        <div className={`header-navigation${menuOpen ? ' is-open' : ''}`}>
          <nav id="site-navigation" aria-label="Navegação principal" onClick={() => setMenuOpen(false)}>
            <NavLink to="/" end>Sobre</NavLink>
            <a href="/#pesquisa">Pesquisa</a>
            <NavLink to="/projects">Projetos</NavLink>
            <a href="/#softwares">Softwares</a>
            <a href="/#materiais">Conteúdos</a>
            <a href="/#eventos">Eventos</a>
            <NavLink to="/certifications">Formação</NavLink>
            <a href="/#contato">Contato</a>
          </nav>
          <span className="header-location">Ribeirão Preto · SP</span>
        </div>
      </header>
      <main id="conteudo">{children}</main>
      <footer id="contato" className="site-footer">
        <div><p className="eyebrow">Contato</p><p className="footer-name">Lorenzo Calabrese Circelli</p><p className="footer-location">Ribeirão Preto, Brasil</p></div>
        <div className="social-links">
          <a href="https://github.com/LORENZOCIRCELLI" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/lorenzocalabresecircelli/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://lattes.cnpq.br/9066461369543994" target="_blank" rel="noreferrer">Lattes</a>
          <a href="https://www.liralab.com.br" target="_blank" rel="noreferrer">LIRA</a>
        </div>
      </footer>
    </div>
  )
}

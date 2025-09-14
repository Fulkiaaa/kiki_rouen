import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'

const NavItem = ({to, children}) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `px-3 py-2 rounded-xl ${isActive ? 'bg-white/80 text-brand' : 'text-brand hover:bg-white/60'}`
    }>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-sun/90 backdrop-blur supports-[backdrop-filter]:bg-sun/60 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo-sun.jpg" alt="Kiki logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-2xl font-extrabold text-brand">Kiki</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/carte">Carte</NavItem>
          <NavItem to="/avis">Avis</NavItem>
          <NavItem to="/infos">Infos</NavItem>
        </nav>
      </div>
      <div className="bg-brand text-white text-center text-sm py-1">
        {site.slogan}
      </div>
    </header>
  )
}

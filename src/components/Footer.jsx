import { site } from '../data/site'

export default function Footer(){
  return (
    <footer className="bg-brand text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="text-2xl font-extrabold">Kiki</h4>
          <p className="opacity-90">{site.tagline}</p>
          <p className="mt-3">📍 {site.address}</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Services</h5>
          <ul className="space-y-1 opacity-90">
            {site.services.map(s => <li key={s}>• {s}</li>)}
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Réseaux</h5>
          <a className="underline" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="bg-black/20 text-center text-sm py-3">© {new Date().getFullYear()} Kiki – Tous droits réservés.</div>
    </footer>
  )
}

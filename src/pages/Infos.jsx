import { openingHours } from '../data/hours'
import { site } from '../data/site'
import { isOpenNow } from '../utils/hourUtils'

function HoursTable(){
  return (
    <table className="w-full text-left border-separate border-spacing-y-2">
      <tbody>
        {openingHours.map((h)=>(
          <tr key={h.day} className="">
            <th className="font-semibold pr-4">{h.day}</th>
            <td className="text-brand">{h.open} – {h.close}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Infos(){
  const open = isOpenNow(openingHours)
  return (
    <main className="px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-extrabold text-brand mb-2">Infos pratiques</h1>
          <p className="mb-4">📍 {site.address}</p>
          <p className="mb-6">Services : {site.services.join(' · ')}</p>
          <div className="bg-[#fff7e6] rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Horaires</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {open ? 'Ouvert maintenant' : 'Fermé'}
              </span>
            </div>
            <div className="mt-4">
              <HoursTable />
            </div>
          </div>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow">
          <iframe
            title="Kiki sur Google Maps"
            src="https://www.google.com/maps?q=12%20Place%20de%20la%20Pucelle%2C%2076000%20Rouen&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  )
}

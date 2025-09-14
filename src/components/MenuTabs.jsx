import { useState } from 'react'
import { menu } from '../data/menu'
import Badge from './Badge'

const sections = [
  ['breakfast', 'Breakfast'],
  ['lunch','Lunch'],
  ['tapas','Tapas'],
  ['cocktails','Cocktails'],
  ['mocktails','Mocktails'],
  ['softs','Softs'],
  ['desserts','Desserts'],
]

export default function MenuTabs(){
  const [active, setActive] = useState('tapas')

  const Section = ({group}) => (
    <div id={group} className="scroll-mt-32">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-extrabold text-brand">{menu[group].title}</h3>
        {menu[group].highlight && <Badge>⭐ Spécialité</Badge>}
      </div>
      <ul className="divide-y">
        {menu[group].items.map((it,i)=>(
          <li key={i} className="py-4 flex justify-between gap-6">
            <div>
              <h4 className="font-semibold">{it.name}</h4>
              {it.desc && <p className="text-sm opacity-70">{it.desc}</p>}
            </div>
            <div className="font-semibold text-brand whitespace-nowrap">{it.price}</div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex gap-2 flex-wrap sticky top-[84px] bg-white py-3 z-30">
        {sections.map(([key,label]) => (
          <button key={key}
            onClick={()=>setActive(key)}
            className={`px-4 py-2 rounded-full border ${active===key ? 'bg-brand text-white border-brand' : 'bg-white text-brand border-brand/30'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-10">
        {sections.map(([key]) => (
          <div key={key} className={`${active===key ? '' : 'md:opacity-50'} transition-opacity`}>
            <Section group={key} />
          </div>
        ))}
      </div>
    </section>
  )
}

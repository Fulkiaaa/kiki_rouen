import { reviews } from '../data/reviews'
import ReviewCard from '../components/ReviewCard'

export default function Avis(){
  return (
    <main className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-brand text-center mb-8">Avis Clients</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r,i)=>(<ReviewCard key={i} review={r} />))}
        </div>
      </div>
    </main>
  )
}

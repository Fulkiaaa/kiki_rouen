export default function ReviewCard({review}){
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">{review.author}</h4>
        <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
      </div>
      <p className="mt-2 opacity-80 text-sm">{review.source} · {review.date}</p>
      <p className="mt-4 italic">{review.content}</p>
      <p className="mt-3 text-sm opacity-70">{review.visited}</p>
    </div>
  )
}

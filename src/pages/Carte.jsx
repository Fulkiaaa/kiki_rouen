import MenuTabs from '../components/MenuTabs'

export default function Carte(){
  return (
    <main className="px-6 py-12">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold text-brand">Notre Carte</h1>
        <p className="mt-2 opacity-80">Breakfast • Lunch • Tapas • Cocktails • Mocktails • Softs • Desserts</p>
      </div>
      <MenuTabs />
    </main>
  )
}

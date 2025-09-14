import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carte from './pages/Carte'
import Avis from './pages/Avis'
import Infos from './pages/Infos'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/infos" element={<Infos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

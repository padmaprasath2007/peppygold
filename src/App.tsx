import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  )
}

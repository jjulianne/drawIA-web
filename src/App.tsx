import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
   return (
    <div className="min-h-screen flex flex-col">
      <div className="relative overflow-hidden">
        <div className="gradient-band" aria-hidden />
        
          <header className="relative"> 
            <Navbar />
          </header>
        
        <main className="relative pt-24" > 
          <Hero />
        </main>
      </div>

      <Footer />
    </div>
  )
}
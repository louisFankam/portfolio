import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Louis Dev. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
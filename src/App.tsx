import { Hero } from './components/Hero'
import { EngineeringFocus } from './components/EngineeringFocus'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { OpenSource } from './components/OpenSource'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EngineeringFocus />
        <Experience />
        <Skills />
        <OpenSource />
      </main>
      <Footer />
    </>
  )
}

export default App

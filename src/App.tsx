import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App

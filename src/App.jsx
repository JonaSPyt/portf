import './App.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/header/header'
import Main from './components/main/main'
import Section from './components/section/section'
import Habilites from './components/habilites/habilites'
import Contact from './components/contact/contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 50,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className='container-fluid g-0'>
      <Header />
      <Main />
      <Section />
      <Habilites />
      <Contact />
    </div>
  )
}

export default App

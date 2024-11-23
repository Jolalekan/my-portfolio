import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <section id="Homepage" className="Homepage">
      <Navbar/> 
       <Hero/>
    </section>
     <section >
      <Skill />
      </section>
    <section id="About">
      <About/>
      </section>
 
    <main id="Project"><Portfolio/></main>
     <section id="Contact"><Contact/></section>     

    </>
  )
}

export default App

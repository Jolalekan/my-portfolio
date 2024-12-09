import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {


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

import './App.css'
import portfolioData from './data/portfolio.json'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { personal, skills, experience, projects, education } = portfolioData

  return (
    <>
      {/* GitHub-style animated glow background */}
      <div className="bg-glow">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="glow-orb glow-orb-4"></div>
      </div>

      <div className="portfolio">
        <Navbar name={personal.name} />
        <Header personal={personal} />
        <main>
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Education education={education} />
          <Contact />
        </main>
        <Footer name={personal.name} />
      </div>
    </>
  )
}

export default App

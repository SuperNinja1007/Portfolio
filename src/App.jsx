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
  )
}

export default App

import './App.css'
import portfolioData from './data/portfolio.json'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  const { personal, skills, experience, projects, education } = portfolioData

  return (
    <div className="portfolio">
      <Header personal={personal} />
      <main>
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
      </main>
      <Footer name={personal.name} />
    </div>
  )
}

export default App

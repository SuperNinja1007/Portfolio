import './App.css'
import portfolioData from './data/portfolio.json'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { personal, services, skills, experience, projects, education, testimonials } = portfolioData

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
        <Navbar name={personal.shortName} />
        <Header personal={personal} />
        <Stats />
        <main>
          <Services services={services} />
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Education education={education} />
          <Testimonials testimonials={testimonials} />
          <Contact />
        </main>
        <Footer name={personal.shortName} />
      </div>
    </>
  )
}

export default App

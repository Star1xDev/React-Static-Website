import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills';;
import WorkExperience from './components/WorkExperience/WorkExperience';
import "./App.css";
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
      </div>
    </>
  )
}

export default App

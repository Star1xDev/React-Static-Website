import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills';;
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import "./App.css";
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

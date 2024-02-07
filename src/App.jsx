import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills';;
import "./App.css";
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
        <Skills></Skills>
      </div>
    </>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

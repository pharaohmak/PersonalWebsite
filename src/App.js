import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';



function App() {
  return (
    <div className='app'>
      
      <Header></Header>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
    

  
  );
}

export default App;

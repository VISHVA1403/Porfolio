// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
// import {Routes,Route} from 'react-router-dom'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
        
      </div>
      <div id="screens">
        
        <Home />
        <Skills/>
        <Projects/>
        
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

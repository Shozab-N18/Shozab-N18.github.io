import './App.css';
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Skills from './components/header/skills/Skills';
import Services from './components/header/services/Services';
import Project from './components/header/project/Project';
import Contact from './components/header/contact/Contact';
import ScrollUp from './components/header/scrollup/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className='main'>
        <Home/> 
        <About/>
        <Skills/>
        <Services/>
        <Project/>
        <Contact/>
        <ScrollUp/>
      </main>
    </div>
  );
}

export default App;

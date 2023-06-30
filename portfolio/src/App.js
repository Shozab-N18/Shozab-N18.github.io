import './App.css';
import Header from './components/components/header/Header';
import Home from './components/components/home/Home';
import About from './components/components/about/About';
import Skills from './components/components/skills/Skills';
import Services from './components/components/services/Services';
import Project from './components/components/project/Project';
import Contact from './components/components/contact/Contact';
import ScrollUp from './components/components/scrollup/ScrollUp';

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

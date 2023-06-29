import './App.css';
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Skills from './components/header/skills/Skills';
import Services from './components/header/services/Services';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/components/header/Header";
import Home from "./components/components/home/Home";
import About from "./components/components/about/About";
import Skills from "./components/components/skills/Skills";
// import Services from './components/components/services/Services';
import Qualification from "./components/components/qualification/Qualification";
import Project from "./components/components/project/Project";
import Contact from "./components/components/contact/Contact";
import ScrollUp from "./components/components/scrollup/ScrollUp";
import Footer from "./components/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services/> */}
        <Qualification />
        <Project />
        <Contact />
        <ScrollUp />
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;

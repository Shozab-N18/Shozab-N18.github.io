import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("show-header")
    else header.classList.remove("show-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState('#home');
  return (
    <header className='header'>
        <nav className="nav container">
          <a href="index.html" className="nav__logo">Shozab</a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" onClick={() => {setActiveNavbar('#home'); showMenu(!Toggle);}} className={activeNavbar === '#home' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" onClick={() => {setActiveNavbar('#about'); showMenu(!Toggle);}} className={activeNavbar === '#about' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" onClick={() => {setActiveNavbar('#skills'); showMenu(!Toggle);}} className={activeNavbar === '#skills' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#qualification" onClick={() => {setActiveNavbar('#qualification'); showMenu(!Toggle);}} className={activeNavbar === '#qualification' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" onClick={() => {setActiveNavbar('#portfolio'); showMenu(!Toggle);}} className={activeNavbar === '#portfolio' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" onClick={() => {setActiveNavbar('#contact'); showMenu(!Toggle);}} className={activeNavbar === '#contact' ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>

            <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
    </header>
  )
}

export default Header
import React from 'react';
import "./about.css";
import MyImage from "../../../assets/cat-pfp.jpg";
import CV from "../../../assets/Resume.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={MyImage} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a 22-year-old Computer Science Graduate from King's College London, holding a First-Class degree and driven by a strong passion for applying my academic knowledge in a practical, industry setting. My aim is to leverage the skills and insights I’ve gained through my studies to contribute to the development of impactful and innovative applications. <br />
            <br />
            Eager to accelerate my learning curve, I am committed to embracing every opportunity to bridge the gap between academia and the professional world, and to grow as a software developer by tackling real-world challenges.
          </p>

          <a href={CV} download="CV.pdf" className="button button--flex">
            Download CV
            <svg class="button__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-info-alt"><path fill="var(--container-color)" d="M15,16H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm6,2H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4.71,3.29a1,1,0,0,0-.33-.21.92.92,0,0,0-.76,0,1,1,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,.21,1.09A1,1,0,0,0,19,17a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,19.71,15.29ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9S20,9,20,8.94ZM15,8a1,1,0,0,1-1-1V5.41L16.59,8Zm4,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,19,18Z"></path></svg>
          </a>

        </div>
      </div>
    </section>
  )
}

export default About
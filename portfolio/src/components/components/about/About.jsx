import React from 'react';
import "./about.css";
import MyImage from "../../../assets/cat-pfp.jpg";
import CV from "../../../assets/Computer Science CV.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={MyImage} alt="" className="about__img" />

            <div className="about__data">
                <Info/>

                <p className="about__description">
                  I am a 20 year old university student fueled by a strong desire to gain practical experience as quickly as possible.
                  I am eager to apply the valuable skills and knowledge I have acquired throughout my studies in a industry setting to develop meaningful applications. <br/>
                  <br/>
                  My goal is to accelerate my learning curve and elevate my experience, embracing every opportunity to bridge the gap between academia and the industrial world.
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
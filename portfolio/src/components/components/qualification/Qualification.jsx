import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualifications__icon"></i>
                    Education
                </div>

                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualifications__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> React JS Development</h3>
                            <span className="qualification__subtitle">London - King's College London</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Jan 2023 - Present
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">C++/Scala Development</h3>
                            <span className="qualification__subtitle">London - King's College London</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Sept 2022 - Jan 2023
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Django Web Development</h3>
                            <span className="qualification__subtitle">London - King's College London</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Sept 2022 - Jan 2023
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Java Developer</h3>
                            <span className="qualification__subtitle">London - King's College London</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Sept 2021 - May 2022
                        </div>

                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Job Experience</h3>
                            <span className="qualification__subtitle">Company</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Timeframe
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Job Experience</h3>
                            <span className="qualification__subtitle">Company</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Timeframe
                        </div>

                    </div>

                    <div className="qualification__data">
                    <div>
                            <h3 className="qualification__title">Job Experience</h3>
                            <span className="qualification__subtitle">Company</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                            </div> Timeframe
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    <h2 className="section__title">No industrial experience just yet. Searching for job opportunities.</h2>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
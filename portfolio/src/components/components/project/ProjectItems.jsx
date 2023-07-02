import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className='project__img' />
      <h3 className='project__title'>{item.title}</h3>

      <h3 className='project__description'>{item.description}</h3>

      <span className="project__link">
        <a href={item.github} target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>

        <a href='#portfolio' className="project__button">
          Live Demo <i class="uil uil-external-link-alt"></i>
        </a>

        <a href='#portfolio' className="project__button">
          More Info <i className="bx bx-right-arrow-alt project__button-icon"></i>
        </a>
      </span>

      
    </div>
  )
}

export default ProjectItems
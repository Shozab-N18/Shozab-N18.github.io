import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className='project__img' />
      <h3 className='project__title'>{item.title}</h3>

      <h3 className='project__description'>{item.description}</h3>

      <a href='#portfolio' className="project__button">
        More Info <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </div>
  )
}

export default ProjectItems
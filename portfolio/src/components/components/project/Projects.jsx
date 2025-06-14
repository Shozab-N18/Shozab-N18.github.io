import React, { useEffect, useState } from 'react';
import { projectsNav, project_list } from './Data';
import ProjectItems from './ProjectItems';


const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(project_list);
    }

    else {
      const updated_list = project_list.filter((project) => project.category === item.name);
      setProjects(updated_list);
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  }

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((item, index) => {
          return <span
            onClick={(e) => { handleClick(e, index); }}
            className={`${active === index ? 'active-project' : ''} project__item`}
            key={index}>
            {item.name}
          </span>;
        })}
      </div>

      <div className="project__container container grid">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  )
}

export default Projects
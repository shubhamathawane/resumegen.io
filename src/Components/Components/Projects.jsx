import React from 'react'
import { Heading, HR, Projectz} from '../../Styles/RightContentStyles'


const Projects = ({data, color}) => {
  const projects = data.projects;
  const projects_link = data.projects_link;
  return (
    <Projectz>
      <Heading>Projects</Heading>
      <HR/>
      {projects.map((item, index) => (
        <ul key={index} className='row-table'>
          <div className='right-column'>
          <li>
            <span className='title'>{item.title}</span>
            {item.link && (
              <span className='link'>
                <a
                  href={item.link}
                  style={{ color: `${color.primary}` }}
                >
                  {item.link}
                </a>
              </span>
            )}
          </li>
          <p className='description'>{item.description}</p>
        </div>
        </ul>
      ))}
      {projects_link.length > 0 && (
        <li className='repo_link'>
          More projects on:
          <a
            href={projects_link}
            style={{ color: `${color.primary}` }}
          >
            {projects_link}
          </a>
        </li>
      )}
    </Projectz>
  )
}

export default Projects
import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList=({projects})=>{
  return(
    <div className='project-list section'>
        {projects && projects.map(project=>{
          return(
            <ProjectSummary project={project} key={this.id}/>
          )
        })}
    </div>
  )
}

export default ProjectList
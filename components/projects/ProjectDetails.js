import React from 'react'

const ProjectDetails=(props)=>{
  const id=props.match.params.id;
  return(
    <div className='container seaction project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title- {id}</span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Pranav Bakale</div>
          <div>4th August,5pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
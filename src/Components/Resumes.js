import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Resumes = ({data, color}) => {
  return (
    <div className='resume' id='resume'>
        <LeftContent data = {data} color={color}/>
        <RightContent data = {data} color={color}/>
        <h3>Hello world</h3>
    </div>
  )
}

export default Resumes
import React from 'react'
import Summary from './Components/Summary'

const RightContent = ({data, color}) => {
  return (
    <div className='right-content'>
        <Summary data={data} color={color}/>
        <h2>Right content</h2>
    </div>
  )
}

export default RightContent
import React from 'react'

const SquareComponent = (props) => {
    
  return (
    <span className='square' onClick={props.onClick}>{props.state}</span>
  )
}

export default SquareComponent;
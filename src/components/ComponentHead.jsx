import React from 'react'

const ComponentHead = ({heading="",title = ""}) => {
  return (
    <div className='text-center'>
        <h2>{heading}</h2>
        <p>{title}</p>
    </div>
  )
}

export default ComponentHead

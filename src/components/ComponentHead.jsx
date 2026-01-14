import React from 'react'

const ComponentHead = ({heading="",title = "" , className = ""}) => {
  return (
    <div className={`text-center ${className}`}>
        <h2>{heading}</h2>
        <p>{title}</p>
    </div>
  )
}

export default ComponentHead

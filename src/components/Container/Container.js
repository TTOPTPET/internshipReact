import React from 'react'
import "./container.sass";

function Container(props) {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default Container
import React from 'react'
import "./container.sass";

function Container(props) {
  return (
    <div className={props.createPost ? 'container container_create-post' : 'container'}>
        {props.children}
    </div>
  )
}

export default Container
import React from 'react'
import classNames from 'classnames'; 
import container from "./container.module.css";

function Container(props) {
  return (
    <div className={classNames(container.container, props.createPost && container.createPost)}>
        {props.children}
    </div>
  )
}

export default Container
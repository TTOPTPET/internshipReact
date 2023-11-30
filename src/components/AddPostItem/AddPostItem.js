import React from 'react'
import './addPostItem.sass'

function AddPostItem(props) {
  return (
    <div className="add-post__item">
        {props.children}
    </div>
  )
}

export default AddPostItem
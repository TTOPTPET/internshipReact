import React from 'react'
import addPostItem from './addPostItem.module.css'

function AddPostItem(props) {
  return (
    <div className={addPostItem.item}>
        {props.children}
    </div>
  )
}

export default AddPostItem
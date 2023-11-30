import React from 'react'
import './addPostPage.sass'
import Container from '../../components/Container/Container'
import BackButton from '../../components/BackButton/BackButton'
import Subheader from '../../components/Subheader/Subheader'
import AddPostItem from '../../components/AddPostItem/AddPostItem'
import Description from '../../components/Description/Description'
import AddPostLine from '../../components/AddPostLine/AddPostLine'
import FileUpload from '../../components/FileUpload/FileUpload'
import Colorpicker from '../../components/Colorpicker/Colorpicker'
import useStore from '../../store'
import Switch from '../../components/Switch/Switch'
import AddLink from '../../components/AddLink/AddLink'
import PostArea from '../../components/PostArea/PostArea'


function AddPostPage() {

  const newPost = useStore(({newPost}) => newPost)

  console.log(newPost);


  return (
    <>
      <div className="create-post__background"></div>

      <PostArea/>

      <Container createPost={true}>

          <BackButton/>

          <Subheader/>

          <AddPostItem>

            <Description/>

          </AddPostItem>

          <AddPostLine/>

          <AddPostItem>

            <FileUpload/>

          </AddPostItem>

          <AddPostLine/>

          <AddPostItem>

            <Colorpicker color={newPost.color}/>

          </AddPostItem>

          <AddPostLine/>

          <AddPostItem>

            <Switch/>

          </AddPostItem>

          <AddPostLine/>

          <AddPostItem>

            <AddLink newPost={newPost}/>

          </AddPostItem>
      </Container>
    </>
  )
}

export default AddPostPage
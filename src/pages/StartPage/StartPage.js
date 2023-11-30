import React from 'react'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import PostList from '../../components/PostsList/PostList'

function StartPage() {
  return (
    <>
        <Header/>
        <Container>
            <PostList/>
        </Container>
    </>
  )
}

export default StartPage
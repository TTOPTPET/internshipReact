import React, { useEffect } from 'react'
import style from './postList.module.css'

import useStore from '../../store'
import PostItem from '../PostItem/PostItem'

useStore.getState().fetchPosts()

function PostList() {

    const posts = useStore(({posts}) => posts)
    

    const elements = posts.map(post => {
        return <PostItem post={post} key={post.id}/>
    })

    return (
        <div className={style.postList}>
        
            <div className={style.titles}>

                <div className={style.title}>Пост</div>
                <div className={style.title}>Опубликовано</div>
                <div className={style.title}>Ссылка</div>

            </div>

            <>
                {elements}
            </>

        </div>
    )
}

export default PostList
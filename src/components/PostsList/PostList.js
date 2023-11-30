import React, { useEffect } from 'react'
import './postList.sass'

import useStore from '../../store'
import PostItem from '../PostItem/PostItem'

useStore.getState().fetchPosts()

function PostList() {

    const posts = useStore(({posts}) => posts)
    

    const elements = posts.map(post => {
        return <PostItem post={post} key={post.id}/>
    })

    return (
        <div className='postList'>
        
            <div className="postList__titles">

                <div class="postList__title">Пост</div>
                <div class="postList__title">Опубликовано</div>
                <div class="postList__title">Ссылка</div>

            </div>

            <div className="postList_posts">
                {elements}
            </div>

        </div>
    )
}

export default PostList
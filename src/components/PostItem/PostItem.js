import React, { useCallback, useState } from 'react'
import './postItem.sass'
import linkIcon from "../../assets/icons/link.svg"
import moreIcon from "../../assets/icons/more.svg"
import noPhoto from '../../assets/images/noPhoto.png'

import useStore from '../../store'

function PostItem({post}) {

    const {id, image, posted, title, link, linkTitle, author, date} = post

    const [dropdownActive, setDropdownActive] = useState(false)

    const onDelete = (id) => {
        useStore.getState().deletePost(id)  
        setDropdownActive(false)
    };

    const onPublished = (post) => {
        useStore.getState().publishPost(post) 
        setDropdownActive(false)
    }

  return (
    <div className='postItem'>
        <div className="postItem__post">
            <div className="postItem__post__image-wrapper">
                <img src={image ? image : noPhoto} alt="onion" className="postItem__post__image"></img>
            </div>
            <div className="postItem__description">
                <div className="postItem__description__title">{title}</div>
                <a href={link ? link : "#"} className="postItem__description__subtitle">{linkTitle}</a>
            </div>
        </div>

        <div className="postItem__published">
            <div className="postItem__published__wrapper">
                <div className={useStore.getState().loading ? "postItem__published__status-icon postItem__published__status-icon_loading" : posted ? "postItem__published__status-icon" : "postItem__published__status-icon postItem__published__status-icon_notpublished"}>
                    <span className="tooltip">{useStore.getState().loading ? "Загружается" : posted ? "Опубликовано" : "Неопубликовано"}</span>
                </div>
                <div className="postItem__description">
                    <div className="postItem__description__title">{author}</div>
                    <div className="postItem__description__subtitle">{date}</div>
                </div>
            </div>
        </div>

        <div className="postItem__link">
            <div className="postItem__link__wrapper">
                <div className="postItem__link__icon">
                    <img src={linkIcon}></img>
                </div>
                <div className={dropdownActive ? "postItem__link__icon postItem__link__icon_active" : "postItem__link__icon"} onClick={() => setDropdownActive(!dropdownActive)}>
                    <img src={moreIcon} className={dropdownActive ? "postItem__link__icon_more postItem__link__icon_more_active" : "postItem__link__icon_more"}></img>
                </div>
            </div>
            <div className={dropdownActive ? "dropdown dropdown_active" : "dropdown"}>
                <button disabled={posted ? true : false} className="dropdown__item" onClick={() => onPublished(post)}>Опубликовать</button>
                <button className="dropdown__item" onClick={() => onDelete(id)}>Удалить</button>
            </div>
        </div>
    </div>
  )
}

export default PostItem
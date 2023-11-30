import React, { useCallback, useState } from 'react'
import './postItem.sass'
import linkIcon from "../../assets/icons/link.svg"
import moreIcon from "../../assets/icons/more.svg"

import useStore from '../../store'

function PostItem({post}) {

    const {id, image, posted, title, subtitle, descr_title, descr_subtitle} = post

    console.log(posted);

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
        <div class="postItem__post">
            <div class="postItem__post__image-wrapper">
                <img src={image} alt="onion" class="postItem__post__image"></img>
            </div>
            <div class="postItem__description">
                <div class="postItem__description__title">{title}</div>
                <div class="postItem__description__subtitle">{subtitle}</div>
            </div>
        </div>

        <div class="postItem__published">
            <div class="postItem__published__wrapper">
                <div class={useStore.getState().loading ? "postItem__published__status-icon postItem__published__status-icon_loading" : posted ? "postItem__published__status-icon" : "postItem__published__status-icon postItem__published__status-icon_notpublished"}>
                    <span class="tooltip">{useStore.getState().loading ? "Загружается" : posted ? "Опубликовано" : "Неопубликовано"}</span>
                </div>
                <div class="postItem__description">
                    <div class="postItem__description__title">{descr_title}</div>
                    <div class="postItem__description__subtitle">{descr_subtitle}</div>
                </div>
            </div>
        </div>

        <div class="postItem__link">
            <div class="postItem__link__wrapper">
                <div className="postItem__link__icon">
                    <img src={linkIcon}></img>
                </div>
                <div className={dropdownActive ? "postItem__link__icon postItem__link__icon_active" : "postItem__link__icon"} onClick={() => setDropdownActive(!dropdownActive)}>
                    <img src={moreIcon} class={dropdownActive ? "postItem__link__icon_more postItem__link__icon_more_active" : "postItem__link__icon_more"}></img>
                </div>
            </div>
            <div class={dropdownActive ? "dropdown dropdown_active" : "dropdown"}>
                <button disabled={posted ? true : false} class="dropdown__item" onClick={() => onPublished(post)}>Опубликовать</button>
                <button class="dropdown__item" onClick={() => onDelete(id)}>Удалить</button>
            </div>
        </div>
    </div>
  )
}

export default PostItem
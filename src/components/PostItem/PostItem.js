import React, { useCallback, useState } from 'react'
import style from './postItem.module.css'
import linkIcon from "../../assets/icons/link.svg"
import moreIcon from "../../assets/icons/more.svg"
import noPhoto from '../../assets/images/noPhoto.png'

import classNames from 'classnames'

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
    <div className={style.postItem}>
        <div className={style.post}>
            <div className={style.imageWrapper}>
                <img src={image ? image : noPhoto} alt="onion" className={style.image}></img>
            </div>
            <div className={style.description}>
                <div className={style.title}>{title}</div>
                <a href={link ? link : "#"} className={style.subtitle}>{linkTitle}</a>
            </div>
        </div>

        <div className={style.published}>
            <div className={style.publishedWrapper}>
                <div className={classNames(style.statusIcon, !posted && style.notpublished, useStore.getState().loading && style.loading)}>
                    <span className={style.tooltip}>{useStore.getState().loading ? "Загружается" : posted ? "Опубликовано" : "Неопубликовано"}</span>
                </div>
                <div className={style.description}>
                    <div className={style.title}>{author}</div>
                    <div className={style.subtitle}>{date}</div>
                </div>
            </div>
        </div>

        <div className={style.link}>
            <div className={style.linkWrapper}>
                <div className={style.icon}>
                    <img src={linkIcon}></img>
                </div>
                <div className={classNames(style.icon, style.more, dropdownActive && style.iconActive)} onClick={() => setDropdownActive(!dropdownActive)}>
                    <img src={moreIcon}></img>
                </div>
            </div>
            <div className={classNames(style.dropdown, dropdownActive && style.dropdownActive)}>
                <button disabled={posted ? true : false} className={style.dropdownButton} onClick={() => onPublished(post)}>Опубликовать</button>
                <button className={style.dropdownButton} onClick={() => onDelete(id)}>Удалить</button>
            </div>
        </div>
    </div>
  )
}

export default PostItem
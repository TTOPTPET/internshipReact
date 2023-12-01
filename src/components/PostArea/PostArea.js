import React from 'react'
import './postArea.sass'
import batteryIcon from '../../assets/icons/battery.svg'
import wifiIcon from '../../assets/icons/wifi.svg'
import noImage from '../../assets/icons/noImage.svg'
import onion from '../../assets/images/onion.png'

function PostArea(props) {

    const {theme, image, title, color, description} = props.newPost

  return (
    <div className="post-area">
        <div className="post-area__post" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${color} 22.4%, ${color} 100%), url(${onion})`, backgroundSize: "100% 365px, contain"}}>
        {!color && <img src={noImage} alt="camera" className='post-area__post__no-image'/>}
            <div className="post-area__post__header">
                <div className={theme === "dark" ? "post-area__post__header__time post-area__post__header__time_dark" : "post-area__post__header__time"}>22:47</div>
                <div className={theme === 'dark' ? "post-area__post__header__icons post-area__post__header__icons_dark" : "post-area__post__header__icons"}>
                    <img src={wifiIcon} alt="wifi" className="post-area__post__header__icons_wifi"/>
                    <img src={batteryIcon} alt="battery" className="post-area__post__header__icons_battery"/>
                </div>
            </div>
            <div className={theme === "dark" ? "post-area__post__text post-area__post__text_dark" : "post-area__post__text"}>
                <div className="post-area__post__text__title">{title ? title : "Название"}</div>
                <div className="post-area__post__text__descr">{description ? description : "Описание"}</div>
            </div>
        </div>
    </div>
  )
}

export default PostArea
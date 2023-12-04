import React from 'react'
import style from './postArea.module.css'
import batteryIcon from '../../assets/icons/battery.svg'
import wifiIcon from '../../assets/icons/wifi.svg'
import noImage from '../../assets/icons/noImage.svg'
import onion from '../../assets/images/onion.png'

import useStore from '../../store'

import classNames from 'classnames'

function PostArea(props) {

    const {theme, title, color, description} = props.newPost

    const file = useStore((state) => state.file)

  return (
    <div className={style.postArea}>
        <div className={style.post}>
        {!file ? <img src={noImage} alt="camera" className={style.noImage}/> :  <img src={onion} alt="camera" className={style.image}/>}
            <div className={style.header}>
                <div className={classNames(style.time, theme === "dark" && style.dark)}>22:47</div>
                <div className={classNames(style.icons, theme === "dark" && style.darkIcons)}>
                    <img src={wifiIcon} alt="wifi" className={style.wifi}/>
                    <img src={batteryIcon} alt="battery"/>
                </div>
            </div>
            <div className={style.text} style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${color} 22.4%, ${color} 100%)`, backgroundSize: "100% 100%, contain"}}>
                <div className={classNames(style.title, theme === "dark" && style.dark)}>{title}</div>
                <div className={classNames(style.descr, theme === "dark" && style.dark)}>{description}</div>
            </div>
        </div>
    </div>
  )
}

export default PostArea
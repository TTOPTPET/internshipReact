import React from 'react'
import './postArea.sass'
import batteryIcon from '../../assets/icons/battery.svg'
import wifiIcon from '../../assets/icons/wifi.svg'

function PostArea() {
  return (
    <div className="post-area">
        <div className="post-area__post">
            <div className="post-area__post__header">
                <div className="post-area__post__header__time">22:47</div>
                <div className="post-area__post__header__icons">
                    <img src={wifiIcon} alt="wifi" className="post-area__post__header__icons_wifi"></img>
                    <img src={batteryIcon} alt="battery" className="post-area__post__header__icons_battery"></img>
                </div>
            </div>
            <div className="post-area__post__text">
                <div className="post-area__post__text__title">Onion</div>
                <div className="post-area__post__text__descr">The useful properties of onions are versatile. It is a powerful antimicrobial that effectively fights internal and external infection. Onions have antiviral, antibacterial, anthelmintic, antifungal, disinfectant properties. In case of colds, it is not only consumed internally, but also left indoors in cut form to disinfect the air. </div>
            </div>
        </div>
    </div>
  )
}

export default PostArea
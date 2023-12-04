import React from 'react'
import classNames from 'classnames'
import style from './subheader.module.css'
import text from '../../style/text.module.css'

function Subheader() {
  return (
    <div className={style.subheader}>
            
        <div className={classNames(text.title, text.subheader)}>Создайте подборку</div>
        <div className={text.subtitle}>Перед началом ознакомьтесь с <a href="#" className={style.link}>гайдлайнами</a>, где<br></br> вы найдете примеры правильного оформления</div>
    
    </div>
  )
}

export default Subheader
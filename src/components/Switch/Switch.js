import React, { useState } from 'react'
import style from './switch.module.css'
import useStore from '../../store'
import classNames from 'classnames'
import text from '../../style/text.module.css'

function Switch() {

    const onDataChange = useStore(({onDataChange}) => onDataChange)

    const [switchOn, setSwitchOn] = useState(false)

    const onSwitchChange = () => {
        setSwitchOn(!switchOn);
        onDataChange({theme: switchOn ? "dark" : "light"})
    }
    

  return (
    <>

        <div className={text.text}>

            <div className={text.title}>Проверьте читабельность</div>
            <div className={text.subtitle}>Выберите цвет интерфейса, который будет контрастнее смотреться на выбранном ранее фоне</div>
        
        </div>

        <div className={style.wrapper}>
    
            <div className={classNames(style.text, !switchOn && style.textActive)}>Темный</div>

            <div onClick={() => onSwitchChange()} className={classNames(style.button, switchOn && style.buttonOn)}></div>

            <div className={classNames(style.text, switchOn && style.textActive)}>Светлый</div>

        </div>

    </>
  )
}

export default Switch
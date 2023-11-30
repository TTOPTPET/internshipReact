import React, { useState } from 'react'
import './switch.sass'
import useStore from '../../store'

function Switch() {

    const onThemeChange = useStore(({onThemeChange}) => onThemeChange)

    const [switchOn, setSwitchOn] = useState(false)

    const onSwitchChange = () => {
        setSwitchOn(!switchOn);
        onThemeChange(switchOn ? "dark" : "light")
    }
    

  return (
    <div className="switch">

        <div className="text">

            <div className="text__title">Проверьте читабельность</div>
            <div className="text__subtitle">Выберите цвет интерфейса, который будет контрастнее смотреться на выбранном ранее фоне</div>
        
        </div>

        <div className="switch__wrapper">
    
            <div className={`switch__text ${!switchOn && "switch__text_active"}`}>Темный</div>

            <div onClick={() => onSwitchChange()} className={switchOn ? "switch__button switch__button_on" : "switch__button"}></div>

            <div className={`switch__text ${switchOn && "switch__text_active"}`}>Светлый</div>

        </div>

    </div>
  )
}

export default Switch
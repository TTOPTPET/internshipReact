import React, { useState } from 'react'
import style from './colorpicker.module.css'
import withoutColor from '../../assets/icons/withoutColor.svg'
import useStore from '../../store'

import classNames from 'classnames'
import text from '../../style/text.module.css'

function Colorpicker(props) {

    const onDataChange = useStore(({onDataChange}) => onDataChange)
  
    const [focus, setFocus] = useState(false)

    const {color} = props
  
  return (
    <>

        <div className={text.text}>

            <div className={text.title}>Выберите цвет</div>
            <div className={text.subtitle}>Лучше всего подойдет цвет преобладающий на обложке</div>
        
        </div>

        <form className={classNames(style.wrapper, focus && style.active)}>
            <input type="color" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={(e) => onDataChange({color: (e.target.value).toUpperCase()})} className={classNames(style.input, !color && style.noColor)}></input>
            {!color && <img src={withoutColor} alt="png" className={style.image} onClick={(e) => click(e)}/>}
            <span className={style.tooltip}>{color ? color : "Выберите цвет"}</span>
        </form>

    </>
  )
}

export default Colorpicker
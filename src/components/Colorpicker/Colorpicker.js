import React from 'react'
import './colorpicker.sass'
import withoutColor from '../../assets/icons/withoutColor.svg'
import useStore from '../../store'

function Colorpicker(props) {

    const onColorChange = useStore(({onColorChange}) => onColorChange)
  
    const {color} = props
  
  return (
    <div className="colorpicker">

        <div className="text">

            <div className="text__title">Выберите цвет</div>
            <div className="text__subtitle">Лучше всего подойдет цвет преобладающий на обложке</div>
        
        </div>

        <div className="colorpicker__wrapper">
            <input type="color" onChange={(e) => onColorChange(e.target.value)} className="colorpicker__input"></input>
            {/* {!color && <img src={withoutColor} alt="png" className="colorpicker__img"></img>} */}
            <span className="colorpicker__tooltip">{color ? color : "Выберите цвет"}</span>
        </div>

    </div>
  )
}

export default Colorpicker
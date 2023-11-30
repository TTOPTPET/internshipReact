import React from 'react'
import './description.sass'
import useStore from '../../store'

function Description() {

    const onTitleChange = useStore(({onTitleChange}) => onTitleChange)
    const onAuthorChange = useStore(({onAuthorChange}) => onAuthorChange)

  return (
    <div className="descr">

        <div className="text">

            <div className="text__title">Расскажите о подборке</div>
            <div className="text__subtitle">Желательно сделать это кратко и ёмко</div>
        
        </div>

        <form action="#" className="form">
            <div className="form__text-input">
                <input type="text" className="form__input" placeholder="Дискриптор" onChange={(e) => onAuthorChange(e.target.value)}></input>
                <span className="input__text" aria-hidden="true">30</span>
            </div>

            <div className="form__text-input">
                <input type="text" className="form__input form__input_error" placeholder="Название" onChange={(e) => onTitleChange(e.target.value)}></input>
                <div className="form__input__error-msg">Название превышает 50 знаков</div>
                <span className="input__text" aria-hidden="true">50</span>
            </div>
            
            <textarea className="form__input form__input_textarea" placeholder="Описание"></textarea>

        </form>

    </div>
  )
}

export default Description
import React from 'react'
import './description.sass'
import useStore from '../../store'

function Description({newPost}) {

    const onDataChange = useStore(({onDataChange}) => onDataChange)

    const {title, discriptor} = newPost

  return (
    <div className="descr">

        <div className="text">

            <div className="text__title">Расскажите о подборке</div>
            <div className="text__subtitle">Желательно сделать это кратко и ёмко</div>
        
        </div>

        <form action="#" className="form">
            <div className="form__text-input">
                <input type="text" className={discriptor?.length > 30 ? "form__input form__input_error" : "form__input"} placeholder="Дискриптор" onChange={(e) => onDataChange({discriptor: e.target.value})}/>
                {discriptor?.length > 30 && <div className="form__input__error-msg">Дискриптор превышает 30 знаков</div>}
                <span className="input__text" aria-hidden="true">30</span>
            </div>

            <div className="form__text-input">
                <input type="text" className={title?.length > 50 ? "form__input form__input_error" : "form__input"} placeholder="Название" onChange={(e) => onDataChange({title: e.target.value})}/>
                {title?.length > 50 && <div className="form__input__error-msg">Название превышает 50 знаков</div>}
                <span className="input__text" aria-hidden="true">50</span>
            </div>
            
            <textarea className="form__input form__input_textarea" placeholder="Описание" onChange={(e) => onDataChange({description: e.target.value})}></textarea>

        </form>

    </div>
  )
}

export default Description
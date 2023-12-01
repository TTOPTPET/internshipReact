import React from 'react'
import './addLink.sass'
import linkIcon from '../../assets/icons/link.svg'
import useStore from '../../store'
import { useNavigate } from 'react-router-dom';

function AddLink({newPost}) {

    const {link, linkTitle} = newPost

    const navigate = useNavigate();

    const onDataChange = useStore(({onDataChange}) => onDataChange)

    const inputError = useStore.getState().inputError

    const onSubmit = (newPost) => {
        useStore.getState().addPost(newPost) 
        navigate("/")
    }
  return (
    <div className="add-link">

        <div className="text">

            <div className="text__title">Оставьте ссылку</div>
            <div className="text__subtitle">Лучше всего ссылаться на каталог вашего магазина или промо-страницу</div>
        
        </div>

        <form action="#" className="form">

            <div className="form__text-input">
                <input type="text" className={linkTitle?.length > 30 ? "form__input form__input_error" : "form__input"} placeholder="Название" onChange={(e) => onDataChange({linkTitle: e.target.value})}></input>
                {linkTitle?.length > 30 && <div className="form__input__error-msg">Название ссылки превышает 30 знаков</div>}
                <span className="input__text" aria-hidden="true">30</span>
            </div>

            <div className="form__text-input form__icon-input">

                <img src={linkIcon} className="input__icon"></img>
                <input type="url" className={link?.length > 50 ? "form__input form__input_error" : "form__input"} placeholder="Ссылка" onChange={(e) => onDataChange({link: e.target.value})}></input>
                {link?.length > 50 && <div className="form__input__error-msg">Ссылка превышает 50 знаков</div>}
                <span className="input__text" aria-hidden="true">50</span>
            </div>

        </form>

        <div className="add-link__footer">

            <button className="add-link__footer__button" onClick={() => onSubmit(newPost)} disabled={inputError ? true : false}>Создать</button>
            <div className="add-link__footer__text">Подборка не будет опубликована. Вы сможете добавить  продукты и внести правки</div>

        </div>

    </div>
  )
}

export default AddLink
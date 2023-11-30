import React from 'react'
import './addLink.sass'
import linkIcon from '../../assets/icons/link.svg'
import useStore from '../../store'
import { useNavigate } from 'react-router-dom';

function AddLink(props) {

    const {newPost} = props

    console.log(newPost);

    const navigate = useNavigate();

    const onLinkChange = useStore(({onLinkChange}) => onLinkChange)

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
                <input type="text" className="form__input" placeholder="Название" onChange={(e) => onLinkChange(e.target.value)}></input>
                <span className="input__text" aria-hidden="true">30</span>
            </div>

            <div className="form__text-input form__icon-input">

                <img src={linkIcon} className="input__icon"></img>
                <input type="url" className="form__input" placeholder="Ссылка"></input>
                <span className="input__text" aria-hidden="true">50</span>
            </div>

        </form>

        <div className="add-link__footer">

            <button className="add-link__footer__button" onClick={() => onSubmit(newPost)}>Создать</button>
            <div className="add-link__footer__text">Подборка не будет опубликована. Вы сможете добавить  продукты и внести правки</div>

        </div>

    </div>
  )
}

export default AddLink
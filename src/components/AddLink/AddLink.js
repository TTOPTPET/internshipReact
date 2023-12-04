import React from 'react'
import style from './addLink.module.css'
import linkIcon from '../../assets/icons/link.svg'
import useStore from '../../store'
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames'
import text from '../../style/text.module.css'
import form from '../../style/form.module.css'

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
    <>

        <div className={text.text}>

            <div className={text.title}>Оставьте ссылку</div>
            <div className={text.subtitle}>Лучше всего ссылаться на каталог вашего магазина или промо-страницу</div>
        
        </div>

        <form action="#" className={form.form}>

            <div className={form.textInput}>
                <input type="text" className={classNames(form.input, linkTitle?.length > 30 && form.inputError)} placeholder="Название" onChange={(e) => onDataChange({linkTitle: e.target.value})}></input>
                {linkTitle?.length > 30 && <div className={form.errorMessage}>Название ссылки превышает 30 знаков</div>}
                <span className={form.inputText} aria-hidden="true">30</span>
            </div>

            <div className={classNames(form.textInput, form.iconInput)}>

                <img src={linkIcon} className={form.inputIcon}></img>
                <input type="url" className={classNames(form.input, linkTitle?.length > 50 && form.inputError)} placeholder="Ссылка" onChange={(e) => onDataChange({link: e.target.value})}></input>
                {link?.length > 50 && <div className={form.errorMessage}>Ссылка превышает 50 знаков</div>}
                <span className={form.inputText} aria-hidden="true">50</span>
            </div>

        </form>

        <div className={style.footer}>

            <button className={style.button} onClick={() => onSubmit(newPost)} disabled={inputError ? true : false}>Создать</button>
            <div className={style.text}>Подборка не будет опубликована. Вы сможете добавить  продукты и внести правки</div>

        </div>

    </>
  )
}

export default AddLink
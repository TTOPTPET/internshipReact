import React from 'react'
import description from './description.module.css'
import useStore from '../../store'

import classNames from 'classnames'
import text from '../../style/text.module.css'
import form from '../../style/form.module.css'

function Description({newPost}) {

    const onDataChange = useStore(({onDataChange}) => onDataChange)

    const {title, discriptor} = newPost

  return (
    <div className={description.descr}>

        <div className={text.text}>

            <div className={text.title}>Расскажите о подборке</div>
            <div className={text.subtitle}>Желательно сделать это кратко и ёмко</div>
        
        </div>

        <form action="#" className={form.form}>
            <div className={form.textInput}>
                <input type="text" className={classNames(form.input, discriptor?.length > 30 && form.inputError)} placeholder="Дискриптор" onChange={(e) => onDataChange({discriptor: e.target.value})}/>
                {discriptor?.length > 30 && <div className={form.errorMessage}>Дискриптор превышает 30 знаков</div>}
                <span className={form.inputText} aria-hidden="true">30</span>
            </div>

            <div className={form.textInput}>
                <input type="text" className={classNames(form.input, title?.length > 50 && form.inputError)} placeholder="Название" onChange={(e) => onDataChange({title: e.target.value})}/>
                {title?.length > 50 && <div className={form.errorMessage}>Название превышает 50 знаков</div>}
                <span className={form.inputText} aria-hidden="true">50</span>
            </div>
            
            <textarea className={classNames(form.input, form.textarea)} placeholder="Описание" onChange={(e) => onDataChange({description: e.target.value})}></textarea>

        </form>

    </div>
  )
}

export default Description
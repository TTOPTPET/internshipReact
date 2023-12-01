import React, { useState } from 'react'
import './fileUpload.sass'
import FileIcon from '../../assets/icons/File.svg'

function FileUpload() {


    const [file, setFile] = useState()
    // console.log(file);
  return (
    
    <div className="file-upload">
        <div className="text__title">Загрузите обложку</div>

        <div className="file-upload__form">

            <div className="file-input">
                <img src={FileIcon} alt="file" className="file-input__icon"></img>
                <div className="file-input__text-wrapper">
                    <span className="file-input__title">Перетащите файл или <span className="file-input__title file-input__title_blue">загрузите с компьютера</span></span>
                    <span className="file-input__subtitle">Соотношение 1:1. Минимальный размер 1242х1242 px</span>
                </div>
                <input className="file-input__input" type="file" multiple onChange={(e) => {setFile(e.target.files[0])}}></input>
            </div>
            
            {/* <div className="file-input file-input_active">
                <img src="../assets/icons/File.svg" alt="file" className="file-input__icon">
                <div className="file-input__text-wrapper">
                    <span className="file-input__title">Перетащите файл или <span className="file-input__title file-input__title_blue">загрузите с компьютера</span></span>
                    <span className="file-input__subtitle">Соотношение 1:1. Минимальный размер 1242х1242 px</span>
                </div>
                <input className="file-input__input" type="file" multiple>
            </div>

            <div className="file-input file-input_error">
                <img src="../assets/icons/File.svg" alt="file" className="file-input__icon">
                <div className="file-input__text-wrapper">
                    <span className="file-input__title">Перетащите файл или <span className="file-input__title file-input__title_blue">загрузите с компьютера</span></span>
                    <span className="file-input__subtitle">Соотношение 1:1. Минимальный размер 1242х1242 px</span>
                </div>
                <input className="file-input__input" type="file" multiple>
            </div>
            <div className="file-input__error-msg">Слишком маленький размер изображения</div>
            

            <div className="file-input file-input_loading">
                <div className="file-input__image-wrapper">
                    <div className="file-input__layout"></div>
                    <img src="../assets/images/onion.png" alt="userImage" className="file-input__image">
                </div>
                <div className="file-input__text-wrapper">
                    <span className="file-input__title">Onion</span>
                    <span className="file-input__subtitle">Размер: 1300х1300 px</span>
                </div>
                <input className="file-input__input" type="file" multiple>
                <img src="../assets/icons/close.svg" alt="close" className="file-input__cancel">
                <progress max="100" value="30" className="file-input__progress"></progress>
            </div>

            <div className="file-input file-input_file">
                <div className="file-input__image-wrapper">
                    <div className="file-input__layout"></div>
                    <img src="../assets/images/onion.png" alt="userImage" className="file-input__image">
                </div>
                <div className="file-input__text-wrapper">
                    <span className="file-input__title">Onion</span>
                    <span className="file-input__subtitle">Размер: 1300х1300 px</span>
                </div>
                <input className="file-input__input" type="file" multiple>
                <img src="../assets/icons/close.svg" alt="close" className="file-input__cancel">
            </div> */}

        </div>
    </div>

  )
}

export default FileUpload
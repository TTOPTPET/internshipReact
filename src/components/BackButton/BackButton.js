import React from 'react'
import back from './backButton.module.css'
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import useStore from '../../store';

function BackButton() {
    const navigate = useNavigate();

    const onButtonClicked = () => {
        useStore.getState().clearNewPostData()
        navigate("/")
    }

    return (
        <div className={back.button} onClick={() => onButtonClicked()}>
            <a className={back.link}>
                <img src={ArrowLeft} alt="arrow"></img>
                <div className={back.text}>Вернуться к списку</div>
            </a>
        </div>
    )
}

export default BackButton
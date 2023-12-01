import React from 'react'
import './backButton.sass'
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
        <div className="back-button" onClick={() => onButtonClicked()}>
            <a className="back-button__link">
                <img src={ArrowLeft} alt="arrow" className="back-button__icon"></img>
                <div className="back-button__text">Вернуться к списку</div>
            </a>
        </div>
    )
}

export default BackButton
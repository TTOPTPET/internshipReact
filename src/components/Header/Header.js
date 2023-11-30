import React from 'react'
import './header.sass';
import Container from '../Container/Container';
import { useNavigate } from 'react-router-dom';
import addCircle from "../../assets/icons/add-circle-outline.svg"
import Tabs from '../Tabs/Tabs';


function Header() {
    const navigate = useNavigate();

    return (
    <div className="header">

        <Container>
            <div className="header__wrapper">

            <div className="header__text">
                <div className="header__title">Социальные сети</div>
                <div className="header__subtitle">Делитесь постами из соцсетей</div>
            </div>

            <a onClick={() => navigate("/addpost")} className="header__button">
                <img className="header__button__icon" alt="button icon" src={addCircle}></img>
                Добавить
            </a>

            </div>

            <Tabs/>
        </Container>  
        
    </div>
  )
}

export default Header
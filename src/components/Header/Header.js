import React from 'react'
import './header.sass';
import Container from '../Container/Container';
import { useNavigate } from 'react-router-dom';
import addCircle from "../../assets/icons/add-circle-outline.svg"
import Tabs from '../Tabs/Tabs';


function Header() {
    const navigate = useNavigate();

    return (
    <div class="header">

        <Container>
            <div class="header__wrapper">

            <div class="header__text">
                <div class="header__title">Социальные сети</div>
                <div class="header__subtitle">Делитесь постами из соцсетей</div>
            </div>

            <a onClick={() => navigate("/addpost")} class="header__button">
                <img class="header__button__icon" alt="button icon" src={addCircle}></img>
                Добавить
            </a>

            </div>

            <Tabs/>
        </Container>  
        
    </div>
  )
}

export default Header
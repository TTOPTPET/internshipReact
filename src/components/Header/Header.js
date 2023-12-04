import React from 'react'
import header from './header.module.css';
import Container from '../Container/Container';
import { useNavigate } from 'react-router-dom';
import addCircle from "../../assets/icons/add-circle-outline.svg"
import Tabs from '../Tabs/Tabs';


function Header() {
    const navigate = useNavigate();

    return (
    <div className={header.header}>

        <Container>
            <div className={header.wrapper}>

            <div className={header.text}>
                <div className={header.title}>Социальные сети</div>
                <div className={header.subtitle}>Делитесь постами из соцсетей</div>
            </div>

            <button onClick={() => navigate("/addpost")} className={header.button}>
                <img alt="button icon" src={addCircle}></img>
                Добавить
            </button>

            </div>

            <Tabs/>
        </Container>  
        
    </div>
  )
}

export default Header
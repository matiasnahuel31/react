import React from "react";
import logo from '../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}>Elijo creer - Qatar 2022</h1>
            <nav className='ordenar' style={styles.navStyle}>
                <NavLink style={styles.navStyle} to = '/'>Inicio</NavLink>
                <NavLink style={styles.navStyle} to = '/partidos/argentina'>Partidos Argentina</NavLink>
                <NavLink style={styles.navStyle} to = '/partidos/otros'>Partidos Otros</NavLink>
                <NavLink style={styles.navStyle} to = '/cart'><CartWidget/></NavLink>
            </nav>
        </header>
    )
}
export default NavBar

const styles = {
   
    navStyle:{
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'estedad',
    
    },
    
    Tittle:{
        
        fontSize: '40',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'estedad',
    
    },

    imagen:{
        display: 'block',
        margin: 'auto',
        width: '20%',
    },

    
}
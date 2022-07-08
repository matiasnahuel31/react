import React from "react";
import logo from './assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
            {/* <ShoppingCartIcon/> */}
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}>Elijo creer - Qatar 2022</h1>
            <nav style={styles.navStyle}>
                <NavLink style={styles.navStyle} to = '/'>Inicio</NavLink>
                <NavLink style={styles.navStyle} to = '/partidos/argentina'>Partidos Argentina</NavLink>
                <NavLink style={styles.navStyle} to = '/partidos/otros'>Partidos Otros</NavLink>
                <CartWidget/>
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
    
    },
    
    Tittle:{
        
        fontSize: '40',
        color: 'white',
        textAlign: 'center',
    
    },

    imagen:{
        display: 'block',
        margin: 'auto',
        width: '20%',
        

    },

    
}
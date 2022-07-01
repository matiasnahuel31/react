import React from "react";
import logo from './assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
    return (
        <header>
            {/* <ShoppingCartIcon/> */}
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}>Elijo creer - Qatar 2022</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="simulador">Simulador</a>
                <a style={styles.navStyle}href="datos">Datos</a>
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
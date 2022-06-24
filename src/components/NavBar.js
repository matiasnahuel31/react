import React from "react";
import logo from './assets/logo.png';
import ItemListContainer from '../containers/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
    const comprar = () => console.log ('seguir comprando')
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
            <ItemListContainer  numeroTelefono= '1128054858' comprarEntrada={comprar}/>

            
        </header>
    )
}
export default NavBar

const styles = {
   
    navStyle:{
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    
    },
    
    Tittle:{
        
        fontSize: '40',
        textAlign: 'center',
    
    },

    imagen:{
        display: 'block',
        margin: 'auto',
        width: '20%',

    },
    Cart:{
        
        width: '20%',
        heigth: '100',

    },

    
}
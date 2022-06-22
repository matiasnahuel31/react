import React from "react"
import logo from '../components/logo.png'


const NavBar = () => {

    return (
        <>
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}>Elijo creer - Qatar 2022</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="simulador">Simulador</a>
                <a style={styles.navStyle}href="datos">Datos</a>
            </nav>
            
        </>
    )
}
export default NavBar

const styles = {
   
    navStyle:{
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    
    },
    
    Tittle:{
        
        fontSize: '40px',
        textAlign: 'center',
    
    },

    imagen:{
        display: 'block',
        margin: 'auto',
        width: '20%',

    },
    
}
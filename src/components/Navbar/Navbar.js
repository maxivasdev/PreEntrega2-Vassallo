import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Avatar from '../Avatar/Avatar'
import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'rgb(71, 179, 170)' }}>
            <div className='NavBar'>
                <h1>Super MANLUPI</h1>
                <Link to='/'>
                <CartWidget /><br></br>
                </Link>
            </div>
            <div>
                <Link to='/' className="btn btn-dark">
                Página Inicio
                </Link><br></br>
                <Link to='/nosotros' className="btn btn-dark">
                Nosotros
                </Link><br></br>
                <Link to='/contacto' className="btn btn-dark">
                Contacto
                </Link><br></br>
                
            </div><br></br>
            <div>
                <Avatar /><br></br>
            </div>
        </nav>
    )
}

export default Navbar

/* display: 'flex', justifyContent: 'space-around' */
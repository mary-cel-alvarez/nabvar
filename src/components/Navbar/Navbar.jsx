import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

/* const Navbar = () => {
    return (
        <nav className="NavBar">
            <Link class="NavBar" to="/">
                <h3>Deco Home</h3>
            </Link>
            <div className='Categorias'>
                <NavLink class= "link" to={`/categoria/alfombras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alfombras</NavLink>
                <NavLink class= "link" to={`/categoria/velas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Velas</NavLink>
                <NavLink class= "link" to={`/categoria/lamparas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lamparas</NavLink>
                <NavLink class= "link" to={`/categoria/almohadones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Almohadones</NavLink>
            </div>
            <CartWidget />
        </nav>
        )
    }
 */



    const Navbar = () => {
        return (
            <nav className="NavBar" class="navbar navbar-expand-lg">
                <div class="container-fluid navBar">
                    <Link class="titulo" to="/">
                        <h3>Deco Home</h3>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to={`/categoria/alfombras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alfombras</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={`/categoria/velas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Velas</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={`/categoria/lamparas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lamparas</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={`/categoria/almohadones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Almohadones</NavLink>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
                
            </nav>
        )
    }

export default Navbar



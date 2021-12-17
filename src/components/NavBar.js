import React from 'react'
import Logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand ms-3" href="#">
                        <img src={Logo} alt="logo-img" height='70px' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  text-uppercase fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase fw-bold" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase fw-bold" href="#">Our Story</a>
                            </li>                           
                            <li className="nav-item text-uppercase fw-bold">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>                
                        </ul>
                        <form className="d-flex ">
                            <input className="form-control  me-2 rounded-pill" style={{width:'100px',backgroundColor:'#79838d'}}  type="search"  aria-label="Search" />
                            
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

import React from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/main.css"

const Navbar = () => {
    return (
        <>
           
           
            <header className="header d-flex align-items-center  p-3 sticky-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <NavLink to="/" className="navbar-brand logo d-flex align-items-center me-auto">
                        <h1>Presento</h1>
                        <span className='fw-bold' style={{ fontSize: "32px", fontWeight: "700", color: "red" }}>.</span>
                    </NavLink>
                    <nav className="navbar navbar-expand-lg order-last order-lg-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto d-flex align-items-lg-center">
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
                                </li>
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
                                </li>
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Services</NavLink>
                                </li>
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Portfolio</NavLink>
                                </li>
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/team" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Team</NavLink>
                                </li>
                                <li className="nav-item me-lg-4 ">
                                    <NavLink to="/blog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Blog</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar

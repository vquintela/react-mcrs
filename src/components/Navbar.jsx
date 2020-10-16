import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import userContext from '../context/user/userContext'

const Navbar = () => {
    const { isLoggedIn, logOut } = useContext(userContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        isLoggedIn ? (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/car">Automoviles</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/sedes">Sedes</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/usuarios">Usuarios</Link>
                                </li>
                                <li className="nav-item active">
                                    <a href="#!" className="nav-link"  onClick={logOut}>Signout</a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/signin">Signin</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar

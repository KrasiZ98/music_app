import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const Navigation = () => {
    const { user } = useContext(AuthContext);
    return (
        <header>
            <nav>
                <img src="/images/headphones.png" />
                <Link to="/">Home</Link>
                <ul>
                    {/* <!--All user--> */}
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    {/* <!--Only guest--> */}
                    {user.email ? <>
                        <li><Link to="/create">Create Album</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>}
                    {/* <!--Only user--> */}
                </ul>
            </nav>
        </header>
    )
}

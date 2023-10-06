import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    //sử dụng activeClassName
    const activeClassName = ({ isActive }) => {
        let cl ='nav-link';
        let a = cl + is;
        return isActive ? 'active' : ''
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-lightx '>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className='nav-link' to='/' >Trang chủ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/about' >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/catalog' >Catalog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu
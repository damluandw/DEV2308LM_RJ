import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Catalog() {
    //sử dụng activeClassName
    const activeClassName = ({ isActive }) => {
        return isActive ? 'bg-success' : 'bg-primary'
    }
    //sử dụng activeStyle
    const activeStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'red' : 'blue',
            color: isActive ? 'yellow' : 'red',
        }
    }
    const navigate = useNavigate();
    return (
        <div className='alter alert-Info'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <NavLink to="kid" className={activeClassName} style={activeStyle}>Khoá học lập trình cho trẻ em</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="web" className={activeClassName} style={activeStyle}>Khoá học lập trình Website</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="mobile" className={activeClassName} style={activeStyle}>Khoá học lập trình di động</NavLink>
                </li>
            </ul>
            <Outlet></Outlet>
            <button className='btn btn-primary' onClick={() => navigate("/")}>Back Home</button>
        </div>
    )
}

export default Catalog

import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'
import './Nav.css'

export default function Nav() {
  return <>
    <nav className="navbar navbar-expand-lg py-4 " >
      <div className="container">
        {/* --------------------logo */}
        <NavLink to={''} >
          <img src={logo} alt="logo" />
        </NavLink>
        {/* --------------------button for small screens  */}

        <button className="navbar-toggler "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* --------------------menu */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-3 mb-lg-0  m-auto">

            <li className=" nav-item mx-1 ">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={''} >Home</NavLink>
            </li>  <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'movies'} >Movies</NavLink>
            </li>  <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'tv'} >TV Shows</NavLink>
            </li>  <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'WatchList'} >WatchList</NavLink>
            </li>  <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'signin'} >SignIn</NavLink>
            </li>
            <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'signup'} >SignUp</NavLink>
            </li>
            <li className=" nav-item mx-1">
              <NavLink className={({ isActive }) => isActive ? "nav-link text-white activeLink" : 'nav-link text-white'} to={'contact'} >Contact</NavLink>
            </li>
          </ul>

          <form class="d-flex" >
          <div className='position-relative input-container'>
          <input class="form-control border-0 me-2 rounded-5 px-4" placeholder="Find Favirote Movie"  />
          <i className='fa-solid fa-search'></i>
          </div>
        </form>
        </div>
        {/* --------------------search */}

      
      </div>
    </nav>

  </>

}

import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { menu, logo } from '../../Global'

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="top_header_container">
          <FontAwesomeIcon icon="truck-fast" className='mx-2 text-white fa-lg' />
          <h2 className='h4 text-white mt-2'>Entregamos para todo Brasil!</h2>
        </div>

        <div className="mid_header_container my-2">
          <Link className='logo_link_header' to={''}>
            <img className='logo_header' src={logo} title='Logo Papel Pintado' alt="Logo Papel Pintado" />
          </Link>

          <div className="menu_header_container">
            {menu.map((menu) => {
              return <div key={menu[1]} className="d-flex justify-content-center align-items-center">
                <Link className='menu_links' to={`/${menu[0]}`}>{menu[1]}</Link>
                <FontAwesomeIcon icon="o" className='mx-2 text-white fa-2xs' />
              </div>
            })}
          </div>

          <div className="login_header_container">
            <div className="btn_login_register">
              <div className="login_container">
                <Link className='login_link' to={''}> <FontAwesomeIcon icon="user-astronaut" /> Login</Link>
              </div>
              <div className="register_container">
                <Link className='login_link' to={''}> <FontAwesomeIcon icon="id-card" /> Cadastro</Link>
              </div>
            </div>

            <Link to={`/carrinho`}><FontAwesomeIcon icon="shop" className='mx-2 text-white fa-lg' /></Link>
          </div>
        </div>

        <div className="search_header my-3">
          <div className="search_container">
            <input className='input_search' placeholder='O que está procurando?' type="search" name="productSearch" id="productSearch" />

            <FontAwesomeIcon icon="search" className='mx-2 text-white search_icon' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
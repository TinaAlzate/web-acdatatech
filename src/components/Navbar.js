/* eslint-disable no-unused-vars */
import logo from '../assets/images/AC-data-tech-2.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="menu-container">

      <input type="checkbox" aria-label="Toggle menu" />
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>

      <Link to="/" className="menu-logo"><img src={logo} alt="Logo AC datatech" /></Link>

      <div className="menu">
        <ul className="p-2 nav-link-menu">
          <li className="item-menu">
            <Link to="/" rel="canonical" title="Inicio AC datatech">Inicio</Link>
          </li>

          <li className="dropdown item-menu">
            <a title="Servicios tecnológicos AC datatech" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <div className="dropdown-menu mt-3 mt-md-4">
              <Link rel="canonical" className="dropdown-item" to="/security">Seguridad</Link>
              <Link rel="canonical" className="dropdown-item" to="/maintenance">Mantenimiento</Link>
              <Link rel="canonical" className="dropdown-item" to="/web-development">Desarrollo web</Link>
              <Link rel="canonical" className="dropdown-item" to="/cloud">Servicios en la nube</Link>
              <Link rel="canonical" className="dropdown-item" to="/business-optimization">Optimización de negocio</Link>
              <Link rel="canonical" className="dropdown-item" to="/business-intelligence">Inteligencia de negocio</Link>
            </div>
          </li>

          <li className="item-menu">
            <Link to="/contact" rel="canonical" title="Contacto AC datatech">Contacto</Link>
          </li>
        </ul>

        <ul className="p-2 contain-lg nav-link-menu">
          <li className="list-btn-lg"><button className="button-nav-lg">EN</button></li>
          <p className="line-lg">|</p>
          <li className="list-btn-lg"><button className="button-nav-lg">ES</button></li>
        </ul>
      </div>
    </nav>

  // <nav className="navbar navbar-expand-md position-fixed justify-content-between">
  //   <div className="logo-nav">
  //     <Link className="navbar-brand" to="/">
  //       <img className="img-logo" src={logo} alt="Logo AC datatech" title="Logo AC datatech" />
  //     </Link>
  //   </div>
  //   <button className="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse flex-grow-0" id="menu">
  //     <div className="navbar-nav">
  //       <Link className="nav-link" to="/" title="Inicio AC datatech">Inicio</Link>

  //       <div to="/services">
  //         <a title="Servicios tecnológicos AC datatech" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //           Servicios
  //         </a>
  //         <div className="dropdown-menu">
  //           <Link rel="canonical" className="dropdown-item" to="/security">Seguridad</Link>
  //           <Link rel="canonical" className="dropdown-item" to="/maintenance">Mantenimiento</Link>
  //           <Link rel="canonical" className="dropdown-item" to="/web-development">Desarrollo web</Link>
  //           <Link rel="canonical" className="dropdown-item" to="/cloud">Servicios en la nube</Link>
  //           <Link rel="canonical" className="dropdown-item" to="/business-optimization">Optimización de negocio</Link>
  //           <Link rel="canonical" className="dropdown-item" to="/business-intelligence">Inteligencia de negocio</Link>
  //         </div>
  //       </div>

  //       <Link rel="canonical" className="nav-link" to="/contact" title="Contacto AC datatech">Contacto</Link>
  //     </div>
  //   </div>
  // </nav>
  )
}

/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import logo from '../assets/images/AC-data-tech-2.png'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md position-fixed justify-content-between">
      <div className="logo-nav">
        <Link className="navbar-brand" to="/">
          <img className="img-logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-0" id="menu">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <div to="/services">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/security">Seguridad</Link>
              <Link className="dropdown-item" to="/maintenance">Mantenimiento</Link>
              <Link className="dropdown-item" to="/web-development">Desarrollo web</Link>
              <Link className="dropdown-item" to="/cloud">Servicio de cloud</Link>
              <Link className="dropdown-item" to="/business-optimization">Optimización de negocio</Link>
              <Link className="dropdown-item" to="/business-intelligence">Inteligencia de negocio</Link>
            </div>
          </div>
          <Link className="nav-link" to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

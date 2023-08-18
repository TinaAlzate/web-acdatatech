/* eslint-disable no-unused-vars */
import '../styles/footer.css'
import logo from '../assets/images/AC-data-tech-1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="section-footer">
       <div className="information-contain">
         <div className='logo-footer'>
          <Link to="/">
            <img src={logo} className='img-contain' />
          </Link>
         </div>
         <div className="contain-services">
           <h6>Servicios</h6>
           <div className="list-services">
             <ul>
               <li><Link to="/security">Seguridad</Link></li>
               <li><Link to="/">Mantenimiento</Link></li>
               <li><Link to="/">Desarrollo web</Link></li>
               <li><Link to="/">Servicios en la nube</Link></li>
               <li><Link to="/">Optimización de negocios</Link></li>
               <li><Link to="/">Inteligencia de negocio</Link></li>
             </ul>
           </div>
         </div>
         <div className="contact-us">
           <h6>Contáctanos</h6>
           <span>Teléfono: +34 123 456 789</span>
           <span>Correo: contact@acdatatech.com</span>
           <button className="button-footer">Contactar</button>
         </div>
       </div>
       <hr />
       <div className="policy-contain">
         <ul>
           <Link className="item-link" to="">Política de privacidad</Link>
           <Link className="item-link" to="">Política de cookies</Link>
         </ul>
       </div>
    </footer>
  )
}

export default Footer

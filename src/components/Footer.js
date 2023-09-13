/* eslint-disable no-unused-vars */
import logo from '../assets/images/AC-data-tech-1.png'
import { Link } from 'react-router-dom'
import { IconEmail, IconForm, IconPhone } from './icons/IconsFooter'
import '../styles/footer.css'

export const ExternalLink = ({ to, children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer nofollow" className="item-link" title={`${children} AC datatech`}>
    {children}
  </a>
)
export const Footer = () => {
  const servicesItem = [
    {
      path: '/security',
      title: 'Seguridad'
    },
    {
      path: '/maintenance',
      title: 'Mantenimiento'
    },
    {
      path: '/cloud',
      title: 'Servicios en la nube'
    },
    {
      path: '/web-development',
      title: 'Desarrollo web'
    },
    {
      path: '/business-optimization',
      title: 'Optimización de negocio'
    },
    {
      path: '/business-intelligence',
      title: 'Inteligencia de negocio'
    }
  ]
  return (
    <footer className="section-footer">
      <div className="information-contain">
        <div className='logo-footer'>
          <Link to="/">
            <img src={logo} className='img-contain' alt="Logo AC datatech" title="Logo AC datatech" />
          </Link>
        </div>

        <div className="contain-services">
          <h5>Servicios</h5>
          <div className="list-services">
            <ul>
              {
                servicesItem && servicesItem.map((item, index) => (
                  <li key={index}><Link
                    rel='canonical'
                    title={`Servicio tecnológico ${item.title}`}
                    to={item.path}
                  >{item.title}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="contact-us">
          <h5>Contáctanos</h5>
          <a href="tel:+34635792224" title="Llamar AC datatech"><IconPhone /> +34 635 792 224</a>
          <a href="mailto:info@acdatatech.com" title="Enviar email AC datatech"><IconEmail /> info@acdatatech.com</a>
          <a href="mailto:contact@acdatatech.com" title="Enviar email AC datatech">&nbsp; &nbsp; contact@acdatatech.com</a>
          <Link to="/contact" className="button-footer" title="Contacto AC datatech"><IconForm /> Ponerme en contacto</Link>
        </div>
      </div>

      <hr />

      <div className="policy-contain">
        <ul>
          <ExternalLink to="/privacy-policy">Política de privacidad</ExternalLink>
          <ExternalLink to="/cookies-policy">Política de cookies</ExternalLink>
        </ul>
      </div>
    </footer>
  )
}

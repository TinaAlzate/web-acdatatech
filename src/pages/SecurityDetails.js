import { Service } from '../components/Service'
import '../styles/security-details.css'

const SecurityDetails = () => {
  return (
    <section>
      <div className="header-security">
        <h2>Seguridad</h2>
      </div>

      <div className="container-fluid security-details">
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-optimization" title="Optimización de negocio" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default SecurityDetails

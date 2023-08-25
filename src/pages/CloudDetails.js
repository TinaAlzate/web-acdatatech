import { Service } from '../components/Service'
import '../styles/cloud-details.css'

const CloudDetails = () => {
  return (
    <section>
      <div className="header-cloud">
        <h2>Servicios en la nube</h2>
      </div>
      <div className="container-fluid cloud-details">
        <Service path="/security" title="Seguridad" />
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-optimization" title="Optimización de negocio" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default CloudDetails

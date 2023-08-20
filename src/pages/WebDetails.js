import { Service } from '../components/Service'
import '../styles/web-details.css'

const WebDetails = () => {
  return (
    <section>
      <div className="container-fluid web-details">
        <Service path="/security" title="Seguridad" />
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/business-optimization" title="Optimización de negocio" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default WebDetails

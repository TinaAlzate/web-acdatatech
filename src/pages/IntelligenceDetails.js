import { Service } from '../components/Service'
import '../styles/intelligence-details.css'

const IntelligenceDetails = () => {
  return (
    <section>
      <div className="container-fluid intelligence-details">
        <Service path="/security" title="Seguridad" />
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-optimization" title="Optimización de negocio" />
      </div>
    </section>
  )
}

export default IntelligenceDetails

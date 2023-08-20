import { Service } from '../components/Service'
import '../styles/optimization-details.css'

const OptimizationDetails = () => {
  return (
    <section>
      <div className="container-fluid optimization-details">
        <Service path="/security" title="Seguridad" />
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default OptimizationDetails

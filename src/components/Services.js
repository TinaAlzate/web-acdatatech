import '../styles/services.css'
import { Service } from '../components/Service.js'

const Services = () => {
  return (
    <section className="container-fluid section-services">
      <Service path="/security" title="Seguridad" />
      <Service path="/maintenance" title="Mantenimiento" />
      <Service path="/cloud" title="Servicios en la nube" />
      <Service path="/web-development" title="Desarrollo web" />
      <Service path="/business-optimization" title="Optimización de negocio" />
      <Service path="/business-intelligence" title="Inteligencia de negocio" />
    </section>
  )
}

export default Services

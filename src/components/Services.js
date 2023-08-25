import '../styles/services.css'
import { Service } from '../components/Service.js'

const Services = () => {
  return (
    <section className="section-services container-fluid">
      <h2>Nuestros servicios tecnológicos</h2>
      <div className="services-items">
        <Service path="/security" title="Seguridad" />
        <Service path="/maintenance" title="Mantenimiento" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-optimization" title="Optimización de negocio" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default Services

import { Service } from '../components/Service'
import '../styles/maintenance-details.css'

const MaintenanceDetails = () => {
  return (
    <section>
      <div className="header-maintenance">
        <h2>Mantenimiento</h2>
      </div>
      <div className="container-fluid maintenance-details">
        <Service path="/security" title="Seguridad" />
        <Service path="/cloud" title="Servicios en la nube" />
        <Service path="/web-development" title="Desarrollo web" />
        <Service path="/business-optimization" title="Optimización de negocio" />
        <Service path="/business-intelligence" title="Inteligencia de negocio" />
      </div>
    </section>
  )
}

export default MaintenanceDetails

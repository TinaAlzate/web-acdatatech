/* eslint-disable no-unused-vars */
import { Service } from '../components/Service.js'
import '../styles/services.css'

export const Services = () => {
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
    <section className="section-services container-fluid">
      <h2>Nuestros servicios tecnológicos</h2>
      <div className="services-items">
        <Service items={servicesItem} title={`${servicesItem}`} />
      </div>
    </section>
  )
}

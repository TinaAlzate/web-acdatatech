/* eslint-disable no-unused-vars */
import '../styles/services.css'
import { Service } from '../components/Service.js'

const Services = () => {
  return (
    <section className="container-fluid section-services">
      <Service path="/security" title="Security" />
      <Service path="/maintenance" title="Maintenance" />
      <Service path="/cloud" title="Cloud services" />
      <Service path="/web-development" title="Web development" />
      <Service path="/business-optimization" title="Business optimization" />
      <Service path="/business-intelligence" title="Business intelligence" />
    </section>
  )
}

export default Services

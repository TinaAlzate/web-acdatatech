/* eslint-disable no-unused-vars */
import { Service } from '../components/Service'
import '../styles/services-details.css'

const CloudDetails = () => {
  return (
    <section>
      <div className="container other-services">
        <Service path="/security" title="Security" />
        <Service path="/maintenance" title="Maintenance" />
        <Service path="/web-development" title="Web development" />
        <Service path="/business-optimization" title="Business optimization" />
        <Service path="/business-intelligence" title="Business intelligence" />
      </div>
    </section>
  )
}

export default CloudDetails

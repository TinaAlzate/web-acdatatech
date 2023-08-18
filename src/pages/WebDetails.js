import { Service } from '../components/Service'

const WebDetails = () => {
  return (
    <section>
      <div className="container other-services">
        <Service path="/cloud" title="Cloud services" />
        <Service path="/maintenance" title="Maintenance" />
        <Service path="/web-development" title="Web development" />
        <Service path="/business-optimization" title="Business optimization" />
        <Service path="/business-intelligence" title="Business intelligence" />
      </div>
    </section>
  )
}

export default WebDetails

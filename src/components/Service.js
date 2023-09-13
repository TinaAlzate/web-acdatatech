/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import '../styles/service.css'

export const ServiceItem = ({ title, link, path }) => {
  return (
    <Link to={path} className="service" rel="canonical" title={`Servicio tecnológico de ${title}`}>
      <h4 className="title-service">{title}</h4>
      <p className="link-service">{link}<span>&gt;</span></p>
    </Link>
  )
}

ServiceItem.defaultProps = {
  link: 'Ver servicios'
}

export const Service = ({ items }) => {
  return (
    <>
      {
        items &&
        items.map((item, index) => (
          <ServiceItem
            key={index}
            id={index}
            title={item.title}
            path={item.path}
          />
        ))
      }
    </>
  )
}

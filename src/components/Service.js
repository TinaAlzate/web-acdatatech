/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import '../styles/service.css'

export const Service = ({ title, link, path }) => {
  return (
    <Link to={path} className="service">
      <h4 className="title-service">{title}</h4>
      <p className="link-service">{link}<span>&gt;</span></p>
    </Link>
  )
}

Service.defaultProps = {
  link: 'View services'
}

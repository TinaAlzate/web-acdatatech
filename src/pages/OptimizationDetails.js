/* eslint-disable no-unused-vars */
import { Service, Accordion, ContactForm } from '../components'
import { IconScrollDown, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from '../components/icons'
import { Helmet } from 'react-helmet'
import '../styles/services-details.css'

export const OptimizationDetails = () => {
  const itemsOptimization = [
    {
      icon: <Icon1 />,
      title: 'Páginas web',
      content: 'En AC data tech desarrollamos webs adaptadas a las necesidades y proyecto empresarial con el objetivo de ofrecer a nuestros clientes un servicio profesional con la máxima calidad y a un precio competitivo. Ofrecemos un servicio completo según las peticiones de nuestros clientes, poniendo énfasis a las necesidades de pymes y negocios. Trabajamos según estándares de webs dinámicas que permiten ajustarse a los requerimientos de nuestros clientes y ampliar los contenidos web según se desee.Una buena página web es una herramienta muy poderosa para incrementar las ventas. Creamos páginas web amigables y sencillas para el usuario y le ayudamos a encontrar lo que busca.'
    },
    {
      icon: <Icon2 />,
      title: 'Diseño de aplicaciones web',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon3 />,
      title: 'Tiendas online o ecommerce',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon4 />,
      title: 'Integración de servidores web',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon5 />,
      title: 'Servicios web JSON',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon6 />,
      title: 'Bases de datos',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon7 />,
      title: 'Integraciones API',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    }
  ]

  const othersOptimization = [
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
      path: '/business-intelligence',
      title: 'Inteligencia de negocio'
    }
  ]

  return (
    <section className="section-optimization details">
      <Helmet>
        <title>Optimización de negocio | AC datatech</title>
      </Helmet>

      <div className="header-services-details">
        <div className="container-img optimization">
          <h1 className="title-services-details">Optimización de negocio</h1>
          <a className="btn-scroll" href="#contact">
            <div className="btn-scroll-box"><IconScrollDown /></div>
            <span className="btn-scroll-text">Más información</span>
          </a>
        </div>
      </div>

      <div className="body-services-details container-fluid" id="accordionExample">
        <div className="accordion p-0">
          <Accordion items={ itemsOptimization } />
        </div>
        <div className="form-contact-details">
          <ContactForm />
        </div>
      </div>

      <div className="other-services container-fluid">
        <h2 className="title-others-servicies">Otros servicios que podrían interesarte</h2>
        <div className="items-details os-optimization">
          <Service items={ othersOptimization } />
        </div>
      </div>

    </section>
  )
}

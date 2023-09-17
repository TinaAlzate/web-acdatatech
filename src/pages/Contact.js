/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet'
import { ContactForm } from '../components'

export const Contact = () => {
  return (
    <section className="section-contact">
      <Helmet>
        <title>Contacto | AC datatech</title>
      </Helmet>

      <div className="header-contact">
        <h1 className='title-page-contact'>Contáctanos</h1>
      </div>

      <div className="body-contact container-fluid">
        <div className="title-form">
          <h2 className="subtitle-page-contact">Conecta a un mejor futuro con nuestros servicios tecnológicos</h2>
          <p className="parr-page-contact">Bienvenido a nuestro espacio dedicado a la innovación. Estamos aquí para entender tus desafíos y brindarte soluciones tecnológicas a medida. Por favor, completa el siguiente formulario para que podamos empezar a trabajar juntos.</p>
        </div>
        <div className="form-content">
          <ContactForm />
        </div>
      </div>
    </section>

  )
}

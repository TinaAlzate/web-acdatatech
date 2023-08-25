import ContactForm from '../components/ContactForm'

const Contact = () => {
  const titleForm = 'Conecta a un mejor futuro con nuestros servicios tecnológicos'

  const subtitleForm = 'Bienvenido a nuestro espacio dedicado a la innovación. Estamos aquí para entender tus desafíos y brindarte soluciones tecnológicas a medida. Por favor, completa el siguiente formulario para que podamos empezar a trabajar juntos.'

  return (
    <ContactForm title={titleForm} subtitle={subtitleForm}/>
  )
}

export default Contact

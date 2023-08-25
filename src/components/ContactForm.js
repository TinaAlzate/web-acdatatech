import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useLocation } from 'react-router-dom'
import '../styles/contact.css'

const ContactForm = ({ page, title, subtitle }) => {
  const contactSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email('Formato de email invalido')
        .required('Email es un campo obligatorio'),
      service: Yup.string()
        .required('Servicios es un campo obligatorio'),
      message: Yup.string()
        .required('Mensaje es un campo obligatorio'),
      checkbox_req: Yup.boolean()
        .required('Debes aceptar nuestra política de privacidad para poder continuar'),
      checkbox_opc: Yup.boolean()
    }
  )

  const location = useLocation()
  const urlValue = location.pathname

  const selectOptions = [
    { value: '', label: 'Seleccione un servicio' },
    { value: 'security', label: 'Seguridad' },
    { value: 'maintenance', label: 'Mantenimiento' },
    { value: 'web-development', label: 'Desarrollo web' },
    { value: 'cloud-services', label: 'Servicio de cloud' },
    { value: 'business-optimization', label: 'Optimización de negocio' },
    { value: 'business-intelligence', label: 'Inteligencia de negocio' }
  ]

  const selectedOption = selectOptions.find(service => `/${service.value}` === urlValue)

  const initialCredentials = {
    person_id: 2,
    email: '',
    message: '',
    service: selectedOption ? selectedOption.value : '',
    checkbox_req: '',
    checkbox_opc: false
  }

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values) // Aquí hacemos la petición
  //   resetForm()
  // }

  return (
    <section className={`container-fluid section-form ${page === 'page-services' && 'page-services'} `} id="contact">
      <div className="header-form">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={contactSchema}
      // onSubmit={handleSubmit}
      >

        {({
          touched,
          errors,
          isSubmitting
        }) => (
          <Form className='form'>

              <label htmlFor="email">
                <span>Correo electronico</span>
                <Field className="input" id="email" type="email" name="email" placeholder="example@email.com" />
              </label>
              {
                errors.email && touched.email &&
                (
                  <ErrorMessage name="email" component='p'></ErrorMessage>
                )
              }

              <label htmlFor="service">
                <span>Servicios</span>
                <Field
                  className="input"
                  as="select"
                  id="service"
                  name="service">
                  {selectOptions.map(service => (
                    <option key={service.value} value={service.value} label={service.label}>
                    </option>
                  ))}
                </Field>
              </label>

              {
                errors.service && touched.service &&
                (
                  <ErrorMessage name="service" component='div'></ErrorMessage>
                )
              }

              <label htmlFor="message">
                <span>Mensaje</span>
                <Field className="input"
                  id="message"
                  name="message"
                  placeholder="message..."
                  as='textarea'
                />
              </label>
              {
                errors.message && touched.message &&
                (
                  <ErrorMessage name="message" component='div'></ErrorMessage>
                )
              }
              <label className="checkbox-label" htmlFor="checkbox_req">
                <Field className="input"
                  type="checkbox"
                  id="checkbox_req"
                  name="checkbox_req"
                />
                <span>He leído y acepto <Link to="/privacy-policy">política de privacidad</Link></span>
              </label>
              {
                errors.checkbox && touched.checkbox &&
                (
                  <ErrorMessage name="checkbox" component='div'></ErrorMessage>
                )
              }
              <label className="checkbox-label" htmlFor="checkbox_opc">
                <Field className="input"
                  type="checkbox"
                  id="checkbox_opc"
                  name="checkbox_opc"
                />
                <span>Nos gustaría que nos prestaras tu consentimiento para enviarte información comercial sobre los productos, servicios y/o novedades de AC data tech.</span>
              </label>

              <button className="submit-btn" type="submit" disabled={isSubmitting}>Enviar</button>

          </Form>
        )}
      </Formik>
    </section>
  )
}

export default ContactForm

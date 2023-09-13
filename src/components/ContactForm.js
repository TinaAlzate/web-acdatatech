/* eslint-disable no-unused-vars */
import * as Yup from 'yup'
import { useLocation } from 'react-router-dom'
import { ExternalLink } from './Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../styles/contact.css'

export const ContactForm = () => {
  const contactSchema = Yup.object().shape(
    {
      email: Yup.string().trim().email('Formato de email invalido').required('Email es un campo obligatorio'),
      service: Yup.string().trim().required('Servicios es un campo obligatorio'),
      message: Yup.string().trim().required('Mensaje es un campo obligatorio').uppercase(),
      checkbox_req: Yup.boolean().required('Debes aceptar nuestra política de privacidad para poder continuar'),
      checkbox_opc: Yup.boolean()
    }
  )

  const { pathname } = useLocation()

  const selectOptions = [
    { value: '', label: 'Seleccione un servicio' },
    { value: 'security', label: 'Seguridad' },
    { value: 'maintenance', label: 'Mantenimiento' },
    { value: 'web-development', label: 'Desarrollo web' },
    { value: 'cloud', label: 'Servicios en la nube' },
    { value: 'business-optimization', label: 'Optimización de negocio' },
    { value: 'business-intelligence', label: 'Inteligencia de negocio' }
  ]

  const selectedOption = selectOptions.find(service => `/${service.value}` === pathname)

  const funhandleSubmit = (values) => {
    console.log(values) // Aquí hacemos la petición
    fetch()
  }

  const initialCredentials = {
    person_id: 2,
    email: '',
    message: '',
    service: selectedOption ? selectedOption.value : '',
    checkbox_req: false,
    checkbox_opc: false
  }

  return (
    <Formik
      initialValues={initialCredentials}
      validationSchema={contactSchema}
      onSubmit={funhandleSubmit}
    >

      {({
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting
      }) => (
        <Form className='contact-form' id='contact'>

          <label htmlFor="email">
            <span>Correo electronico</span>
            <Field
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
          </label>
          {
            errors.email && touched.email &&
            (
              <ErrorMessage name="email" component='div'></ErrorMessage>
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
            <Field
              className="input"
              id="message"
              name="message"
              placeholder="message..."
              as='textarea'
            />
          </label>
          {
            errors.message && touched.message &&
            (
              <ErrorMessage name="message" component='span'></ErrorMessage>
            )
          }
          <label className="checkbox-label" htmlFor="checkbox_req">
            <Field
              className="input"
              type="checkbox"
              id="checkbox_req"
              name="checkbox_req"
            />
            <span>He leído y acepto <ExternalLink to="/privacy-policy" children='política de privacidad' /></span>
          </label>
          {
            errors.checkbox && touched.checkbox &&
            (
              <ErrorMessage name="checkbox_req" component='div'></ErrorMessage>
            )
          }
          <label className="checkbox-label" htmlFor="checkbox_opc">
            <Field
              className="input"
              type="checkbox"
              id="checkbox_opc"
              name="checkbox_opc"
            />
            <span>Nos gustaría que nos prestaras tu consentimiento para enviarte información comercial sobre los productos, servicios y/o novedades de AC data tech.</span>
          </label>

          <button className="submit-btn" type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}

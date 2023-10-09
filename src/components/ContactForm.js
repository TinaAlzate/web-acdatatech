/* eslint-disable no-unused-vars */
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { doneResponse, errorResponse } from '../helpers/Alerts'
import '../styles/contact.css'

export const ContactForm = () => {
  const contactSchema = Yup.object().shape(
    {
      email: Yup.string().trim().email('Formato de email invalido').required('Email es un campo obligatorio'),
      service: Yup.string().trim().required('Servicios es un campo obligatorio'),
      message: Yup.string().trim().required('Mensaje es un campo obligatorio').min(10, 'Minímo 10 caracteres').max(500, 'Máximo 500 caracteres'),
      conditions: Yup.boolean().required('Debes aceptar nuestra política de privacidad para poder continuar').oneOf([true], 'Se deben aceptar los términos y condiciones'),
      bulkEmail: Yup.boolean()
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

  const initialCredentials = {
    person_id: 2,
    email: '',
    message: '',
    service: selectedOption ? selectedOption.value : '',
    conditions: '',
    bulkEmail: false
  }

  const URL_API = 'https://acdatatech.1.ie-1.fl0.io/client/create'

  const funhandleSubmit = async (values, actions) => {
    axios.post(URL_API, values)
      .then(function (response) {
        const { data } = response
        if (data.ok) {
          doneResponse()
          actions.resetForm()
        }
        errorResponse()
      })
      .catch(function (error) {
        if (axios.isAxiosError(error)) {
          errorResponse()
          return {
            message: error.response?.data.message
          }
        }
        return errorResponse()
      })
  }

  return (
    <Formik
      initialValues={initialCredentials}
      validationSchema={contactSchema}
      onSubmit={funhandleSubmit}
    >

      {({
        touched,
        errors,
        isSubmitting
      }) => (
        <Form className='contact-form' id='contact'>

          <label htmlFor="email" className="label-form-input">
            <span className="name-label">Correo electronico</span>
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
              <ErrorMessage name="email" component='small' style={{ color: '#1466C3' }}></ErrorMessage>
            )
          }

          <label htmlFor="service" className="label-form-input">
            <span className="name-label">Servicios</span>
            <Field
              className="input"
              as="select"
              id="service"
              name="service">
              {selectOptions.map(service => (
                <option key={service.value} value={service.value}>{service.label}
                </option>
              ))}
            </Field>
          </label>

          {
            errors.service && touched.service &&
            (
              <ErrorMessage name="service" component='small' style={{ color: '#1466C3' }}></ErrorMessage>
            )
          }

          <label htmlFor="message" className="label-form-input">
            <span className="className=">Mensaje</span>
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
              <ErrorMessage name="message" component='small' style={{ color: '#1466C3' }}></ErrorMessage>
            )
          }
          <label className="checkbox-label-form" htmlFor="conditions">
            <Field
              className="input"
              type="checkbox"
              id="conditions"
              name="conditions"
            />
            <span>He leído y acepto la <Link to="/privacy-policy" target="_blank" title="Política de privacidad AC datatech" className="item-link-form">política de privacidad</Link></span>
          </label>
          {
            errors.conditions && touched.conditions &&
            (
              <ErrorMessage name="conditions" component='small' style={{ color: '#1466C3' }}></ErrorMessage>
            )
          }
          <label className="checkbox-label-form" htmlFor="bulkEmail">
            <Field
              className="input"
              type="checkbox"
              id="bulkEmail"
              name="bulkEmail"
            />
            <span>Nos gustaría que nos prestaras tu consentimiento para enviarte información comercial sobre los productos, servicios y/o novedades de AC data tech.</span>
          </label>

          <button className="submit-btn" type="submit" disabled={isSubmitting}>Enviar</button>
        </Form>
      )
      }
    </Formik>
  )
}

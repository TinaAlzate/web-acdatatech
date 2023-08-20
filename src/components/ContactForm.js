import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/contact.css'
import { Link, useParams } from 'react-router-dom'

const ContactForm = () => {
  const { service: defaultService } = useParams()
  console.log(defaultService)
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

  const initialCredentials = {
    person_id: 2,
    email: '',
    message: '',
    service: defaultService || '',
    checkbox_req: '',
    checkbox_opc: false
  }

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values) // Aquí hacemos la petición
  //   resetForm()
  // }

  return (
    <div className='container'>
      <h3>Contacta con AC data tech</h3>
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
                <option value="" label="Seleccione un servicio" />
                <option value="security" label="Seguridad" />
                <option value="maintenance" label="Mantenimiento" />
                <option value="web-development" label="Desarrollo web" />
                <option value="cloud-services" label="Servicio de cloud" />
                <option value="business-optimization" label="Optimización de negocio" />
                <option value="business-intelligence" label="Inteligencia de negocio" />
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

            <p className="paragraph-terms">AC data tech como responsable del tratamiento tratará tus datos con la finalidad de dar respuesta a tu consulta o petición. Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechos consultando la información adicional y detallada sobre protección de datos en nuestra <Link to="/privacy-policy">política de privacidad</Link></p>

            <label className="checkbox-label" htmlFor="checkbox_req">
              <Field className="input"
                type="checkbox"
                id="checkbox_req"
                name="checkbox_req"
              />
              <span>He leído y acepto las condiciones contenidas en la política de privacidad sobre el tratamiento de mis datos para gestionar mi consulta o peticón</span>
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
    </div>
  )
}

export default ContactForm

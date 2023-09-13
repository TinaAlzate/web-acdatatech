/* eslint-disable no-unused-vars */
import { IconNotFound } from '../components/icons'
import { Helmet } from 'react-helmet'

export const NotFound = () => {
  return (
    <seccion className="page-notfound mb-5 d-flex flex-column align-items-center">
      <Helmet>
        <title>Página no encontrada | AC datatech</title>
      </Helmet>
      <IconNotFound />
      <h1>Página no encontrada</h1>
      <p className="parr-notfound fs-2">Esta no es la página web que buscas</p>
      <button className="btn btn-outline-primary">Volver al inicio</button>
    </seccion>
  )
}

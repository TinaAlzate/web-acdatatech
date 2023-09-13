/* eslint-disable no-unused-vars */
import '../styles/policies.css'
import { useEffect, useState } from 'react'
import { ExternalLink } from './Footer'

export const ModalCookies = () => {
  const storage = window.localStorage
  const [acceptedCookies, setAcceptedCookies] = useState(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const hasAcceptedCookies = storage.getItem('acceptedCookies')
    if (hasAcceptedCookies) {
      setAcceptedCookies(true)
      setShowModal(false)
    }
  }, [])

  const acceptCookies = () => {
    storage.setItem('acceptedCookies', 'true')
    setAcceptedCookies(true)
    setShowModal(false)
  }

  const deniedCookie = () => {
    setShowModal(false)
  }
  if (!showModal || acceptedCookies) {
    return null
  }

  return (
    <div className="modal-cookies">
      <div className="modal-content-cookie">
        <div className="contain-parr-cookies">
          <p>AC datatech utiliza cookies para mejorar su experiencia en línea. Para utilizar este sitio web, ¿Usted acepta nuestra <ExternalLink to='/cookies-policy' children="política de cookies" />?</p>
        </div>
        <div className="contain-buttons-cookies">
          <button onClick={acceptCookies} className="accept-button-cookie">Aceptar</button>
          <button onClick={deniedCookie} className="deny-link-cookie">Rechazar</button>
        </div>
      </div>
    </div>
  )
}

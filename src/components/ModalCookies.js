/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import '../styles/policies.css'
import { useEffect, useState } from 'react'

export const ModalCookies = () => {
  const storage = window.localStorage
  const [initialized, setInitialized] = useState(false)
  const [acceptedCookies, setAcceptedCookies] = useState(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const hasAcceptedCookies = storage.getItem('acceptedCookies')
    if (hasAcceptedCookies) {
      setAcceptedCookies(true)
      setShowModal(false)
    }
    setInitialized(true)
  }, [])
  const acceptCookies = () => {
    storage.setItem('acceptedCookies', 'true')
    setAcceptedCookies(true)
    setShowModal(false)
  }

  const deniedCookie = () => {
    setShowModal(false)
  }
  if (!initialized || !showModal || acceptedCookies) {
    return null
  }

  return (
    <div className="modal-cookies">
      <div className="modal-content-cookie">
        <div className="contain-parr-cookies">
          <p className="parr-cookies">AC datatech utiliza cookies para mejorar su experiencia en línea. Para utilizar este sitio web, ¿Usted acepta nuestra <Link to="/cookies-policy" target="_blank" rel="noopener noreferrer nofollow" title="Política de cookies AC datatech" className="item-link">Política de Cookies</Link>?</p>
        </div>
        <div className="contain-buttons-cookies">
          <button onClick={acceptCookies} className="accept-button-cookie">Aceptar</button>
          <button onClick={deniedCookie} className="deny-link-cookie">Rechazar</button>
        </div>
      </div>
    </div>
  )
}

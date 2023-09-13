import { analisis, inteligencia, consultoria } from '../assets/images'
import { useEffect, useState } from 'react'
import '../styles/header.css'

export const Header = () => {
  const title = [
    'Consultoría tecnológica',
    'Análisis de datos',
    'Inteligencia de negocio'
  ]
  const subtitle = [
    '¡Descubre un mundo de posibilidades con nuestros innovadores servicios!',
    'Mejora tu vida con la última tecnología y experimenta la excelencia en cada detalle.',
    '¡Únase a nosotros y permítanos ser parte de su viaje hacia el futuro!'
  ]
  const images = [analisis, inteligencia, consultoria]
  const interval = 7000

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, interval)

    return () => {
      clearInterval(intervalId)
    }
  }, [images, interval])
  return (
    <header className="section-header">
      <img className="heros" src={images[currentSlide]} alt="Servicios informáticos AC datatech" title="Servicios informáticos AC datatech" />
      <h1 className='title-header'>{title[currentSlide]}</h1>
      <h2 className="subtitle-header">{subtitle[currentSlide]}</h2>
      {/* <div>
        <button className="btn-lgs">EN</button>
        <button className="btn-lgs">ES</button>
      </div> */}
    </header>
  )
}

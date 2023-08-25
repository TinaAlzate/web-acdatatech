import { useEffect, useState } from 'react'
import '../styles/header.css'
// import imagen from '../assets/images/header-acarvajal.svg'
// import imagen from '../assets/images/header.png'
import imagen1 from '../assets/images/consultoría-tecnológica.jpg'
import imagen2 from '../assets/images/análisis-datos.jpg'
import imagen3 from '../assets/images/inteligencia-negocio.jpg'

const Header = () => {
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
  const images = [imagen1, imagen2, imagen3]
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
    <div className="section-header">
      <img className="heros" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      <h1 className='h1 title-header'>{title[currentSlide]}</h1>
      <h3 className="subtitle-header">{subtitle[currentSlide]}</h3>
      <div>
        <button className="btn-lgs">EN</button>
        <button className="btn-lgs">ES</button>
      </div>
    </div>

  // <header className="contain-header m-auto">
  //   <div className="circle"></div>
  //   <div className="sub-contain m-auto row flex-row">
  //     <div className="contain-text col-lg-7 m-auto pt-5 pt-lg-0 ps-lg-5 text-lg-start align-items-lg-start row">
  //       <h1 className="col-sm-10 col-lg-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
  //       <p className="col-sm-10 col-lg-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
  //       <button className='btn col-auto ms-lg-3'>Contact</button>
  //     </div>
  //     <div className="contain-img m-auto col-8 col-md-7 col-lg-5">
  //       <img src={imagen} alt="Header-acarvajal" className="img-fluid"/>
  //     </div>
  //   </div>
  // </header>

  // <header className="section-header">
  //   <div className="separator"></div>
  //   <div className="content-header">
  //     <div className="contain-text">
  //       <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
  //       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
  //       {/* <button className="button-header">Contact us</button> */}
  //     </div>
  //     <div className="contain-img">
  //       <img src={imagen} alt="Header-acarvajal" className="img-fluid" />
  //     </div>
  //   </div>
  // </header>
  )
}

export default Header

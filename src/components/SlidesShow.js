import { useRef, useEffect } from 'react'
import byphasse from '../assets/images/byphasse.jpg'
import caixa from '../assets/images/caixa.jpg'
import cosmocare from '../assets/images/cosmocare.jpg'
import economistes from '../assets/images/BCN-economistes.png'
import biltrec from '../assets/images/biltrec.png'
import decroly from '../assets/images/escola-decroly.png'
import mcbit from '../assets/images/mcbit.png'
import cec from '../assets/images/colegio-economistas-cataluña.gif'
import teide from '../assets/images/teide.png'
import '../styles/slideshow.css'

const imageList = [byphasse, caixa, cosmocare, economistes, biltrec, decroly, mcbit, teide, cec]

const SlidesShow = () => {
  const slides = useRef(null)

  useEffect(() => {
    let intervalo

    const start = () => {
      intervalo = setInterval(() => {
        if (slides.current !== null) {
          slides.current.scrollLeft += 1
          if (slides.current.scrollLeft <= slides.current.scrollWidth - slides.current.clientWidth / 2) {
            const firstElement = slides.current.children[0]
            slides.current.appendChild(firstElement.cloneNode(true))
            firstElement.remove()
          }
        }
      }, 2200)
    }
    start()
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="carrusel">
      <div ref={slides} className="carrusel-items">
        {imageList.map((imageSrc, index) => (
          <div className="carrusel-item" key={index}>
            <img className="logo-customers" src={imageSrc} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlidesShow

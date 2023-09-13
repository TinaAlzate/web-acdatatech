import { useRef, useEffect } from 'react'
import { byphasse, caixa, cosmocare, economistes, biltrec, decroly, mcbit, cec, teide } from '../assets/images'
import '../styles/slideshow.css'

const imageList = [byphasse, caixa, cosmocare, economistes, biltrec, decroly, mcbit, teide, cec]

export const SlidesShow = () => {
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
            <img className="logo-customers" src={imageSrc} alt={'Servicios tecnológicos para empresas'} />
          </div>
        ))}
      </div>
    </div>
  )
}

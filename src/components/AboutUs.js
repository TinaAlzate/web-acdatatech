/* eslint-disable no-unused-vars */
import { IconCompromise, IconPassion, IconInnovation } from './icons/IconsAboutUs'
import '../styles/aboutus.css'

export const AboutUs = () => {
  return (
    <section className="section-about container-fluid">
      <h2>Lo que nos diferencia</h2>
      <div className="about-items">
        <div className="contain-about">
          <div className='item-about'>
            <IconCompromise />
            <h3>Compromiso</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='item-about'>
            <IconPassion />
            <h3>Pasión</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='item-about'>
            <IconInnovation />
            <h3>Innovación</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

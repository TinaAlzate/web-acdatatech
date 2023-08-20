/* eslint-disable no-unused-vars */
import '../styles/aboutus.css'
import IconCompromise from './icons/IconCompromise'
import IconPassion from './icons/IconPassion'
import IconInnovation from './icons/IconInnovation'

const AboutUs = () => {
  return (
    <section className="section-about">
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
    </section>
  )
}

export default AboutUs

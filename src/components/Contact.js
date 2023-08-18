import '../styles/contact.css'

const Contact = () => {
  return (
    <section className="section">
      <div className="section-contact">
        <div className="contain-contact">
          <div className="contact-text">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="email">Your email</label>
              <input id="email" type="email" name='email' placeholder="example@example.it" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

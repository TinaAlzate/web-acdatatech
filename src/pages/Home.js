/* eslint-disable no-unused-vars */
import { Services, AboutUs, Header, Customers } from '../components'
import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | AC datatech</title>
      </Helmet>
      <Header />
      <Services />
      <Customers />
      <AboutUs />
    </>
  )
}

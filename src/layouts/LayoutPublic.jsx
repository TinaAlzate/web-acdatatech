/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const LayoutPublic = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default LayoutPublic

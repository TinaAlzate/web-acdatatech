import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LayoutPublic = () => {
  return (
    <main>
      <Navbar/>
      <Outlet/>
      {/* <Contact/> */}
      <Footer/>
    </main>
  )
}

export default LayoutPublic

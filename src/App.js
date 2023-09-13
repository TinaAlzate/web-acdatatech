/* eslint-disable no-unused-vars */
import LayoutPublic from './layouts/LayoutPublic'
import { useEffect } from 'react'
import { SecurityDetails, MaintenanceDetails, CloudDetails, WebDetails, OptimizationDetails, IntelligenceDetails, Home, Contact, PrivacyPolicy, CookiesPolicy, NotFound } from './pages'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ModalCookies } from './components'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<SecurityDetails />} />
          <Route path="/maintenance" element={<MaintenanceDetails />} />
          <Route path="/cloud" element={<CloudDetails />} />
          <Route path="/web-development" element={<WebDetails />} />
          <Route path="/business-optimization" element={<OptimizationDetails />} />
          <Route path="/business-intelligence" element={<IntelligenceDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ModalCookies />
    </>
  )
}

function ScrollToTop () {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default App

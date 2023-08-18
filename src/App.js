/* eslint-disable no-unused-vars */
import SecurityDetails from './pages/SecurityDetails'
import MaintenanceDetails from './pages/MaintenanceDetails'
import CloudDetails from './pages/CloudDetails'
import WebDetails from './pages/WebDetails'
import OptimizationDetails from './pages/OptimizationDetails'
import IntelligenceDetails from './pages/IntelligenceDetails'
import LayoutPublic from './layouts/LayoutPublic'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<LayoutPublic />}>
        <Route path='/' element={<Home />} />
        <Route path="/security" element={<SecurityDetails />} />
        <Route path="/maintenance" element={<MaintenanceDetails />} />
        <Route path="/cloud" element={<CloudDetails />} />
        <Route path="/web-development" element={<WebDetails />} />
        <Route path="/business-optimization" element={<OptimizationDetails />} />
        <Route path="/business-intelligence" element={<IntelligenceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
)

export default App

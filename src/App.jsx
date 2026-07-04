import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import DashboardLayout from './components/dashboard/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Calculator from './pages/Calculator'
import Materials from './pages/Materials'
import Climate from './pages/Climate'
import Simulator from './pages/Simulator'
import Credits from './pages/Credits'
import Report from './pages/Report'
import Advisor from './pages/Advisor'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/report" element={<Report />} />
        <Route path="/advisor" element={<Advisor />} />
      </Route>
    </Routes>
  )
}

export default App

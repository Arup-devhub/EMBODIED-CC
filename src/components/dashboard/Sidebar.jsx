import { NavLink } from 'react-router-dom'
import { 
  Building2,
  LayoutDashboard,
  Upload,
  Calculator,
  Leaf,
  MapPin,
  Cpu,
  Coins,
  FileText,
  Sparkles
} from 'lucide-react'

export default function Sidebar() {
  const navItems = [
    { name: 'Landing', path: '/', icon: <Building2 size={18} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Blueprint Upload', path: '/upload', icon: <Upload size={18} /> },
    { name: 'Carbon Calculator', path: '/calculator', icon: <Calculator size={18} /> },
    { name: 'Material Recommender', path: '/materials', icon: <Leaf size={18} /> },
    { name: 'Climate Intelligence', path: '/climate', icon: <MapPin size={18} /> },
    { name: 'Optimization Simulator', path: '/simulator', icon: <Cpu size={18} /> },
    { name: 'Carbon Credits', path: '/credits', icon: <Coins size={18} /> },
    { name: 'Project Report', path: '/report', icon: <FileText size={18} /> },
    { name: 'AI Advisor', path: '/advisor', icon: <Sparkles size={18} /> },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Leaf size={24} color="white" />
        </div>
        <div className="sidebar-logo-text">
          <strong>Embodied CC</strong>
          <small>CARBON INTELLIGENCE</small>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

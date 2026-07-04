import { Leaf, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-icon">
          <Leaf size={20} />
        </div>
        <span>Embodied CC</span>
      </div>
      <div className="navbar-links">
        <a href="#problem">Problem</a>
        <a href="#solution">Solution</a>
        <a href="#features">Features</a>
        <a href="#climate">Climate</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="navbar-actions">
        <Link to="/dashboard" className="btn-open">Open app</Link>
        <a href="#pricing" className="btn-get-started">
          Get started <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  )
}

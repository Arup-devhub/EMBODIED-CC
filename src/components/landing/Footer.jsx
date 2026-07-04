import { Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Leaf size={16} />
        <span>© 2026 Embodied CC. All rights reserved.</span>
      </div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  )
}

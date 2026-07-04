import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Measure what matters. Build what lasts.</h2>
        <p>
          Join leading architectural firms and developers in India who are turning 
          embodied carbon from a blind spot into a strategic advantage.
        </p>
        <Link to="/dashboard" className="btn-cta">
          Launch dashboard <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

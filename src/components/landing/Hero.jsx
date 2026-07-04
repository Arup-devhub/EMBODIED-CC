import { Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge animate-in">
          <Sparkles size={16} />
          <span>AI-powered embodied carbon intelligence</span>
        </div>
        
        <h1 className="hero-title animate-in" style={{ animationDelay: '0.1s' }}>
          Design buildings for the <span className="highlight">future</span>, not the past.
        </h1>
        
        <p className="hero-subtitle animate-in" style={{ animationDelay: '0.2s' }}>
          Calculate embodied carbon, optimize materials, and discover carbon reduction 
          opportunities — all before construction begins.
        </p>
        
        <div className="hero-actions animate-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/dashboard" className="btn-primary">
            Launch dashboard <ArrowRight size={18} />
          </Link>
          <Link to="/upload" className="btn-secondary">
            Upload a blueprint
          </Link>
        </div>

        <div className="hero-preview animate-in" style={{ animationDelay: '0.5s' }}>
          <div className="hero-preview-bar">
            <div className="hero-preview-dot red"></div>
            <div className="hero-preview-dot yellow"></div>
            <div className="hero-preview-dot green"></div>
            <span className="hero-preview-url">embodied-cc.app/dashboard</span>
          </div>
          <div className="hero-preview-content">
            <div className="hero-kpi">
              <div className="hero-kpi-label">TOTAL EMBODIED CARBON</div>
              <div className="hero-kpi-value green">412 tCO₂e</div>
            </div>
            <div className="hero-kpi">
              <div className="hero-kpi-label">CARBON SCORE</div>
              <div className="hero-kpi-value amber">B</div>
            </div>
            <div className="hero-kpi">
              <div className="hero-kpi-label">REDUCTION POTENTIAL</div>
              <div className="hero-kpi-value green">38%</div>
            </div>
            <div className="hero-kpi">
              <div className="hero-kpi-label">CARBON CREDITS</div>
              <div className="hero-kpi-value green">156 t</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

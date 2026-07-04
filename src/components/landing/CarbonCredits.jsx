import { CheckCircle } from 'lucide-react'

export default function CarbonCredits() {
  return (
    <section className="carbon-credits-landing">
      <div className="container">
        <div className="carbon-credits-grid">
          <div className="credits-display-panel">
            <div className="credits-card">
              <div className="credits-card-row">
                <div className="credits-card-item">
                  <div className="credits-card-item-label">CREDITS</div>
                  <div className="credits-card-item-value">156</div>
                </div>
                <div className="credits-card-item">
                  <div className="credits-card-item-label">@ ₹2,400/T</div>
                  <div className="credits-card-item-value">₹3.74 L</div>
                </div>
                <div className="credits-card-item">
                  <div className="credits-card-item-label">VERIFICATION</div>
                  <div className="credits-card-item-value" style={{color: '#64748b'}}>Pending</div>
                </div>
              </div>
              <p className="credits-card-note">
                Carbon credits shown are estimated and require third-party verification.
              </p>
            </div>
          </div>
          
          <div className="credits-info">
            <h3>Turn sustainable choices into new revenue.</h3>
            <p>
              Every tonne of CO₂e you save against a conventional baseline becomes a potentially tradable 
              carbon credit. Embodied CC estimates volume and market value upfront — so finance and 
              sustainability sit at the same table.
            </p>
            
            <ul className="credits-checklist">
              <li>
                <CheckCircle size={20} />
                <span>Estimate credits from baseline vs optimized design</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Real-time market value indication</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Export an audit-ready summary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

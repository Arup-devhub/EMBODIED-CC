import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-label">PRICING</div>
        <h2 className="section-heading">Simple plans. Serious impact.</h2>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="pricing-card-name">Studio</span>
            </div>
            <div className="pricing-card-price">
              ₹0
            </div>
            <p className="pricing-card-desc">For solo architects exploring carbon.</p>
            
            <ul className="pricing-features">
              <li><Check size={16} /> 1 project limit</li>
              <li><Check size={16} /> Basic OCR extraction</li>
              <li><Check size={16} /> Standard tier materials</li>
              <li><Check size={16} /> Web dashboard access</li>
            </ul>
            
            <Link to="/dashboard" className="pricing-btn pricing-btn-secondary">
              Get started
            </Link>
          </div>
          
          <div className="pricing-card popular">
            <div className="pricing-card-header">
              <span className="pricing-card-name">Practice</span>
              <span className="pricing-badge">Popular</span>
            </div>
            <div className="pricing-card-price">
              ₹14,900<span>/month</span>
            </div>
            <p className="pricing-card-desc">For growing design studios.</p>
            
            <ul className="pricing-features">
              <li><Check size={16} /> Unlimited projects</li>
              <li><Check size={16} /> Full AI material swaps</li>
              <li><Check size={16} /> Climate intelligence</li>
              <li><Check size={16} /> Downloadable PDF reports</li>
              <li><Check size={16} /> Carbon credit estimation</li>
            </ul>
            
            <Link to="/dashboard" className="pricing-btn pricing-btn-primary">
              Start free trial
            </Link>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="pricing-card-name">Enterprise</span>
            </div>
            <div className="pricing-card-price">
              Custom
            </div>
            <p className="pricing-card-desc">For developers & governments.</p>
            
            <ul className="pricing-features">
              <li><Check size={16} /> API access</li>
              <li><Check size={16} /> Custom integrations</li>
              <li><Check size={16} /> Portfolio level analytics</li>
              <li><Check size={16} /> Dedicated success manager</li>
            </ul>
            
            <button className="pricing-btn pricing-btn-secondary">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

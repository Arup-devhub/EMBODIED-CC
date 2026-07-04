import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ClimateZone() {
  return (
    <section id="climate" className="climate-zone">
      <div className="container">
        <div className="climate-zone-grid">
          <div className="climate-zone-left">
            <div className="section-label">CLIMATE INTELLIGENCE</div>
            <h2 className="section-heading">Designed for India's 5 climate zones.</h2>
            <p className="section-desc">
              Carbon isn't geographically neutral. What works in dry climates might fail in humid ones. 
              Our engine considers your exact location to suggest region-appropriate swaps.
            </p>
            <Link to="/climate" className="climate-zone-btn">
              Explore climate zones <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="climate-zone-right">
            <div className="climate-zone-list">
              <div className="climate-zone-item">
                <span className="climate-zone-name">Hot & Dry (e.g., Rajasthan)</span>
                <span className="climate-zone-material">AAC Blocks, Rammed Earth</span>
              </div>
              <div className="climate-zone-item">
                <span className="climate-zone-name">Warm & Humid (e.g., Kerala)</span>
                <span className="climate-zone-material">Laterite, Bamboo, Fly Ash Bricks</span>
              </div>
              <div className="climate-zone-item">
                <span className="climate-zone-name">Composite (e.g., Delhi)</span>
                <span className="climate-zone-material">Hollow Clay Bricks, Slag Cement</span>
              </div>
              <div className="climate-zone-item">
                <span className="climate-zone-name">Temperate (e.g., Bangalore)</span>
                <span className="climate-zone-material">Compressed Earth Blocks, LC3</span>
              </div>
              <div className="climate-zone-item">
                <span className="climate-zone-name">Cold (e.g., Ladakh)</span>
                <span className="climate-zone-material">Stone, Timber, Hempcrete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

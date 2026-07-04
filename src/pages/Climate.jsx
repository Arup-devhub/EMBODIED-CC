import { MapPin, AlertTriangle, CheckCircle, Info } from 'lucide-react'

export default function Climate() {
  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">CLIMATE INTELLIGENCE</div>
        <h1>Contextual Analysis: Bhubaneswar, Odisha</h1>
        <p>Your project is located in the Warm & Humid climate zone. Material behavior and lifecycle durability are heavily influenced by these conditions.</p>
      </div>

      <div className="climate-controls">
        <select className="climate-select" defaultValue="Odisha">
          <option value="Odisha">Odisha</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
        </select>
        <select className="climate-select" defaultValue="Bhubaneswar">
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Cuttack">Cuttack</option>
        </select>
      </div>

      <div className="climate-content">
        <div className="climate-card">
          <h3>Hazard Risk Profile (Building Lifecycle)</h3>
          <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '20px'}}>Based on 50-year climate projections for the selected region.</p>
          
          <div className="hazard-list">
            <div className="hazard-item">
              <label>Urban Heat Island Effect</label>
              <span className="hazard-badge hazard-moderate">Moderate</span>
            </div>
            <div className="hazard-item">
              <label>Cyclone Wind Loading</label>
              <span className="hazard-badge hazard-high">High</span>
            </div>
            <div className="hazard-item">
              <label>Flood Risk (Monsoon)</label>
              <span className="hazard-badge hazard-high">High</span>
            </div>
            <div className="hazard-item">
              <label>Seismic Zone</label>
              <span className="hazard-badge hazard-low">Low (Zone II)</span>
            </div>
          </div>

          <div style={{marginTop: '24px', padding: '16px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', display: 'flex', gap: '12px'}}>
            <Info size={20} color="#3b82f6" />
            <p style={{fontSize: '0.8rem', color: '#1e3a8a'}}>
              <strong>Key Insight:</strong> High moisture and cyclone risks require durable exterior materials. Avoid untreated mass timber; prioritize marine-grade concrete formulations or laterite blocks.
            </p>
          </div>
        </div>

        <div className="climate-card">
          <h3>Recommended Standard Recipes</h3>
          <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '20px'}}>Optimized for local supply chains and environmental resilience.</p>
          
          <div className="recipe-list">
            <div className="recipe-item">
              <h4>Base Structure: M30 Fly Ash (25-30%) Concrete</h4>
              <p>Ideal for humid climates, reducing heat of hydration and improving workability. Sources locally from Talcher thermal plants.</p>
            </div>
            <div className="recipe-item">
              <h4>Masonry: AAC Blocks or Fly Ash Bricks</h4>
              <p>Significantly lower carbon footprint than traditional red clay bricks. Provides good thermal insulation against moderate heat.</p>
            </div>
            <div className="recipe-item">
              <h4>Finishes: Low-VOC, Anti-fungal Paints</h4>
              <p>Essential for warm and humid zones to prevent mold growth over the building's lifecycle, preserving aesthetic durability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

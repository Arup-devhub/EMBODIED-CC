import { useState } from 'react'

export default function Credits() {
  const [price, setPrice] = useState(2400)
  const savings = 218 // tonnes

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">MARKET OPPORTUNITY</div>
        <h1>Carbon Credits Forecast</h1>
        <p>Calculate the potential financial return of your embodied carbon savings on voluntary carbon markets.</p>
      </div>

      <div className="credits-slider-section">
        <h3>Estimated Carbon Price (₹/tonne)</h3>
        <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '16px'}}>Adjust the slider based on current market rates (Default: ₹2,400 / $29 USD).</p>
        
        <input 
          type="range" 
          min="500" 
          max="6000" 
          step="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="credits-slider" 
        />
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8'}}>
          <span>₹500</span><span>₹6,000</span>
        </div>

        <div className="credits-result">
          <div className="credits-result-item">
            <div className="label">SAVED CARBON</div>
            <div className="value">{savings} t</div>
          </div>
          <div className="credits-result-item">
            <div className="label">CURRENT RATE</div>
            <div className="value" style={{color: '#334155'}}>₹{price}</div>
          </div>
          <div className="credits-result-item">
            <div className="label">EST. VALUE</div>
            <div className="value">₹{((savings * price) / 100000).toFixed(2)} L</div>
          </div>
        </div>
      </div>

      <div className="credits-disclaimer">
        <h3>Verification Requirements</h3>
        <p>
          The values shown above are estimations. To monetize these savings on voluntary markets (like Verra or Gold Standard), you must:
        </p>
        <ul style={{marginTop: '12px', paddingLeft: '20px', fontSize: '0.875rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <li>Complete a validated Life Cycle Assessment (LCA).</li>
          <li>Prove 'additionality' — that these savings go beyond standard building codes in your region.</li>
          <li>Have a third-party auditor verify the constructed building matches the optimized design.</li>
        </ul>
      </div>
    </div>
  )
}

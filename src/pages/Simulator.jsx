export default function Simulator() {
  const swaps = [
    { qty: '1,240 m³', item: 'M25 Concrete', base: '297.60', opt: 'M30 Fly Ash (30%)', optCarbon: '205.00', savings: '-92.6', cost: '-₹0.9 L' },
    { qty: '210 t', item: 'OPC 53 Cement', base: '193.20', opt: 'PPC 53 (Fly Ash)', optCarbon: '145.00', savings: '-48.2', cost: '-₹0.5 L' },
    { qty: '185 t', item: 'Virgin Rebar', base: '342.25', opt: 'Recycled steel (EAF)', optCarbon: '165.50', savings: '-176.75', cost: '+₹0.4 L' },
  ]

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">SYSTEM</div>
        <h1>Optimization Simulator</h1>
        <p>Compare your baseline design against the AI-optimized low-carbon scenario.</p>
      </div>

      <div className="sim-comparison">
        <div className="sim-box">
          <h3>Current Design (Baseline)</h3>
          <div className="sim-metrics">
            <div className="sim-metric">
              <div className="sim-metric-label">TOTAL CARBON</div>
              <div className="sim-metric-value">414 tCO₂e</div>
            </div>
            <div className="sim-metric">
              <div className="sim-metric-label">EST. COST</div>
              <div className="sim-metric-value">₹578.51 Cr</div>
            </div>
          </div>
        </div>
        
        <div className="sim-box optimized">
          <h3>Optimized Design</h3>
          <div className="sim-metrics">
            <div className="sim-metric">
              <div className="sim-metric-label">TOTAL CARBON</div>
              <div className="sim-metric-value" style={{color: '#10b981'}}>196 tCO₂e</div>
            </div>
            <div className="sim-metric">
              <div className="sim-metric-label">EST. COST</div>
              <div className="sim-metric-value" style={{color: '#3b82f6'}}>₹577.51 Cr</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sim-swap-table">
        <table className="data-table">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Base Material</th>
              <th>Base Carbon</th>
              <th style={{background: '#ecfdf5', color: '#047857'}}>Optimized Material</th>
              <th style={{background: '#ecfdf5', color: '#047857'}}>Opt Carbon</th>
              <th style={{background: '#ecfdf5', color: '#047857'}}>Carbon Δ</th>
              <th style={{background: '#eff6ff', color: '#1e3a8a'}}>Cost Δ</th>
            </tr>
          </thead>
          <tbody>
            {swaps.map((row, idx) => (
              <tr key={idx}>
                <td>{row.qty}</td>
                <td style={{color: '#64748b'}}>{row.item}</td>
                <td style={{color: '#64748b'}}>{row.base}</td>
                <td style={{fontWeight: 600}}>{row.opt}</td>
                <td style={{fontWeight: 600}}>{row.optCarbon}</td>
                <td style={{color: '#10b981', fontWeight: 600}}>{row.savings}</td>
                <td style={{color: row.cost.startsWith('+') ? '#f59e0b' : '#3b82f6'}}>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Calculator() {
  const materials = [
    { type: 'Cement', current: 'OPC 53 Grade', qty: '210 t', factor: '0.92', carbon: '193.20' },
    { type: 'Steel', current: 'Virgin Rebar', qty: '185 t', factor: '1.85', carbon: '342.25' },
    { type: 'Brick', current: 'Traditional Clay', qty: '42,000 p', factor: '0.002', carbon: '84.00' },
    { type: 'Glass', current: 'Standard Float', qty: '320 m²', factor: '0.045', carbon: '14.40' },
    { type: 'Concrete', current: 'M25 Standard', qty: '1240 m³', factor: '0.24', carbon: '297.60' },
  ]

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">STEP 2</div>
        <h1>Carbon Calculator</h1>
        <p>Review the extracted quantities and baseline emission factors. Values are calculated dynamically based on regional benchmarks.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Current Selection</th>
                <th>Quantity</th>
                <th>Emission Factor</th>
                <th>tCO₂e</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m, idx) => (
                <tr key={idx}>
                  <td><strong>{m.type}</strong></td>
                  <td>
                    <select style={{padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', width: '100%'}}>
                      <option>{m.current}</option>
                    </select>
                  </td>
                  <td>{m.qty}</td>
                  <td>{m.factor}</td>
                  <td style={{fontWeight: 600, color: '#334155'}}>{m.carbon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="calc-sidebar-cards">
          <div className="calc-score-card">
            <h3>Carbon Score (Current)</h3>
            <div className="calc-score-grade">C</div>
            <p style={{fontSize: '0.8rem', color: '#64748b'}}>99 kg CO₂e / m²</p>
            
            <table className="grade-table">
              <tbody>
                <tr><td><span className="grade-badge grade-a">A</span></td><td>&lt; 50 kg/m²</td></tr>
                <tr><td><span className="grade-badge grade-b">B</span></td><td>50 - 75 kg/m²</td></tr>
                <tr><td><span className="grade-badge grade-c">C</span></td><td>75 - 120 kg/m²</td></tr>
                <tr><td><span className="grade-badge grade-d">D</span></td><td>120 - 180 kg/m²</td></tr>
                <tr><td><span className="grade-badge grade-e">E</span></td><td>&gt; 180 kg/m²</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

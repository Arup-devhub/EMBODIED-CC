import { Download, FileText } from 'lucide-react'

export default function Report() {
  const materials = [
    { category: 'Concrete', selection: 'M25 Standard', qty: '1,240 m³', factor: '0.24', carbon: '297.60' },
    { category: 'Cement', selection: 'OPC 53 Grade', qty: '210 t', factor: '0.92', carbon: '193.20' },
    { category: 'Steel', selection: 'Virgin Rebar', qty: '185 t', factor: '1.85', carbon: '342.25' },
    { category: 'Brick', selection: 'Traditional Clay', qty: '42,000 pcs', factor: '0.002', carbon: '84.00' },
    { category: 'Glass', selection: 'Standard Float', qty: '320 m²', factor: '0.045', carbon: '14.40' },
  ]

  const optimizations = [
    { from: 'M25 Concrete', to: 'M30 Fly Ash (30%)', savings: '−92.6 tCO₂e' },
    { from: 'OPC 53 Cement', to: 'PPC 53 (Fly Ash)', savings: '−48.2 tCO₂e' },
    { from: 'Virgin Rebar', to: 'Recycled steel (EAF)', savings: '−176.8 tCO₂e' },
  ]

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">EXPORT</div>
        <h1>Project Report</h1>
        <p>Audit-ready summary for Greenline Residences — Tower B. Download as PDF to share with clients and regulators.</p>
      </div>

      <div className="report-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <FileText size={24} color="#10b981" />
          <h2>Embodied Carbon Assessment</h2>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '24px' }}>
          Generated 4 Jul 2026 · Embodied CC v1.0 · Methodology: ICE Database + Indian regional factors
        </p>

        <div className="report-section">
          <h3>Project Overview</h3>
          <div className="report-row"><span className="label">Project name</span><span className="value">Greenline Residences — Tower B</span></div>
          <div className="report-row"><span className="label">Location</span><span className="value">Bhubaneswar, Odisha</span></div>
          <div className="report-row"><span className="label">Gross floor area</span><span className="value">4,200 m²</span></div>
          <div className="report-row"><span className="label">Climate zone</span><span className="value">Warm & Humid (Composite)</span></div>
          <div className="report-row"><span className="label">Assessment date</span><span className="value">4 July 2026</span></div>
        </div>

        <div className="report-section">
          <h3>Carbon Summary</h3>
          <div className="report-row"><span className="label">Total embodied carbon (baseline)</span><span className="value">414.28 tCO₂e</span></div>
          <div className="report-row"><span className="label">Carbon intensity</span><span className="value">99 kg CO₂e / m²</span></div>
          <div className="report-row"><span className="label">Carbon score</span><span className="value">C</span></div>
          <div className="report-row"><span className="label">Optimized scenario</span><span className="value">196 tCO₂e (−53%)</span></div>
          <div className="report-row"><span className="label">Reduction potential</span><span className="value">218.43 tCO₂e</span></div>
          <div className="report-row"><span className="label">Est. carbon credit value</span><span className="value">₹5.24 L @ ₹2,400/t</span></div>
        </div>

        <div className="report-section">
          <h3>Material Breakdown (Baseline)</h3>
          <table className="data-table" style={{ marginTop: '12px' }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Selection</th>
                <th>Quantity</th>
                <th>Factor</th>
                <th>tCO₂e</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m, idx) => (
                <tr key={idx}>
                  <td><strong>{m.category}</strong></td>
                  <td>{m.selection}</td>
                  <td>{m.qty}</td>
                  <td>{m.factor}</td>
                  <td style={{ fontWeight: 600 }}>{m.carbon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="report-section">
          <h3>Recommended Optimizations</h3>
          {optimizations.map((opt, idx) => (
            <div key={idx} className="report-row">
              <span className="label">{opt.from} → {opt.to}</span>
              <span className="value" style={{ color: '#10b981' }}>{opt.savings}</span>
            </div>
          ))}
        </div>

        <div className="report-section">
          <h3>Disclaimer</h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
            This report is generated from AI-extracted blueprint data and regional emission factors.
            Values are estimates with ±5% confidence. Carbon credit monetization requires third-party
            LCA verification and additionality proof per Verra or Gold Standard protocols.
          </p>
        </div>

        <div className="report-download">
          <button className="btn-primary" onClick={() => window.print()}>
            <Download size={18} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}

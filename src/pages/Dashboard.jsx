import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingDown, Award, Droplets, Banknote, Calculator } from 'lucide-react'

export default function Dashboard() {
  // Mock Data for Charts
  const pieData = [
    { name: 'Concrete', value: 45, color: '#f59e0b' },
    { name: 'Cement', value: 25, color: '#10b981' },
    { name: 'Steel', value: 15, color: '#3b82f6' },
    { name: 'Brick', value: 10, color: '#eab308' },
    { name: 'Glass', value: 5, color: '#f97316' },
  ]

  const barData = [
    { name: 'Concrete', current: 170, optimized: 100 },
    { name: 'Steel', current: 175, optimized: 65 },
    { name: 'Cement', current: 55, optimized: 10 },
  ]

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">PROJECT OVERVIEW</div>
        <h1>Greenline Residences — Tower B</h1>
        <p>Bhubaneswar, Odisha · 4,200 m² · auto-updated from blueprint extraction.</p>
      </div>

      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-top">
            <div className="kpi-icon"><TrendingDown size={20} /></div>
            <span className="kpi-change">-4.2% vs baseline</span>
          </div>
          <div className="kpi-label">TOTAL EMBODIED CARBON</div>
          <div className="kpi-value">414.28<br/>tCO₂e</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <div className="kpi-icon" style={{color: '#f59e0b', background: '#fef3c7'}}><Award size={20} /></div>
            <span className="kpi-change">99 kg/m²</span>
          </div>
          <div className="kpi-label">CARBON SCORE</div>
          <div className="kpi-value amber">C</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <div className="kpi-icon"><Droplets size={20} /></div>
            <span className="kpi-change" style={{color: '#10b981'}}>218.43 tCO₂e avoidable</span>
          </div>
          <div className="kpi-label">REDUCTION POTENTIAL</div>
          <div className="kpi-value">53%</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <div className="kpi-icon"><Banknote size={20} /></div>
            <span className="kpi-change">~₹5.24 L value</span>
          </div>
          <div className="kpi-label">CARBON CREDITS</div>
          <div className="kpi-value">218 t</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-top">
            <div className="kpi-icon" style={{color: '#64748b', background: '#f1f5f9'}}><Calculator size={20} /></div>
            <span className="kpi-change">±5% confidence</span>
          </div>
          <div className="kpi-label">PROJECT COST ESTIMATE</div>
          <div className="kpi-value">₹578.51<br/>Cr</div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Material Carbon Breakdown</h3>
          <p>Share of embodied CO₂ by material category.</p>
          <div style={{ height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3>Carbon Reduction Comparison</h3>
          <p>Current vs optimized scenario, by category (tCO₂e).</p>
          <div style={{ height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="current" fill="#c2410c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="optimized" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

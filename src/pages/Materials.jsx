import { ShieldCheck, TrendingDown } from 'lucide-react'

export default function Materials() {
  const recommendations = [
    {
      category: 'Cement Alternatives',
      items: [
        { name: 'Slag Cement (GGBS)', carbon: '−74.00 tCO₂e', cost: '−₹1.2 L', strength: 'High Later Age', tags: ['green', 'green', 'blue'] },
        { name: 'Fly Ash blended (PPC)', carbon: '−45.00 tCO₂e', cost: '−₹0.8 L', strength: 'Standard', tags: ['green', 'green', 'amber'] },
      ]
    },
    {
      category: 'Steel Alternatives',
      items: [
        { name: 'Recycled Steel (EAF)', carbon: '−125.00 tCO₂e', cost: '+₹0.4 L', strength: 'Equivalent', tags: ['green', 'amber', 'blue'] }
      ]
    },
    {
      category: 'Brick Alternatives',
      items: [
        { name: 'Compressed Earth Block', carbon: '−68.00 tCO₂e', cost: '−₹0.5 L', strength: 'Moderate', tags: ['green', 'green', 'amber'] },
        { name: 'AAC Block', carbon: '−42.00 tCO₂e', cost: 'Neutral', strength: 'Standard', tags: ['green', 'blue', 'blue'] },
      ]
    },
    {
      category: 'Concrete Alternatives',
      items: [
        { name: 'M30 Fly Ash (30%)', carbon: '−55.00 tCO₂e', cost: '−₹0.9 L', strength: 'Standard', tags: ['green', 'green', 'blue'] },
      ]
    }
  ]

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">STEP 3</div>
        <h1>Material Recommender</h1>
        <p>AI-suggested low-carbon replacements based on your base quantities, filtering for local availability and cost impact.</p>
      </div>

      <div className="material-categories">
        {recommendations.map((cat, idx) => (
          <div key={idx} className="material-category">
            <h2><ShieldCheck size={20} color="#10b981" /> {cat.category}</h2>
            <div className="material-cards">
              {cat.items.map((item, i) => (
                <div key={i} className="material-card">
                  <h4>{item.name}</h4>
                  <div className="material-card-badges">
                    <span className={`material-badge ${item.tags[0]}`}>
                      <TrendingDown size={12} /> CARBON Δ: {item.carbon}
                    </span>
                    <span className={`material-badge ${item.tags[1]}`}>
                      COST Δ: {item.cost}
                    </span>
                    <span className={`material-badge ${item.tags[2]}`}>
                      STRENGTH: {item.strength}
                    </span>
                  </div>
                  <p className="material-card-desc">
                    Replaces baseline material with significant structural equivalence. Locally sourced within 150km radius.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

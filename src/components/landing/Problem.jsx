export default function Problem() {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <div className="problem-grid">
          <div className="problem-text">
            <div className="section-label">THE PROBLEM</div>
            <h2 className="section-heading">
              Buildings are responsible for 40% of global CO₂ — and embodied carbon is invisible.
            </h2>
            <p className="section-desc">
              While operational carbon gets all the attention, the carbon locked in building materials 
              at the time of construction is largely ignored until it's too late to change.
            </p>
          </div>
          
          <div className="problem-stats">
            <div className="problem-stat">
              <div className="problem-stat-value">11%</div>
              <div className="problem-stat-desc">of global emissions are embodied carbon.</div>
            </div>
            <div className="problem-stat">
              <div className="problem-stat-value">50%</div>
              <div className="problem-stat-desc">of a building's lifetime carbon is locked in at design.</div>
            </div>
            <div className="problem-stat">
              <div className="problem-stat-value">&lt;5%</div>
              <div className="problem-stat-desc">of projects in India track embodied carbon.</div>
            </div>
            <div className="problem-stat">
              <div className="problem-stat-value">30-40%</div>
              <div className="problem-stat-desc">reductions are achievable with material swaps.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

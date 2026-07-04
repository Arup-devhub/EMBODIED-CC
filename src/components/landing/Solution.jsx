import { Building, Calculator, LineChart } from 'lucide-react'

export default function Solution() {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="section-label">THE SOLUTION</div>
        <h2 className="section-heading">
          A carbon co-pilot for every project — from sketch to permit.
        </h2>
        
        <div className="solution-steps">
          <div className="solution-step">
            <div className="solution-step-header">
              <div className="solution-step-icon">
                <Building size={24} />
              </div>
              <div className="solution-step-number">01</div>
            </div>
            <h3 className="solution-step-title">Upload your blueprint</h3>
            <p className="solution-step-desc">
              Drag in a PDF. Our AI extracts material quantities — cement, steel, brick, glass.
            </p>
          </div>
          
          <div className="solution-step">
            <div className="solution-step-header">
              <div className="solution-step-icon">
                <Calculator size={24} />
              </div>
              <div className="solution-step-number">02</div>
            </div>
            <h3 className="solution-step-title">Calculate embodied carbon</h3>
            <p className="solution-step-desc">
              Material × emission factor × climate context = a transparent footprint and a letter grade.
            </p>
          </div>
          
          <div className="solution-step">
            <div className="solution-step-header">
              <div className="solution-step-icon">
                <LineChart size={24} />
              </div>
              <div className="solution-step-number">03</div>
            </div>
            <h3 className="solution-step-title">Optimize & monetize</h3>
            <p className="solution-step-desc">
              Get low-carbon material swaps and an estimate of potential carbon credits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

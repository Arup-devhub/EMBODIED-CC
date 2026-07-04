import { 
  FileText, Calculator, Leaf, Map, 
  Cpu, Coins, ShieldCheck, Sparkles 
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <FileText size={20} />,
      title: "Blueprint OCR",
      desc: "PDF → material quantities in seconds."
    },
    {
      icon: <Calculator size={20} />,
      title: "Carbon calculator",
      desc: "Per-material emissions with full transparency."
    },
    {
      icon: <Leaf size={20} />,
      title: "Material recommender",
      desc: "Low-carbon alternatives with cost & strength."
    },
    {
      icon: <Map size={20} />,
      title: "Climate intelligence",
      desc: "Tailored advice across India's 5 zones."
    },
    {
      icon: <Cpu size={20} />,
      title: "Optimization simulator",
      desc: "Compare current vs optimized scenarios."
    },
    {
      icon: <Coins size={20} />,
      title: "Credit estimator",
      desc: "Forecast tradable tCO₂e from your savings."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Project report",
      desc: "Audit-ready PDF for clients and regulators."
    },
    {
      icon: <Sparkles size={20} />,
      title: "AI advisor",
      desc: "Ask anything about embodied carbon strategy."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-label">PLATFORM</div>
        <h2 className="section-heading">
          Everything you need to make carbon a first-class design metric.
        </h2>
        
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-card-icon">{feature.icon}</div>
              <h4 className="feature-card-title">{feature.title}</h4>
              <p className="feature-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LogoCloud() {
  const logos = ['IGBC', 'GRIHA', 'LEED', 'BIS', 'MoEFCC', 'BEE']
  
  return (
    <section className="logo-cloud">
      <div className="container">
        <h4 className="logo-cloud-label">ALIGNED WITH</h4>
        <div className="logo-cloud-grid">
          {logos.map(logo => (
            <div key={logo} className="logo-cloud-item">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Upload as UploadIcon, FileText } from 'lucide-react'

export default function Upload() {
  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">STEP 1</div>
        <h1>Blueprint Upload</h1>
        <p>Drop your structural or architectural PDF here. Our engine will locate material schedules and extract BOQ data automatically.</p>
      </div>

      <div className="upload-grid">
        <div className="upload-zone">
          <div className="upload-zone-icon">
            <UploadIcon size={24} />
          </div>
          <h3>Drag & drop your PDF</h3>
          <p>or click to browse from your computer.</p>
          <button className="btn-primary">Choose file</button>
        </div>

        <div className="upload-preview">
          <h3>Extracted quantities</h3>
          <p style={{fontSize: '0.875rem', color: '#64748b'}}>Once your file is uploaded, the AI will parse it and populate the quantities below.</p>
          
          <div className="upload-quantities">
            <h4>Mock Project (Greenline Res.)</h4>
            <div className="upload-qty-grid">
              <div className="upload-qty-item">Concrete: <strong>1,240 m³</strong></div>
              <div className="upload-qty-item">Steel: <strong>185 t</strong></div>
              <div className="upload-qty-item">Cement: <strong>210 t</strong></div>
              <div className="upload-qty-item">Brick: <strong>42,000 pcs</strong></div>
              <div className="upload-qty-item">Glass: <strong>320 m²</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

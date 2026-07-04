import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

const SUGGESTIONS = [
  'How can I reduce cement emissions by 30%?',
  'What materials work best in humid climates?',
  'Explain my carbon score grade.',
  'How do I qualify for carbon credits?',
]

const RESPONSES = {
  'How can I reduce cement emissions by 30%?':
    'For your Greenline Residences project, switching from OPC 53 to PPC with 25–30% fly ash can cut cement emissions by ~25%. Combining this with slag cement (GGBS) for structural elements could reach 30–35% reduction. Both are locally available from Talcher thermal plants in Odisha.',
  'What materials work best in humid climates?':
    'Bhubaneswar falls in the Warm & Humid zone. I recommend: M30 fly ash concrete (25–30%) for structure, AAC blocks or fly ash bricks for masonry, and marine-grade formulations for exterior. Avoid untreated mass timber due to high moisture and cyclone risk.',
  'Explain my carbon score grade.':
    'Your project scores C at 99 kg CO₂e/m² — above the B threshold (75 kg/m²) but below D (120 kg/m²). The main drivers are virgin steel rebar (342 tCO₂e) and OPC cement (193 tCO₂e). Optimizing these two categories alone could move you to grade B.',
  'How do I qualify for carbon credits?':
    'Your optimized design saves ~218 tCO₂e vs baseline. To monetize: (1) complete a validated LCA, (2) prove additionality beyond local building codes, (3) get third-party verification that construction matches the optimized design. Estimated value at ₹2,400/t is ~₹5.24 L.',
}

export default function Advisor() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! I'm your embodied carbon advisor. I have context on Greenline Residences — Tower B in Bhubaneswar. Ask me about material swaps, climate considerations, carbon scores, or credit eligibility.",
    },
  ])
  const [input, setInput] = useState('')

  function sendMessage(text) {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])

    setTimeout(() => {
      const reply =
        RESPONSES[trimmed] ??
        "Based on your project data, I'd focus on the top three emitters: steel rebar, cement, and concrete. Swapping to recycled steel and fly ash blended cement could reduce total embodied carbon by over 50%. Would you like specific recommendations for any material category?"
      setMessages((prev) => [...prev, { role: 'ai', text: reply }])
    }, 600)

    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="dash-page animate-in">
      <div className="dash-header">
        <div className="section-label">AI ASSISTANT</div>
        <h1>Carbon Advisor</h1>
        <p>Ask anything about embodied carbon strategy, material swaps, or credit eligibility for your current project.</p>
      </div>

      <div className="advisor-container">
        <div className="advisor-chat">
          <div className="advisor-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`advisor-msg ${msg.role}`}>
                {msg.role === 'ai' && idx === 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>
                    <Sparkles size={14} /> Embodied CC AI
                  </div>
                )}
                {msg.text}
              </div>
            ))}
          </div>

          <div className="advisor-suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="advisor-suggestion"
                onClick={() => sendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <form className="advisor-input-bar" onSubmit={handleSubmit}>
            <input
              className="advisor-input"
              placeholder="Ask about materials, climate, credits..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="advisor-send">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

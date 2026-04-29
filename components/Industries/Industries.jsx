import React from 'react'
import './Industries.css'

const sportsIndustries = [
  { name: 'Aerospace', icon: '🚀' },
  { name: 'Agriculture', icon: '🌾' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Chemical', icon: '🧪' },
  { name: 'Defence Technology', icon: '🛡️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Energy & Utilities', icon: '⚡' },
  { name: 'Entertainment and Media', icon: '📺' },
  { name: 'Finance', icon: '💰' },
  { name: 'Food Technology ', icon: '🍔' },
  { name: 'HealthCare', icon: '🏥' },
  { name: 'Infrastructure ', icon: '🏗️' },
  { name: 'Logistics', icon: '🚚' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Ocean Technology', icon: '🌊' },
  { name: 'Oil & Gas', icon: '🛢️' },
  { name: 'Pharmaceutical', icon: '💊' },
  { name: 'Retail', icon: '🛒' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Technology', icon: '💻' },
  { name: 'Telecommunication', icon: '📱' },
  { name: 'Textile', icon: '👔' },
  { name: 'Transportation', icon: '🚗' },
  { name: 'Travel', icon: '✈️' },

]

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-container">
        {/* Heading Section */}
        <div className="industries-header">
          <div className="ind-badge">⚡ INDUSTRIES</div>
          <h2>Sectors We <span>Empower</span></h2>
          <p>
            Techbrain Networks delivers transformative solutions across the entire sports ecosystem, driving innovation, performance, and unmatched fan experiences.
          </p>
        </div>

        {/* Grid Section */}
        <div className="industries-grid">
          {sportsIndustries.map((item) => (
            <div className="industry-item" key={item.name}>
              <div className="ind-icon-wrapper">
                <span className="ind-icon">{item.icon}</span>
              </div>
              <span className="industry-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
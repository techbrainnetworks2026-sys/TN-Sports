import React from 'react';
import './Service.css';

const servicesList = [
  {
    title: 'Software Development',
    description:
      'We build scalable, secure, and high-performance applications across web, mobile, and desktop platforms tailored to business needs.',
  },
  {
    title: 'Hardware Engineering',
    description:
      'End-to-end hardware solutions from concept design to production across industries like aerospace, automotive, and healthcare.',
  },
  {
    title: 'Product Design',
    description:
      'User-centric product design combining functionality, aesthetics, and usability from prototype to final production.',
  },
  {
    title: 'Research & Development',
    description:
      'Innovative R&D services focused on emerging technologies, prototyping, and solving complex industry challenges.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-eyebrow">Our Services</span>
        <h2 className="services-title">What We Offer</h2>
        <p className="services-subtitle">
          We drive innovation through cutting-edge technology, engineering excellence, and strategic development.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {/* simple tech icon */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
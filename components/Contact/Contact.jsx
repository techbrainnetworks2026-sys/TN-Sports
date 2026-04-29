import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', mobile: '', industry: '', service: '', note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const industries = [
    'Aerospace','Agriculture','Automotive','Chemical','Defence Technology',
    'Education','Energy & Utilities','Entertainment and Media','Finance',
    'Food Technology','Healthcare','Infrastructure','Logistics','Manufacturing',
    'Ocean Technology','Oil and Gas','Pharmaceutical','Retail','Sports',
    'Technology','Telecommunication','Textile','Transportation','Travel'
  ];

  const services = [
    'Software Development','Hardware Engineering','Product Design','Research & Development'
  ];

  return (
    <section className="about-contact" id="contact">
      <span className="section-tag">Get In Touch</span>
      <h2 className="section-title">Let's Build Together</h2>
      <div className="contact-grid">
        <div className="form-card">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input name="name" type="text" placeholder="Your full name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Company Name *</label>
                <input name="company" type="text" placeholder="Your company" onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" placeholder="email@company.com" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Mobile No *</label>
                <input name="mobile" type="tel" placeholder="+91 00000 00000" onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Industries</label>
              <select name="industry" onChange={handleChange}>
                <option value="">Choose your industry</option>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Choose the service</label>
              <select name="service" onChange={handleChange}>
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Special Note</label>
              <textarea name="note" placeholder="Tell us more about your project…" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message →</button>
          </form>
        </div>

        <div className="address-card">
          <a className="contact-email" href="mailto:contact@techbrainnetworks.com">
            ✉ contact@techbrainnetworks.com
          </a>
          <div className="divider"></div>
          <div className="address-block">
            <h4>🇮🇳 India</h4>
            <p>6/12 Papa Vaikal Street, Ayyampettai,<br/>Papanasam, Thanjavur,<br/>Tamil Nadu, India.</p>
          </div>
          <div className="address-block">
            <h4>🇬🇧 United Kingdom</h4>
            <p>71–75 Shelton Street, Covent Garden,<br/>London, WC2H 9JQ, United Kingdom.</p>
          </div>
          <div className="divider"></div>
          <div className="address-block">
            <h4>Industries We Serve</h4>
            <div className="industries-tags">
              {industries.slice(0, 12).map(i => <span key={i} className="ind-tag">{i}</span>)}
              <span className="ind-tag">+12 more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

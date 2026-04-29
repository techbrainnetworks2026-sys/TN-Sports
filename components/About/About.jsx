import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-grid"></div>
        <div className="about-hero-content">
          <span className="about-eyebrow">About Us</span>
          <h1 className="about-hero-title">
            Building the <span className="about-gradient-text">Intelligence</span> of Tomorrow
          </h1>
          <p className="about-hero-desc">
            Techbrain Networks is a leading Sports Technology Product Development company that specializes
            in Advanced Performance Analytics, Wearable Tech, Smart Stadiums, and Digital Fan Experiences.
          </p>
          <div className="about-stats">
            <div className="about-stat"><span className="stat-num">480+</span><span className="stat-label">Products</span></div>
            <div className="about-stat"><span className="stat-num">24+</span><span className="stat-label">Industries</span></div>
            <div className="about-stat"><span className="stat-num">30+</span><span className="stat-label">Countries by 2027</span></div>
          </div>
        </div>
      </section>

      {/* VISION MISSION PASSION */}
      <section className="about-vmp">
        <span className="section-tag">Our Foundation</span>
        <h2 className="section-title">What Drives Us</h2>
        <div className="vmp-grid">
          <div className="vmp-card">
            <div className="vmp-icon icon-v">◎</div>
            <h3>Vision</h3>
            <p>We aspire to be a global leader in technology innovation, setting new benchmarks
            for excellence. Our goal is to create a future where technology elevates the quality
            of life, fosters sustainability, and drives growth and collaboration on a global scale,
            shaping a smarter, more connected world.</p>
          </div>
          <div className="vmp-card">
            <div className="vmp-icon icon-m">⬡</div>
            <h3>Mission</h3>
            <p>We are dedicated to empowering businesses and individuals globally with cutting-edge
            technology solutions that drive innovation, efficiency, and sustainability. Our commitment
            is to deliver reliable, scalable, and secure products across diverse industries, enabling
            our clients to excel in a rapidly evolving digital landscape.</p>
          </div>
          <div className="vmp-card">
            <div className="vmp-icon icon-p">✦</div>
            <h3>Passion</h3>
            <p>Our passion for research and development fuels our relentless pursuit of elegant
            solutions to complex challenges. Every product and service reflects our commitment to
            innovation and excellence. We push the boundaries of what's possible to inspire the
            future of technology and build a world where possibilities are limitless.</p>
          </div>
        </div>
      </section>

      {/* REVOLUTION */}
      <section className="about-revolution">
        <div className="revolution-inner">
          <div className="revolution-text-side">
            <span className="section-tag">Our Impact</span>
            <h2 className="section-title">Revolutionising the Future</h2>
            <p>We are revolutionising the future of sports technology with <strong>480 innovative products</strong> spanning
            <strong> 24 industries</strong>. Starting in <strong>2027</strong>, our solutions will reach <strong>30 countries</strong>,
            transforming sports performance and fan engagement. Our mission is to make advanced technology
            accessible to all athletes and teams, creating a global impact and shaping the future of sports.</p>
          </div>
          <div className="revolution-numbers">
            <div className="rev-num-item"><span className="rev-num">480+</span><span className="rev-label">Products</span></div>
            <div className="rev-num-item"><span className="rev-num">24+</span><span className="rev-label">Industries</span></div>
            <div className="rev-num-item"><span className="rev-num">30+</span><span className="rev-label">Countries</span></div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <span className="section-tag">Leadership</span>
        <h2 className="section-title">Meet the Founder</h2>
        <div className="founder-card">
          <div className="founder-avatar">
            <img src="https://ui-avatars.com/api/?name=Ramkumar+Arunachalam&background=a5d6a7&color=1b5e20&size=140" alt="Founder" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
          </div>
          <div className="founder-info">
            <h3 className="founder-name">Ramkumar Arunachalam</h3>
            <span className="founder-role">Founder, Techbrain Networks</span>
            <p>Whether you represent sports clubs, athletic associations, fitness centers or e-sports teams,
            we have a solution for you. We develop both large and small sports tech projects and our solutions
            are always tailored to your team's needs — both in terms of budget and scope.</p>
          </div>
        </div>
      </section>
    </div>
  );
};export default About;
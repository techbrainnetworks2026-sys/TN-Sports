import React from "react";
import "./hero.css";

export default function Hero() {

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        
        <div className="hero-badge">
          <span className="badge-dot" />
          HIGH PERFORMANCE SPORTS TECHNOLOGY
        </div>

        <h1 className="hero-heading">
          Smart Sports <br />
          <span className="hero-heading-accent">
            Technology Solutions
          </span>
        </h1>

        <p className="hero-subheading">
          Empowering Athletes with Intelligent Digital Sports Systems. 
          Harness the power of AI, IoT, and Blockchain to transform your game.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">480+</span>
            <span className="stat-label">Products</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">24+</span>
            <span className="stat-label">Industries</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>

        <div className="hero-actions">
          
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("#products")}
          >
            View Products
          </button>

          <button
            className="btn btn-outline"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Us
          </button>

        </div>
      </div>

      {/* Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,60 C360,0 1080,80 1440,20 L1440,80 L0,80 Z"
            fill="#F5FBEF"
          />
        </svg>
      </div>

    </section>
  );
}
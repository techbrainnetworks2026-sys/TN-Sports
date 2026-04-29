import React from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Industries from './components/Industries/Industries.jsx';
import About from './components/About/About.jsx';
import Products from './components/Products/product.jsx';
import Services from './components/Services/Services.jsx';
import Hero from './components/Hero/Hero.jsx';
import Careers from './components/Careers/Careers.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/footer.jsx';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Products */}
      <section id="products">
        <Products />
      </section>

      {/* Industries */}
      <section id="industries">
        <Industries />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Careers */}
      <section id="careers">
        <Careers />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>

  );
}

export default App;
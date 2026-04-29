import React from 'react';
import ProductCard from './productCard';
import './product.css';

const productsList = [
  {
    id: 1,
    name: 'Sports Performance Analytics and Coaching Software',
    Image: "/Images/product1.png",
    description: 'Advanced metrics and AI-driven insights to elevate athlete performance and refine coaching strategies.'
  },
  {
    id: 2,
    name: 'Fan Engagement and Experience Platforms',
    Image: "/Images/product2.png",
    description: 'Interactive digital solutions designed to bring fans closer to the action and build loyalty.'
  },
  {
    id: 3,
    name: 'Athlete Training Simulation Systems',
    Image: "/Images/product3.png",
    description: 'Immersive simulation environments that accurately model game scenarios for superior preparation.'
  },
  {
    id: 4,
    name: 'Sports Team Management and Collaboration Software',
    Image: "/Images/product4.png",
    description: 'Centralized tools unifying team operations, scheduling, and tactical communication.'
  },
  {
    id: 5,
    name: 'Injury Prevention and Rehabilitation Applications',
    Image: "/Images/product5.png",
    description: 'Predictive health monitoring and structured recovery protocols tailored for modern athletes.'
  },
  {
    id: 6,
    name: 'Fantasy Sports and Betting Platforms',
    Image: "/Images/product6.png",
    description: 'Scalable platforms delivering real-time data, odds, and secure interactive wagering experiences.'
  },
  {
    id: 7,
    name: 'Sports Talent Scouting and Recruitment Software',
    Image: "/Images/product7.png",
    description: 'Data-driven evaluation databases seamlessly connecting promising talent with professional franchises.'
  },
  {
    id: 8,
    name: 'Stadium and Arena Management Systems',
    Image: "/Images/product8.png",
    description: 'Smart facility solutions optimizing operations, crowd control, and resource allocation.'
  },
  {
    id: 9,
    name: 'Sports Event Ticketing and Access Control Apps',
    Image: "/Images/product9.png",
    description: 'Secure, verifiable digital ticketing and automated gate entry for frictionless event access.'
  },
  {
    id: 10,
    name: 'Esports Tournament and League Management Platforms',
    Image: "/Images/product10.png",
    description: 'Comprehensive platforms to manage tournaments with player registration, bracket generation, match scheduling, real-time scoring, and performance analytics.'
  },
  {
    id: 11,
    name: 'Wearable Technology Integration for Athletes',
    Image: "/Images/product11.png",
    description: 'Seamless integration of wearable devices to track performance metrics, biometrics, and real-time athlete data for optimized training and recovery.'
  },
  {
    id: 12,
    name: 'Athlete Health and Wellness Monitoring Apps',
    Image: "/Images/product12.png",
    description: 'Apps designed to monitor athlete health, including injury prevention, recovery tracking, nutrition, and overall wellness management.'
  },
  {
    id: 13,
    name: 'Sports Social Media Analytics and Management Tools',
    Image: "/Images/product13.png",
    description: 'Tools to analyze audience engagement, manage content, and optimize social media strategies for teams, athletes, and sports brands.'
  },
  {
    id: 14,
    name: 'Augmented Reality Experiences for Sports Fans',
    Image: "/Images/product14.png",
    description: 'Interactive AR solutions that enhance fan engagement through immersive experiences, live stats overlays, and virtual stadium interactions.'
  },
  {
    id: 15,
    name: 'Sports Broadcasting and Content Distribution Platforms',
    Image: "/Images/product15.png",
    description: 'Seamless integration of wearable devices to track performance metrics, biometrics, and real-time athlete data for optimized training and recovery.'
  },
  {
    id: 16,
    name: 'Virtual Reality Training and Simulation for Athletes',
    Image: "/Images/product16.png",
    description: 'VR-based training systems that simulate real-game scenarios to improve skills, decision-making, and performance in a controlled environment.'
  },
  {
    id: 17,
    name: 'Sports Merchandise and E-commerce Platforms',
    Image: "/Images/product17.png",
    description: 'Online platforms for selling sports merchandise with integrated inventory, payments, and personalized shopping experiences.'
  },
  {
    id: 18,
    name: 'Sports Data Visualization and Infographic Tools',
    Image: "/Images/product18.png",
    description: 'Tools that transform complex sports data into intuitive visuals and infographics for better insights and decision-making.'
  },
  {
    id: 19,
    name: 'Fitness Tracking and Personal Training Apps',
    Image: "/Images/product19.png",
    description: 'Apps that track workouts, set fitness goals, and provide personalized training plans to improve overall health and performance.'
  },
  {
    id: 20,
    name: 'Golf Course Management and Reservation Software',
    Image: "/Images/product20.png",
    description: 'Seamless integration of wearable devices to track performance metrics, biometrics, and real-time athlete data for optimized training and recovery.'
  }
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-header">
        <span className="products-eyebrow">Our Products</span>
        <h2 className="products-title"><span>Sports</span> Technology Core <span>Products</span></h2>
        <p className="product-desc" style={{ fontSize: '1.2rem', margin: '0 auto', maxWidth: '800px', opacity: 0.8 }}>
          Discover our comprehensive suite of 20 cutting-edge products designed to revolutionize the sports industry through AI, IoT, and data-driven insights.
        </p>
      </div>

      <div className="products-grid">
        {productsList.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            image={product.Image}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;


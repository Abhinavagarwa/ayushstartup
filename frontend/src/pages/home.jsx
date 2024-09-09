import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './home.css'; // Home CSS file for styling

function Home() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Home page content */}
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Welcome to the AYUSH Startup Registration Portal</h1>
          <p>Empowering Innovation in Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy</p>
          <button className="cta-button">Register Your AYUSH Startup Now</button>
        </div>

        {/* About the Portal */}
        <div className="about-portal">
          <h2>About the Portal</h2>
          <p>This portal is designed to simplify and streamline the registration process for startups in the AYUSH sector...</p>
        </div>

        {/* Features Section */}
        <div className="features">
          <div>
            <h3>Secure Authentication</h3>
            <p>Log in safely with secure credentials for startups and government officials.</p>
          </div>
          <div>
            <h3>Status Tracking</h3>
            <p>Track your registration status in real-time with notifications and updates.</p>
          </div>
          <div>
            <h3>Document Management</h3>
            <p>Upload, manage, and store necessary documents efficiently for compliance.</p>
          </div>
          <div>
            <h3>Support & Resources</h3>
            <p>Access helpful resources and FAQs to guide you through the registration process.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="steps">
          <h2>How It Works</h2>
          <div>
            <h3>1. Register/Login</h3>
            <p>Create an account or log in to get started with the registration process.</p>
          </div>
          <div>
            <h3>2. Submit Application</h3>
            <p>Fill out forms and upload required documents in a streamlined process.</p>
          </div>
          <div>
            <h3>3. Track Status</h3>
            <p>Check your application's progress in real-time with status updates.</p>
          </div>
          <div>
            <h3>4. Get Approval</h3>
            <p>Once approved, your startup is officially registered in the AYUSH ecosystem.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Register?</h2>
          <p>Join the growing AYUSH community and register your startup today.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

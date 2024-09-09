import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './home.css'; // Updated CSS file for styling

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
          <p>This portal simplifies AYUSH startup registration. It offers an intuitive interface for easy document submission and status tracking, streamlining your registration journey.</p>
        </div>

        {/* Features Section */}
        <div className="features-container">
          <h2>Features</h2>
          <div className="features">
            <div>
              <h3>Secure Authentication</h3>
              <p>Protect your credentials with advanced encryption. Our secure login ensures your information remains confidential and safe from unauthorized access.</p>
            </div>
            <div>
              <h3>Status Tracking</h3>
              <p>Monitor your application progress in real-time. Get timely updates and notifications to stay informed about your registration status effortlessly.</p>
            </div>
            <div>
              <h3>Document Management</h3>
              <p>Upload and organize documents easily. Our platform provides a secure and efficient way to manage your compliance documents and ensure smooth processing.</p>
            </div>
            <div>
              <h3>Support & Resources</h3>
              <p>Access helpful resources and FAQs. Our support team is available to assist with any questions, making the registration process as smooth as possible.</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="steps-container">
          <h2>How It Works</h2>
          <div className="steps">
            <div>
              <h3>1. Register/Login</h3>
              <p>Create an account or log in to get started. This ensures secure and personalized access to the registration features.</p>
            </div>
            <div>
              <h3>2. Submit Application</h3>
              <p>Fill out forms and upload documents. Our streamlined process simplifies application submission and reduces paperwork.</p>
            </div>
            <div>
              <h3>3. Track Status</h3>
              <p>Keep track of your application's progress. Real-time updates and notifications keep you informed about any changes or requirements.</p>
            </div>
            <div>
              <h3>4. Get Approval</h3>
              <p>Receive approval once your application is processed. Your startup will be officially registered in the AYUSH ecosystem.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Register?</h2>
          <p>Join the AYUSH community and register your startup today. Our streamlined process and dedicated support ensure a smooth registration experience.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

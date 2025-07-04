import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <nav className="navigation">
        <div className="nav-left">
          <span className="logo">DLB</span>
        </div>
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <button className="contact-btn">Get in Touch</button>
        </div>
      </nav>

      <div className="contact-hero">
        <div className="hero-content">
          <h1>Let's Start a Conversation</h1>
          <p className="hero-subtitle">
            Whether you're interested in collaboration, have questions about my work, 
            or simply want to connect—I'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send a Message</h2>
              <p>Share your thoughts, ideas, or questions. I read every message personally.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">What's this about?</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a topic</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="interview">Interview Request</option>
                  <option value="book">About My Books</option>
                  <option value="mentorship">Writing Mentorship</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me more about what you'd like to discuss..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <h3>Other Ways to Connect</h3>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <a href="mailto:contact@daronbrown.com" className="contact-link">
                      contact@daronbrown.com
                    </a>
                    <p>For general inquiries and collaboration opportunities</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🎤</div>
                  <div className="method-content">
                    <h4>Speaking Inquiries</h4>
                    <a href="mailto:speaking@daronbrown.com" className="contact-link">
                      speaking@daronbrown.com
                    </a>
                    <p>For event bookings and speaking engagements</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🌐</div>
                  <div className="method-content">
                    <h4>Follow My Work</h4>
                    <div className="social-links">
                      <a href="https://instagram.com/daronbrown" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                      <a href="https://twitter.com/daronbrown" target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                      <a href="https://daronbrown.com" target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="response-card">
              <h3>Response Times</h3>
              <div className="response-info">
                <div className="response-item">
                  <span className="response-time">24-48 hours</span>
                  <span className="response-type">General inquiries</span>
                </div>
                <div className="response-item">
                  <span className="response-time">Same day</span>
                  <span className="response-type">Urgent matters</span>
                </div>
              </div>
              <p className="response-note">
                I read every message personally and aim to respond thoughtfully. 
                For urgent matters, please indicate so in your subject line.
              </p>
            </div>

            <div className="availability-card">
              <h3>Speaking & Events</h3>
              <p>I'm available for:</p>
              <ul className="availability-list">
                <li>Literary festivals and book readings</li>
                <li>Writing workshops and masterclasses</li>
                <li>University guest lectures</li>
                <li>Corporate storytelling sessions</li>
                <li>Community events and libraries</li>
                <li>Podcast and interview appearances</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
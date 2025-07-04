import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
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

      <div className="about-hero">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src="/images/headshot.JPG" 
              alt="DaRon L. Brown" 
              className="hero-profile-image"
            />
          </div>
          <div className="hero-text">
            <h1>DaRon L. Brown</h1>
            <p className="hero-subtitle">
              Author, Storyteller, and Voice for the Human Experience
            </p>
            <p className="hero-description">
              Crafting stories that bridge divides, inspire connection, and illuminate 
              the shared experiences that define our humanity.
            </p>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="content-grid">
          <div className="main-content">
            <section className="story-section">
              <h2>The Story Behind the Stories</h2>
              <div className="story-content">
                <p>
                  Every great story begins with a moment of recognition—a spark that illuminates 
                  the universal within the particular. For DaRon L. Brown, that spark ignited 
                  during countless conversations with people from all walks of life, each carrying 
                  their own narrative of hope, struggle, and transformation.
                </p>
                <p>
                  Born from a deep fascination with the human condition, his writing journey 
                  began not with grand ambitions, but with a simple desire to understand. 
                  What connects us? What separates us? And how do the stories we tell ourselves 
                  shape the world we inhabit?
                </p>
                <p>
                  Drawing from diverse experiences across various fields, DaRon brings a unique 
                  perspective that transcends traditional boundaries. His work explores the 
                  complexities of identity, the power of authentic connection, and the 
                  transformative potential of storytelling itself.
                </p>
              </div>
            </section>

            <section className="philosophy-section">
              <h2>Writing Philosophy</h2>
              <div className="philosophy-content">
                <blockquote>
                  "Every story has the power to change someone's life. Whether it's a moment 
                  of recognition, a spark of hope, or a new way of seeing the world, stories 
                  are bridges that connect us to our shared humanity."
                </blockquote>
                <p>
                  This philosophy drives every word, every character, every narrative arc. 
                  DaRon believes that authentic storytelling emerges from the intersection of 
                  personal truth and universal experience—where individual voices become 
                  collective wisdom.
                </p>
              </div>
            </section>

            <section className="impact-section">
              <h2>Beyond the Page</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-icon">🎤</div>
                  <h3>Speaking & Teaching</h3>
                  <p>
                    Regular speaker at literary festivals, universities, and community events, 
                    sharing insights on the craft of storytelling and the power of narrative.
                  </p>
                </div>
                <div className="impact-card">
                  <div className="impact-icon">✍️</div>
                  <h3>Mentorship</h3>
                  <p>
                    Passionate advocate for emerging writers, offering guidance and support 
                    through workshops, one-on-one sessions, and collaborative projects.
                  </p>
                </div>
                <div className="impact-card">
                  <div className="impact-icon">📚</div>
                  <h3>Community Engagement</h3>
                  <p>
                    Active participant in literacy programs, writing circles, and 
                    community initiatives that promote the transformative power of stories.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="recognition-card">
              <h3>Recognition & Awards</h3>
              <div className="awards-list">
                <div className="award-item">
                  <span className="award-year">2024</span>
                  <div className="award-details">
                    <h4>Emerging Voice Award</h4>
                    <p>Contemporary Fiction Excellence</p>
                  </div>
                </div>
                <div className="award-item">
                  <span className="award-year">2023</span>
                  <div className="award-details">
                    <h4>Community Impact Recognition</h4>
                    <p>Literacy Advocacy & Engagement</p>
                  </div>
                </div>
                <div className="award-item">
                  <span className="award-year">2023</span>
                  <div className="award-details">
                    <h4>Featured Author</h4>
                    <p>Multiple Literary Publications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-card">
              <h3>Personal</h3>
              <p>
                When not writing, DaRon enjoys exploring new places that inspire storytelling, 
                engaging in meaningful conversations, and spending time with family. 
                He believes that life's richest stories emerge from everyday moments and 
                genuine human connections.
              </p>
            </div>

            <div className="stats-card">
              <h3>By the Numbers</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Published Books</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Speaking Events</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Writers Mentored</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8k+</span>
                  <span className="stat-label">Readers Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="connect-section">
          <h2>Let's Connect</h2>
          <p>
            Whether you're interested in collaboration, have questions about the craft, 
            or simply want to share your own story, I'd love to hear from you.
          </p>
          <div className="connect-actions">
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
            <div className="social-links">
              <a href="https://daronbrown.com" className="social-link" target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href="https://instagram.com/daronbrown" className="social-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://twitter.com/daronbrown" className="social-link" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="mailto:contact@daronbrown.com" className="social-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
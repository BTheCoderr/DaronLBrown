import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorProfile.css';

const AuthorProfile = () => {
  return (
    <div className="author-profile">
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

      <div className="profile-container">
        <div className="profile-left">
          <div className="image-container">
            <img 
              src="/images/headshot.JPG" 
              alt="DaRon L. Brown" 
              className="profile-image"
            />
          </div>
          <div className="view-all-container">
            <button className="view-all-btn">
              <span className="icon">👁</span>
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="profile-center">
          <div className="bio-content">
            <h1 className="author-name">DaRon L. Brown</h1>
            <h2 className="author-title">AUTHOR & STORYTELLER</h2>
            
            <div className="bio-text">
              <p>
                DaRon L. Brown is a compelling storyteller and author based in the heart of America. 
                He is the creative force behind powerful narratives that explore the human condition 
                through authentic voices and meaningful connections. Previously working in various 
                fields, he brings a unique perspective to his writing that resonates with readers 
                from all walks of life.
              </p>
              
              <p>
                His work spans multiple genres, from thought-provoking fiction to inspiring 
                non-fiction. DaRon has a gift for crafting stories that not only entertain but 
                also challenge readers to think deeply about life, relationships, and personal growth. 
                He believes in the power of storytelling to bridge divides and create understanding.
              </p>
            </div>

            <div className="social-links">
              <a href="https://daronbrown.com" className="social-link" target="_blank" rel="noopener noreferrer">Website</a>
              <span className="separator">—</span>
              <a href="https://instagram.com/daronbrown" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span className="separator">—</span>
              <a href="https://twitter.com/daronbrown" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <span className="separator">—</span>
              <a href="mailto:contact@daronbrown.com" className="social-link">Email</a>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="timeline-header">
            <h3>Latest Works</h3>
            <span className="date">2024</span>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="time">2024</div>
              <div className="content">
                <h4>The Journey Within</h4>
                <p>A powerful exploration of self-discovery and personal growth through compelling narratives.</p>
                <div className="book-actions">
                  <a href="https://amazon.com/dp/B123456789" className="purchase-btn primary" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                  <a href="https://daronbrown.com/books/journey-within-sample" className="purchase-btn secondary">Read Sample</a>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="time">2024</div>
              <div className="content">
                <h4>Voices of Tomorrow</h4>
                <p>Stories that inspire and challenge our understanding of community and connection.</p>
                <div className="book-actions">
                  <a href="https://amazon.com/dp/B987654321" className="purchase-btn primary" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                  <a href="https://daronbrown.com/books/voices-tomorrow-preview" className="purchase-btn secondary">Preview</a>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="time">2024</div>
              <div className="content">
                <h4>Between the Lines</h4>
                <p>A collection of essays on modern life and the art of meaningful conversation.</p>
                <div className="book-actions">
                  <a href="https://amazon.com/dp/B456789123" className="purchase-btn primary" target="_blank" rel="noopener noreferrer">Pre-order</a>
                  <a href="https://daronbrown.com/books/between-lines-info" className="purchase-btn secondary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="time">2024</div>
              <div className="content">
                <h4>Speaking Events</h4>
                <p>Join DaRon for engaging talks on storytelling, creativity, and personal development.</p>
                <div className="book-actions">
                  <a href="https://eventbrite.com/e/daron-brown-speaking" className="purchase-btn primary" target="_blank" rel="noopener noreferrer">Book Tickets</a>
                  <a href="https://daronbrown.com/events-schedule" className="purchase-btn secondary">View Schedule</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation-arrows">
        <button className="nav-arrow prev">
          <span>←</span>
          PREV
        </button>
        <button className="nav-arrow next">
          NEXT
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default AuthorProfile; 
import React from 'react';
import { Link } from 'react-router-dom';
import './BooksPage.css';

const BooksPage = () => {
  return (
    <div className="books-page">
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

      <div className="books-hero">
        <div className="hero-content">
          <h1>Published Works</h1>
          <p className="hero-subtitle">
            Stories that explore the depths of human experience, crafted with authenticity and purpose
          </p>
        </div>
      </div>

      <div className="books-container">
        <div className="books-grid">
          <div className="book-showcase">
            <div className="book-cover-container">
              <div className="book-cover-placeholder">
                <span className="cover-title">The Journey<br/>Within</span>
              </div>
            </div>
            <div className="book-details">
              <div className="book-badge">Latest Release</div>
              <h2>The Journey Within</h2>
              <p className="book-genre">Contemporary Fiction • 2024</p>
              <p className="book-description">
                A profound exploration of self-discovery and personal transformation. 
                Through compelling narratives and authentic characters, this novel 
                examines what it means to find your true path in an uncertain world.
              </p>
              <div className="book-stats">
                <span className="stat">★★★★★ 4.8</span>
                <span className="stat">2,847 readers</span>
              </div>
              <div className="book-actions">
                <a href="https://amazon.com/dp/B123456789" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                </a>
                <a href="https://daronbrown.com/books/journey-within-sample" className="btn-secondary">
                  Read Sample
                </a>
              </div>
            </div>
          </div>

          <div className="book-showcase">
            <div className="book-cover-container">
              <div className="book-cover-placeholder">
                <span className="cover-title">Voices of<br/>Tomorrow</span>
              </div>
            </div>
            <div className="book-details">
              <div className="book-badge">Bestseller</div>
              <h2>Voices of Tomorrow</h2>
              <p className="book-genre">Literary Fiction • 2024</p>
              <p className="book-description">
                An inspiring collection of interconnected stories that challenge 
                our understanding of community, connection, and the bonds that 
                unite us across all backgrounds and experiences.
              </p>
              <div className="book-stats">
                <span className="stat">★★★★★ 4.9</span>
                <span className="stat">5,213 readers</span>
              </div>
              <div className="book-actions">
                <a href="https://amazon.com/dp/B987654321" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                </a>
                <a href="https://daronbrown.com/books/voices-tomorrow-preview" className="btn-secondary">
                  Preview
                </a>
              </div>
            </div>
          </div>

          <div className="book-showcase">
            <div className="book-cover-container">
              <div className="book-cover-placeholder">
                <span className="cover-title">Between<br/>the Lines</span>
              </div>
            </div>
            <div className="book-details">
              <div className="book-badge">Pre-order</div>
              <h2>Between the Lines</h2>
              <p className="book-genre">Essays • 2024</p>
              <p className="book-description">
                A thoughtful collection of essays exploring modern life, meaningful 
                conversation, and the art of listening. Each piece offers insights 
                into the human condition with wisdom and vulnerability.
              </p>
              <div className="book-stats">
                <span className="stat">Coming December 2024</span>
              </div>
              <div className="book-actions">
                <a href="https://amazon.com/dp/B456789123" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Pre-order
                </a>
                <a href="https://daronbrown.com/books/between-lines-info" className="btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="upcoming-section">
          <h2>What's Next</h2>
          <div className="upcoming-content">
            <div className="upcoming-text">
              <p>
                New stories are always in development. Each project begins with a simple question: 
                How can this story serve the reader? Join the mailing list to be the first to know 
                about upcoming releases, exclusive content, and behind-the-scenes insights.
              </p>
              <a href="mailto:contact@daronbrown.com?subject=Mailing List" className="btn-secondary">
                Join Mailing List
              </a>
            </div>
            <div className="upcoming-image">
              <div className="coming-soon-placeholder">
                <span>Coming 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage; 
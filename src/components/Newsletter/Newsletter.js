import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter-container">
      <img src="/images/newsletter.png" alt="newsletter" className="newsletter-image" />
      <div className="newsletter-content" id='texteS'>
        <h1>Subscribe to our newsletter for newest books updates</h1>
        <Form>
          <Form.Control
            type="email"
            placeholder="Type your email here..."
            className="newsletter-input"
          />
          <Button id="Subscribe" variant="light" className="subscribe-button">
            Subscribe
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Newsletter;

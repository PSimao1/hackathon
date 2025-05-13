import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Youtube, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import './MYFooter.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="main-footer">
          <Col lg={3} md={6} sm={12} className="footer-col company-info">
            <div className="logo-container">
              <img src="/images/logo.PNG" alt="logo" id='logo' />
              <div className="logo-text">
                <h3>Bookoe</h3>
                <span className="tagline">Book Store Website</span>
              </div>
            </div>
            <p className="company-description">
              Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div className="social-section">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <img src="/images/facebook.PNG" alt="facebook" id='reseau' />
                <img src="/images/youtube.PNG" alt="youtube" id='reseau' />
                <img src="/images/twitter.png" alt="twitter" id='reseau' />
                <img src="/images/linkedin.webp" alt="linkedin" id='reseau' />
                <img src="/images/instagram.png" alt="instagram" id='reseau' />
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={6} sm={12} className="footer-col">
            <h5>Books Categories</h5>
            <div className="links-grid">
              <Row>
                <Col xs={6}>
                  <ul className="footer-links">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Comedy</a></li>
                    <li><a href="#">Crime</a></li>
                    <li><a href="#">Drama</a></li>
                    <li><a href="#">Fantasy</a></li>
                    <li><a href="#">Horror</a></li>
                  </ul>
                </Col>
                
                <Col xs={6}>
                  <ul className="footer-links">
                    <li><a href="#">Law</a></li>
                    <li><a href="#">Mystery</a></li>
                    <li><a href="#">Professional</a></li>
                    <li><a href="#">Romance</a></li>
                    <li><a href="#">TV Series</a></li>
                  </ul>
                  <a href="#" className="view-more">View more <span>→</span></a>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col lg={3} md={6} sm={12} className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipment</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} sm={12} className="footer-col">
            <h5>Our Store</h5>
            <div className="store-info">
              <img src="/images/map.png" alt="image de map" id='map' />
              <div className="store-detail">
                <div className="icon-marker"></div>
                <p>832 Thompson Drive, San Francisco CA 94107, United States</p>
              </div>
              <div className="store-detail">
                <div className="icon-phone"></div>
                <p>+123 345123 556</p>
              </div>
              <div className="store-detail">
                <div className="icon-email"></div>
                <p>support@bookoe.id</p>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="copyright-row">
          <Col md={6} className="copyright-left">
            <p>Bookoe Book Store Website © 2020 All Rights Reserved</p>
          </Col>
          <Col md={6} className="copyright-right">
            <p>Made with <Heart size={14} color="red" fill="red"/>by Peterdraw</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
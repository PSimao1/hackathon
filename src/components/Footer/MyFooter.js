import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Footer() {
  return (
    <footer className='bg-light text-center text-lg-start text-muted'>
      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <p className=' fw-bold'>
                <img src="/images/logo.PNG" alt="logo" id='logo' />
                Bookoe
              </p> <h6 className='text fw-bold mb-4' ClassName='bi bi-gem me-3'>Book Store Website</h6>
              <p>
                Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
            </div>
            <div className=' col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Books Categories</h6>
              <p><a href="#!" className="text-reset">Action</a></p>
              <p><a href="#!" className="text-reset">Adventure</a></p>
              <p><a href="#!" className="text-reset">Comedy</a></p>
              <p><a href="#!" className="text-reset">Crime</a></p>
              <p><a href="#!" className="text-reset">Drama</a></p>
              <p><a href="#!" className="text-reset">Fantasy</a></p>
              <p><a href="#!" className="text-reset">Horror</a></p>
              
              <p><a href="#!" className="text1-reset">Law</a></p>
              <p><a href="#!" className="text1-reset">Mystery</a></p>
              <p><a href="#!" className="tex1t-reset">Professional</a></p>
              <p><a href="#!" className="text1-reset">Romance</a></p>
              <p><a href="#!" className="text1-reset">TV Series</a></p>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                 View more
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">A</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">B</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">C</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sign Up
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shipment
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Store</h6>
              <img src="/images/map.png" alt="image de map" id='map' />
              <p>
                <i className='bi-house-door-fill me-2 '></i>
                832 Thompson Drive, San Fransisco CA 94107, United States
              </p>
              <p>
                <i className='bi bi-telephone-fill me-3'></i> +123 345123 556
              </p>
              <p>
                <i className='bi bi-envelope-fill me-3'></i>
                support@bookoe.id
              </p>

            </div>
          </div>
        </div>
      </section>
      <div className="border-bottom bg-light">
        <h2 className="p-4 pb-0 mb-0">Follow Us</h2>
        <section className="p-4 pt-2">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex flex-wrap gap-3">
              {['facebook', 'twitter', 'google', 'instagram', 'linkedin'].map((network) => (
                <a
                  key={network}
                  href={`https://${network}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-5"
                >
                  <i className={`bi bi-${network}`}></i>
                  <span className="visually-hidden">{network}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       Bookoe Book Store Website - © {new Date().getFullYear()} Copyright All Rights Reserved
      </div>
    </footer>
  );
}
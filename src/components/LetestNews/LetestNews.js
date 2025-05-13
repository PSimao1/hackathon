import React from 'react';
import Card from 'react-bootstrap/Card';
import './LetestNews.css';
import { Container, Row, Col } from 'react-bootstrap';

function LetestNews() {
  return (
    <Container className="py-4">
        
      <Row className="justify-content-center">
        <Col className="d-flex flex-wrap justify-content-center">

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/livre1.webp" alt="livre1" className="news-img" />
            <Card.Body>
              <Card.Title>Why reading is important for our children?</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src="/images/fleurs.jpg" alt="fleurs" className="author-img me-2" />
                <p className="mb-0">Lidya Humble</p>
              </div>
              <small className="text-muted">2 days ago</small>
            </Card.Footer>
          </Card>

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/livre2.webp" alt="livre2" className="news-img" />
            <Card.Body>
              <Card.Title>Benefits of reading: Smart, Diligent, Happy</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src="/images/fille.webp" alt="fille" className="author-img me-2" />
                <p className="mb-0">Steffanny William</p>
              </div>
              <small className="text-muted">5 August 2020</small>
            </Card.Footer>
          </Card>

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/livre3.webp" alt="livre1" className="news-img" />
            <Card.Body>
              <Card.Title>What books you should read in 2020?</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src="/images/homme.jpg" alt="homme" className="author-img me-2" />
                <p className="mb-0">James Wong</p>
              </div>
              <small className="text-muted">3 August 2020</small>
            </Card.Footer>
          </Card>

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/livre4.webp" alt="livre1" className="news-img" />
            <Card.Body>
              <Card.Title>10 Things you must know to improve your reading skills</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src="/images/humain.jpg" alt="humain" className="author-img me-2" />
                <p className="mb-0">Franklin Junior</p>
              </div>
              <small className="text-muted">1 August 2020</small>
            </Card.Footer>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default LetestNews;

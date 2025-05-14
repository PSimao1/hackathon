import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LetestNews.css';

function LetestNews() {
  const newsData = [
    {
      id: 1,
      image: "/images/livre1.webp",
      title: "Why reading is important for our children?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      authorImg: "/images/fleurs.jpg",
      authorName: "Lidya Humble",
      date: "2 days ago"
    },
    {
      id: 2,
      image: "/images/livre2.webp",
      title: "Benefits of reading: Smart, Diligent, Happy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      authorImg: "/images/fille.webp",
      authorName: "Steffanny William",
      date: "5 August 2020"
    },
    {
      id: 3,
      image: "/images/livre3.webp",
      title: "What books you should read in 2020?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      authorImg: "/images/homme.jpg",
      authorName: "James Wong",
      date: "3 August 2020"
    },
    {
      id: 4,
      image: "/images/livre4.webp",
      title: "10 Things you must know to improve your reading skills",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      authorImg: "/images/humain.jpg",
      authorName: "Franklin Junior",
      date: "1 August 2020"
    }
  ];

   return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="text-start">Latest News</h1>
          <p className="text-start mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <Button variant="primary" className="custom-purple-btn">
          View more
        </Button>
      </div>
      
      <Row className="g-4">
        {newsData.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={`Livre ${item.id}`} className="news-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5">{item.title}</Card.Title>
                <Card.Text className="flex-grow-1">{item.text}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={item.authorImg} alt={item.authorName} className="author-img me-2" />
                    <span>{item.authorName}</span>
                  </div>
                  <small className="text-muted">{item.date}</small>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LetestNews;
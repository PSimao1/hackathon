import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Reseau.css';

function Reseaux() {
  const metrics = [
    {
      icon: <img src="/images/bonohme.PNG" alt="bonohme" id="bonohme" />,
      value: '125,663',
      label: 'Happy Customers'
    },
    {
      icon: <img src="/images/livre.PNG" alt="livre" id="livre" />,
      value: '50,672+',
      label: 'Total Courses'
    },
    {
      icon: <img src="/images/store.PNG" alt="store" id="store" />,
      value: '1,562',
      label: 'Our Stores'
    },
    {
      icon: <img src="/images/plume.PNG" alt="plume" id="plume" />,
      value: '457',
      label: 'Famous Writers'
    }
  ];

  return (
    <Container fluid className="metrics-container p-0">
      <Row className="metrics-row g-0">
        {metrics.map((metric, index) => (
          <Col key={index} className="metric-item">
            <div className="icon-container">
              {metric.icon}
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Reseaux;
import { Container, Row, Col } from 'react-bootstrap';
import './TopPromo.css';



export default function TopPromo() {

    return (

   <Container fluid className="TopPromo py-5">
      <Row className="justify-content-center g-4">
        <Col xs={12} md={8} lg={8}>
          <div className="discountleft">
            <img src="../../assets/bgdiscount.jpg" alt="promo" />
            <div className="promo-text">
              <h2 className="backtoschool">BACK TO SCHOOL</h2>
              <h1 className="spe50">Special 50% Off</h1>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4} lg={3}>
          <div className="discount">
            <h1 className="bestsellername">Best Sellers</h1>
            <div className="bestseller" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

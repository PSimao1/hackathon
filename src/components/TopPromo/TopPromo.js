import { Container, Row, Col, Button} from 'react-bootstrap';
import './TopPromo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


import React from "react";
import Slider from "react-slick";

export default function TopPromo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
    return (

   <Container fluid className="TopPromo py-5">
      <Row className="justify-content-center g-4">
        <Col xs={12} md={8} lg={8}>
          <div className="discountleft">
            <img src="../../assets/bgdiscount.jpg" alt="promo" />
            <div className="promo-text">
              <h2 className="backtoschool">BACK TO SCHOOL</h2>
              <h1 className="spe50">Special 50% Off</h1>
              <p className="forstudent">for our student community</p>
              <p className="DescPromo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <Button className='Deal'>Get the Deal <FontAwesomeIcon icon={faArrowRight} size="2x" color="white" class="cart" /></Button>
            <Button className="OtherPromos">See other promos</Button>
            <div className='circles'>
            <FontAwesomeIcon icon={faCircle} color="#D7D0FB" className="circle" />
            <FontAwesomeIcon icon={faCircle} color="#6C5DD3" className="circle" />
            <FontAwesomeIcon icon={faCircle} color="#D7D0FB" className="circle" />
            <FontAwesomeIcon icon={faCircle} color="#D7D0FB " className="circle" />
            </div>
            
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

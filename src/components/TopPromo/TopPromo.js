import { Container, Row, Col } from 'react-bootstrap';
import './TopPromo.css';



export default function TopPromo() {

    return (

        <Container fluid className='TopPromo'>

            <Row>
                <Col xs={9}>
                    <div className="discountleft">
                       <img src="../../assets/bgdiscount.jpg" />
                    <h2 className='backtoschool'>BACK TO SCHOOL</h2>
                    <h1 className='spe50'>Special 50% Off</h1>
                    
                    
                    </div>
                </Col>
                <Col className='discountright' xs={3}>
                    <div className="discount">   <h1 className='bestsellername'>Best Sellers</h1>
                 
                    <div className='bestseller'></div>
                    </div>

                </Col>
            </Row>
        </Container>

    );
}
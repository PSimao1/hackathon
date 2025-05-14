import { Container, Row, Col, Button } from 'react-bootstrap';
import './BookDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots, faThumbsUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function BookDetails() {


    return (
        <div className="books">
            <Container fluid className='detailPage'>
                <p className='allDir'><span className='dir'>Home</span> / <span className='dir'>Books</span> / <span className='activePage'>All Good News</span></p>
                <Row>
                    <Col xs={12} md={12} lg={3}>
                        <img src="/assets/bookPlaceholder.jpg" alt="livre1" className="bookCover" />
                    </Col>
                    <Col xs={1} md={12} lg={9} >
                        <div className='bookInfo'>
                            <h1 className="bookTitle">All Good News</h1>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FF754C' }} className="star" />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FF754C' }} className="star" />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FF754C' }} className="star" />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FF754C' }} className="star" />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#E1E1E1' }} className="star" />
                                <p className="cairo note">4.0</p>
                                <FontAwesomeIcon icon={faCommentDots} style={{ color: '#6C5DD3' }} className="svgNotes" />
                                <p className='stringNotes cairo'>235 Reviews</p>
                                <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#6C5DD3' }} className="svgNotes" />
                                <p className='stringNotes cairo'>456k Likes</p>

                                <Button className="facebook socials"> <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} /> Facebook</Button>
                                <Button className="twitter socials"> <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} /> Twitter </Button>
                                <Button className="whatsapp socials"> <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white' }} /> Whatsapp </Button>
                                <Button className="email socials"> <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} /> Email </Button>
                            </div>
                            <p className='synopsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p className='synopsis'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem
                            </p>
                        </div>
                        <div className='authorShip'>
                            <img src='/assets/stockPortrait.jpg' className='authorImg' />
                            <div className='authorInfo'>
                                <p>Written by</p>
                                <p>Kevin Smiley</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}
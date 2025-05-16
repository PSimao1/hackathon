

import { Container, Row, Col, Button } from "react-bootstrap"
import "./BookDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faCommentDots,
  faThumbsUp,
  faEnvelope,
  faShield,
  faBolt,
  faCartPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

export default function BookDetails() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="books">
      <Container fluid className="detailPage">
        <div className="responsive-container">
          <p className="allDir">
            <span className="dir">Home</span> / <span className="dir">Books</span> /{" "}
            <span className="activePage">All Good News</span>
          </p>

          <Row className="book-content">
           
            <Col xs={12} md={12} lg={3} className="book-cover-col">
              <img src="/assets/bookPlaceholder.jpg" alt="livre1" className="bookCover" />
            </Col>

            <Col xs={12} md={12} lg={9} className="book-details-col">
              <div className="bookInfo">
                <h1 className="bookTitle">All Good News</h1>

               
                <Row className="align-items-center mt-4">
                
                  <Col xs={12} lg={6} className="d-flex align-items-center flex-wrap mb-3 mb-lg-0">
                    <div className="d-flex align-items-center me-2 mb-2 mb-md-0">
                      <FontAwesomeIcon icon={faStar} style={{ color: "#FF754C" }} className="star" />
                      <FontAwesomeIcon icon={faStar} style={{ color: "#FF754C" }} className="star" />
                      <FontAwesomeIcon icon={faStar} style={{ color: "#FF754C" }} className="star" />
                      <FontAwesomeIcon icon={faStar} style={{ color: "#FF754C" }} className="star" />
                      <FontAwesomeIcon icon={faStar} style={{ color: "#E1E1E1" }} className="star" />
                      <p className="cairo note mb-0">4.0</p>
                   
                  

                    <div className="d-flex align-items-center me-2 mb-2 mb-md-0">
                      <FontAwesomeIcon icon={faCommentDots} style={{ color: "#6C5DD3" }} className="svgNotes" />
                      <p className="stringNotes cairo mb-0">235 Reviews</p>
                    </div>

                    <div className="d-flex align-items-center mb-2 mb-md-0">
                      <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#6C5DD3" }} className="svgNotes" />
                      <p className="stringNotes cairo mb-0">456k Likes</p>
                    </div>
                     </div>
                     

                  </Col>

                
                  <Col xs={12} lg={6} className="d-flex justify-content-start justify-content-lg-end flex-wrap">
                    <Button className="facebook socials me-2 mb-2">
                      <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} /> Facebook
                    </Button>
                    <Button className="twitter socials me-2 mb-2">
                      <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} /> Twitter
                    </Button>
                    <Button className="whatsapp socials me-2 mb-2">
                      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white" }} /> Whatsapp
                    </Button>
                    <Button className="email socials mb-2">
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} /> Email
                    </Button>
                  </Col>
                </Row>

              
                <div className="synopsis-container mt-4">
                  <p className="synopsis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="synopsis">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem
                  </p>
                </div>
              </div>

             
              <Row className="mt-4">
                <Col xs={12} lg={7} className="d-flex flex-wrap align-items-center mb-3 mb-lg-0">
                  <img src="/assets/stockPortrait.jpg" className="authorImg me-2 mb-2" alt="Author" />

                  <div className="d-flex align-items-center me-3 mb-2">
                    <div className="authorInfo-small">
                      <p className="mb-0 small-text">Written by</p>
                      <p className="bold mb-0">Kevin Smiley</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center me-3 mb-2">
                    <div className="publisherInfo-small">
                      <p className="mb-0 small-text">Publisher</p>
                      <p className="bold mb-0">Printarea Studios</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div className="yearInfo-small">
                      <p className="mb-0 small-text">Year</p>
                      <p className="bold mb-0">2019</p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={5} className="d-flex justify-content-start justify-content-lg-end flex-wrap">
                  <Button className="freeShipping-small me-2 mb-2">
                    <FontAwesomeIcon icon={faBolt} style={{ color: "#6C5DD3" }} /> FREE SHIPPING
                  </Button>
                  <Button className="inStock-small mb-2">
                    <FontAwesomeIcon icon={faShield} style={{ color: "#3EB760" }} /> IN STOCK
                  </Button>
                </Col>
              </Row>

              <hr className="bar mt-4" />

           
              <Row className="mt-4 align-items-center">
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <div className="d-flex align-items-center flex-wrap">
                    <p className="currentPrice mb-2 mb-sm-0 me-3">$15,63</p>
                    <div className="d-flex align-items-center">
                      <p className="oldPrice mb-0 me-2">$16,99</p>
                      <p className="discountedPrice mb-0">2%</p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} md={3} className="mb-3 mb-md-0">
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={decrement}>
                      −
                    </button>
                    <span className="quantity-number">{quantity}</span>
                    <button className="quantity-btn" onClick={increment}>
                      +
                    </button>
                  </div>
                </Col>

                <Col xs={12} md={5}>
                  <div className="d-flex flex-wrap">
                    <Button className="addToCart me-2 mb-2">
                      <FontAwesomeIcon icon={faCartPlus} style={{ color: "white" }} /> Add to Cart
                    </Button>
                    <Button className="Like mb-2">
                      <FontAwesomeIcon icon={faHeart} style={{ color: "#6C5DD3" }} />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

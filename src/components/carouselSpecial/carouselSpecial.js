
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselSpecial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './CarouselSpecial.css';


export default function CarouselSpecial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

// test

  return (
    
    <div className="container mt-4">
      <Slider {...settings}>

        <div class="card" style="width: 18rem;">
          <img src="../../assets/carousel.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div><p id="tag">BIOGRAPHY</p><p id="tag">THRILLER</p><p id="tag">HORROR</p></div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <p>Kevin Smiley</p>
            <div class='payment'>
              <a href="#" class="btn btn-primary btn-offers"> <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" class="cart" />Go somewhere</a>
              <p class="prices">$18,78</p>
              <p class="ogprice">$25</p>
            </div>
          </div>
        </div>



        <div class="card" style="width: 18rem;">
          <img src="../../assets/carousel.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div><p id="tag">BIOGRAPHY</p><p id="tag">THRILLER</p><p id="tag">HORROR</p></div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <p>David Here</p>
            <div class='payment'>
              <a href="#" class="btn btn-primary btn-offers"> <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" class="cart" />Go somewhere</a>
              <p class="prices">$18,78</p>
              <p class="ogprice">$25</p>
            </div>
          </div>
        </div>




        <div class="card" style="width: 18rem;">
          <img src="../../assets/carousel.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div><p id="tag">BIOGRAPHY</p><p id="tag">THRILLER</p><p id="tag">HORROR</p></div>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>

            <p>Margaretha Helew</p>
            <div class='payment'>
              <a href="#" class="btn btn-primary btn-offers"> <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" class="cart" />Go somewhere</a>
              <p class="prices">$18,78</p>
              <p class="ogprice">$25</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Steve Henry",
    hobby: "Book Lovers",
    text: "Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
    rating: 4,
    image: "https://via.placeholder.com/55"
  },
  {
    name: "Miranda Lee",
    hobby: "Book Lovers",
    text: "I never know this shop before, until my grandma told me how excellent this book store is.",
    rating: 5,
    image: "https://via.placeholder.com/55"
  },
  {
    name: "John Doe",
    hobby: "Reading Enthusiast",
    text: "Amazing collection and fast delivery. Highly recommend Bookoe!",
    rating: 5,
    image: "https://via.placeholder.com/55"
  },
  {
    name: "Steve Henry",
    hobby: "Book Lovers",
    text: "Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
    rating: 4,
    image: "https://via.placeholder.com/55"
  },
  {
    name: "Miranda Lee",
    hobby: "Book Lovers",
    text: "I never know this shop before, until my grandma told me how excellent this book store is.",
    rating: 5,
    image: "https://via.placeholder.com/55"
  },
  {
    name: "John Doe",
    hobby: "Reading Enthusiast",
    text: "Amazing collection and fast delivery. Highly recommend Bookoe!",
    rating: 5,
    image: "https://via.placeholder.com/55"
  }
];

export default function Testimonials() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px"
        }
      }
    ]
  };

  return (
    <div className="container mt-5 testimonials">
      <h2 className="text-center mb-4">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="cardopinions mx-2" key={index}>
            <p className="opinion">{t.text}</p>
            <div className="profile d-flex align-items-center mt-4">
              <img src={t.image} alt="user" className="rounded-circle me-3" height="55" width="55" />
              <div>
                <p className="name mb-0 fw-bold">{t.name}</p>
                <p className="hobby mb-0 text-muted">{t.hobby}</p>
              </div>
              <div className="stars ms-auto">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    size="lg"
                    color={i < t.rating ? "#FF754C" : "#E1E1E1"}
                    className="me-1"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

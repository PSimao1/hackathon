import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForSale from '../ForSale/ForSale';



function ChoiceBook() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // tablette
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        }
      }
    ]

  };
  return (
    <>
      <div class="container-fluid mt-5">
        <div class="row align-items-md-stretch" >
          <div class="col-md-6 ms-0">
            <div class="h-100 p-5  rounded-3" style={{
              backgroundImage: "url('/image1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "balck"
            }}>
              <h4>Recomended for you</h4>
              <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.</p>
               <Slider {...settings}>
                    
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        {" "}
                        
                        <img
                          src="/assets/image10.png"
                          alt="Slide Image 1"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image12.png"
                          alt="Slide Image 2"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                   
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image13.png"
                          alt="Slide Image 3"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image9.png"
                          alt="Slide Image 4"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                   
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image8.png"
                          alt="Slide Image 5"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <div className="px-1">
                          <img
                            src="/assets/image5.png"
                            alt="Slide Image 6"
                            className="img-fluid rounded  w-100"
                            style={{
                              height: "10rem",
                              width: "12rem",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Slider>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3" style={{
              backgroundImage: "url('/image2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
              <h4>Popular in 2025</h4>
              <p>Or, keep it light and add a border for some added definition to the boundaries of your content.</p>
              <div className="container-fluid p-0">
                <div className="mx-n1">
                  {" "}
                  
                  <Slider {...settings}>
                    
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        {" "}
                        
                        <img
                          src="/assets/image4.png"
                          alt="Slide Image 1"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                   
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image5.png"
                          alt="Slide Image 2"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                   
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image6.png"
                          alt="Slide Image 3"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                  
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image7.png"
                          alt="Slide Image 4"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                   
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <img
                          src="/assets/image4.png"
                          alt="Slide Image 5"
                          className="img-fluid rounded w-100"
                          style={{
                            height: "10rem",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                  
                    <div>
                      <div className="px-1" style={{ width: "7rem" }}>
                        <div className="px-1">
                          <img
                            src="/assets/image8.png"
                            alt="Slide Image 6"
                            className="img-fluid rounded  w-100"
                            style={{
                              height: "10rem",
                              width: "12rem",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <ForSale
        title="Special Offers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />


    </>
  )
}
export default ChoiceBook

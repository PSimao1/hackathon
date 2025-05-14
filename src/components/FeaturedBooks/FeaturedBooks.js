import React from 'react'

function FeaturedBooks() {
    return (
       <div class="container-fluid mt-5" style={{
              backgroundImage: "url('/image1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "balck"
            }}>
        <div class="row align-items-md-stretch" >
          <div class="col-md-6 ms-0">
            <div class="h-100 p-5  rounded-3" >
              <h4>Featured Books</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
               
              </div>
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
                
              </div>
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
                
              </div>
              <div className="col-md-4">
                 
                  <img
                    src="../../assets/carousel.jpg"
                    alt="Card Image"
                    style={{ width: '5.5rem', height: '10rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FeaturedBooks

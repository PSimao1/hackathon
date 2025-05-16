
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function FeaturedBooks() {
    return (
        <div className="container-fluid mt-5" style={{
            backgroundImage: "url('/image3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "balck"
        }}>
            <div className="row " >
                <div className="col-12 col-md-6">
      <div className="h-100 p-3 p-md-5 rounded-3">
        <h4 className="text-center text-md-start">Featured Books</h4>
        <p className="text-center text-md-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="d-flex justify-content-center mt-4">
          <div
            className="d-flex flex-column flex-md-row align-items-center p-2 p-md-3 shadow rounded w-100"
            style={{ backgroundColor: "#f8f9fa" }}
          >
        
            <div className="mb-3 mb-md-0 mx-auto mx-md-0">
              <img
                src="/assets/image11.png"
                alt="Book cover"
                className="rounded"
                style={{
                  width: "18rem",
                  height: "19rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  maxWidth: "100%",
                }}
              />
            </div>

            
            <div className="card border-0 bg-transparent w-100">
              <div className="card-body">
                <h5 className="card-title text-center text-md-start">
                  <svg
                    width="60"
                    height="60"
                    className="d-inline-block"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_37_463)">
                      <path
                        d="M59.57 70.0003C59.22 70.0003 58.45 70.0003 58.1 69.6503H57.75L35 60.1303L12.32 69.6503C10.85 70.3503 9.02997 70.0003 7.90997 69.3003C6.78997 68.6003 6.08997 67.1303 6.08997 65.6603V14.3503C6.08997 6.30031 12.32 0.0703125 20.37 0.0703125H49.7C57.75 0.0703125 63.98 6.30031 63.98 14.3503V65.6603C63.98 67.1303 63.28 68.6003 62.16 69.3003C61.39 69.6503 60.27 70.0003 59.57 70.0003ZM20.37 7.00031C16.73 7.00031 13.44 10.2903 13.44 13.9303V61.1803L35 52.0803L56.63 61.2503V13.9303C56.63 10.2903 53.34 7.00031 49.7 7.00031H20.37Z"
                        fill="#6C5DD3"
                      />
                    </g>
                    <circle cx="66" cy="10" r="9" fill="#FF754C" />
                    <path
                      d="M66 4.5L67.8 9.1H72.7L68.9 12L70.7 16.6L66 13.7L61.3 16.6L63.1 12L59.3 9.1H64.2L66 4.5Z"
                      fill="white"
                    />
                    <defs>
                      <clipPath id="clip0_37_463">
                        <rect width="70" height="70" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Battle Drive
                </h5>

                <p className="mb-0 text-center text-md-start">Synopsis</p>
                <p className="card-text text-center text-md-start">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className="d-flex justify-content-between flex-wrap">
                  <div className="w-50">
                    <p className="text-muted mb-0">Verify by</p>
                    <p className="fw-bold">Kevin Smiley</p>
                  </div>
                  <div className="w-50 text-end">
                    <p className="text-muted mb-0">Year</p>
                    <p className="fw-bold">2019</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2 flex-wrap">
                  <div className="d-flex align-items-center">
                    <p className="prices mb-0 me-2 fw-bold">$18,78</p>
                    <p className="ogprice mb-0 text-decoration-line-through text-muted">$25</p>
                  </div>
                  <a
                    href="#"
                    className="btn btn-md d-flex align-items-center gap-2 px-3 py-1 mt-2 mt-md-0"
                    style={{ fontSize: "0.8rem", backgroundColor: "#6C5DD3", color: "white" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

               <div className="col-12 col-md-6">
    
    <div className="row mt-3">
        <div className="col-12 col-sm-4 col-md-4 mt-4">
            <img
                src="/assets/image12.png"
                alt="Book 1"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
        <div className="col-12 col-sm-4 col-md-4 mt-4">
            <img
                src="/assets/image13.png"
                alt="Book 2"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
        <div className="col-12 col-sm-4 col-md-4 mt-4">
            <img
                src="/assets/image9.png"
                alt="Book 3"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
    </div>

    
    <div className="row mt-4">
        <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
                src="/assets/image4.png"
                alt="Book 4"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
        <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
                src="/assets/image7.png"
                alt="Book 5"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
        <div className="col-12 col-sm-4 col-md-4 mb-4">
            <img
                src="/assets/image9.png"
                alt="Book 6"
                className="img-fluid"
                style={{
                    height: '14rem',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                }}
            />
        </div>
    </div>
</div>

            </div>
        </div>
    )
}

export default FeaturedBooks


import Timer from '../Miniteurs/Timer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForSale from '../ForSale/ForSale';

function FlashSale() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,

    };
    return (
        <>
            <ForSale
                title="Special Offers"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Timer targetDate="2025-05-20T23:59:59" />


            
                        <Slider {...settings}>

                            <div className="card border-0 " style={{ width: '18rem' }}>
                                <img
                                    src="../../assets/carousel.jpg"
                                    alt="Card Image"
                                    style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                                />
                                <div className=" text-center p-2 mt-2">
                                    <h6 className="t mb-1" style={{ color: '#6C5DD3' }}>Second</h6>
                                    <p className="text-muted mb-1">Trailer</p>
                                    <p className="mb-0">
                                        <span className=" fw-bold me-2" style={{ color: '#6C5DD3' }}>€29.99</span>
                                        <span className="text-muted text-decoration-line-through">€49.99</span>
                                    </p>
                                </div>
                            </div>


                            <div className="card border-0" style={{ width: '18rem' }}>
                                <img
                                    src="../../assets/carousel.jpg"
                                    alt="Card Image"
                                    style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                                />
                                <div className=" text-center p-2 mt-2">
                                    <h6 className=" mb-1" style={{ color: '#6C5DD3' }}>Second</h6>
                                    <p className="text-muted mb-1">Trailer</p>
                                    <p className="mb-0">
                                        <span className=" fw-bold me-2" style={{ color: '#6C5DD3' }}>€29.99</span>
                                        <span className="text-muted text-decoration-line-through">€49.99</span>
                                    </p>
                                </div>
                            </div>

                            <div className="card border-0" style={{ width: '18rem' }}>
                                <img
                                    src="../../assets/carousel.jpg"
                                    alt="Card Image"
                                    style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                                />
                                <div className=" text-center p-2 mt-2">
                                    <h6 className=" mb-1" style={{ color: '#6C5DD3' }}>Second</h6>
                                    <p className="text-muted mb-1">Trailer</p>
                                    <p className="mb-0">
                                        <span className=" fw-bold me-2" style={{ color: '#6C5DD3' }}>€29.99</span>
                                        <span className="text-muted text-decoration-line-through">€49.99</span>
                                    </p>
                                </div>
                            </div>

                            <div className="card border-0" style={{ width: '18rem' }}>
                                <img
                                    src="../../assets/carousel.jpg"
                                    alt="Card Image"
                                    style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                                />
                                <div className=" text-center p-2 mt-2">
                                    <h6 className=" mb-1" style={{ color: '#6C5DD3' }}>Second</h6>
                                    <p className="text-muted mb-1">Trailer</p>
                                    <p className="mb-0">
                                        <span className=" fw-bold me-2" style={{ color: '#6C5DD3' }}>€29.99</span>
                                        <span className="text-muted text-decoration-line-through">€49.99</span>
                                    </p>
                                </div>
                            </div>
                        </Slider>

                  

        </>
    )
}

export default FlashSale
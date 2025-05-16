import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DetailsProduct() {
      
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="d-flex = mb-3">
                        <a href='' className="text-decoration-none text-reset"><h5 className="me-4 fw-bold">Details Product</h5></a>
                        <a href='' className="text-decoration-none text-reset " style={{ marginLeft: '5rem' }}><h5 className="text-muted ">Customer Reviews</h5></a>
                    </div>

                    <table className="table table-border">
                        <tbody>
                            <tr>
                                <th scope="row">Book Title</th>
                                <td style={{ paddingLeft: '5rem' }}>All Good News</td>
                            </tr>
                            <tr>
                                <th scope="row">Author</th>
                                <td style={{ paddingLeft: '5rem' }}>Kevin Smile</td>
                            </tr>
                            <tr>
                                <th scope="row">ISBN</th>
                                <td style={{ paddingLeft: '5rem' }}>121341381648 (ISBN13: 121341381648)</td>
                            </tr>
                            <tr>
                                <th scope="row">Edition Language</th>
                                <td style={{ paddingLeft: '5rem' }}>English</td>
                            </tr>
                            <tr>
                                <th scope="row">Book Format</th>
                                <td style={{ paddingLeft: '5rem' }}>Paperback, 450 Pages</td>
                            </tr>
                            <tr>
                                <th scope="row">Date Published</th>
                                <td style={{ paddingLeft: '5rem' }}>August 10th 2019</td>
                            </tr>
                            <tr>
                                <th scope="row">Publisher</th>
                                <td style={{ paddingLeft: '5rem' }}>Wepress Inc.</td>
                            </tr>
                            <tr>
                                <th scope="row" >Tags</th>
                                <td style={{ paddingLeft: '5rem' }} >
                                    <span className="badge  me-1" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3"}}>Drama</span>
                                    <span className="badge  me-1" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>Advanture</span>
                                    <span className="badge  me-1" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>Survival</span>
                                    <span className="badge  me-1" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>Biography</span>
                                    <span className="badge  me-1" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>Trending2020</span>
                                    <span className="badge " style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>Bestseller</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h5 className="mb-3">Related Books</h5>


                    <div className="d-flex mb-4" >
                        <div className="me-3" style={{ width: '60px', height: '90px', backgroundImage: "url('/image2.png')" }}></div>
                        <div>
                            <h6 className="mb-1">Terrible Madness</h6>
                            <small className="text-uppercase" style={{ color: "#6C5DD3" }}>Thriller, Drama, Horror</small>
                            <div style={{ color: "#FF754C" }}>
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.39 9.60002C19.6647 9.31922 19.856 8.96762 19.9425 8.58445C20.0291 8.20128 20.0074 7.80161 19.88 7.43002C19.7605 7.05733 19.5387 6.72569 19.2399 6.47288C18.9411 6.22006 18.5774 6.05622 18.19 6.00002L13.9 5.34002C13.88 5.33422 13.8616 5.32403 13.846 5.31019C13.8304 5.29635 13.8181 5.27921 13.81 5.26002L11.93 1.26002C11.7652 0.885457 11.4949 0.56692 11.1523 0.343206C10.8096 0.119491 10.4093 0.000254073 10 1.79599e-05C9.59553 -0.00165464 9.19915 0.113532 8.85855 0.331732C8.51794 0.549932 8.2476 0.861859 8.08003 1.23002L6.20003 5.23002C6.18977 5.24952 6.17559 5.26669 6.15838 5.28046C6.14117 5.29423 6.12131 5.30429 6.10003 5.31002L1.82003 6.00002C1.43212 6.05781 1.06785 6.22206 0.767729 6.47452C0.467605 6.72698 0.243392 7.05774 0.120028 7.43002C-0.00267426 7.8029 -0.0209456 8.20226 0.0671951 8.58479C0.155336 8.96733 0.346525 9.31843 0.620028 9.60002L3.78003 12.85C3.78913 12.8705 3.79383 12.8926 3.79383 12.915C3.79383 12.9374 3.78913 12.9596 3.78003 12.98L3.04003 17.52C2.97124 17.9154 3.01608 18.3222 3.16935 18.6931C3.32263 19.064 3.57803 19.3838 3.90586 19.6152C4.2337 19.8467 4.62051 19.9804 5.02131 20.0007C5.42212 20.021 5.82046 19.9272 6.17003 19.73L9.90003 17.66C9.91856 17.6504 9.93914 17.6453 9.96003 17.6453C9.98092 17.6453 10.0015 17.6504 10.02 17.66L13.75 19.73C14.1001 19.9229 14.4973 20.0134 14.8963 19.9913C15.2954 19.9691 15.6801 19.835 16.0066 19.6045C16.3331 19.374 16.5882 19.0563 16.7426 18.6877C16.897 18.319 16.9447 17.9144 16.88 17.52L16.19 13C16.1795 12.9818 16.174 12.9611 16.174 12.94C16.174 12.919 16.1795 12.8983 16.19 12.88L19.39 9.60002Z" fill="#FF754C" />
                                </svg> 4.7 <span className="text-muted">(244 reviews)</span>
                            </div>
                            <div className="fw-bold mt-1">$45.4 <span className="text-decoration-line-through text-muted">$69.4</span></div>
                            <a
                                href="#"
                                className="btn btn-sm d-flex align-items-center gap-2 px-3 py-1 mt-2 mt-md-0"
                                style={{ fontSize: "0.8rem", color: "#6C5DD3" }}
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
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mb-4" >
                        <div className="me-3" style={{ width: '60px', height: '90px', backgroundImage: "url('/image2.png')" }}></div>
                        <div>
                            <h6 className="mb-1">Terrible Madness</h6>
                            <small className="text-uppercase" style={{ color: "#6C5DD3" }}>Thriller, Drama, Horror</small>
                            <div style={{ color: "#FF754C" }}>
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.39 9.60002C19.6647 9.31922 19.856 8.96762 19.9425 8.58445C20.0291 8.20128 20.0074 7.80161 19.88 7.43002C19.7605 7.05733 19.5387 6.72569 19.2399 6.47288C18.9411 6.22006 18.5774 6.05622 18.19 6.00002L13.9 5.34002C13.88 5.33422 13.8616 5.32403 13.846 5.31019C13.8304 5.29635 13.8181 5.27921 13.81 5.26002L11.93 1.26002C11.7652 0.885457 11.4949 0.56692 11.1523 0.343206C10.8096 0.119491 10.4093 0.000254073 10 1.79599e-05C9.59553 -0.00165464 9.19915 0.113532 8.85855 0.331732C8.51794 0.549932 8.2476 0.861859 8.08003 1.23002L6.20003 5.23002C6.18977 5.24952 6.17559 5.26669 6.15838 5.28046C6.14117 5.29423 6.12131 5.30429 6.10003 5.31002L1.82003 6.00002C1.43212 6.05781 1.06785 6.22206 0.767729 6.47452C0.467605 6.72698 0.243392 7.05774 0.120028 7.43002C-0.00267426 7.8029 -0.0209456 8.20226 0.0671951 8.58479C0.155336 8.96733 0.346525 9.31843 0.620028 9.60002L3.78003 12.85C3.78913 12.8705 3.79383 12.8926 3.79383 12.915C3.79383 12.9374 3.78913 12.9596 3.78003 12.98L3.04003 17.52C2.97124 17.9154 3.01608 18.3222 3.16935 18.6931C3.32263 19.064 3.57803 19.3838 3.90586 19.6152C4.2337 19.8467 4.62051 19.9804 5.02131 20.0007C5.42212 20.021 5.82046 19.9272 6.17003 19.73L9.90003 17.66C9.91856 17.6504 9.93914 17.6453 9.96003 17.6453C9.98092 17.6453 10.0015 17.6504 10.02 17.66L13.75 19.73C14.1001 19.9229 14.4973 20.0134 14.8963 19.9913C15.2954 19.9691 15.6801 19.835 16.0066 19.6045C16.3331 19.374 16.5882 19.0563 16.7426 18.6877C16.897 18.319 16.9447 17.9144 16.88 17.52L16.19 13C16.1795 12.9818 16.174 12.9611 16.174 12.94C16.174 12.919 16.1795 12.8983 16.19 12.88L19.39 9.60002Z" fill="#FF754C" />
                                </svg> 4.7
                                <span className="text-muted">(244 reviews)</span>
                            </div>
                            <div className="fw-bold mt-1">$45.4 <span className="text-decoration-line-through text-muted">$69.4</span></div>
                            <a
                                href="#"
                                className="btn btn-sm d-flex align-items-center gap-2 px-3 py-1 mt-2 mt-md-0"
                                style={{ fontSize: "0.8rem", color: "#6C5DD3" }}
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
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mb-4" >
                        <div className="me-3" style={{ width: '60px', height: '90px', backgroundImage: "url('/image2.png')" }}></div>
                        <div>
                            <h6 className="mb-1">Terrible Madness</h6>
                            <small className="text-uppercase" style={{ color: "#6C5DD3" }}>Thriller, Drama, Horror</small>
                            <div style={{ color: "#FF754C" }}> <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.39 9.60002C19.6647 9.31922 19.856 8.96762 19.9425 8.58445C20.0291 8.20128 20.0074 7.80161 19.88 7.43002C19.7605 7.05733 19.5387 6.72569 19.2399 6.47288C18.9411 6.22006 18.5774 6.05622 18.19 6.00002L13.9 5.34002C13.88 5.33422 13.8616 5.32403 13.846 5.31019C13.8304 5.29635 13.8181 5.27921 13.81 5.26002L11.93 1.26002C11.7652 0.885457 11.4949 0.56692 11.1523 0.343206C10.8096 0.119491 10.4093 0.000254073 10 1.79599e-05C9.59553 -0.00165464 9.19915 0.113532 8.85855 0.331732C8.51794 0.549932 8.2476 0.861859 8.08003 1.23002L6.20003 5.23002C6.18977 5.24952 6.17559 5.26669 6.15838 5.28046C6.14117 5.29423 6.12131 5.30429 6.10003 5.31002L1.82003 6.00002C1.43212 6.05781 1.06785 6.22206 0.767729 6.47452C0.467605 6.72698 0.243392 7.05774 0.120028 7.43002C-0.00267426 7.8029 -0.0209456 8.20226 0.0671951 8.58479C0.155336 8.96733 0.346525 9.31843 0.620028 9.60002L3.78003 12.85C3.78913 12.8705 3.79383 12.8926 3.79383 12.915C3.79383 12.9374 3.78913 12.9596 3.78003 12.98L3.04003 17.52C2.97124 17.9154 3.01608 18.3222 3.16935 18.6931C3.32263 19.064 3.57803 19.3838 3.90586 19.6152C4.2337 19.8467 4.62051 19.9804 5.02131 20.0007C5.42212 20.021 5.82046 19.9272 6.17003 19.73L9.90003 17.66C9.91856 17.6504 9.93914 17.6453 9.96003 17.6453C9.98092 17.6453 10.0015 17.6504 10.02 17.66L13.75 19.73C14.1001 19.9229 14.4973 20.0134 14.8963 19.9913C15.2954 19.9691 15.6801 19.835 16.0066 19.6045C16.3331 19.374 16.5882 19.0563 16.7426 18.6877C16.897 18.319 16.9447 17.9144 16.88 17.52L16.19 13C16.1795 12.9818 16.174 12.9611 16.174 12.94C16.174 12.919 16.1795 12.8983 16.19 12.88L19.39 9.60002Z" fill="#FF754C" />
                            </svg> 4.7 <span className="text-muted">(244 reviews)</span></div>
                            <div className="fw-bold mt-1">$45.4 <span className="text-decoration-line-through text-muted">$69.4</span></div>
                            <a
                                href="#"
                                className="btn btn-sm d-flex align-items-center gap-2 px-3 py-1 mt-2 mt-md-0"
                                style={{ fontSize: "0.8rem", color: "#6C5DD3" }}
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
                                Add to cart
                            </a>
                        </div>
                    </div>

                    <button className="btn btn-light w-100  mt-3" style={{ backgroundColor: "#F0EEFF", color: "#6C5DD3" }}>View More</button>

                </div>
            </div>
        </div>
    );
}

export default DetailsProduct;

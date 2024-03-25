import React from 'react';
import dummy1 from '../assests/images/carousel-1.png'; 
import dummy2 from '../assests/images/carousel-2.png'; 
import dummy3 from '../assests/images/carousel-3.png'; 

export const Carousel = () => {
  return (
    <div id="carouselExampleLight" className="carousel slide container mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={dummy1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={dummy2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={dummy3} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

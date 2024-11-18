import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
        <img src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
        <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Search bar moved to the bottom */}
      <div className="container-fluid" style={{ zIndex: "10", position: "absolute", bottom: "10px", left: "0", right: "0" }}>
        <form className="d-flex justify-content-center" role="search">
          <input className="form-control me-2" type="search" placeholder="Type in..." aria-label="Search" style={{ width: '250px' }} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setsearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://y-27mh.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://loremflickr.com/900/700/pizza"
                className="d-block w-100  "
                style={{ height: "400px", objectFit: "cover",  filter: "brightness(30%)" }}
              
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://loremflickr.com/900/700/momos"
                className="d-block w-100  "
                style={{ height: "400px", objectFit: "cover",  filter: "brightness(30%)" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://loremflickr.com/900/700/burger"
                className="d-block w-100  "
                style={{ height: "400px", objectFit: "cover",  filter: "brightness(30%)" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Search bar moved to the bottom */}
          <div
            className="container-fluid"
            style={{
              zIndex: "10",
              position: "absolute",
              bottom: "10px",
              left: "0",
              right: "0",
            }}
          >
            <div className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
                style={{ width: "550px" }}
              />{" "}
              {/* Set a standard width                                                   */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteritems) => {
                    return (
                      <div
                        key={filteritems._id}
                        className="col-12 col-md-6  col-lg-3"
                      >
                        <Card
                          foodItem={filteritems}
                          options={filteritems.options[0]}
                        ></Card>
                      </div>
                    );
                  })
              ) : (
                <div>no such data</div>
              )}
            </div>
          ))
        ) : (
          <div>12345745678</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

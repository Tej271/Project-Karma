import React from "react";
import { Carousel } from "rsuite";
import photo1 from "../assets/img/Photo-1.jpg";
import photo2 from "../assets/img/Photo-2.jpg";
import photo3 from "../assets/img/Photo-3.jpg";
import photo4 from "../assets/img/Photo-4.jpg";
// import photo5 from "../assets/img/Photo-5.jpg";

function HomeCarousel() {
  const carousels = [photo1, photo2, photo3, photo4];

  return (
    <Carousel
      shape={"bar"}
      autoplay
      className="custom-slider"
      style={{
        margin: "7%",
        padding: "3%",
        height: "auto",
        float: "right",
        backgroundColor: "rgba(1,1,1,0.05)",
        border: "2px dashed gray",
      }}
    >
      {carousels.map((image) => (
        <img src={image} alt={image} />
      ))}
    </Carousel>
  );
}

export default HomeCarousel;

// App.js or Slider.js

import React from "react";
import Slider from "react-slick";
import "../App.css";
 // Import your CSS file if needed.
import "./ImageSlider.css";


const images = [
  {
    url: "Rwanda emblem.png",
    description: "This is image 1"
  },
  {
    url: "./museums/ancient.jpg",
    description: "This is image 2"
  },
  {
    url: "./museums/nmuseum.jpg",
    description: "This is image 3"
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item bg-white p-3">
            <div className="p-5">
                
            <img src={image.url}  width={100} height={350} alt={`Slide ${index + 1}`} />
            </div>
            <p className="description">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

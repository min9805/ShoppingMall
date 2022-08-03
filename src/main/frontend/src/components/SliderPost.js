import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgA from "./img/imageA.jpg";
import imgB from "./img/imageB.jpg";
import imgC from "./img/imageC.jpeg";

class SliderPost extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 600,
      pauseOnHover: true,
    };

    return (
      <Slider {...settings}>
        <img src={imgA} alt="image1" />
        <img src={imgB} alt="image2" />
        <img src={imgC} alt="image3" />
      </Slider>
    );
  }
}

export default SliderPost;

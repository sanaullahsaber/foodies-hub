import React from "react";
import { Container } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./PopularDishes.css";

import biryani from "../../../assets/img/food/chicken-biryani.png";
import paratha from "../../../assets/img/food/paratha.png";
import somosa from "../../../assets/img/food/samosa.png";
import tea from "../../../assets/img/food/tea.png";

const PopularDishes = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <Container className="mt-5">
      <h1 className="text-center fs-1 fw-bold mb-5">
        Popular <span className="text-success">Food</span>
      </h1>

      <div className="mt-5 mb-5">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img className="h-100 w-100 img-fluid " src={biryani} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img className="h-100 w-100 img-fluid " src={paratha} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img className="h-100 w-100 img-fluid " src={somosa} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img className="h-100 w-100 img-fluid " src={tea} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularDishes;

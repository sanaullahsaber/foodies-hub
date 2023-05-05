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
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
 
  
  return (
    <Container className="mt-5">
      <h1 className="text-center fs-1 fw-bold mb-5">
        Popular <span className="text-warning">Foods</span>
      </h1>

      <div className="my-2 w-50 mx-auto">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img className=" img-fluid " src={biryani} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img className="img-fluid " src={paratha} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img className=" img-fluid " src={somosa} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img className=" img-fluid " src={tea} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularDishes;

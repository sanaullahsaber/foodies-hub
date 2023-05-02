import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";

import biryani from "../../../assets/img/food/chicken-biryani.png";
import paratha from "../../../assets/img/food/paratha.png";
import somosa from "../../../assets/img/food/samosa.png";
import tea from "../../../assets/img/food/tea.png";

const HeaderBanner = () => {
  return (
    <Container className="mt-5 ">
      <Row>
        <Col lg={6} className="pt-5">
          <h1 className="fs-1 fw-bold">Enjoy <span className="text-success">Delicious</span> <br />
            <span className="text-success">Food</span> In Your <br />
            Healthy Life</h1> <br />
          <p className="text-secondary fs-5 fw-bolder">
            FoodiesHub is a place where you can please your soul 
            and tummy with delicious food recipes of all cuisine.  
            And our service is absolutely free. So start exploring 
            now
          </p>
          <Button variant="success">
            EXPLORE NOW <FaArrowAltCircleRight></FaArrowAltCircleRight>{" "}
          </Button>
        </Col>

        <Col lg={6}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100 border border-0">
                <img src={biryani} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-0">
                <img src={somosa} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-0">
                <img src={paratha} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-0">
                <img src={tea} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBanner;

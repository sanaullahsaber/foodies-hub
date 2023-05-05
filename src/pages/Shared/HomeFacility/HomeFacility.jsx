import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import biryani from "../../../assets/img/food/chicken-biryani.png";

const HomeFacility = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6}>
          <img className="img-fluid" src={biryani} alt="" />
        </Col>
        <Col lg={6}>
          <h1 className="fs-1 text-center">
            Improve Your Culinary <br /> Skills
          </h1>
          <ul style={{ listStyleType: "none" }}>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Learn new recipes
            </li>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Experiment with food
            </li>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Write your own recipes
            </li>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Know nutrition facts
            </li>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Get cooking tips
            </li>
            <li className="fw-bolder text-secondary mb-2 border-5 border-start ps-4 border-warning">
              Get ranked
            </li>
          </ul>
        </Col>
      </Row>

      <div className='mt-5'>
        <h3 className=''>
          “Food is everything we are. It's an extension of nationalist feeling,
          ethnic feeling, your personal history, your province, your region,
          your tribe, your grandma. It's inseparable from those from the
          get-go.” <span className='text-warning fs-5 fw-bold'>― Anthony Bourdain</span>
        </h3>
      </div>
    </Container>
  );
};

export default HomeFacility;
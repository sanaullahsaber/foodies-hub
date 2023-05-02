import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaReact,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <footer className="bg-dark text-white pt-5">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <h5 className="mb-3">About Us</h5>
              <p className="">
                MyFoodRecipe is a recipe sharing platform that allows users to
                create, discover and share their favorite recipes.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to='/about'>
                   About Us
                  </Link>
                  
                </li>
                <li className="mb-2">
                  <Link to='/blog'>
                  Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <h5 className="mb-3">Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-start">
                <li className="me-3">
                  <a href="#">
                    <FaFacebookF className="text-white" />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#">
                    <FaTwitter className="text-white" />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#">
                    <FaInstagram className="text-white" />
                  </a>
                </li>
              </ul>
              <p>
                <FaPhoneAlt className="text-white me-2"></FaPhoneAlt>+0584 55487
                554
              </p>
              <p>
                {" "}
                <FaMailBulk className="text-white me-2"></FaMailBulk>{" "}
                mail@gmail.com
              </p>
              <p>
                {" "}
                <FaMapMarkerAlt className="text-white me-2"></FaMapMarkerAlt>{" "}
                Mountain View, California, United States
              </p>
            </Col>
          </Row>
          <hr className="my-5" />
          <Row>
            <Col xs={12} className="text-center">
              <p className=" mb-0">© 2023 FoodiesHub. All Rights Reserved.</p>
              <p className=" mb-0">
                Built with <FaReact></FaReact> React
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import chefImage from "../../assets/img/food/chicken-biryani.png";
const About = () => {
  return (
    <div>
      <Container className="p-5 ">
        <Row className="p-5">
          <Col md={6}>
            <h1 className="mt-5">About Us</h1>
            <p>
              FoodiesHub is not just a food website, but a community of
              like-minded individuals who share a passion for culinary
              adventures. With a team of experienced chefs, home cooks, and food
              bloggers, we bring delicious and easy-to-follow recipes to your
              kitchen, guaranteed to impress your friends and family.
            </p>
            <p>
              At FoodiesHub, we believe that food is more than just sustenance;
              it is a way of life. Cooking and sharing meals with loved ones
              create memories that last a lifetime. Our mission is to inspire
              and empower people to explore new flavors, ingredients, and
              cooking techniques. We strive to help our community discover new
              recipes, ingredients, and cooking styles that will make cooking
              more enjoyable and accessible to everyone.
            </p>
            <p>
              Our recipes are handpicked and curated by our team of food
              enthusiasts, ensuring that every dish is a winner. From classic
              comfort foods to exotic international dishes, we have something
              for everyone. Our recipes are not only delicious but also easy to
              follow, making them perfect for novice and experienced cooks
              alike.
            </p>
            <p>
              One of our core values is sustainability. We believe in using
              fresh, locally-sourced ingredients whenever possible and reducing
              food waste by making the most of every ingredient. Our team of
              chefs and home cooks also shares tips on how to use leftovers
              creatively and how to store food properly to reduce waste.
            </p>
          </Col>
          <Col className="mt-5" md={6}>
            <Image className="mt-5" src={chefImage} alt="chef" fluid rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

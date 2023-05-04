import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import ChefDetails from "./ChefDetails";

const ChefSingleCard = () => {
  
  const chefCard = useLoaderData();
  
  
  return (
    <Container className="mt-5 pt-5">
      <Row className="mt-4">
        <Col lg={4} className="mt-4 p-3">
          {chefCard.map((details) => (
            <ChefDetails key={details.id} detail={details}></ChefDetails>
          ))}
        </Col>
        <Col lg={8}>
          <h4 className="text-center"> Recipe Details</h4>
          {chefCard.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe}></Recipe>
          ))}
        </Col>
      </Row>

      <div className="text-center my-5">
        <Link to="/">
          <Button className="" variant="success">
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ChefSingleCard;

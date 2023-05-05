import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
  const {id, chef_name, years_of_experience, number_of_recipes, likes ,chef_picture, } = chef;
  return (
    <Container>
      <CardGroup className="mb-4">
        <Card className="border-0 shadow-lg">
          <img
            className="p-4 img-fluid rounded-circle"
            src={chef_picture}
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-bold mb-0">{chef_name}</Card.Title>
            <Card.Text>
              <div className="my-3">
                <span className="fw-bold">Experience: </span>
                <span className="ms-2">{years_of_experience} years</span>
              </div>
              <div className="my-3">
                <span className="fw-bold">Likes: </span>
                <span className="ms-2">{likes}</span>
              </div>
              <div className="my-3">
                <span className="fw-bold">Number of Recipes: </span>
                <span className="ms-2">{number_of_recipes}</span>
              </div>
              <Link to={`/${id}`}>
                <Button variant="warning fw-bold">View Recipes</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ChefsCard;
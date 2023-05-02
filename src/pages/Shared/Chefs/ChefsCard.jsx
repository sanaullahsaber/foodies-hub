import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const ChefsCard = ({ chef }) => {
  const { chef_name, years_of_experience, number_of_recipes, likes ,chef_picture} = chef;
  return (
    <Container>
  
        <CardGroup className='mb-4'>
          <Card>
            <img className="p-4 img-fluid rounded-5 float-start" src={chef_picture} alt="" />
            <Card.Body className='text-center'>
              <Card.Title>{chef_name}</Card.Title>
              <Card.Text>
              <h6>Experience: <span>{years_of_experience}</span></h6>
              <h6>Likes: <span>1200</span></h6>
              <h6>Number of Recipes: <span>{number_of_recipes}</span></h6>
               <Button variant="success">View Recipes</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
  
    </Container>
  );
};

export default ChefsCard;
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
  const {id, chef_name, years_of_experience, number_of_recipes, likes ,chef_picture, } = chef;
  return (
    <Container>
  
        <CardGroup className='mb-4'>
          <Card>
            <img className="p-4 img-fluid rounded-5 float-start" src={chef_picture} alt="" />
            <Card.Body className='text-center'>
              <Card.Title>{chef_name}</Card.Title>
              <Card.Text>
              <h6>Experience: <span>{years_of_experience}</span></h6>
              <h6>Likes: <span>{likes}</span></h6>
              <h6>Number of Recipes: <span>{number_of_recipes}</span></h6>
               <Link to={`/${id}`}><Button variant="success">View Recipes</Button></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
  
    </Container>
  );
};

export default ChefsCard;
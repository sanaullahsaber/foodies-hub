import React from 'react';
import { Button } from 'react-bootstrap';

const ChefDetails = ({ detail }) => {
  const { chef_picture, chef_name,description, number_of_recipes, likes, years_of_experience } = detail;
  return (
    <div>
      <img className="img-fluid w-100 " src={chef_picture} alt="" />
      <div className="text-center mt-3">
        <h3>{chef_name}</h3>
        <p>{description}</p>
        <p> {likes}</p>
        <h6>{number_of_recipes}</h6>
        <h6>{years_of_experience} </h6>
      
      </div>
    </div>
  );
};

export default ChefDetails;